import express from 'express';
import { errorHandler } from './middleware/errorHandler';
import setGeneralMiddleware from './middleware/generalMiddleware';
// @ts-ignore
import companion from '@uppy/companion';
import verifyToken from './middleware/verifyToken';
import * as users from './controller/users';
import * as guests from './controller/guests';
import * as houses from './controller/houses';
import * as lists from './controller/lists';
import * as items from './controller/items';
import * as email from './controller/email';
import * as payments from './controller/payments';
import * as stays from './controller/stays';
import * as connect from './controller/connect';
import * as assistants from './controller/assistants';
import path from 'path';

import {
  getAllSurveys,
  getSurveyResponse,
  getQuestionsAnswers,
} from './models/surveys';

import db from '../data/dbConfig';

export const server = express();
setGeneralMiddleware(server);

server.use(express.static(path.resolve(path.join(__dirname, '../public'))));
server.get('/', (__, res) => res.sendFile('index.html'));

// Survey List in Balsamiq

server.get('/surveys/:id', async (req, res) => {
  const id = req.params.id
  try {
    const data = await db('surveys').where({ user_id: id });
    res.json(data);
  } catch (e) {
    res.json(e);
  }
});
  server.get('/surveysquestions/:id', async(req,res)=>{
    try{
      const { id } = req.params
      const survey = await db('surveys').where({ id }).first()
      if(survey) {
        const questions = await db('questions').where({ survey_id: id })
        res.json({ survey, questions });
      }
    }catch(e){res.json(e), console.log(e)}
  })

  server.get('/questions', async(req,res)=>{
    try{
    const data = await db('questions')
    res.json(data);
    }catch(e){res.json(e)}
  })
  server.get('/questionanswers', async(req,res)=>{
    try{
    const data = await db('questionAnswers')
    res.json(data);
    }catch(e){res.json(e)}
  })

// Authentication Middleware for *all* routes after this line



server.get('/data', async (req, res) => {
  try {
    const usersData = await db('user');
    res.json(usersData);
  } catch (e) {
    res.json(e);
  }
});

// Survey Responses Route in Balsamiq
server.get('/surveyresponses/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const survey = await getSurveyResponse(id);
    res.json({ survey });
  } catch (e) {
    res.json(e);
  }
});

// Questions Route
server.get('/questions', async (req, res) => {
  try {
    const data = await db('questions');
    res.json(data);
  } catch (e) {
    res.json(e);
  }
});

// Not needed but works
server.get('/questionanswers/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const questionAnswers = await getQuestionsAnswers(id);
    res.json({ questionAnswers });
  } catch (e) {
    res.json(e);
  }
});

/* for Guest dashboard Info*/
server.route('/guestStay/:id').get(stays.getGuest);

server
  .route('/users')
  .get(verifyToken, users.get)
  .post(users.post)
  .put(verifyToken, users.putByExtId);

// Authentication Middleware for *all* routes after this line
server.use(verifyToken);
// server
//   .route('/users')
//   .get(verifyToken, users.get)
//   .post(users.post)
//   .put(verifyToken, users.putByExtId);
server.get('/surveys', verifyToken, async (req, res) => {
  const id = req.token.id;
  try {
    const data = await db('surveys').where({ user_id: id });
    res.json(data);
  } catch (e) {
    res.json(e);
  }
});

server.post('/questionanswers', verifyToken, async (req, res) => {
  const body = req.body
  const token = req.token
  const name = token.full_name
  const photo = token.photoUrl
    try {
      const stay = await db('stay').where({id: req.body.stay_id})
      const houseId = stay[0].house_id;
      const house = await db('house').where({id: houseId})
      const houseName = house[0].name
      console.log(house)
      const data = await db('questionAnswers').insert({...body, name: name, photo: photo, house_name: houseName})
      
      const response = await db('questionAnswers').where({id: data[0]})
      res.json(response)
    } catch (e) { res.json(e) }
})
server.post('/surveys', verifyToken, async(req,res) =>{
  const token = req.token
  const body = req.body
  const createSurvey = await db('surveys').insert({...body,user_id:token.id})
  const survey = await db('surveys').where({id: createSurvey[0]})
  try{
    res.status(201).json({...survey[0], message: 'successfully created survey'})
  } catch(e){
    res.json(e)
}
});
server.post('/questions', verifyToken, async (req, res) => {
  const body = req.body;
  const createQuestion = await db('questions').insert({ ...body });
  try {
    res.status(201).json(createQuestion);
  } catch (e) {
    res.json(e);
  }
});
server
  .route('/users/:id')
  .get(users.get)
  .put(users.put)
  .delete(users.deleteU);

server.route('/guests').post(guests.post);

server.route('/guests/:id').put(guests.put);

server
  .route('/houses')
  .get(houses.get)
  .post(houses.post);

server
  .route('/houses/:id')
  .get(houses.get)
  .put(houses.put)
  .delete(houses.deleteU);

server
  .route('/payments')
  .get(payments.get)
  .post(payments.post);

server
  .route('/connect')
  .post(verifyToken, connect.post)
  .delete(verifyToken, connect.deleteL);

server.route('/connect/createpayment').post(connect.createPayment);

server.route('/lists').post(lists.post);
/* this get route looks for a query. if `lists/1?stay=true`
the id should be for a stay. Anything else the id should be for a house
*/
server
  .route('/lists/:id')
  .get(lists.get)
  .delete(lists.deleteL);

server
  .route('/items')
  .get(items.get)
  .post(items.post);
server
  .route('/items/:id')
  .get(items.get)
  .put(items.put)
  .delete(items.deleteL);

server.route('/assistants').get(assistants.get);

server
  .route('/assistants/:id')
  .get(assistants.getId)
  .post(assistants.postAst)
  .delete(assistants.delAst);

server.route('/itemComplete').post(items.itemComplete);

server.route('/email').post(verifyToken, email.send);

server
  .route('/stays')
  .get(stays.getAll)
  .post(stays.post);

server
  .route('/stays/:id')
  .get(stays.get)
  .put(stays.put);

const options = {
  filePath: '../uploads',
  providerOptions: {
    s3: {
      bucket: 'cleaner-pos',
      key: process.env.AWS_Key,
      region: process.env.REGION,
      secret: process.env.AWS_SECRET,
    },
  },
  server: {
    host: 'localhost:3020',
    protocol: 'http',
  },
};
server.use(companion.app(options));

server.use(errorHandler);

export default server;

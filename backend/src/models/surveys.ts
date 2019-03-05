import { QueryBuilder } from 'knex';
import db from '../../data/dbConfig';
import { findAllHousesByManagerId } from './houses';

interface Surveys {
  id: number;
  name: string;
  isGuest: boolean;
}

let getSurvey: (id: string) => QueryBuilder;
// let getAllSurveys: () => QueryBuilder;
let getSurveyQuestions: (id: string) => QueryBuilder;
let getSurveyResponse: (id: number) => QueryBuilder;
let getQuestionsAnswers: (id: number) => QueryBuilder;
// Boy this one was a bit of a stretch
let filterByField: (
  field: string,
  fieldValue: string,
) => (query: QueryBuilder) => QueryBuilder;
let getSurveyByHouse: (id: string) => QueryBuilder;

/* Don't know why but I had to protect this in a function before it would work
  right otherwise it was returning a different sql statement every run */

const baseQuery = () => db('surveys');

filterByField = (field, fieldValue) => {
  return (query) => {
    return query.where(field, '=', fieldValue);
  };
};

const getAllSurveys = async (managerId: number) => {
  const houses = await findAllHousesByManagerId(managerId);
  for (let i = 0; i < houses.length; i++) {
    const surveys = await db('surveys').where('house_id', houses[i].id);
    houses[i].surveys = surveys;
  }
  let surveys = houses.map((house: any) => {
    return house.surveys;
  });
  surveys = surveys.flat();
  return surveys;
};

getSurvey = (id) => {
  const filteredById = filterByField('id', id);
  return filteredById(baseQuery());
};


getSurveyByHouse = (id) => {
  const filteredByHouseId = filterByField('house_id', id);
  return filteredByHouseId(baseQuery());
};

getSurveyQuestions = (id) => {
  return baseQuery()
    .join('questions', 'questions.survey_id', '=', 'surveys.id')
    .select(
      'surveys.name',
      'question.name',
      'surveys.isGuest',
      'question.isGuest',
    )
    .where({ survey_id: id });
};

getQuestionsAnswers = (id) => {
  return db('questions')
    .join('questionAnswers', 'questionAnswers.question_id', '=', 'questions.id')
    .select('questions.question', 'questionAnswers.answer')
    .where({ question_id: id });
};

getSurveyResponse = (id) => {
  return baseQuery()
    .join('questions', 'questions.survey_id', '=', 'surveys.id')
    .join('questionAnswers', 'questionAnswers.question_id', '=', 'questions.id')
    .select(
      'surveys.name',
      'surveys.isGuest',
      'questionAnswers.name',
      'questionAnswers.photo',
      'questions.question',
      'questionAnswers.answer',
      'questionAnswers.created_at'
    )
    .where({ survey_id: id, question_id: id });
};

export {
  getSurvey,
  getAllSurveys,
  getSurveyQuestions,
  getSurveyResponse,
  getQuestionsAnswers,
};

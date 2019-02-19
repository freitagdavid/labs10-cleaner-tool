import { QueryBuilder } from 'knex';
import db from '../../data/dbConfig';


interface Surveys {
    id: number,
    name: string,
    isGuest: boolean
}

export function getSurvey(id: number ): QueryBuilder {
    return db('survey')
}

// export function getSurveyQuestions(id: number): QueryBuilder {
//     return db('survey')
//         .join('questions', 'questions.survey_id', '=', 'survey.id')
//         .select('survey.name', 'question.name', 'survey.isGuest', 'question.isGuest')
//         .where({ survey_id: id })
//     //      .join('questions', 'survey.id', '=', 'questions.survey_id')
//     //      .select('surveys.name', 'surveys.isGuest', 'questions.name', 'questions.isGuest' )
//     // .first()
//     // .where({ survey_id: id })
// }

export function getSurveyQuestions(id: number): QueryBuilder {
    return db('survey').where({id })
       const 
}





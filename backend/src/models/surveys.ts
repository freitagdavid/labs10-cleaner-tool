import { QueryBuilder } from 'knex';
import db from '../../data/dbConfig';


interface Surveys {
    id: number,
    name: string,
    isGuest: boolean
}

export function getSurvey(id: number ): QueryBuilder {
    return db('surveys').where({ id })
}


export function getSurveyResponse(id: number): QueryBuilder {
    return db('surveys')
        .join('questions', 'questions.survey_id', '=', 'survey.id')
        .join('questionAnswers', 'questionAnswers.question_id', '=', 'questions.id')
        .select('survey.name', 'questions.question', 'survey.isGuest', 'questions.question', 'questionAnswers.answer')
        .where({ survey_id: id, question_id: id })
}

export function getQuestionsAnswers(id: number): QueryBuilder {
    return db('questions')
        .join('questionAnswers', 'questionAnswers.question_id', '=', 'questions.id')
        .select('questions.question', 'questionAnswers.answer')
        .where({ question_id: id})
}







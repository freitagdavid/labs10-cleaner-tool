import { QueryBuilder } from 'knex';
import db from '../../data/dbConfig';


interface Surveys {
    id?: number,
    name: string,
    isGuest: boolean
    query: any
}

export function getSurveys(): QueryBuilder {
    return db('surveys')
}

export function getSurvey(id: number ): QueryBuilder {
    return  db('surveys').where({ id }).first()
}

export function getSurveyResponse(id: number): QueryBuilder {
    return db('surveys')
        .join('questions', 'questions.survey_id', '=', 'surveys.id')
        .join('questionAnswers', 'questionAnswers.question_id', '=', 'questions.id')
        .select('surveys.name', 'questions.question', 'questions.question', 'questionAnswers.answer')
        .where({ survey_id: id, question_id: id })
}

export function getAllQuestionsAnswers(): QueryBuilder {
    return db('questions')
        .join('questionAnswers', 'questionAnswers.question_id', '=', 'questions.id')
        .select('questions.question', 'questionAnswers.answer')
}

export function getQuestionsAnswers(id: number): QueryBuilder {
    return db('questions')
        .join('questionAnswers', 'questionAnswers.question_id', '=', 'questions.id')
        .select('questions.question', 'questionAnswers.answer')
        .where({ question_id: id})
}







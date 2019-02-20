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


export function getSurveyQuestions(id: number): QueryBuilder {
    return db('survey')
        .join('questions', 'questions.survey_id', '=', 'survey.id')
        .select('survey.name', 'question.question', 'survey.isGuest')
        .where({ survey_id: id })
}

export function getQuestionsAnswers(id: number): QueryBuilder {
    return db('question')
        .join('questionAnswers', 'questionAnswers.question_id', '=', 'question.id')
        .select('question.question', 'questionAnswer.answer')
        .where({ question_id: id})
}







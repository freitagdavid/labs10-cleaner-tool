import { QueryBuilder } from 'knex';
import db from '../../data/dbConfig';

interface Surveys {
    id: number,
    name: string,
    isGuest: boolean
}

export function getSurveyQuestions(id: number) {
    return db('surveys')
    // .join('survey', 'survey.id', '=', 'questions.survey_id')
    // .select('questions.id', 'surveys.id', 'surveys.name', 'surveys.isGuest', 'questions.name', 'questions.isGuest' )
    // .where({'questions.survey_id': id})
}
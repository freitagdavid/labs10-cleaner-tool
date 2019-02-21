import { QueryBuilder } from 'knex';
import db from '../../data/dbConfig';

interface Surveys {
  id: number;
  name: string;
  isGuest: boolean;
}
let getSurvey: (id: number) => QueryBuilder;
let getAllSurveys: () => QueryBuilder;
let getSurveyQuestions: (id: number) => QueryBuilder;

const baseQuery = db('surveys');

getSurvey = (id) => {
  return baseQuery.where({ id });
};

getAllSurveys = () => {
  return baseQuery;
};

getSurveyQuestions = (id) => {
  return baseQuery
    .join('questions', 'questions.survey_id', '=', 'survey.id')
    .select(
      'survey.name',
      'question.name',
      'survey.isGuest',
      'question.isGuest',
    )
    .where({ survey_id: id });
};

export { getSurvey, getAllSurveys, getSurveyQuestions };

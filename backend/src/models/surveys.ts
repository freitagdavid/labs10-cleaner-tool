import { QueryBuilder } from 'knex';
import db from '../../data/dbConfig';

interface Surveys {
  id: number;
  name: string;
  isGuest: boolean;
}
let getSurvey: (id: string) => QueryBuilder;
let getAllSurveys: () => QueryBuilder;
let getSurveyQuestions: (id: string) => QueryBuilder;
// Boy this one was a bit of a stretch
let filterByField: (
  field: string,
  fieldValue: string,
) => (query: QueryBuilder) => QueryBuilder;

/* Don't know why but I had to protect this in a function before it would work
   right otherwise it was returning a different sql statement every run */

const baseQuery = () => db('surveys');

filterByField = (field, fieldValue) => {
  return (query) => {
    return query.where(field, '=', fieldValue);
  };
};

getSurvey = (id) => {
  const filteredById = filterByField('id', id);
  return filteredById(baseQuery());
};

getAllSurveys = () => {
  return baseQuery();
};

getSurveyQuestions = (id) => {
  return baseQuery()
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

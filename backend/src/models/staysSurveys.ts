import { QueryBuilder } from 'knex';
import db from '../../data/dbConfig';

function baseQuery() {
  return db('stayssurveys');
}

function filterByStayId(stayId) {
  return (query) => query.where('stayssurveys.stay_id', stayId);
}

function filterBySurveyId(surveyId) {
  return (query) => query.where('stayssurveys.survey_id', surveyId);
}

function insertData(data) {
  return (query) => query.insert(data);
}

function formatData(data) {
  const { guestId, stayId } = data;
  return { guest_id: guestId, stay_id: stayId };
}

export function postStaysSurveys(data) {
  const postData = formatData(data);
  const insert = insertData(postData);
  const completedQuery = insert(baseQuery());
  return completedQuery;
}

export function getSurveyByStayId(stayId) {
  const applyStayIdFilter = filterByStayId(stayId);
  const filteredQuery = applyStayIdFilter(baseQuery());
  return filteredQuery;
}

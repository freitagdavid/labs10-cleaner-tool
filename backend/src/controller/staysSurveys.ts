import { getSurveyByStayId } from '../models/staysSurveys';
// Type Definitions
import { Request, Response, NextFunction } from 'express';
import { RequestMock, ResponseMock } from '../../__tests__/helpers';
import { QueryBuilder } from 'knex';
import { Stay } from '../interface';
import { postItemsStay } from '../models/items';

type NextFunctionMock = (a: any) => any;

type Requests = Request | RequestMock;
type Responses = Response | ResponseMock;
type Nexts = NextFunction | NextFunctionMock;

export const post = async (res, req, next) => {
  const { id } = req.params;
  if (id) {
    try {
      const survey = await addSurveyToStay(id);
      res.status(200).json(survey);
    } catch (e) {
      e.statusCode = e.statusCode || 400;
      next(e);
    }
  }
};

export const del = async () => {};

let get: (res: Responses, req: Requests, next: Nexts) => Promise<void>;

export async function get(res, req, next) {
  const { id } = req.params;
  try {
    const survey = await getSurveyByStayId(id);
    res.status(200).json(survey);
  } catch (e) {
    e.statusCode = e.statusCode || 400;
    next(e);
  }
}

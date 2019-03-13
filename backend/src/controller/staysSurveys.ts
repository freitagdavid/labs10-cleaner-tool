import { getSurveyByStayId, postStaysSurveys } from '../models/staysSurveys';
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

export const post = async (req:Request, res:Response, next:Nexts) => {
  const { stayId, surveyId } = req.body;
  if (stayId && surveyId) {
    try {
      const survey = await postStaysSurveys(req.body);
      res.status(200).json(survey);
    } catch (e) {
      e.statusCode = e.statusCode || 400;
      next(e);
    }
  }
};

export const del = async () => {};

// let get: (res: Responses, req: Requests, next: Nexts) => Promise<void>;

export const get = async ( req: Requests, res: Responses, next: Nexts) => {
  const { stayId } = req.body;
  try {
    const survey = await getSurveyByStayId(stayId);
    res.status(200).json(survey);
  } catch (e) {
    e.statusCode = e.statusCode || 400;
    next(e);
  }
}

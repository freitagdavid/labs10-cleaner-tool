import sgMail from '@sendgrid/mail';
import { Token } from '../interface';
import { Request, Response, NextFunction } from 'express';
import { RequestMock, ResponseMock } from '../../__tests__/helpers';
import { getRoleId } from '../models/users';
type NextFunctionMock = (a: any) => any;
const sgKey: any = process.env.SENDGRID_API_KEY;
const URL: any = process.env.FRONT_END_URL || 'xenodochial-murdock-91cfeb.netlify.com/dashboard'
sgMail.setApiKey(sgKey);

/*
This is just the basic setup a post request to http://localhost:3000/email with
{
  "ast_name": "James",
  "manager_name": "Steve",
  "subject":"This is the subject",
  "link_address": "https://{ourFrontEndAddress}.com/{someComponent}?managerId={managerId}",
  "from": "william.thing@gmail.com",
  "to": "william.some@gmail.com"
}
We can prob grap the 'from' address off the managers decoded token when the post is submitted.
Will need a to address.
output email is formatted
```
Hello James,

You have been invited to join Lodgel by Steve

Please visit this link to signup and accept Lodgel
```
*/
interface ReqToken extends Request {
  token: Token;
}
type Requests = ReqToken | RequestMock;
type Responses = Response | ResponseMock;
type Nexts = NextFunction | NextFunctionMock;
export const sgSend = (msg: any) => {
  return sgMail.send(msg);
};
export const send = async (req: Requests, res: Responses, next: Nexts) => {
  try {
    const { ast_name, manager_name, to } = req.body;
    const subject: string = `${manager_name} invites you to do work`;
    const { id, email } = req.token;
    const roleId = await getRoleId(id);
    // const linkAddress: string = `https://cleanerpos.netlify.com/login?manager=${roleId.id}&ast=true`;
    const linkAddress: string = `${URL}/login?manager=${roleId.id}&ast=true`;
    if (
      !ast_name ||
      !manager_name ||
      !subject ||
      !linkAddress ||
      !email ||
      !to
    ) {
      throw Error('ast, manager, subject, link, from, and to are all required');
    }
    // const msg = {
    //   dynamic_template_data: {
    //     astName: ast_name,
    //     linkAddress,
    //     managerName: manager_name,
    //     subject,
    //   },
    //   from: email,
    //   templateId: 'd-5eb00ba7abad4637bf24a96ec83281d8',
    //   to,
    // };
    const msg = {
      to,
      from: email,
      subject: subject,
      text: 'Click to accept',
      html: `<a href='${linkAddress}'>Link to your cleaner Dashboard</a>`
    }
    await sgSend(msg);
    res.status(200).json({ status: 'success' });
  } catch (e) {
    e.statusCode = 400;
    next(e);
  }
};

export const sendLink = async (req: Requests, res: Responses, next: Nexts) => {
  try {
    const { to, guestCode } = req.body;
    console.log
    const msg = {
      to,
      from: 'test@example.com',
      subject: 'Your Guest DashBoard Link',
      text: 'Click to view the progress of your booking.',
      html: `<a href='${URL}/dashboard/${guestCode}'>Link To Your Guest DashBoard</a>`,
    };;

    await sgSend(msg);
    res.status(200).json({ status: 'success' });
  } catch (e) {
    e.statUsCode = 400;
    next(e);
  }
}

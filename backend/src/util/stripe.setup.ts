const { STRIPE_SECRET } = process.env;

// tslint:disable-next-line:no-var-requires
export const stripe = require('stripe')(STRIPE_SECRET);

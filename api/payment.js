/**
 * Module for processing square payment
 */

// Dependencies
const uuidv1 = require('uuid/v1');
const { Client, Environment, PaymentsApi, CustomersApi } = require('square');
// const {json} = require("express");

async function sendSquarePayment(req, res, next) {

  let amount = (parseInt(req.body.amountToPay, 10) * 100);

  const client = new Client({
    accessToken: process.env.SQUARE_TOKEN_PROD ,
    environment: Environment['Production']
  });

  const customer = {
    givenName: req.body.first_name,
    familyName: req.body.last_name,
    emailAddress: req.body.email_address,
    phoneNumber: req.body.phone_number
  }

  const payment = {
    token: req.body.token,
    amountMoney: {
      amount,
      currency: 'USD',
    },
    appFeeMoney: {
      amount: Math.round((amount * 0.0375)),
      currency: 'USD'
    },
  }
  // create customer
  let createdCustomer = await createCustomer(client, customer);
  payment.customerId = createdCustomer.id;
  let createdPayment = await createPayment(client, payment);
  // console.log('Created payment Payload' + '\n', createdPayment);
  return res.json(createdPayment.status);
}

async function createPayment(client, payment){
  try{
    const { paymentsApi } = client;
    let {amountMoney, appFeeMoney, token} = payment;
    let res = await paymentsApi.createPayment({
      sourceId: token,
      idempotencyKey: uuidv1(),
      amountMoney,
      appFeeMoney
    });
    return res.result.payment;
  } catch (err){
    return JSON.stringify(err);
  }
}

async function createCustomer(client, customer){
  try{
    const { customersApi } = client;

    let res = await customersApi.createCustomer({
      givenName: customer.givenName,
      familyName: customer.familyName,
      emailAddress: customer.emailAddress,
      phoneNumber: customer.phoneNumber,
      idempotencyKey: uuidv1(),
    });
    return res.result.customer;
  } catch(err){
    return JSON.stringify(err);
  }
}

module.exports = {
  sendSquarePayment
}

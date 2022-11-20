/**
 * Module for processing square payment
 */



// Dependencies
var unirest = require('unirest');
const uuidv1 = require('uuid/v1');
const { Client, Environment } = require('square');
const { randomUUID } = require('crypto');

// Container object
var square = {};

async function sendSquarePayment(req, res, next) {

  let amount = (parseInt(req.body.amountToPay, 10) * 100);

  const client = new Client({
    accessToken: 'EAAAEBZ5HY81XFzNPM3dsUAEPY7GkwXiiZpeEhJdulWfxWRkyUuzZDmPN9FX1j-W',
    environment: Environment['Sandbox'],//'should be: Environment[process.env.ENVIRONMENT] or some variation'
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
  console.log('Created payment Payload' + '\n', createdPayment);
  return res.json(createdPayment.status);
  // return res.status(200).send();
}

async function createPayment(client, payment){
  console.log('payment', payment)
  const { paymentsApi } = client;
  let {amountMoney, appFeeMoney } = payment;
  let res = await paymentsApi.createPayment({
    idempotencyKey: uuidv1(),
    sourceId: payment.token,
    amountMoney,
    appFeeMoney
  });
  console.log('ressdafsdasad', res.result.payment);
  return res.result.payment;
}

async function createCustomer(client, customer){
  const { customersApi } = client;

  let res = await customersApi.createCustomer({
    givenName: customer.givenName,
    familyName: customer.familyName,
    email_address: customer.emailAddress,
		phone_number: customer.phoneNumber,
    idempotencyKey: uuidv1(),
  });
  return res.result.customer;
}

// square.sendSquarePaymentOLD = function(req,res,next){
// 	try{
// 	  console.log("Req" + " " + JSON.stringify(req.body));
// 		let nonce = req.body.data.sourceId;
// 		console.log("This is nonce" + nonce);
// 		let amtEl = parseInt(req.body.amountToPay, 10);
// 		console.log('Amount to pay' + ' ' + amtEl);
// 		let amtInDollars = amtEl * 100;
// 		let amtTotal = (amtInDollars * 0.0375) + amtInDollars;
// 		let amt = parseInt(amtTotal, 10);
// 		console.log('This is amt' + ' ' +  amt);
// 		let given_name = req.body.first_name;
// 		let family_name = req.body.last_name;
// 		let email_address = req.body.email_address;
// 		let phone_number = req.body.phone_number;
//
// 		let location_id = 'LQ81E4HB41TWJ';//"CBASEKMX2G17bvMoK22CqyjodIYgAQ";
// 		let access_token = 'EAAAEBZ5HY81XFzNPM3dsUAEPY7GkwXiiZpeEhJdulWfxWRkyUuzZDmPN9FX1j-W';//"sandbox-sq0atb-z_RHpdCXPfJTFaf1itVRjQ";
// 		console.log("Customer" + " " + given_name + family_name + email_address + phone_number + '\n' + "Token" + nonce);
// 		let customer = new Promise((resolve) => {
// 			unirest.post('https://connect.squareupsandbox.com/v2/customers')
// 			.headers({
// 				'Accept': 'application/json',
// 				'Content-Type': 'application/json',
// 				'Authorization': 'Bearer ' + access_token,
// 			})
// 			.send({
// 				"given_name": given_name,
//         "family_name": family_name,
//         "email_address": email_address,
// 				"phone_number": phone_number,
//         "idempotency_key": uuidv1()
// 			})
// 			.end(function(response){
// 			  console.log("This is response" + '' + JSON.stringify(response));
// 				resolve(response);
// 			})
// 		});
//
// 		customer.then(data => {
// 		  console.log('Customer Data ID' + ' ' + data.body?.customer?.id);
// 			unirest.post('https://connect.squareupsandbox.com/v2/locations/' + location_id + '/transactions')
// 			.headers({
// 				'Accept': 'application/json',
// 				'Content-Type': 'application/json',
// 				'Authorization': 'Bearer ' + access_token,
// 			})
// 			.send({
// 				'card_nonce':nonce /*NONCE field from form*/,
// 				'amount_money': {
// 					'amount': amt /*amount field from form*/,
// 					'currency':'USD'
// 				},
// 				'idempotency_key':uuidv1(),
// 				'customer_id' : data.body.customer.id
// 			})
// 			.end(function(response){
// 			console.log('Respons paymnent' + '' + JSON.stringify(response));
// 		// if(response.statusCode === 200) {
// 		//   // alert('Payment send')
// 		//   console.log('Success')
// 		// }else if(response.statusCode !== 200) {
// 		//   // alert('Payment Fail' + res.json(error))
// 		//   console.log('Fail')
// 		// }
// 			console.log(response);
// 				res.json(response)
//
// 			})
// 		});
// 	}
// 	catch(error){
// 		console.log("\x1b[31m%s\x1b[0m",`ERROR: ${error}`);
// 	}
//
//
//
// };

module.exports = {
  sendSquarePayment
}

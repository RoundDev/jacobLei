/**
 * Module for processing square payment
 */
const { Client, Environment, ApiError, PaymentsApi , CustomersApi} = require('square')
const { randomUUID } = require("crypto");


// Dependencies
var unirest = require('unirest');
const uuidv1 = require('uuid/v1');

const client = new Client({
  accessToken: process.env.SQUARE_ACCESS_TOKEN,
  environment: Environment.Sandbox,
});

const {customerApi} = client;

var square = {};
square.sendSquarePayment = function(req,res,next) {
console.log("Square Object" + " " + JSON.stringify(req.body));
  async function createCustomer() {
    try {
      let createCustomerResponse = await customerApi.createCustomer({
        givenName: req.body.givenName,
        familyName: req.body.firstName,
      })
    } catch (error) {
      if (error instanceof ApiError) {
        error.result.errors.forEach(function (e) {
          console.log(e.category);
          console.log(e.code);
          console.log(e.detail);
        });
      } else {
        console.log("Unexpected error occurred: ", error);
      }
    }
  }

  createCustomer()
}
module.exports = square;
// Container object
// var square = {};
// console.log("Square Object" + " " + JSON.stringify(req.body));
// square.sendSquarePayment = function(req,res,next){
// 	try{
// 	  console.log("Req" + " " + JSON.stringify(req.body));
// 		let nonce = req.body.nonce;
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
// 		let location_id =  "CBASEKMX2G17bvMoK22CqyjodIYgAQ";
//     // process.env.SQUARE_LOCATION_PROD
// 		let access_token = "sandbox-sq0atb-z_RHpdCXPfJTFaf1itVRjQ"
//       // process.env.SQUARE_TOKEN_PROD;//"sandbox-sq0atb-z_RHpdCXPfJTFaf1itVRjQ";
// 		// console.log("Customer" + " " + given_name + family_name + email_address + phone_number);
// 		let customer = new Promise((resolve) => {
//       let createCustomerResponse =  customersApi.createCustomer({
//               givenName: req.body.first_name,
//               familyName: req.body.last_name,
//               address: {
//                 addressLine1: "1455 Market St",
//                 addressLine2: "San Francisco, CA 94103",
//               },
//               idempotencyKey: uuidv1(),
//             })
// 			.send({
// 				"given_name": given_name,
//         "family_name": family_name,
//         "email_address": email_address,
// 				"phone_number": phone_number
// 			})
// 			.end(function(response){
// 			  // console.log("This is response" + '' + JSON.stringify(response));
// 				resolve(response);
// 			})
// 		});
//
// 		customer.then(data => {
// 		  // console.log('Customer Data ID' + ' ' + data.body.customer.id);
// 			unirest.post('https://connect.squareup.com/v2/locations/' + location_id + '/transactions')
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
// 			// console.log('Respons paymnent' + '' + response);
// 		// if(response.statusCode === 200) {
// 		//   // alert('Payment send')
// 		//   console.log('Success')
// 		// }else if(response.statusCode !== 200) {
// 		//   // alert('Payment Fail' + res.json(error))
// 		//   console.log('Fail')
// 		// }
// 			// console.log(response);
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
//
// module.exports = square;

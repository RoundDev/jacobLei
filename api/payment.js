/**
 * Module for processing square payment
 */



// Dependencies
var unirest = require('unirest');
const uuidv1 = require('uuid/v1');

// Container object
var square = {};

square.sendSquarePayment = function(req,res,next){
	try{
	  console.log("Req" + " " + JSON.stringify(req.body));
		let nonce = req.body.token;
		console.log("This is token" + nonce);
		let amtEl = parseInt(req.body.amount_money, 10);
		console.log('Amount to pay' + ' ' + amtEl);
		let amtInDollars = amtEl * 100;
		let amtTotal = (amtInDollars * 0.0375) + amtInDollars;
		let amt = parseInt(amtTotal, 10);
		console.log('This is amt' + ' ' +  amt);
		let given_name = req.body.first_name;
		let family_name = req.body.last_name;
		let email_address = req.body.email_address;
		let phone_number = req.body.phone_number;

		let location_id = process.env.SQUARE_LOCATION_PROD;//"CBASEKMX2G17bvMoK22CqyjodIYgAQ";
		let access_token = process.env.SQUARE_TOKEN_PROD;//"sandbox-sq0atb-z_RHpdCXPfJTFaf1itVRjQ";
		// console.log("Customer" + " " + given_name + family_name + email_address + phone_number);
		let customer = new Promise((resolve) => {
			unirest.post('https://connect.squareup.com/v2/customers')
			.headers({
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + access_token,
			})
			.send({
				"given_name": given_name,
        "family_name": family_name,
        "email_address": email_address,
				"phone_number": phone_number,
        "idempotency_key": uuidv1()
			})
			.end(function(response){
			  console.log("This is response" + '' + JSON.stringify(response));
				resolve(response);
			})
		});

		customer.then(data => {
		  // console.log('Customer Data ID' + ' ' + data.body.customer.id);
			unirest.post('https://connect.squareup.com/v2/payments')
			.headers({
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + access_token,
			})
			.send({
				'source_id':nonce /*NONCE field from form*/,
				'amount_money': {
					'amount': amt /*amount field from form*/,
					'currency':'USD'
				},
				'idempotency_key':uuidv1(),
				'customer_id' : data.body.customer.id
			})
			.end(function(response){
			console.log('Respons paymnent' + '' + JSON.stringify(response));
		// if(response.statusCode === 200) {
		//   // alert('Payment send')
		//   console.log('Success')
		// }else if(response.statusCode !== 200) {
		//   // alert('Payment Fail' + res.json(error))
		//   console.log('Fail')
		// }
			// console.log(response);
				res.json(response)

			})
		});
	}
	catch(error){
		console.log("\x1b[31m%s\x1b[0m",`ERROR: ${error}`);
	}



};

module.exports = square;

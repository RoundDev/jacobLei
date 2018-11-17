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
		let nonce = req.body.nonce;
		console.log("This is nonce" + nonce);
		let amt = req.body.amountToPay;
		console.log("This is amt" +  amt);
		
		let location_id = process.env.SQUARE_LOCATION_TEST;//"CBASEKMX2G17bvMoK22CqyjodIYgAQ";
		let access_token = process.env.SQUARE_TOKEN_TEST;//"sandbox-sq0atb-z_RHpdCXPfJTFaf1itVRjQ";
		
		unirest.post('https://connect.squareup.com/v2/locations/' + location_id + '/transactions')
		.headers({
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'Authorization': 'Bearer ' + access_token,
		})
		.send({
			'card_nonce':nonce /*NONCE field from form*/,
			'amount_money': {
				'amount': amt /*amount field from form*/,
				'currency':'USD'
			},
			'idempotency_key':uuidv1()
		})
		.end(function(response){
			response.status(200)
		})
	}
	catch(error){
		console.log("\x1b[31m%s\x1b[0m",`ERROR: ${error}`);
	}

}

module.exports = square;
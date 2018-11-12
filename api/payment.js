var unirest = require('unirest');
const uuidv1 = require('uuid/v1');

var self = module.exports ={

    sendSquarePayment: function(req,res,next){
      let nonce = req.body.nonce;
      //let amt = req.body.amount;
      
      let location_id = process.env.SQUARE_LOCATION;//"CBASEKMX2G17bvMoK22CqyjodIYgAQ";
		  let access_token = process.env.SQUARE_TOKEN;//"sandbox-sq0atb-z_RHpdCXPfJTFaf1itVRjQ";
      
      unirest.post('https://connect.squareup.com/v2/locations/' + location_id + '/transactions')
			.headers({
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + access_token,
			})
			.send({
				'card_nonce':card_nonce,
				'amount_money':{
					'amount':/*amount field from form*/,
					'currency':'USD'
				},
				'idempotency_key':uuidv1()
			})
			.end(function(response){
      
      })

    }
}

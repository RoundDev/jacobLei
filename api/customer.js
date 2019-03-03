/**
 * Module for processing customer
 */



// Dependencies
let unirest = require('unirest');
const uuidv1 = require('uuid/v1');

// Container object
let squareCustomer = {};

squareCustomer.sendCustomerInfo = function(req,res,next){
  try {
    // let nonce = req.body.nonce;
    let name = req.body.given_name;
    let last_name = req.body.family_name;
    let email = req.body.email_address;
    let phoneNumber = req.bod.phone_number;


    // let location_id = process.env.SQUARE_LOCATION_TEST;//"CBASEKMX2G17bvMoK22CqyjodIYgAQ";
    let access_token = process.env.SQUARE_TOKEN_TEST;//"sandbox-sq0atb-z_RHpdCXPfJTFaf1itVRjQ";

    unirest.post('https://connect.squareup.com/v2/customers/')
      .headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + access_token,
      })
      .send(
        {
          "given_name": name,
          "family_name": last_name,
          "email_address": email,
          "phone_number": phoneNumber,
        'idempotency_key':uuidv1()
      })
      .end(function(response){
        // if(response.statusCode === 200) {
        //   // alert('Payment send')
        //   console.log('Success')
        // }else if(response.statusCode !== 200) {
        //   // alert('Payment Fail' + res.json(error))
        //   console.log('Fail')
        // }
        // console.log(response);
        res.json(response);
      })
  }
  catch(error) {
    console.log("\x1b[31m%s\x1b[0m",`ERROR: ${error}`);
  }

};

module.exports = squareCustomer;

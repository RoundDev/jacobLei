var Mailgun = require('mailgun-js');
var jade = require('jade');
var emailAddres = "admin@jacoblei.com";
  // "admin@jacoblei.com";
var self = module.exports ={

    sendMaintEmail: function(req,res,next){

       let email = req.body.email;
       let tenantName = req.body.tenName;
       let mailgunKey = process.env.MAILGUN_KEY;
       let mailgunDomain = "sandbox6d45582eac3d42c7854c56422124ee23.mailgun.org";

        let mailgun = new Mailgun({apiKey:mailgunKey,domain:mailgunDomain});
        let fn = jade.compileFile('./maintEmail.jade');
        let html = fn(req.body);

        var data = {
            //Specify email data
              from: email,
            //The email to contact
              to: emailAddres,
            //Subject and text data
              subject: 'Maintenance Request from ' + ' ' + tenantName,
              html: html
            }

            //Invokes the method to send emails given the above data with the helper library
            mailgun.messages().send(data, function (err, body) {
                //If there is an error, render the error page
                if (err) {
                    res.json({'error':JSON.stringify(err)});
                    console.log("got an error: ", err);
                }
                //Else we can greet    and leave
                else {
                    //Here "submitted.jade" is the view file for this landing page
                    //We pass the variable "email" from the url parameter in an object rendered by Jade
                    res.json({'success':'successfully sent email'});
                    console.log(body);
                }
            });
            /*for testing*/
        //res.status(200).send({"html":html.toString()});
    },

    sendContactEmail: function(req,res,next){

        let email = req.body.emailAddress;
        let tenantName = req.body.tenName;
        let mailgunKey = process.env.MAILGUN_KEY;
        let mailgunDomain = "sandbox6d45582eac3d42c7854c56422124ee23.mailgun.org"

         let mailgun = new Mailgun({apiKey:mailgunKey,domain:mailgunDomain});
         let fn = jade.compileFile('./contactEmail.jade');
         let html = fn(req.body);

         var data = {
             //Specify email data
               from: email,
             //The email to contact
               to: emailAddres,
             //Subject and text data
               subject: 'Contact Request from ' + ' ' + tenantName,
               html: html
             }

             //Invokes the method to send emails given the above data with the helper library
             mailgun.messages().send(data, function (err, body) {
                 //If there is an error, render the error page
                 if (err) {
                   res.json({'error':JSON.stringify(err)});
                     console.log("got an error: ", err);
                 }
                 //Else we can greet    and leave
                 else {
                     //Here "submitted.jade" is the view file for this landing page
                     //We pass the variable "email" from the url parameter in an object rendered by Jade
                   res.json({'success':'successfully sent email'});
                     console.log(body);
                 }
             });
             /*for testing*/
         //res.status(200).send({"html":html.toString()});
     },
    sendNoticeEmail: function(req,res,next){

      let email = req.body.emailAddress;
      let tenantName = req.body.tenName;
      let mailgunKey = process.env.MAILGUN_KEY;
      let mailgunDomain = "sandbox6d45582eac3d42c7854c56422124ee23.mailgun.org";

      let mailgun = new Mailgun({apiKey:mailgunKey,domain:mailgunDomain});
      let fn = jade.compileFile('./noticeEmail.jade');
      let html = fn(req.body);

      var data = {
        //Specify email data
        from: email,
        //The email to contact
        to: emailAddres,
        //Subject and text data
        subject: 'Notice Request from ' + ' ' + tenantName,
        html: html
      }

      //Invokes the method to send emails given the above data with the helper library
      mailgun.messages().send(data, function (err, body) {
        //If there is an error, render the error page
        if (err) {
          res.json({'error':JSON.stringify(err)});
          console.log("got an error: ", err);
        }
        //Else we can greet    and leave
        else {
          //Here "submitted.jade" is the view file for this landing page
          //We pass the variable "email" from the url parameter in an object rendered by Jade
          res.json({'success':'successfully sent email'});
          console.log(body);
        }
      });
      /*for testing*/
      //res.status(200).send({"html":html.toString()});
    },
  sendUserPaymentFormEmail: function(req,res,next){

    let email = req.body.email_address;
    let tenantName = req.body.payeeName;
    let mailgunKey = process.env.MAILGUN_KEY;
    let mailgunDomain = "sandbox6d45582eac3d42c7854c56422124ee23.mailgun.org";

    let mailgun = new Mailgun({apiKey:mailgunKey,domain:mailgunDomain});
    let fn = jade.compileFile('./paymentEmail.jade');
    let html = fn(req.body);
    let amn = parseInt(req.body.amountToPay, 10);
    let totalAmount = (amn * 0.0375) + amn;
    console.log("Email Total Amount" + ' ' + totalAmount);


    var data = {
      //Specify email data
      from: emailAddres,
      //The email to contact
      to: email,
      //Subject and text data
      subject: 'Conformation of payment',
      html: html
    }

    //Invokes the method to send emails given the above data with the helper library
    mailgun.messages().send(data, function (err, body) {
      //If there is an error, render the error page
      if (err) {
        res.json({'error':JSON.stringify(err)});
        console.log("got an error: ", err);
      }
      //Else we can greet    and leave
      else {
        //Here "submitted.jade" is the view file for this landing page
        //We pass the variable "email" from the url parameter in an object rendered by Jade
        res.json({'success':'successfully sent email'});
        console.log(body);
      }
    });
    /*for testing*/
    //res.status(200).send({"html":html.toString()});
  },

  sendAdminPaymentFormEmail: function(req,res,next) {

    let email = req.body.email_address;
    let tenantName = req.body.payeeName;
    let mailgunKey = process.env.MAILGUN_KEY;
    let mailgunDomain = "sandbox6d45582eac3d42c7854c56422124ee23.mailgun.org";

    let mailgun = new Mailgun({apiKey:mailgunKey,domain:mailgunDomain});
    let fn = jade.compileFile('./paymentConfirmation.jade');
    let html = fn(req.body);
    // console.log("Email Body Admin" + ' ' + html);
    var data = {
      //Specify email data
      from: email,
      //The email to contact
      to: emailAddres,
      //Subject and text data
      subject: 'Conformation of payment',
      html: html
    }

    //Invokes the method to send emails given the above data with the helper library
    mailgun.messages().send(data, function (err, body) {
      //If there is an error, render the error page
      if (err) {
        res.json({'error':JSON.stringify(err)});
        console.log("got an error: ", err);
      }
      //Else we can greet    and leave
      else {
        //Here "submitted.jade" is the view file for this landing page
        //We pass the variable "email" from the url parameter in an object rendered by Jade
        res.json({'success':'successfully sent email'});
        console.log(body);
      }
    });
    /*for testing*/
    //res.status(200).send({"html":html.toString()});
  },

};

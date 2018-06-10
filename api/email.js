var Mailgun = require('mailgun-js');
var jade = require('jade');


var self = module.exports ={

    sendMaintEmail: function(req,res,next){

       let email = req.body.email;
       let tenantName = req.body.tenName;
       let mailgunKey = process.env.MAILGUN_KEY;
       let mailgunDomain = "sandbox6d45582eac3d42c7854c56422124ee23.mailgun.org"

        let mailgun = new Mailgun({apiKey:mailgunKey,domain:mailgunDomain});
        let fn = jade.compileFile('./maintEmail.jade');
        let html = fn(req.body);

        var data = {
            //Specify email data
              from: email,
            //The email to contact
              to: 'mkaminski69@gmail.com',
            //Subject and text data  
              subject: 'Maintenance Request from ' + tenantName,
              html: html
            }
        
            //Invokes the method to send emails given the above data with the helper library
            mailgun.messages().send(data, function (err, body) {
                //If there is an error, render the error page
                if (err) {
                    res.status(500).end({'error':err});
                    console.log("got an error: ", err);
                }
                //Else we can greet    and leave
                else {
                    //Here "submitted.jade" is the view file for this landing page 
                    //We pass the variable "email" from the url parameter in an object rendered by Jade
                    res.status(200).end({'success':'successfully sent email'});
                    console.log(body);
                }
            });
            /*for testing*/
        //res.status(200).send({"html":html.toString()});
        next();
    },

    sendContactEmail: function(req,res,next){

        let email = req.body.email;
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
               to: 'mkaminski69@gmail.com',
             //Subject and text data  
               subject: 'Maintenance Request from ' + tenantName,
               html: html
             }
         
             //Invokes the method to send emails given the above data with the helper library
             mailgun.messages().send(data, function (err, body) {
                 //If there is an error, render the error page
                 if (err) {
                     res.status(500).end({'error':err});
                     console.log("got an error: ", err);
                 }
                 //Else we can greet    and leave
                 else {
                     //Here "submitted.jade" is the view file for this landing page 
                     //We pass the variable "email" from the url parameter in an object rendered by Jade
                     res.status(200).end({'success':'successfully sent email'});
                     console.log(body);
                 }
             });
             /*for testing*/
         //res.status(200).send({"html":html.toString()});
         next();
     }

};
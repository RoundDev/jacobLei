var Mailgun = require('mailgun-js');

var self = module.exports ={

    sendEmail: function(req,res,next){
       console.log(req)
        /*let mailgun = new Mailgun();

        var data = {
            //Specify email data
              from: from_who,
            //The email to contact
              to: req.params.mail,
            //Subject and text data  
              subject: 'Hello from Mailgun',
              html: 'Hello, This is not a plain-text email, I wanted to test some spicy Mailgun sauce in NodeJS! <a href="http://0.0.0.0:3030/validate?' + req.params.mail + '">Click here to add your email address to a mailing list</a>'
            }
        
            //Invokes the method to send emails given the above data with the helper library
            mailgun.messages().send(data, function (err, body) {
                //If there is an error, render the error page
                if (err) {
                    res.render('error', { error : err});
                    console.log("got an error: ", err);
                }
                //Else we can greet    and leave
                else {
                    //Here "submitted.jade" is the view file for this landing page 
                    //We pass the variable "email" from the url parameter in an object rendered by Jade
                    res.render('submitted', { email : req.params.mail });
                    console.log(body);
                }
            });*/

        next();
    }

};
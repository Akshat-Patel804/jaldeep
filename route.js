const express = require('express');
const Routes = express.Router();
const nodemailer = require('nodemailer');



Routes.post('/emailApi',(req,res)=>{
    const temperature = req.body.temperature
    const humidity = req.body.humidity
    const airpressure = req.body.airpressure


    console.table({temperature,humidity,airpressure});
     
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        port: 465,
        secure: true, 
        auth: {
          user: 'tonny.vas68@gmail.com',
          pass: 'setepsuhclzlbfqe'
        }
        
      });


      if(temperature => 28 && humidity <= 50 ){
        var mailOptions = {
            from: 'tonny.vas68@gmail.com',
            to: 'jaluvasani@gmail.com',
            subject: `hello today's weather is `,
            html: `<h1>Hello sir </h1><br><h4>hello weather is very hot outside </h4> <h4> please carry water bottel </h4> <br> <h4>tempreature is ${temperature} celcius  </h4>  <h4>humidity is ${humidity}<h4/> and <h5>airpressure is ${airpressure}<h5/>`
          };
    
    
    
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          })
      }else if(temperature => 10 &&temperature <= 28 && humidity <= 50 ){
        var mailOptions = {
            from: 'tonny.vas68@gmail.com',
            to: 'jaluvasani@gmail.com',
            subject: `hello today's weather is `,
            html: `<h1>Hello sir </h1><br><h4>hello weather is sunny outside </h4> <h4> enjoy your day</h4> <br> <h4>tempreature is ${temperature} celcius  </h4>  <h4>humidity is ${humidity}<h4/> and <h5>airpressure is ${airpressure}<h5/>`
          };
    
    
    
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          }) 
      }else if(temperature => 0 &&temperature <= 10 && humidity <= 50 ){
        var mailOptions = {
            from: 'tonny.vas68@gmail.com',
            to: 'jaluvasani@gmail.com',
            subject: `hello today's weather is `,
            html: `<h1>Hello sir </h1><br><h4>hello weather is cool outside </h4> <h4> cerry warm cloth</h4> <br> <h4>tempreature is ${temperature} celcius  </h4>  <h4>humidity is ${humidity}<h4/> and <h5>airpressure is ${airpressure}<h5/>`
          };
    
    
    
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
              console.log('code upload')
            }
          }) 
      }else if(temperature <= 0 && humidity <= 50 ){
        var mailOptions = {
            from: 'tonny.vas68@gmail.com',
            to: 'jaluvasani@gmail.com',
            subject: `hello today's weather is `,
            html: `<h1>Hello sir </h1><br><h4>hello weather is very cold out side and may be snow out side </h4> <h4> enjoy your day</h4> <br> <h4>tempreature is ${temperature} celcius  </h4>  <h4>humidity is ${humidity}<h4/> and <h5>airpressure is ${airpressure}<h5/>`
          };
    
    
    
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          }) 
      }


      

})



module.exports = Routes;
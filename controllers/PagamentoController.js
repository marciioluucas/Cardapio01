const request = require('request');
const parser2xml = require("js2xmlparser");
var parse2json= require('xml2js').parseString;

module.exports = {
  assinatura : (req, res, next) =>{
    const email = 'marcel.msmelo@gmail.com';
    const token = '766BE0E9A0734761BC19D09201355EF2';

    const data = {
        preApproval: {
          'charge': 'auto',
          'name': 'Teste',
          'amountPerPayment': '100.00',
          'period': 'Monthly',
          'finalDate': '2017-05-31T00:00:000-03:00',
          'maxTotalAmount':'1200.00'
        }
    };

    const testeXML = parser2xml('preApprovalRequest', data);
    console.log(testeXML);


    let options = {
      uri: 'https://ws.sandbox.pagseguro.uol.com.br/v2/pre-approvals/request?email='+email+'&token='+token,
      method: 'POST',
      headers: {
        'Content-Type': 'application/xml; charset=UTF-8'
      },
      body: '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' + testeXML
    }

    var req = request(options, function(err, res, body) {
      console.log('ERR: ' + err);
      parse2json(body, (err, result)=>{
        console.log(result);
      });
    });
  },

  notificacao: (req, res, next) =>{
      parse2json(req.body, (err, result) =>{
        console.log('ERR Notificacao', err);
        console.log('RESULT Notificacao', result);
      });
  }

};
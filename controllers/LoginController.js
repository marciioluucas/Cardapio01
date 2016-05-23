'use strict';

const Company = require('../models/CompanyModel.js');
const config = require('../config/config.js');
const jwt  = require('jsonwebtoken');

module.exports = {
  //Cadastra uma nova empresa
  signup:(req, res, next)=>{
    //@TODO verificar email já existente
    if(!req.body.email || !req.body.password){//email and password not passed
      res.status(400).json({success: false, msg:"E-mail e/ou Senha obrigatórios. Tente novamente!"});
    }else{
      let newCompany = new Company(req.body);
      newCompany.save()
      .then((company)=>{//Usuário criado com sucesso
          res.status(200).json({success: true, msg: "Empresa cadastrado com sucesso!"});//retorna o usuário criado
      })
      .catch((err)=>{//Algum erro durante a criação
          res.status(400).json({success: false, msg: "Erro ao cadastrar nova empresa. Tente novamente!"});
      });
    }
  },

  //Realiza o login da empresa no sistema admin
  login: (req, res, next)=> {
    Company.findOne({email: req.body.email},{name: 1, email:1, phone: 1, password: 1})
    .then((company)=>{
          if(!company){//Não foi encontrado companhia com o name passado
            res.status(400).json({success: false, msg: 'A autenticação falhou. Empresa não encontrada!'});
          }else{
            company.comparePassword(req.body.password, (err, isMatch)=>{
              if(isMatch && !err){//Caso a senha passada esteja correta
                company.password = undefined;//Remove o campo senha do token gerado

                //cria o token com validade de 24h
                let token = jwt.sign({_id: company._id}, config.secret, {
                  expiresIn: 14400 //(seconds) 24h
                });

                //Salva o Token criado para conferencia
                Company.update({_id: company._id}, {$set: {accessToken: token}})
                .then((companyMod)=>{//É retornado o token salvo no BD
                    res.status(200).json({success: true, token: token});
                })
                .catch((err)=>{//Caso algum erro ocorra, inviabiliza o token
                    res.status(400).json({success: false, token: null, msg: "Erro ao autenticar. Tente novamente!"});
                });

              }else {//Senha não corresponde com a cadastrada
                res.status(400).json({success: false, msg: 'A autenticação falhou. Senha incorreta!'})
              }
            });
          }
      })
      .catch((err)=>{//Erro ao buscar usuário e/ou senha
          res.status(400).json({success: false, msg: 'A autenticação falhou. Usuário e/ou Senha incorretos!'});
      });
  },

  //Realiza o logout da empresa do sistema admin
  logout: (req, res, next) => {
    const companyID = req.companyID;//Recupera a empresa logada pelo token passado

    //Invalida o token cadastrado para a empresa.
    Company.update({_id: companyID}, {$set: {accessToken: null}})
    .then((data) =>{
        res.status(200).json({success: true, msg:"Logout realizado com sucesso!"});
    })
    .catch((err) =>{
        res.status(400).json({success: false, msg: "Falha ao realizar o Logout. Tente novamente!"});
    });
  },

};

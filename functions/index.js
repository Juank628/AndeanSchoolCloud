const functions = require('firebase-functions');
const firebase = require('firebase-admin');
const express = require('express');
const app = express();

const firebaseApp = firebase.initializeApp(
    functions.config().firebase
)

app.set('view engine', 'pug');

app.get('/',(req,res)=>{
    res.set('Cache-Control','public, max-age=300, s-maxage=600')
    res.render('index', {linkHome: "current"})
})

app.get('/news',(req,res)=>{
    res.set('Cache-Control','public, max-age=300, s-maxage=600')
    res.render('index', {linkNews: "current"})
})

app.get('/contact',(req,res)=>{
    res.set('Cache-Control','public, max-age=300, s-maxage=600')
    res.render('index', {linkContact: "current"})
})

app.get('/intranet',(req,res)=>{
    res.set('Cache-Control','public, max-age=300, s-maxage=600')
    res.render('intranet/login', {linkIntranet: "current"})
})

exports.app = functions.https.onRequest(app);
// require('newrelic');
var path = require('path');
var express = require('express');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('./webpack.config');

var app = express();
var compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(webpackHotMiddleware(compiler));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});


var port = process.env.PORT || 3000;

app.listen(port, function(err) {
  if (err) {
    console.log(err);
    return;
  }

  if (port === 3000) {
    console.log('Listening at http://localhost:' + port);
  } else {
    console.log('App is running at https://bensonninh.herokuapp.com');
  }
});

/*
PING WEBSITE EVERY 5 MINUTES SO HEROKU DOESN'T IDLE
*/
var http = require('http');

function pingHeroku() {
  var time = (1000 * 60) * 5;

  // var options = {
  //   host: 'bensonninh.herokuapp.com',
  //   port: port,
  //   path: '/'
  // };
  console.log('-----------------5 minute ping interval is set-----------------');
  setInterval(function() {
    http.get('http://bensonninh.herokuapp.com/', function(res) {
      res.on('data', function(chunk) {
        try {
          console.log('PINGED WEBSITE');
        } catch (err) {
          console.log(err.message);
        }
      });
    }).on('error', function(err) {
      console.log('Error: ', err);
    });
  }, time);
}

pingHeroku();
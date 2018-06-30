/*
*/

"use strict"

var noip = require('no-ip');
var config = require('./config.js').config;

console.log(`config: ${JSON.stringify(config,null,2)}`);

var mynoip = new noip({
  hostname: config.hostname,
  user: config.user,
  pass: config.password
})

mynoip.on('error', function(err){
  console.log(err)
})

mynoip.on('success', function(isChanged, ip){
  console.log(isChanged, ip)
})

//noip.update() // Manual update, you can also provide a custom IP address

mynoip.start() // start an automatic renewal every 1h by default or provide a custom ms.

/*
 * Serve content over a socket
 */

// fake data generator
var dataGenerator = require('../echidna-data/faker.js')
var moment = require('moment');

var FeedConfig = require("../echidna-data/feedconfig.js")
var feedconfig = new FeedConfig.FeedConfig();



module.exports = function (socket) {

    
    // Send init slices
    socket.on('feedconfig', function (data){
        
        feedconfig.setData(data);
        // console.log(feedconfig.numberItems)

    })

   

    setInterval(function () {



        var slice = dataGenerator.newSlice(feedconfig);
        slice.setTime( '' + moment() );

        socket.emit('slice', slice.toJSON());

      }, 1000);
      


};

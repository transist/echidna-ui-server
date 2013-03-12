/*
 * Serve content over a socket
 */

// fake data generator
var dataGenerator = require('../echidna-data/faker.js')
// var dataParse     = require('../echidna-data/d3container.js')
var moment = require('moment');
// var sliceGen = require('../echidna-data/slice.js');

module.exports = function (socket) {

    
    // Send init slices
    socket.on('feedconfig', function (data){
        
        console.log(data)

    })

   

    setInterval(function () {

        var slice = dataGenerator.newSlice(10);
        slice.setTime( '' + moment() );

        socket.emit('slice', slice.toJSON());

      }, 1000);
      


};

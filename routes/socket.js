/*
 * Serve content over a socket
 */

// fake data generator
var dataGenerator = require('../echidna-data/faker.js')
var dataParse     = require('../echidna-data/d3container.js')


var count = 5;

module.exports = function (socket) {

    
    // Send init slices
    socket.on('feedconfig', function (data){
        
        console.log(data)

        // console.log(JSON.parse( data.count) )
        // count = JSON.parse( data.count);

    })

    // for (var i = 0; i < 50; i++) {

    //     socket.emit('slice', {

    //       datapoint : dataGenerator.newSlice(count, i)
    
    //     });
        
    // };

    // var z = 0;

    setInterval(function () {
        
        // if(z % 10 == 0) count = count+1;

        socket.emit('slice', {

          datapoint : dataGenerator.newSlice(count, 0)
    
        });

        // z++;

      }, 1000);
      


};

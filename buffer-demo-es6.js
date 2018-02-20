var buffer = new ArrayBuffer(8);//ES6 syntax to handle data using ArrayBuffer 8 byte  = 64 bits

var view = new Int32Array(buffer);//Integer array using 32 as bit size 
//Here only two numbers can be stored considering with buffer size.
view[0] = '2';
view[1] = '53';
view[2] = '5';
console.log(view);
view[1] = '5';
console.log(view);

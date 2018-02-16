var buf = new Buffer('hello', 'utf8');//Global module inside Node (Buffer)
console.log(buf);
console.log(buf.toString());
console.log(buf.toJSON());

buf.write('wo');//As buffer is limited in size it will replace the string.
console.log(buf.toString());
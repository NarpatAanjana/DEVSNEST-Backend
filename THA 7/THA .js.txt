// ***************code THA.js************

const express = require('express');
const app = express();

const slash = (req,res)=> {
res.send("hello");
}


// *************For GET methods*************
app.get('/',slash);
app.get('/url',slash);
app.listen(5000);

// *************other methods***************
// For sending requests use POSTMAN software or Browser

app.post('/',slash);
app.put('/',slash);
app.delete('/',slash);

// To run:
// go to chrome :localhost:5000/
			// OR
// Postman : localhost:5000/

// ****************sending other res things*********

app.get('/',(req,res)=>{
	res.send({a:"name"}); //sending objs 
	res.send(a = []); //sending array

});
// **************** sending json************
app.get('/',(req,res)=>{
	res.sendStatus(200);//sending status 
	res.send({a:"name"});   //sending message

});

// ***********pipelining*************
app.get('/',(req,res)=>{
	//code for db update
	res.status(200).send("hello OR db not connecting");

});

// ***********http request variables*************

app.get('/products',(req,res)=>{
	
	res.send(req.query.limit);
});

// ***********http req variables v2*************

app.get('/ab?cd',(req,res)=>{ //for abcd or acd
	
	res.send('abcd');
});
// ***********http req variables v3*************

app.get('/ab+cd',(req,res)=>{ //
	
	res.send('abcd');
});

// ***********http req variables v4*************

app.get('/ab*cd',(req,res)=>{ //
	
	res.send('abcd');
});

// ***********http req variables v4*************

app.get('/ab(cd)?',(req,res)=>{ //
	
	res.send('abcd');
});
// ***********http req variables v4*************

app.get('/a/',(req,res)=>{ //regex
	
	res.send('abcd');
});

// ***********http req variables v5*************

app.get('/.*fly$/',(req,res)=>{ //regex butterfly
	
	res.send('abcd');
});

// ***********http req variables v4*************

app.get('/user/:usrid/books/:bkid',(req,res)=>{ 
	console.log(req.query); //query var
	res.send(req.params);   //dynamic var
});

// *****************POSTMAN examples************
localhost:5000/   GET
localhost:5000/	POST
localhost:5000/  PUT
localhost:5000/  DELETE

// Sending varibles to server with get
// localhost:5000/products?limit=50&qry=something

// changing varibles but same response
localhost:5000/ab?cd

// variables multiple times in req
// localhost:5000/abbbbbbbbbbbbbcd

// variables starting with a req 
// localhost:5000/abbbcd
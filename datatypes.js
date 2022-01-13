/*
var x = false ;

var y = x.toString();
var z =  Number(x);
var w = Boolean(x);

console.log(y);// print false as string
console.log(typeof(y));// print false as string
console.log(z);
console.log(typeof(z));
console.log(w);
console.log(typeof(w));

// true

var x = true ;

var y = x.toString();
var z =  Number(x);
var w = Boolean(x);

console.log(y);// print false as string
console.log(typeof(y));// print false as string
console.log(z);
console.log(typeof(z));
console.log(w);
console.log(typeof(w));

// 0
var x = 0 ;

var y = x.toString();
var z =  Number(x);
var w = Boolean(x);

console.log(y);// print false as string
console.log(typeof(y));// print false as string
console.log(z);
console.log(typeof(z));
console.log(w);
console.log(typeof(w));			

// "0"
var x = "0" ;

var y = x.toString();
var z =  Number(x);
var w = Boolean(x);

console.log(y);// print false as string
console.log(typeof(y));// print false as string
console.log(z);
console.log(typeof(z));
console.log(w);
console.log(typeof(w));

// "000"
var x = "000" ;

var y = x.toString();
var z =  Number(x);
var w = Boolean(x);

console.log(y);// print false as string
console.log(typeof(y));// print false as string
console.log(z);
console.log(typeof(z));
console.log(w);
console.log(typeof(w));

// "1"
var x = "1" ;

var y = x.toString();
var z =  Number(x);
var w = Boolean(x);

console.log(y);// print false as string
console.log(typeof(y));// print false as string
console.log(z);
console.log(typeof(z));
console.log(w);
console.log(typeof(w));

// NaN
var x = NaN ;

var y = x.toString();
var z =  Number(x);
var w = Boolean(x);

console.log(y);// print false as string
console.log(typeof(y));// print false as string
console.log(z);
console.log(typeof(z));
console.log(w);
console.log(typeof(w));

// Infinity	
var x = Infinity ;

var y = x.toString();
var z =  Number(x);
var w = Boolean(x);

console.log(y);// print false as string
console.log(typeof(y));// print false as string
console.log(z);
console.log(typeof(z));
console.log(w);
console.log(typeof(w));	

//-Infinity	
var x = -Infinity ;

var y = x.toString();
var z =  Number(x);
var w = Boolean(x);

console.log(y);// print false as string
console.log(typeof(y));// print false as string
console.log(z);
console.log(typeof(z));
console.log(w);
console.log(typeof(w));		

//“”	

var x = "" ;

var y = x.toString();
var z =  Number(x);
var w = Boolean(x);

console.log(y);// print false as string
console.log(typeof(y));// print false as string
console.log(z);
console.log(typeof(z));
console.log(w);
console.log(typeof(w));

//“20”	
var x = "20" ;

var y = x.toString();
var z =  Number(x);
var w = Boolean(x);

console.log(y);// print false as string
console.log(typeof(y));// print false as string
console.log(z);
console.log(typeof(z));
console.log(w);
console.log(typeof(w));	

//“Twenty”	
var x = "Twenty" ;

var y = x.toString();
var z =  Number(x);
var w = Boolean(x);

console.log(y);// print false as string
console.log(typeof(y));// print false as string
console.log(z);
console.log(typeof(z));
console.log(w);
console.log(typeof(w));		

//null	
var x = null ;

var y = x.toString();
var z =  Number(x);
var w = Boolean(x);

console.log(y);// print false as string
console.log(typeof(y));// print false as string
console.log(z);
console.log(typeof(z));
console.log(w);
console.log(typeof(w));	

//undefinited
var x = undefined ;

var y = x.toString();
var z =  Number(x);
var w = Boolean(x);

console.log(y);// print false as string
console.log(typeof(y));// print false as string
console.log(z);
console.log(typeof(z));
console.log(w);
console.log(typeof(w));
*/
// ejercicio 2

let edad = parseInt(prompt("Ingresa tu año de nacimiento"));
let fecha = parseInt(prompt("Ingresa año a calcular"));
let calc = fecha - edad;
let calc2 = calc - 1;
alert("Tu edad es: " + calc2 + " ó "+ calc + " años");

//ejercicio 3

let persona = {
    nombre: "Jonh",
    locacion: "New York",
    pasatiempo: "jugar videojuegos"
};

alert("Hola, mi nombre es " + persona.nombre + ". Soy de " + persona.locacion + " y me gusta  " + persona.pasatiempo);

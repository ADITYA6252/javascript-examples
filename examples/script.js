//functions ke examples

//function 


function square(a) {
  return a * a;
}

let b = square(3);
console.log(b);


//function

function check(val) {
  if (val % 2 === 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
}

check(2);


//function

function total(evt) {
  for (let i = 0; i < evt.length; i++) {
    console.log(evt[i]);
  }
}

let arr = [10, 20, 30, 40, 50, 60];
total(arr);


//function

function num(val) {
  if (val === "a" || val === "e" || val === "i" || val === "o" || val === "u") {
    console.log("vowel");
  } else {
    console.log("not vowel");
  }
}

num("e");



//function

function count(val) {
  let count = 0;
  for (let i = 0; i < val.length; i++) {
    if (val[i] % 2 === 0) {
      count++;
    }
  }
  return count;
}

let number = [2, 3, 4, 5, 6, 7];

console.log(count(number));



//callbacks

function sum(a, b) {
  console.log("sum", a + b);
}

setTimeout(sum(3, 7), 3000);

let fruits = ["apple", "mango", "banana"];

fruits.forEach(function (val) {
  console.log(val);
});


//callbacks

function age(a) {
  if (a >= 18) {
    console.log("you are adult");
  } else {
    console.log("you are not adult");
  }
}

function checkage(a, callback) {
  callback(a);
}
checkage(18, age);

//callbacks

setTimeout(function () {
  for (let i = 0; i <= 10; i++) {
    console.log(i);
  }
}, 2000);

//callbacks

function back(val) {
  val();
}

back(function () {
  console.log("hello");
});


//callbacks

function mul(a, b) {
  console.log(a * b);
}

function op(x, y, mul) {
  mul(x, y);
}

op(3, 4, mul);

//closures....

function val() {
  let a = 2;
  return function () {
    console.log(a);
  };
}
let evt = val();
evt();


//closures....

function counter() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}

let v = counter();
v();
v();
v();

//closures

function input(callback){
  setTimeout(() => {
    let name = "aditya";
    callback(name)

  },2000)
}
 function say (name){
  console.log("hello " + name);
 }
input (say);

//closures....

function cnt() {
  let ar = [10, 20, 30, 40, 50];

  return function () {
    ar.forEach(function (a) {
      console.log(a);
    });
  };
}

let p = cnt();
p();


//closures....


function button (){
  let click = 0;
  let btn = document.getElementById("btn")
  btn.addEventListener("click", function (){
    click ++;
    console.log("clicked");
  })
  
}

button();




//closures....

function some() {
  const username = "aditya";

  function call() {
    console.log(username);
  }

  setTimeout(call, 2000);
}

some();


//closures....

function start() {
  let sec = 0;

  return function () {
    sec++;
    if (sec <= 5) {
      console.log(sec);
    } else {
      clearInterval(d);
    }
  };
}

let time = start();
let d = setInterval(time, 3000);

//promises....


let exam = new Promise (function (res, rej){
  let pass = true;

  if(pass){
    res("Pass")
  }else{
    rej("Fail")
  }
})

exam.then(function(data){
  console.log("result :", data);
})

exam.catch(function(mm){
  console.log("result :", mm);
})


//promises....


function abc (){
  return new Promise(function (res){

    setTimeout (function(){
      res("hello");
    }, 2000)
    
  })
}


abc().then(function(evt){
  console.log(evt);
});

//promises....

function sub(val){
  return new Promise (function (res, rej){
    if (val.name1 && val.email){
      res("successfull")
    }else{
      rej("failed")
    }
  })
}

let data = {name1 : "aditya", email : "aditya@gmail.com"};

sub(data).then(function(m){
  console.log(m);
})
sub(data).catch(function(vt){
  console.log(vt);
})

//promises....


let email = new Promise (function (res, rej){
  let internet = true;
  if (internet){
    res("Email sent successfull")
  }else{
    rej("Failed connection lost")
  }
})

email.then(function(mail){
  console.log(mail);
})
email.catch(function(lost){
  console.log(lost);
})


//promises....

function result (marks){
  return new Promise (function (res, rej){
    if(marks >= 34){
      res("Pass")
    
    }else{
      rej("Fail")
      
    }
  })
}


result(66)
.then(function (result){
  console.log(result);
})
.catch(function (result) {
  console.log(result);
  
})


//promise ....

function login (){
  return new Promise (function (res, rej){
    function abc(){
      let data = prompt("enter your name");
      let pass = prompt("enter your password")

      if(data === "aditya" && pass === "123"){
        res("login successful")
      }else{
        rej("login failed")
      }
    }
  })
}

login()
.then(function (msg){
  console.log(msg);
})
.catch(function(msg){
  console.log(msg);
})


//promise...

function check (){
  return new Promise (function (res, rej){
    let num = Math.floor(Math.random() * 10)
    if (num >5){
      res("number is big")
    }else{
      rej("number is small")
    }
  })
}

check ().then(function(vi){
  console.log(vi);
})
.catch(function (ho){
  console.log(ho);
})



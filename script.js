let count = 0;

const button = document.getElementById("btn");
const button2 = document.getElementById("btn-greet");
const button3 = document.getElementById("changeBtn");
const message = document.getElementById("message");
const nameInput = document.querySelector("#name");
const output = document.querySelector("#output");
const form = document.querySelector("#loginForm");
const button4 = document.getElementById("arrowFunction");
const button5 = document.getElementById("namedFunction");
const button6 = document.querySelector("#box");
const counter = document.querySelector("#counter");
const increase = document.querySelector("#increase");
const decrease = document.querySelector("#decrease");
const pinky = document.querySelector("#pinky");
const yellowy = document.querySelector("#yellowy");
const whitey = document.querySelector("#whitey");

function handleClick(){
    alert("Button Clicked");
}
function mouseOver(){
    console.log("Mouse Entered");
}

function mouseOut(){
    console.log("Mouse left");
}

function onClick(){
    console.log("Box clicked");
}
button.addEventListener("click", function(){
    alert("Hello World!");
});

button2.addEventListener("dblclick", function(){
    alert("Welcome!");
});

button3.addEventListener("click", function(event){
    message.textContent = "Welcome to Information Technology";
    message.style.color = "blue";
    console.log(event.type)
    console.log(event.target)
});

document.addEventListener("keydown", function(event){
    console.log(event.key)
});

nameInput.addEventListener("input", function(event){
    output.textContent = nameInput.value;
});

form.addEventListener("submit", function(event){
    event.preventDefault();
    console.log("Processing form...");
    // alert("Form Submitted");
});

button4.addEventListener("click", () =>{
    alert("Clicked!");
})

button5.addEventListener("click", handleClick);

button6.addEventListener("mouseover", mouseOver);
button6.addEventListener("mouseout", mouseOut);
button6.addEventListener("click", onClick);

console.log("Start");

setTimeout(function(){
    console.log("Timer finished");
}, 2000);

console.log("End");

increase.addEventListener("click", () =>{
    count+=2;
    counter.textContent = count;
});

decrease.addEventListener("click", () =>{
    count-=2;
    counter.textContent = count;
})

pinky.addEventListener("mouseover", () =>{
    document.body.style.backgroundColor = "pink";
    console.log("pink");
})
yellowy.addEventListener("mouseover", () =>{
    document.body.style.backgroundColor = "yellow";
    console.log("yellow");
})
whitey.addEventListener("mouseover", () =>{
    document.body.style.backgroundColor = "white";
    console.log("white");
})
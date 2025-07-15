//   document.getElementById("mybutton").addEventListener("click",function(){
//         alert("button was clicked");

//     })

// document.getElementById("myelement").addEventListener("mouseover" ,function(){
//     this.style.backgroundColor="blue";
// });

// document.getElementById("myelement").addEventListener("mouseout" ,function(){
//     this.style.backgroundColor="green";
// })

// document.addEventListener("keydown",function(event){
// console.log("youpressed:"+event.key);
// });

// document.getElementById("keyup").addEventListener("keyup",function(event){
// console.log("you realsed:" + event.key);
// });

document.getElementById("keyup").addEventListener("input",function(){
console.log("current input :" + this.value);
});

// document.getElementById("my").addEventListener("change",function(){
//     alert("input changed to:" +this.value);
// });

// document.getElementById("myform").addEventListener("submit",function(event){
//     event.preventDefault();
//     alert("form submitted");
// });


// document.getElementById("dbclick").addEventListener("dblclick",function(){
//     alert("double click me");
// });

document.getElementById("my input").addEventListener("focus",function(){
this.style.backgroundColor="blue";
});

document.getElementById("my input").addEventListener("blur",function(){
this.style.backgroundColor="green";
});

  document.getElementById("myclass").addEventListener("input", function () {
      document.getElementById("dd").innerHTML = this.value;
    });
     

    document.getElementById("dd").addEventListener("dblclick",function(){
        this.style.backgroundColor="red";
   alert("double click me");
    });
document.getElementById("myclass").addEventListener("focus",function(){
this.style.backgroundColor="blue";
});
  
    document.getElementById("myclass").addEventListener("blur",function(){
this.style.backgroundColor="green";
});


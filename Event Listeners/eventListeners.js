document.getElementById("commentContainer").style.display="none";
document.getElementById("yesButton").addEventListener("click",function(){
    alert("Thank you for your feedback");
});
document.getElementById("noButton").addEventListener("click",function(){
    document.getElementById("commentContainer").style.display="block";
});
var x=document.getElementById("commentBox").value;
document.getElementById("submitButton").addEventListener("click",function(){
    
    if(x===null){
       alert("The comments section cannot be empty");
   }
    else{
    alert("Thank you for taking your time to give us feedback. We hope you have a better experience next time");
    }
});
// Login form js

let loginButton = document.getElementById("logIn");
let logClickDiv = document.getElementById("LogClick");
document.addEventListener('DOMContentLoaded', () => {
    loginButton.addEventListener('click', () => {
        logClickDiv.style.display = "block";
    });
});

let submitBtn=document.getElementById("submit");
submitBtn.addEventListener('click' ,()=>{
    

})


let logName=document.getElementById("LogName");
let logEmail=document.getElementById("LogEmail");
let logPassword=document.getElementById("LogPassword");

submitBtn.addEventListener('click' ,()=>{
    if(logName.value=="" || logEmail.value=="" || logPassword.value==""){
          alert("Please Give All Information for LogIn Account ");
    } 
    else{
        alert("Thanks! You are successfully Loged In :)");
        logClickDiv.style.display = "none";
    }
})

//Services part js


let Btn1=document.getElementById("RM1").addEventListener('click' ,()=>{
    window.open("https://searchengineland.com/guide/what-is-seo");
})

let Btn2=document.getElementById("RM2").addEventListener('click' ,()=>{
    window.open("https://www.wordstream.com/social-media-marketing");
})
let Btn3=document.getElementById("RM3").addEventListener('click' ,()=>{
    window.open("https://searchengineland.com/guide/what-is-paid-search");
})


// LinkedIn   https://www.linkedin.com/in/malaika-ali-1015b12b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app

//Gihub     https://github.com/MalaikaAliGitHub?tab=repositories

let GitIcon=document.getElementById("Github");
let linked=document.getElementById("LinkedIn");

GitIcon.addEventListener('click' ,()=>{
    window.open("https://github.com/MalaikaAliGitHub?tab=repositories")
})


linked.addEventListener('click' ,()=>{
   window.open("https://www.linkedin.com/in/malaika-ali-1015b12b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app")
})




// Contact Form  javascript


let ContactName = document.getElementById("name");
let ContactEmail = document.getElementById("email");
let ContactPhone = document.getElementById("phone");
let TextArea = document.getElementById("comment");

let button = document.getElementById("sendBtn");

button.addEventListener('click', () => {
    // Change '=' to '==' for comparison
    if (ContactName.value == "" || ContactEmail.value == "" || ContactPhone.value == "" || TextArea.value == "") {
        alert("Please fill the whole form first!");
    } else {
        alert("Your response has been submitted successfully! Thank you!");
        button.style.backgroundColor = "grey";
    }
});





        
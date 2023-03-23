
function yourmsg(){
    username=userName.value;
    usermail=userMail.value;
    outputMsg("Hi "+username+" its pleaure to meet you , we will connect  through  "+usermail );
}
function working(){
    alert("working");
}
// function userinput(){
//     if (userName.value=null)
//     { 
//         outputMsg("please enter your details");
//     }
//     else{ 
//        yourmsg()
//     }



// }
SaveBtn.addEventListener('click',yourmsg);
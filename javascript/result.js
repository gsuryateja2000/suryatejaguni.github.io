
function yourmsg(){
    username=userName.value;
    lastname1=LastName.value;
    usermail=userMail.value;
    outputMsg("Hi " + username +" "+ lastname1 + " its pleaure to meet you , we will connect  through  "+usermail+" soon!" );
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
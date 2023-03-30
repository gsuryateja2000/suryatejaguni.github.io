
function yourmsg(){
    username=userName.value;
    lastname1=LastName.value;
    usermail=userMail.value;
    outputMsg("Hi " + username +" "+ lastname1 + " it's pleaure to meet you , we will connect  through  "+usermail+" soon😊!" );

}
//hi
function working(){
    alert("working");
}

SaveBtn.addEventListener('click',yourmsg);

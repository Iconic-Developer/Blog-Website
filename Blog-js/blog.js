
let popUp = document.getElementById('email-box');
let user = document.getElementById('name').value;
let eml = document.getElementById('email').value;
let msg = document.getElementById('message').value;


// email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// name vallidation
const nameRegex = /^(?=.{3,}$)(?!.*  )[A-Za-z ]+$/;
// msg vallidation
const msgRegex =  /^(?=.{2,}$)(?!.*  )[A-Za-z ]+$/;




let sendButton = document.getElementById('send');
sendButton.addEventListener('click',function(){
   
   
    let para = {
        fullName: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value 

    
    }
    if(nameRegex.test(para.fullName)&& msgRegex.test(para.message)&& emailRegex.test(para.email)){
       
        emailjs.send("service_x7ge54i","template_77rf4iy",para).then(
            popUp.style.display = "flex"
            
        )
    }
    
    if(!nameRegex.test(para.fullName)){
        document.getElementById('name-err').innerHTML="*must be letter min 3 character*";
        return false
    }
   
    if(!emailRegex.test(para.email)){
        document.getElementById('email-err').innerHTML="*enter a valid email*";
        return false
    }
   
    if(!msgRegex.test(para.message)){
        document.getElementById('mes-err').innerHTML="*minimum 2 character*";
        return false
    }
   

 else{
            document.getElementById('name-err').style.display="none";
           document.getElementById('email-err').style.display="none";
           document.getElementById('mes-err').style.display="none";
       
    }

   
    
} )




let closed = document.getElementById('close');
closed.addEventListener('click',function(){
    window.location.reload();
})

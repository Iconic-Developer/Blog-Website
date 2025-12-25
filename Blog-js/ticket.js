let tktContainer = document.getElementById('tkt-container');
let inputErro = document.querySelectorAll('.input-error');
let selectError = document.querySelectorAll('.select-error');

let emailBox = document.getElementById('email-box');
let inputs = document.querySelectorAll('input');
let selectElm = document.querySelectorAll('select');

  // close email box buttons
  let view =  document.getElementById('view');
let closed = document.getElementById('close');

// email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    // name vallidation
// const nameRegex = /^[A-Za-z ]+$/;

const regex = /^(?=.{3,}$)(?!.*  )[A-Za-z ]+$/;

// mobile validation
const mobileRegex = /^[0-9]{10}$/;
        const dep = new Date().toISOString().split("T")[0];
  document.getElementById("jdate").setAttribute("min", dep);
  document.getElementById("rdate").setAttribute("min", dep);


function showDetails() {

  

  let inputName = document.getElementById("name").value;
  let inputEmail = document.getElementById("email").value;
  let inputMobile = document.getElementById("mobile").value;
  let inputDestination = document.getElementById("destination").value;
  let inputTravelType = document.getElementById("transport").value;
  let inputTicket = document.getElementById("number").value;
  let inputDepDate = document.getElementById("jdate").value;
  let inputRetDate = document.getElementById("rdate").value;
  let inputClass = document.getElementById("class").value;
  let inputAddInfo = document.getElementById("additional").value;



  if(regex.test(inputName)&& emailRegex.test(inputEmail)&& mobileRegex.test(inputMobile)&& regex.test(inputDestination)&& inputTravelType !==""&& inputTicket !==""&& inputDepDate !==""&&  inputClass !==""){



  
      document.getElementById('pname').innerHTML = inputName;
  document.getElementById('pemail').innerHTML = inputEmail;
  document.getElementById('pmobile').innerHTML = inputMobile;
  document.getElementById('pdestination').innerHTML = inputDestination;
  document.getElementById('ptravelers').innerHTML = inputTicket + " " + 'Person';
  document.getElementById('travelType').innerHTML = inputTravelType;
  document.getElementById('pclass').innerHTML = inputClass;
  document.getElementById('dDate').innerHTML = inputDepDate;
 if(inputRetDate ==""){
  document.getElementById('retdate').innerHTML ="N/A"
 }
 else{
  document.getElementById('retdate').innerHTML = inputRetDate
 }
  
 if(inputAddInfo ==""){
  document.getElementById('addinfo').innerHTML ="No Requests"
 }
   else{
  document.getElementById('addinfo').innerHTML = inputAddInfo
 }
 
  

emailBox.style.display ="flex";
  
    
   

   


    
  }
 
  if(!regex.test(inputName)){
 document.getElementById('name-err').innerHTML ="* enter a valid name *";
 document.getElementById('check').innerHTML ="* fields error *";
return false
}
  

 if(!mobileRegex.test(inputMobile)){
  document.getElementById('mobile-err').innerHTML ="* enter 10 digit number *";
  document.getElementById('check').innerHTML ="* fields error *";
  return false
 }

  if(!emailRegex.test(inputEmail)){
 document.getElementById('email-err').innerHTML ="* enter a valid email *";
 document.getElementById('check').innerHTML ="* fields error *";
return false}

  
   if(!regex.test(inputDestination)){
 document.getElementById('destination-err').innerHTML ="* between 3 to 10 char *";
 document.getElementById('check').innerHTML ="* fields error *";
return false}

if(inputTravelType ==""){
  document.getElementById('transp-err').innerHTML ="* please sellect a transport *";
  document.getElementById('check').innerHTML ="* fields error *";
  return false
}

if(inputTicket ==""){
  document.getElementById('travelr-err').innerHTML ="* please set a value *";
  document.getElementById('check').innerHTML ="* fields error *";
  return false
}
if(inputDepDate ==""){
  document.getElementById('jdate-err').innerHTML ="* date is invalid *";
  document.getElementById('check').innerHTML ="* fields error *";
  return false
}
if(inputClass ==""){
  document.getElementById('class-err').innerHTML ="* please select a class *";
  document.getElementById('check').innerHTML ="* fields error *";
  return false
}





else{
  
   document.getElementById('name-err').style.display="none";
   document.getElementById('email-err').style.display="none";
   document.getElementById('mobile-err').style.display="none";
   document.getElementById('destination-err').style.display="none";
   document.getElementById('transp-err').style.display="none";
   document.getElementById('travelr-err').style.display="none";
   document.getElementById('jdate-err').style.display="none";
   document.getElementById('rdate-err').style.display="none";
   document.getElementById('class-err').style.display="none";
   document.getElementById('add-err').style.display="none";
   document.getElementById('check').style.display="none";
   
}

  
  //   if(nameRegex.test(inputName)){
  //      document.getElementById('name-err').innerHTML ="* please fill the details *";
  //   }
   
  //   if(inputName ==""){
  //     document.getElementById('name-err').innerHTML ="* please fill the details *";
  //   }
  //   else{
  //     document.getElementById('name-err').innerHTML ="";
  //   }


  //   if(inputEmail ==""){
  //     document.getElementById('email-err').innerHTML ="* please fill the details *";
  //   }
  //   else{
  //           document.getElementById('email-err').innerHTML ="";

  //   }
  //   if(!emailRegex.test(inputEmail)){
  //     document.getElementById('email-err').innerHTML ="* enter a valid email *";
  //   }
  //   else{document.getElementById('email-err').innerHTML ="";}
    

   
  //   if(inputMobile.length <= 0&& inputMobile.length > 10){
  //     document.getElementById('mobile-err').innerHTML ="* please fill the details *";
  //   }
  //   else{
  //           document.getElementById('mobile-err').innerHTML ="";
  //   }

  //   if(inputDestination ==""){
  //     document.getElementById('destination-err').innerHTML ="* please fill the details *";
  //   }
  //   else{
  //           document.getElementById('destination-err').innerHTML ="";

  //   }


  //   if(inputTravelType ==""){
  //     document.getElementById('transp-err').innerHTML ="* please fill the details *";
  //   }
  //   else{
  //           document.getElementById('transp-err').innerHTML ="";

  //   }

  //   if(inputTicket ==""){
  //     document.getElementById('travelr-err').innerHTML ="* please fill the details *";
  //   }
  //   else{
  //           document.getElementById('travelr-err').innerHTML ="";

  //   }

  //   if(inputDepDate ==""){
  //     document.getElementById('jdate-err').innerHTML ="* please fill the details *";
  //   }
  //   else{
  //           document.getElementById('jdate-err').innerHTML ="";

  //   }

  //   if(inputRetDate ==""){
  //     document.getElementById('rdate-err').innerHTML ="*please fill the details *";
  //   }
  //   else{
  //           document.getElementById('rdate-err').innerHTML ="";

  //   }

  //   if(inputClass ==""){
  //     document.getElementById('class-err').innerHTML ="* please fill the details *";
  //   }
  //   else {
  //           document.getElementById('class-err').innerHTML ="";

  //   }

  //   if(inputAddInfo ==""){
  //     document.getElementById('add-err').innerHTML ="* please fill the details *";
  //   }
  //   else{
  //           document.getElementById('add-err').innerHTML ="";

  //   }

      
  // }
   
  }

closed.addEventListener('click',function(){
  emailBox.style.display = "none";
  window.location.reload();
})


view.addEventListener('click',function(){
tktContainer.classList.add('tkt');
})

let tktClose = document.querySelector('.tkt-close');
tktClose.addEventListener('click', function(){
  window.location.reload();
})







const email = document.getElementById('email');
const named = document.getElementById('name');
const form = document.getElementById('form');
const errorEmail = document.getElementById('errorEmail');
const errorName = document.getElementById('errorName');
const checkedBox = document.getElementById('html');
const errorCheckbox = document.getElementById('errorCheckbox');



form.addEventListener('submit', (e)=>{
    let errorExists = false;
  
    if(email.value === "" || email.value === null){
        errorEmail.innerText = "Email jest obowiązkowy"
        errorExists = true;
    }else{
        errorEmail.innerText = ""
    }

    if(named.value === "" || named.value === null){
        errorName.innerText = 'Imię jest obowiązkowe';
        errorExists = true;
    }else{
        errorName.innerText = ""
    }

    if(checkedBox.checked === false){
       console.log(checkedBox.checked)
        errorCheckbox.innerText = 'Potwierdź regulamin';
        errorExists = true;
    }else{
        errorCheckbox.innerText = ""
    }

    if(errorExists){
        e.preventDefault();
        return
    }
    
    sendMail();
})


function sendMail(){
    let tempParams = {
        to_name: email.value,
        from_name: named.value,
    };
    emailjs.send('service_u04sdz9','template_82hhlpc',tempParams)
    .then(function(res){
        console.log("success", res.status);
    })
}






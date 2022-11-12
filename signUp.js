let email = document.querySelector("#Remail");

let pass = document.querySelector("#pass");

let confPassword = document.querySelector("#confirmPass");

let usersDataNew = JSON.parse(localStorage.getItem("usersData")) || [];



document.querySelector("#btnCreate").addEventListener("click",function(){
    console.log(usersDataNew);
   let checkSpe =  checkSpecialChar(pass.value);
   let checkUpp =  checkUpperCase(pass.value);
   let checknNum =  checkNumber(pass.value);

   if(email.value!=="", pass.value!=="", confPassword.value!==""){
    let leng = pass.value.length;
    // console.log(checkSpe);
    // console.log(confPassword.valu);
    if( checknNum && checkSpe && checkUpp && leng>=8 && checkUser(usersDataNew)){
        // console.log(pass.value.trim(),confPassword.value.trim());
        if(pass.value.trim() === confPassword.value.trim()){
            let data = JSON.parse(localStorage.getItem("usersData")) || [];

            let obj ={
                email: email.value.trim(),
                pass: pass.value.trim(),
            }
            data.push(obj);
            localStorage.setItem("usersData",JSON.stringify(data));
          alert("SignUp successful");
           email.value = "";
           pass.value = "";
           confPassword.value = "";
          usersDataNew = JSON.parse(localStorage.getItem("usersData")) || [];
        }else{
            alert("password does not match");
        }
    }else if(checkUser(usersDataNew)===false){
          alert("User already exists");
    }else{
        alert("Password must have atleats one special charactor one Uppercase charactor one number and length must be greater than 8");
    }
   }else{
    alert("Enter all inputs");
   }

})

function checkSpecialChar(pass){
    // console.log(pass);
    let str = "!@#$%^&*";
    let flag = false;
    for(let i=0; i<str.length; i++){
         for(let j=0; j<pass.length; j++){
            if(str[i]===pass[j]){
                return true;
            }
         }
    }

    return flag;
}

function checkUpperCase(pass){
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let flag = false;
    for(let i=0; i<str.length; i++){
         for(let j=0; j<pass.length; j++){
            if(str[i]===pass[j]){
                return true;
            }
         }
    }

    return flag;
}

function checkNumber(pass){
    let str = "1234567890";
    let flag = false;
    for(let i=0; i<str.length; i++){
         for(let j=0; j<pass.length; j++){
            if(str[i]===pass[j]){
                return true;
            }
         }
    }
    return flag;
}

let emailcheck = document.querySelector("#Remail");

function checkUser(nData){
    let flag = true;
    for(let i=0; i<nData.length; i++){
        if(nData[i].email===emailcheck.value){
            flag = false;
            // console.log(nData[i].email,emailcheck.value)
            break;
        }
    }
    return flag;
}

// console.log(checkUser(usersDataNew))

// >>>>>>>>>>>>>>>>>>>>>>>>> code for SignIn <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

let sgnMail = document.querySelector("#SignInEmail");
let sgnPass = document.querySelector("#SignInPass");

document.querySelector("#btnSignIn").addEventListener("click",function(){
     if(sgnMail.value.trim()!=="" && sgnPass.value.trim()!==""){
       if(checkUserSign(usersDataNew)){
          alert("SignedIn successfully");
          sgnMail.value = "";
          sgnPass.value ="";
       }else{
         alert("Invalid Credentials");
       }
     }
});


function checkUserSign(nData){
    let flag = false;
    for(let i=0; i<nData.length; i++){
        if(nData[i].email===sgnMail.value.trim() && nData[i].pass===sgnPass.value.trim()){
            // flag = false;
            // console.log(nData[i].email,sgnMail.value.trim())
            return true;
        }
    }
    return flag;
}
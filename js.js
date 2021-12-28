document.addEventListener("DOMContentLoaded", ()=>{

let $emailImput = document.querySelector("#email-form");
let $submitButton = document.querySelector("#submit-button");
let $errorIcon = document.querySelector(".error-icon");
let $errorMsj = document.querySelector(".error-msj");
let $successMsj = document.querySelector(".success-msj");
let regex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;


$submitButton.addEventListener("click", ()=>{
    

    if(regex.test($emailImput.value)){
        $emailImput.classList.add("success")
        $successMsj.classList.add("visible");

        $errorIcon.classList.remove("visible");
        $errorMsj.classList.remove("visible");
        $emailImput.classList.remove("error")

        $emailImput.value = "";
    }else{
        $errorIcon.classList.add("visible");
        $errorMsj.classList.add("visible");
        $emailImput.classList.add("error")

        $emailImput.classList.remove("success")
        $successMsj.classList.remove("visible");
    }

})


})
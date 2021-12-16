import throttle from "lodash.throttle"

const formEl = document.querySelector(".feedback-form");

const inputEl = document.querySelector(".feedback-form input");

const textareaEl = document.querySelector(".feedback-form textarea");
const FORM_KEY = "feedback-form-state"
const formData = {};
populateFofm()
 
formEl.addEventListener("submit", onFormSubmit);
   
formEl.addEventListener("input", throttle(formDataValue ,500 ))
 function formDataValue (e) { 
    formData[e.target.name] = e.target.value
    console.log(formData)
    localStorage.setItem(FORM_KEY, JSON.stringify(formData))
};
    
function onFormSubmit(evt) {
    evt.preventDefault();

    evt.currentTarget.reset()
    localStorage.removeItem(FORM_KEY)
    
}

function populateFofm() {
    const sevedForm = localStorage.getItem(FORM_KEY)
    if (sevedForm) {
        
        textareaEl.value = JSON.parse(sevedForm).message;
        inputEl.value = JSON.parse(sevedForm).email;
         const parsedform = JSON.parse(sevedForm)
    console.log(parsedform)
    };
   
    
};

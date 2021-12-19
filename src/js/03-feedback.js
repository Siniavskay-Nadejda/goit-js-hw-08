import throttle from "lodash.throttle"

const formEl = document.querySelector(".feedback-form");
const inputEl = document.querySelector(".feedback-form input");
const textareaEl = document.querySelector(".feedback-form textarea");
const FORM_KEY = "feedback-form-state"
let formData = {};

 formEl.addEventListener("submit", onFormSubmit);
 formEl.addEventListener("input", throttle(formDataValue, 500))
 
 function formDataValue (e) { 
    formData[e.target.name] = e.target.value
    localStorage.setItem(FORM_KEY, JSON.stringify(formData))
};
populateFofm()
  
function onFormSubmit(evt) {
    evt.preventDefault();
    evt.currentTarget.reset()
    localStorage.removeItem(FORM_KEY)
    console.log(formData)
    formData = {}
}
function populateFofm() {
     const sevedForm = JSON.parse(localStorage.getItem(FORM_KEY))
     if (sevedForm) {
        textareaEl.value = sevedForm.message ||  "";
        inputEl.value = sevedForm.email || "";
        formData = sevedForm
    };
   
   };


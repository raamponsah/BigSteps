let formSteps = document.querySelectorAll('.form-step');
let next = document.createElement('button');
let prev = document.createElement('button');
const container = document.querySelector('#step-container');
next.setAttribute('class', 'next');
prev.setAttribute('class', 'prev');
next.setAttribute('onclick', 'nextStep()');
prev.setAttribute('onclick', 'prevStep()');
next.innerText = 'Next';
prev.innerText = 'Prev';

container.appendChild(next);
container.appendChild(prev);



let currentStep = 0;
for(let form of formSteps){
    form.style.display = 'none';
}



const showStep = (step) => {
    formSteps[step].style.display = 'block';
    console.log(currentStep);
    checkPrev(currentStep);
    checkNext(currentStep);
}

const nextStep = () => {
    if(currentStep < formSteps.length - 1){
        formSteps[currentStep].style.display = 'none';
        currentStep++;
        showStep(currentStep);
    }
   
}

const prevStep = () => {
    if(currentStep > 0){
        formSteps[currentStep].style.display = 'none';
        currentStep--;
        showStep(currentStep);
    }

   
}

const checkPrev = (currentStep) => {
    if(currentStep == 0){
        prev.setAttribute('disabled', 'disabled');
    }
    else{
        prev.removeAttribute('disabled');
    }
}

const checkNext = (currentStep) => {
    if(currentStep == formSteps.length - 1){
        next.setAttribute('disabled', 'disabled');
    }   
    else{
        next.removeAttribute('disabled');
    }
}




showStep(currentStep);
let currentStep = 1;

function nextStep(){
    if (currentStep < 3){
        currentStep++;
        showStep();
    }
}

const prevStep = ()=>{
    if (currentStep > 1){
        currentStep--;
        showStep();
    }
}

const wizardForm = document.querySelector("#wizard-form");

wizardForm.addEventListener("submit", function(event){
    event.preventDefault();

    const email = wizardForm.elements.email.value;
    const username = wizardForm.elements.username.value;
    const password = wizardForm.elements.password.value;


    alert(`You have completed your registration \n
    Your Email Address is ${email} \n
    Your Username is ${username} \n
    Your Password is ${password} \n
    Thank You.`);

    wizardForm.reset();
    currentStep = 1;
    showStep();
})

//make the code more readable by creating a new function 

function showStep(){
    document.querySelectorAll(".step").forEach(function (element){
            element.classList.remove("active");
        });
        
        document.querySelector(`#step${currentStep}`).classList.add("active");
        document.querySelector("#currentStep").textContent = currentStep;
}

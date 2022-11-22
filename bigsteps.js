const bigSteps = new Object({
  formSteps: document.querySelectorAll(".form-step"),
  next: document.createElement("button"),
  counter: document.createElement("span"),
  prev: document.createElement("button"),
  controls: document.createElement("div"),
  container: document.querySelector(".step-container"),
  currentStep: 0,

  init: function () {
    this.next.setAttribute("class", "next");
    this.prev.setAttribute("class", "prev");
    this.controls.setAttribute("class", "controls");
    this.controls.appendChild(this.next);
    this.controls.appendChild(this.counter);
    this.controls.appendChild(this.prev);
    this.container.appendChild(this.controls);
    this.next.innerHTML = "Next &rarr;";
    this.prev.innerHTML = "&larr; Prev";

    for (let form of this.formSteps) {
      form.style.display = "none";
    }

    this.next.addEventListener("click", () => {
      this.nextStep();
   
    });
    this.prev.addEventListener("click", () => {
      this.prevStep();

    });
    this.showStep(this.currentStep);
  },
  showStep: function (step) {
    this.formSteps[step].style.display = "block";
    this.counter.innerHTML = `${this.currentStep+1} of  ${this.formSteps.length}`;
    this.checkPrev(this.currentStep);
    this.checkNext(this.currentStep);
  },

  nextStep() {
    if (this.currentStep < this.formSteps.length - 1) {
      this.formSteps[this.currentStep].style.display = "none";
      this.currentStep++;
      this.showStep(this.currentStep);
    }
  },

  prevStep() {
    if (this.currentStep > 0) {
      this.formSteps[this.currentStep].style.display = "none";
      this.currentStep--;
      this.showStep(this.currentStep);
    }
  },
  checkPrev(currentStep) {
    if (currentStep == 0) {
      this.prev.setAttribute("disabled", "disabled");

    } else {
      this.prev.removeAttribute("disabled");
      
    }
  },

  checkNext(currentStep) {
    if (currentStep == this.formSteps.length - 1) {
      this.next.setAttribute("disabled", "disabled");
    } else {
      this.next.removeAttribute("disabled");
    }
  },
});

bigSteps.init();

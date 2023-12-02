window.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById("calc-form");
    console.log(form);
    if (form) {
      console.log(setupIntialValues());
      form.addEventListener("submit", function(e) {
        e.preventDefault();
        update();
      });
    }
  });
  
  function getCurrentUIValues() {
    return {
      amount: +(document.getElementById("loan-amount").value),
      years: +(document.getElementById("loan-years").value),
      rate: +(document.getElementById("loan-rate").value),
    }
  }
  
  // Get the inputs from the DOM.
  // Put some default values in the inputs
  // Call a function to calculate the current monthly payment
  function setupIntialValues() {
    document.getElementById("loan-amount").value = 5000;
    document.getElementById("loan-years").value = 8;
    document.getElementById("loan-rate").value = .15
  }
  
  // Get the current values from the UI
  // Update the monthly payment
  function update() {
    let values = getCurrentUIValues()
    let monthlyPayment = calculateMonthlyPayment(values);
    updateMonthly(monthlyPayment);
  }
  
  // Given an object of values (a value has amount, years and rate ),
  // calculate the monthly payment.  The output should be a string
  // that always has 2 decimal places.
  function calculateMonthlyPayment(values) {
    let amount = values.amount;
    let rate = values.rate;
    let years = values.years;
    let i = rate/12;
    let n = years*12;

    monthlyPayment = ((amount * i) / (1 - Math.pow((1 + i), -n)));
    monthlyPaymentRounded = Number(monthlyPayment.toFixed(2));
    return monthlyPaymentRounded;
  }
  
  // Given a string representing the monthly payment value,
  // update the UI to show the value.
  function updateMonthly(monthly) {
    const monthlyPayment = document.getElementById('monthly-payment');
    monthlyPayment.innerText = monthly;
  }
  
validateEmail = () => {
  var emailInput = document.getElementById("email");
  var errorMessage = document.getElementById("error-message");
  var successMessage = document.getElementById("success-message");

  // Simple email validation regex
  var emailRegex = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
  if (!emailRegex.test(emailInput.value)) {
    // Invalid email
    errorMessage.textContent = "Valid email required ";
    successMessage.textContent = ""; // Clear success message
  } else {
    // Valid email
    errorMessage.textContent = ""; // Clear error message
    var successHTML = `<div class="py-10 px-10"><img src="./assets/images/icon-success.svg" alt=""/><p class="text-5xl font-bold py-8">Thanks for subscribing!</p><div class=" pb-60 lg:pb-16">A confirmation email has been sent to ${emailInput.value} Please open it and click the button inside to confirm your subscription. </div>        <button
          class="bg-sky-950 p-4 text-white font-bold w-full rounded-md items-center focus:bg-orange-600"
          onclick="dismissMessage()"
        >
          Dismiss Message
        </button></div>`;
    document.body.innerHTML = successHTML;
  }
};

dismissMessage = () => {
  window.location.href = "index.html";
};

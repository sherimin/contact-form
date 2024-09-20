document.getElementById("submit-button").addEventListener("click", function () {
    
    const firstName = document.getElementById("first-name-input").value.trim();
    const lastName = document.getElementById("last-name-input").value.trim();
    const email = document.getElementById("email-input").value.trim();
    const message = document.getElementById("message-input").value.trim();
    const consent = document.getElementById("consent").checked;
    const queryType = document.querySelector('input[name="query-type"]:checked');
  
    let isValid = true;
  
    if (!firstName) {
      document.getElementById("first-name-error").style.display = "block";
      document.getElementById("first-name-input").classList.add("input-error");
      isValid = false;
    } else {
      document.getElementById("first-name-error").style.display = "none";
      document.getElementById("first-name-input").classList.remove("input-error"); 
    }
  
    if (!lastName) {
      document.getElementById("last-name-error").style.display = "block";
      document.getElementById("last-name-input").classList.add("input-error");
      isValid = false;
    } else {
      document.getElementById("last-name-error").style.display = "none";
      document.getElementById("last-name-input").classList.remove("input-error"); 
    }
  
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailPattern.test(email)) {
      document.getElementById("email-error").style.display = "block";
      document.getElementById("email-input").classList.add("input-error"); 
      isValid = false;
    } else {
      document.getElementById("email-error").style.display = "none";
      document.getElementById("email-input").classList.remove("input-error"); 
    }
  
    if (!queryType) {
      document.getElementById("query-type-error").style.display = "block";
      isValid = false;
    } else {
      document.getElementById("query-type-error").style.display = "none";
    }
  
    if (!message) {
      document.getElementById("message-error").style.display = "block";
      document.getElementById("message-input").classList.add("input-error");
      isValid = false;
    } else {
      document.getElementById("message-error").style.display = "none";
      document.getElementById("message-input").classList.remove("input-error");
    }
  
    if (!consent) {
      document.getElementById("consent-error").style.display = "block";
      isValid = false;
    } else {
      document.getElementById("consent-error").style.display = "none";
    }
  
    if (isValid) {
        document.querySelector(".success-container").style.display = "flex";
    }
  });
  
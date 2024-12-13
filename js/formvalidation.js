document.getElementById("membershipForm").addEventListener("submit", function (e) {
    // Prevent the form from submitting initially
    e.preventDefault();
  
    // Get form values
    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const membershipType = document.querySelector('input[name="membershipType"]:checked');
  
    let isValid = true;
    let errorMessage = "";
  
    // Validate full name
    if (fullName === "") {
      errorMessage += "Full name is required.\n";
      isValid = false;
    }
  
    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple regex for email validation
    if (email === "" || !emailPattern.test(email)) {
      errorMessage += "Please enter a valid email address.\n";
      isValid = false;
    }
  
    // Validate phone
    const phonePattern = /^[0-9]{10}$/; // Accepts a 10-digit phone number
    if (phone === "" || !phonePattern.test(phone)) {
      errorMessage += "Please enter a valid 10-digit phone number.\n";
      isValid = false;
    }
  
    // Validate membership type selection
    if (!membershipType) {
      errorMessage += "Please select a membership type.\n";
      isValid = false;
    }
  
    // If the form is valid, submit it; otherwise, show errors
    if (isValid) {
      alert("Form submitted successfully!");
      this.submit(); // Proceed with form submission
    } else {
      alert(errorMessage);
    }
  });
  
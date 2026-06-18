const dobInput = document.getElementById('dob');
const doneBtn = document.getElementById('done-btn');
const errorMsg = document.getElementById('age-error');

dobInput.addEventListener('change', function() {
  const birthDate = new Date(this.value);
  const today = new Date();
  
  // Calculate the age
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  
  // Adjust age if the birthday hasn't occurred yet this year
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
  }
  
  // Check if age is under 9
  if (age < 9) {
      doneBtn.disabled = true; // Disable the button
      errorMsg.style.display = 'block'; // Show error message
  } else {
      doneBtn.disabled = false; // Enable the button
      errorMsg.style.display = 'none'; // Hide error message
  }
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Simulate form submission
  alert('Form submitted! Thank you, ' + name + '. We will contact you at ' + email + '.');

  // Clear form fields
  document.getElementById('contact-form').reset();
});

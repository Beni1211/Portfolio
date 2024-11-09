document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Vielen Dank für deine Nachricht!");
    this.reset();
});

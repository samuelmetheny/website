(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init({
      publicKey: "Wb19WXrOdOntMLMdX",
    });
})();

window.onload = function() {
    console.log('loaded');
    document.getElementById('contactform').addEventListener('submit', function(event) {
        event.preventDefault();
        // these IDs from the previous steps
        emailjs.sendForm('service_8gspsn6', 'template_zrbbqbo', this)
            .then(() => {
                console.log('SUCCESS!');
                document.getElementById('contactform').reset();
                grecaptcha.reset();
            }, (error) => {
                console.log('FAILED...', error);
            });
    });
}
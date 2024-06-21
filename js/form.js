$(document).ready(function() {
    $('#ajax-contact').submit(function(event) {
        event.preventDefault(); // Prevent the form from submitting

        // Show loading indicator (optional)
        $('#form-messages').text('Loading...');

        // Collect form data
        var formData = {
            service_id: 'service_bxli9p8', // ganti dengan service ID Anda
            template_id: 'template_vwpvc6c', // ganti dengan template ID Anda
            user_id: 'ho1KdGNVC068GPI4C', // ganti dengan user ID Anda
            template_params: {
                'from_name': $('#name').val(),
                'from_email': $('#email').val(),
                'message': $('#message').val(),
                'to_name': 'Admin'
            }
        };

        // Use EmailJS to send email
        $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
            type: 'POST',
            data: JSON.stringify(formData),
            contentType: 'application/json'
        }).done(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            $('#form-messages').text('Pesan berhasil dikirim!'); // Show success message
            $('#ajax-contact')[0].reset(); // Reset the form
        }).fail(function(error) {
            console.error('FAILED...', error);
            $('#form-messages').text('Gagal mengirim pesan. Silakan coba lagi.'); // Show error message
        });
    });
});
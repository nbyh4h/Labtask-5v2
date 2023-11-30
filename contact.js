
        $(document).ready(function() {
    $('#whatsappButton').click(function() {
        var phoneNumber = "0172297384";
        var message = "Hello, I am contacting you regarding...";
        window.open('https://api.whatsapp.com/send?phone=' + phoneNumber + '&text=' + encodeURIComponent(message));
    });

    $('#emailButton').click(function() {
        var email = "info@example.com";
        window.location.href = 'mailto:' + email;
    });

    $('#callButton').click(function() {
        var phoneNumber = "123-456-7890";
        window.open('tel:' + phoneNumber);
    });
});

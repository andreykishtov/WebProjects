$(document).ready(function() {

    $('#submit').on('click', function() {
        $('#submit').preventdefault();
        var data = {
            first_name: $('#first_name').val(),
            last_name: $('#last_name').val()
        };
        console.log(data);

        $.ajax({
            url: '/users/user_form',
            method: 'POST',
            dataType: 'json',
            cache: 'false',
            data: data,
            success: function(response) {
                console.log(response);
                //alert(response.login);
                if (response.login == "success")
                    window.location.href = response.redirect;
            }
        });
        //return false;
    });
});
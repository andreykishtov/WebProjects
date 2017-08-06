$('form.ajax').on('submit', function() {
    var type = $(this).attr('method');
    var url = $(this).attr('action');
    var data = {};
    $(this).find('[name]').each(function(index, value) {
        data[$(this).attr('name')] = $(this).val();
    })
    $.ajax({
        url: url,
        type: type,
        data: data,
        success: function(response) {
            console.log(response);
            alert(response.login);
            if (response.login == "succsesfull")
                window.location.href = response.redir;
        }
    });
    return false;
});
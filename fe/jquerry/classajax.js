$(document).ready(function() {
    $("button").on("click", function() {
        //http://wpwith.us/manifest.json
        $.ajax({
            type: "GET",
            url: "http://wpwith.us/manifest.json",
            dataType: "json",
            cache: false,
            data: {
                user: $("#user").val(),
                password: $("#password").val()
            },
            success: function(data) {
                {
                    if (data.error != "ok") {
                        $("message").html("error<br>" + data.msg);
                    } else {
                        $("message").html("ok<br>" + data.msg);
                    }
                }
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                alert(textStatus + "\n" + XMLHttpRequest.responseText);
            }
        });
    });
});
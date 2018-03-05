$(document).ready(function() {

    function csrfSafeMethod(method) {
        // these HTTP methods do not require CSRF protection
        return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
    }
    $.ajaxSetup({
        beforeSend: function(xhr, settings) {
            if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
                xhr.setRequestHeader("X-CSRFToken", $('meta[name=csrf]').attr("content"));
            }
        }
    });


    $('.ajaxlogin').each(function(e) {
        $(this).load($(this).attr('data-url'));
        console.log($(this).load($(this).attr('data-url')));
    });

    $(document).on('submit', '.ajaxform', function(e) { // надо перехватывать клик или нет
        $.ajax({url: $(this).data('url'),
            method: 'POST',
            data: $(this).serialize()
        }).done(function(data, status, response) {
                console.log(data, status, response);
                if (data == 'ok') {
                    $('button.close')[0].click();
                    location.reload();
                    // как сменить текущего пользователя на user
                } else {
                    alert("ошибка");
                }
            });
        return false;
    });

});



$(function() {
    function getIssuer() {
        return "{{ config.serviceUri }}"
    }

    function update(id, name) {
        $.ajax({
            url: getIssuer() + "/domain/" + name,
            dataType: 'json',
            crossDomain: true,
            success: function (domain) {

                var bindings = {}
                bindings['domain'] = domain;
                rivets.bind($('#' + id), bindings);
                $('#' + id).show()
                $(".clickable-row").click(function () {
                    window.location = $(this).data("href");
                  });
            }
        });
    }

    update("shared","phantauth.cf")
    update("phantauth","{{ config.domain }}")

    $("#editor").submit(onSubmit);
    $("#submit").click(onSubmit);

    function onSubmit(event) {
        event.preventDefault();
        $("#subdomain").val($("#tenant").val());
        $("#address").val('"' + $("#value").val() +'"');
        $("#freedns").submit();
        return false;
    }

});
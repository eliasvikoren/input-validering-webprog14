function validerOgLagreKunde(){
    const navnOk = validerNavn($('#navn').val());
    const adresseOk = validerAdresse($('#adresse').val());

    if(navnOk && adresseOk) {
        lagreKunde();
    }
}

function lagreKunde() {
    const kunde = {
        navn : $("#navn").val(),
        adresse : $("#adresse").val(),
    };
    $.post( "/lagreKunde", kunde, function() {
           window.location.href = '/';
    })
    .fail(function(jqXHR) {
        const json = $.parseJSON(jqXHR.responseText);
        $("#feil").html(json.message);
    });
}


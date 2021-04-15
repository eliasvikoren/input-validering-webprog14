function validerNavn(navn) {
    const regexp = /^[a-zA-ZæøåÆØÅ. \-]{2,30}$/;
    const ok = regexp.test(navn);

    if(!ok){
        $('#feilNavn').html("Navnet må bestå av 2 til 30 bokstaver");
        return false;
    } else {
        $('#feilNavn').html("");
        return true;
    }
}

function validerAdresse(adresse) {
    const regexp = /^[0-9a-zA-ZæøåÆØÅ. \-]{2,50}$/;
    const ok = regexp.test(adresse);

    if(!ok){
        $('#feilAdresse').html("Adressen må bestå av 2 til 50 bokstaver");
        return false;
    } else {
        $('#feilAdresse').html("");
        return true;
    }
}
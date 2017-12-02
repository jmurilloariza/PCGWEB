    
/**
* metodo para crear la cookie 
**/
function setCookie(cname, cvalue, time) {
    var d = new Date();
    d.setTime(d.getTime() + (time* 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}


/**
* metodo para obtener la cookie de acuerdo al parametro name
**/
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

/**
* metodo para elimiar la cookie deacuerdo al name (falta corregirlo)
**/
function deleteCookie(name){
    document.cookie = key + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}


/**
* metodo para verificar si esta creada la cookie
**/
function checkCookie(token) {
    var user = getCookie(token);
    if (user != "") {
        return true
    } else {
        return false
    }
};

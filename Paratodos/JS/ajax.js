/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function miAjax(url, parametros, collback) {
    $.ajax({
        beforeSend: function () { /*httpR es la variable global donde guardamos la conexion*/
            $(document).ajaxStop();
            $(document).ajaxStart();
        },
        //timeout: 8000,
        url: url,
        data: parametros,
        type: 'post',
        cache: false,
        contentType: 'application/x-www-form-urlencoded; charset=utf-8;',
        beforeSend: function () {

        },
        success: function (response) {
            collback(response);
        }
    });
}
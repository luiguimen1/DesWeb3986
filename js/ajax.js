/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function miAjax(url,parametros,collback) {
    $.ajax({
        url: url,
        data: parametros,
        type: 'post',
        cache: false,
        beforeSend: function () {

        },
        success: function (response) {
            collback(response);
        }
    });
}
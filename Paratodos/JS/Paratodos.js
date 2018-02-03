/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var loading = 'Procesando.... <img src="Paratodos/loading.gif" alt=""/>';

jQuery.fn.reset = function () {
    $(this).each(function () {
        this.reset();
    });
};

function cTI(pv) {
    return parseInt(pv);
}

function alerta(pTitulo, pMensaje) {
    $("#dialog").attr("title", pTitulo);
    $("#dialog").html(pMensaje);
    $("#dialog").dialog();
}

function alertError(pTitulo, pMensaje) {
    $("#alertaError div").html(pMensaje);
    pMensaje = $("#alertaError").html();
    alerta(pTitulo, pMensaje);
}

function alertInfo(pTitulo, pMensaje) {
    $("#alertaInfo div").html(pMensaje);
    pMensaje = $("#alertaInfo").html();
    alerta(pTitulo, pMensaje);
}

function alertPosi(pTitulo, pMensaje) {
    $("#alertaPosi div").html(pMensaje);
    pMensaje = $("#alertaPosi").html();
    alerta(pTitulo, pMensaje);
}


function confirmacion(pMensaje,collbackAceptar,collbackCancelar) {
    $("#dialog-confirm p").html(pMensaje);
    
    $("#dialog-confirm").dialog({
        resizable: false,
        height: "auto",
        width: 400,
        modal: true,
        buttons: {
            Confirmar: function () {
                $(this).dialog("close");
                collbackAceptar();
            },
            Cancel: function () {
                $(this).dialog("close");
                collbackCancelar();
            }
        }
    });
}

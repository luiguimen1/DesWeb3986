/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var loading = 'Procesando.... <img src="Paratodos/loading.gif" alt=""/>';
function cTI(pv) {
    return parseInt(pv);
}

function alerta(pTitulo,pMensaje){
    $("#dialog").attr("title",pTitulo);
    $("#dialog").html(pMensaje);
    $("#dialog").dialog();
}

function alertError(pTitulo,pMensaje){
    $("#alertaError div").html(pMensaje);
    pMensaje = $("#alertaError").html();
    alerta(pTitulo,pMensaje);
}

function alertInfo(pTitulo,pMensaje){
    $("#alertaInfo div").html(pMensaje);
    pMensaje = $("#alertaError").html();
    alerta(pTitulo,pMensaje);
}

function alertPosi(pTitulo,pMensaje){
    $("#alertaPosi div").html(pMensaje);
    pMensaje = $("#alertaError").html();
    alerta(pTitulo,pMensaje);
}


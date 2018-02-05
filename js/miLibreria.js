/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* global loading */

/**
 * Metodo que permite capturar dos variable y lo muestra por pantalla;
 * @return {undefined} No retorna valor
 */
$(document).ready(function () {

    function opera(pv) {
        var n1 = cTI(document.getElementById("n1").value);
        var n2 = cTI(document.getElementById("n2").value);
        switch (pv) {
            case "suma":
                $("#rest").val((n1 + n2));
                break;
            case "resta":
                $("#rest").val((n1 - n2));
                break;
            case "divi":
                $("#rest").val((n1 / n2));
                break;
            case "multi":
                document.getElementById("rest").value = (n1 * n2);
                break;
        }

    }
    /*
     $("#suma").click(function () {
     suma();
     });
     */

    $(".opera").click(function () {
        opera($(this).attr("id"));
    });

    function creartabla(n1, n2) {
        var tabla = "La tabla es la del " + n1 + "<br>";
        for (var i = 1; i <= n2; i++) {
            tabla += n1 + "*" + i + "=" + (n1 + i) + "<br>";
        }
        return tabla;
    }

    $("#tabla").dblclick(function () {
        var n1 = cTI($("#n3").val());
        var n2 = cTI(document.getElementById("n4").value);
        $("#Respuesta2").html(creartabla(n1, n2));
        ;
    });
});
$(document).ready(function () {
    $("#reducir").click(function () {
        $("#miCuadro").css("width", "50px").css("height", "50px");
    });
    $("#ampliar").click(function () {
        $("#miCuadro").css("width", "150px").css("height", "150px");
    });
    $("#rojo").click(function () {
        $("#miCuadro").css("background", "red");
    });
    $("#azul").click(function () {
        $("#miCuadro").css("background", "blue");
    });
    $("#restaurar").click(function () {
        $("#miCuadro").css("background", "yellow").css("width", "100px").css("height", "100px");
    });
    $("#mostar").click(function () {
        $("#miCuadro").fadeIn("show");
    });
    $("#ocultar").click(function () {
        $("#miCuadro").fadeOut("show");
    });
});


$(document).ready(function () {
    $("#miCuadro2").html('<img src="js/1.jpg" alt=""/>');
    var contadora = 1;
    var control;
    function cambio() {
        $("#miCuadro2").html('<img src="js/' + contadora + '.jpg" alt="" style="display:none"/>');
        $("#miCuadro2 img").fadeIn(2000);
        contadora++;
        if (contadora == 4) {
            contadora = 1;
        }
        control = setTimeout(function () {
            cambio();
        }, 3500);
    }

    $("#Iniciar").click(function () {
        cambio();
    });

    $("#Parar").click(function () {
        clearTimeout(control);
    });
});


$(document).ready(function () {/*
 $(".numero button").click(function () {
 var ini = $("#ventana").val();
 ini = ini + $(this).html();
 $("#ventana").val(ini);
 });
 */
    $(".btnNun").click(function () {
        var ini = $("#ventana").val();
        ini = ini + $(this).html();
        $("#ventana").val(ini);
    });
    var NumGloa;
    var tipoOp;
    $("#misuma").click(function () {
        var ini = $("#ventana").val();
        if (ini == "") {
            alert("se requiere un dato");
        } else {
            NumGloa = ini;
            $("#ventana").val("");
            tipoOp = "+";
        }
    });

    $("#miRes").click(function () {
        var ini = $("#ventana").val();
        if (ini == "") {
            alert("se requiere un dato");
        } else {
            $("#ventana").val(cTI(NumGloa) + cTI(ini));
        }
    });
});

$(document).ready(function () {
    $("#mercurio").click(function () {
        var url = "mer.php";
        var parametros = "a=2";
        var collback = function (data) {
            $("#contec").html(data);
        };
        miAjax(url, parametros, collback);
    });


    $("#tierra").click(function () {
        miAjax("mision.jsp", "a=3", function (data) {
            $("#contec").html(data);
            $("#forTabla").validate({
                rules: {
                    numero: {
                        required: true,
                        number: true
                    },
                    limite: {
                        required: true,
                        number: true
                    },
                    nombre: {
                        required: true,
                        rangelength: [3, 70]
                    },
                    correo: {
                        required: true,
                        email: true
                    },
                    correo1: {
                        equalTo: "#correo"
                    },
                    edad: {
                        required: true,
                        number: true,
                        digits: true
                    }
                },
                messages: {
                    limite: {
                        required: "Uppps, debe ingresar el numero",
                        number: "Pilasssss, debe ser un numero"
                    }
                },
                submitHandler: function () {
                    $("#mitabla").html(loading);
                    //alertError("Procesando..","<p>Los datos estan siendo procesados por el servidor<br>Por favor espere... "+loading+"</p>");
                    var collbackAceptar = function () {
                        var url = "CrearPersona.jsp";
                        var parametros = $("#forTabla").serialize();
                        var collback = function (data) {
                            data = $.parseJSON(data);
                            if (data.success == true) {
                                alertPosi("Informe: ", "El usuario fue registrado");
                                $("#forTabla").reset();
                            } else {
                                alertError("Error #21", "El usuario no fue registrado");
                            }
                            $("#mitabla").html("");
                        };
                        miAjax(url, parametros, collback);
                    };
                    var collbackCancelar = function () {
                        alertError("Informando", "Usted cancelo el procedimiento");
                        $("#mitabla").html("");
                    };
                    confirmacion("Confirme la creación del Usuario", collbackAceptar, collbackCancelar);
                }
            });
        });
    });
});




$(document).ready(function () {
    $("#clienteBus").click(function () {
        var url = "ListaCliente.jsp";
        var parametros = "a=false";
        var collback = function (datos) {
            $("#contec").html(datos);

            $("#forBusca").validate({
                rules: {
                    nombre: {
                        EsTexto: true,
                        minlength: 3
                    },
                    cc: {
                        digits: true,
                        number: true,
                        minlength: 5
                    }
                },
                messages: {
                    EsTexto: "No puede llevar numeros o digitos"
                },
                submitHandler: function () {
                    if ($("#cc").val() == "" && $("#nombre").val() == "") {
                        alertError("Error #22", "Debe Ingresar al menos un criterio de Busqueda.");
                    } else {
                        $("#tabData").html("<tr><td colspan='9'>" + loading + "</td><tr>");
                        var url = "FiltroCliente.jsp";
                        var parametros = $("#forBusca").serialize();
                        var collback = function (datos) {
                            if (datos == 0) {
                                alertInfo("Información del servidor", "<h4>No existen criterios de comparación</h4>")
                                $("#tabData").html("<tr><td colspan='9'></td><tr>");
                            } else {
                                proceso($.parseJSON(datos));
                            }
                        };
                        miAjax(url, parametros, collback);
                    }
                }
            });
        };
        miAjax(url, parametros, collback);
    });
});

function proceso(datos) {
    $("#tabData").html("");
    for (var i = 0; i < datos.length; i++) {
        var tmp = datos[i];
        var tr = $("<tr></tr>");
        tr.append("<td>" + tmp["id"] + "</td>");
        tr.append("<td>" + tmp["nombre"] + "</td>");
        tr.append("<td>" + tmp["estado"] + "</td>");
        tr.append("<td>" + tmp["cc"] + "</td>");
        tr.append("<td>" + tmp["freg"] + "</td>");
        tr.append("<td>" + tmp["correo"] + "</td>");
        tr.append("<td>" + tmp["edad"] + "</td>");
        tr.append('<td scope="col"><button cod="' + tmp["id"] + '" class="modificar btn btn-info">Modificar</button></td>');
        tr.append('<td scope="col"><button cod="' + tmp["id"] + '" class="eliminar btn btn-danger">Eliminar</button></td>');
        $("#tabData").append(tr);
    }
    FunnCEliminar();
    funnModificar();
}

function FunnCEliminar() {
    $(document).ready(function () {
        $(".eliminar").click(function () {
            var idEliminar = $(this).attr("cod");
            var elemto = $(this);
            var collAceptar = function () {
                var url = "eliminarCliente.jsp";
                var parametro = "id=" + idEliminar;
                var collback = function (datos) {
                    datos = $.parseJSON(datos);
                    if (datos.success == true) {
                        alertPosi("Comunicado", "El cliente fue eliminado");
                        elemto.parent().parent().remove();
                    } else {
                        alertError("Error #23", "El cliente no fue eliminado por tiene vinculaciones.")
                    }
                };
                miAjax(url, parametro, collback);
            };
            var collCancelar = function () {

            };
            confirmacion("Esta seguro de eliminar al cliente", collAceptar, collCancelar);
        });
    });
}

function funnModificar() {
    $(document).ready(function () {
        $(".modificar").click(function () {
            var idModificar = $(this).attr("cod");
            miAjax("mision.jsp", "a=3", function (data) {
                var elIdCliente;
                var url = "FiltroCliente.jsp";
                var parametro = "id=" + idModificar;
                var collback = function (datos) {
                    datos = $.parseJSON(datos);
                    datos = datos[0];
                    $("#nombre").val(datos.nombre);
                    $("#cc").val(datos.cc);
                    $("#estado").val(datos.estado);
                    $("#correo").val(datos.correo);
                    $("#correo1").val(datos.correo);
                    $("#edad").val(datos.edad);
                    $("#send").html("Modificar");
                    elIdCliente = datos.id;
                };
                miAjax(url, parametro, collback);


                $("#contec").html(data);
                $("#contec legend").html("Formulario de Actualizacion de datos del cliente");
                $("#forTabla").validate({
                    rules: {
                        numero: {
                            required: true,
                            number: true
                        },
                        limite: {
                            required: true,
                            number: true
                        },
                        nombre: {
                            required: true,
                            rangelength: [3, 70]
                        },
                        correo: {
                            required: true,
                            email: true
                        },
                        correo1: {
                            equalTo: "#correo"
                        },
                        edad: {
                            required: true,
                            number: true,
                            digits: true
                        }
                    },
                    messages: {
                        limite: {
                            required: "Uppps, debe ingresar el numero",
                            number: "Pilasssss, debe ser un numero"
                        }
                    },
                    submitHandler: function () {
                        var collbackAceptar = function () {
                            var url = "modificarCliente.jsp";
                            var parametro = $("#forTabla").serialize() + "&id=" + elIdCliente;
                            var collback = function (datos) {
                                alert(datos);
                                datos = $.parseJSON(datos);
                                if (datos.success == true) {
                                    alertPosi("Comunicado", "El cliente fue actualizado");
                                } else {
                                    alertError("Error #25", "El cliente no fue actualizado<br>Verifique existencia del cliente.")
                                }
                            };
                            miAjax(url, parametro, collback);
                        };
                        var collbackCancelar = function () {

                        };
                        confirmacion("Esta seguro de Modificar los datos del cliente", collbackAceptar, collbackCancelar);
                    }
                });
            });
        });
    });
}
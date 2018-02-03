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
                        number:true,
                        digits:true
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
                            console.log(data.success == true);
                            //console.log(data.sql);
                            if (data.success == true) {
                                alertPosi("Informe: ", "El usuario fue registrado");
                            } else {
                                alertError("Error #21", "El usuario no fue registrado");
                            }
                            $("#mitabla").html();
                        };
                        miAjax(url, parametros, collback);
                    };

                    var collbackCancelar = function () {
                        alertError("Informando", "Usted cancelo el procedimiento");
                    };
                    confirmacion("Confirme la creación del Usuario", collbackAceptar, collbackCancelar);



                }
            });
        });
    });
});


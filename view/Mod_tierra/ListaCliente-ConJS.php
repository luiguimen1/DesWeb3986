<?php
require '../../Class/MySQL/datos.php';
require '../../Class/MySQL/MySQLi.php';
require '../../Class/DAO/PersonaDAO.php';
require '../../Class/VO/PersonaVO.php';
if ($_POST) {
    ?>
    <section>
        <div class="col-12 row">
            <form id="forBusca" name="forBusca">
                <fieldset>
                    <legend>Opciones de busqueda</legend>
                    <div class="form-group">
                        <label for="nombre">por Nombre</label>
                        <input type="text" class="form-control" id="nombre" name="nombre" placeholder="Ingrese Nombre">
                    </div>
                    <div class="form-group">
                        <label for="cc">Por Cédula</label>
                        <input type="text" class="form-control" id="cc" name="cc" placeholder="Ingrese cc">
                    </div>
                </fieldset>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </section>
    <section>
        <div class="row col-lg-12">
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Estado</th>
                        <th scope="col">CC</th>
                        <th scope="col">Fe. Registro</th>
                        <th scope="col">Correo</th>
                        <th scope="col">Edad</th>
                        <th scope="col">Modificar</th>
                        <th scope="col">Eliminar</th>
                    </tr>
                </thead>
                <tbody id="tabData">
                </tbody>
            </table>
        </div>
    </section>
    <script>
        $(document).ready(function () {
            var datos = <?= json_encode($data); ?>;
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
                tr.append('<td scope="col"><button class="modificar btn btn-info">Modificar</button></td>');
                tr.append('<td scope="col"><button class="eliminar btn btn-danger">Eliminar</button></td>');
                $("#tabData").append(tr);
            }
        });
    </script>

    <?php
} else {
    header("lcoation:./");
}
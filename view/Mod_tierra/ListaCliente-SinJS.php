<?php
require '../../Class/MySQL/datos.php';
require '../../Class/MySQL/MySQLi.php';
require '../../Class/DAO/PersonaDAO.php';
require '../../Class/VO/PersonaVO.php';
if ($_POST) {
    $PersonaDAO = new PersonaDAO();
    $data = $PersonaDAO->todos();
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
                <tbody>
                    <?php for($i=0;$i<sizeof($data);$i++ ) {
                    $tmp = $data[$i];    
                        ?>
                    <tr>
                        <td scope="col"><?= $tmp["id"]?></td>
                        <td scope="col"><?= $tmp["nombre"]?></td>
                        <td scope="col"><?= $tmp["estado"]?></td>
                        <td scope="col"><?= $tmp["cc"]?></td>
                        <td scope="col"><?= $tmp["freg"]?></td>
                        <td scope="col"><?= $tmp["correo"]?></td>
                        <td scope="col"><?= $tmp["edad"]?></td>
                        
                        <td scope="col"><button class="modificar btn btn-info">Modificar</button></td>
                        <td scope="col"><button class="eliminar btn btn-danger">Eliminar</button></td>
                    </tr>
                    
                    <?php } ?>
                </tbody>
            </table>
        </div>
    </section>
    <?php

} else {
    header("lcoation:./");
}
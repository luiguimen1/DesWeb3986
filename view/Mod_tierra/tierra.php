<?php
if ($_POST) {
    ?>

    <fieldset>
        <legend style="color:#000;">Formulario de registro</legend>
        <form id="forTabla" id="forTabla">
            <div class="col-12 row">
                <div class="form-group col-lg-5">
                    <label for="exampleInputEmail1">Ingrese el numero</label>
                    <input type="text" class="form-control" id="numero" name="numero" aria-describedby="numero" placeholder="Ingrese un numero">
                    <small id="numero" class="form-text text-muted">Ingrese un numero para generar la tabla</small>
                </div>

                <div class="form-group col-lg-5">
                    <label for="exampleInputEmail1">Ingrese el limite</label>
                    <input type="text" class="form-control" id="limite" name="limite" aria-describedby="limite" placeholder="Ingrese un numero">
                    <small id="limite" class="form-text text-muted">Ingrese un numero</small>
                </div> 
                
                <div class="form-group col-lg-5">
                    <label for="edad">Ingrese la edad</label>
                    <input type="text" class="form-control" id="edad" name="edad" aria-describedby="edad" placeholder="Ingrese un numero">
                    <small id="edad" class="form-text text-muted">Ingrese la edad</small>
                </div> 
            </div>


            <label>INgrese el numero limite<input type="text" id="limite" name="limite" value=""/></label><br>
            <label>INgrese Nombre<input type="text" id="nombre" name="nombre" value=""/></label><br>
            <label>INgrese estado<input type="text" id="estado" name="estado" value=""/></label><br>
            <label>INgrese Cedula<input type="text" id="cc" name="cc" value=""/></label><br>
            <label>INgrese Correo<input type="text" id="correo" name="correo" value=""/></label><br>
            <label>INgrese confirme correo<input type="text" id="correo1" name="correo1" value=""/></label><br>
            <button id="send" name="send" type="submit">Generar</button>
        </form>

        <div id="mitabla"></div>


    </fieldset>

    <?php
} else {
    header("location:./");
}
?>
<?php
if ($_POST) {
    ?>
    <div style="width: 100%;">
        <center>
            <h1>Esta es la TIERRA</h1>
        </center>
        <form id="forTabla" id="forTabla">
            <label>INgrese el numero de la tabla <input type="text" id="numero" name="numero" value=""/></label><br>
            <label>INgrese el numero limite<input type="text" id="limite" name="limite" value=""/></label><br>
            <button id="send" name="send" type="submit">Generar</button>
        </form>
    </div>
    <?php
} else {
    header("location:./");
}
?>
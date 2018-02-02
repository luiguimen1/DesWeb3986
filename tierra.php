<?php
if ($_POST) {
    ?>
    <div style="width: 100%;">
        <center>
            <h1>Esta es la TIERRA</h1>
            <img id="laImagen" src="img/descarga.jpg" alt=""/>
        </center>

    </div>
    <?php
} else {
    header("location:./");
}
?>
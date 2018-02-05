<?php
require '../../Class/MySQL/datos.php';
require '../../Class/MySQL/MySQLi.php';
require '../../Class/DAO/PersonaDAO.php';
require '../../Class/VO/PersonaVO.php';
if ($_POST) {
    $PersonaDAO = new PersonaDAO();
    $PersonaDAO->eliminar($_POST);
} else {
    header("location:./");
}

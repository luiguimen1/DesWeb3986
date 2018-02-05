<?php
require '../../Class/MySQL/datos.php';
require '../../Class/MySQL/MySQLi.php';
require '../../Class/DAO/PersonaDAO.php';
require '../../Class/VO/PersonaVO.php';
if ($_POST) {
    $PersonaDAO = new PersonaDAO();
    $data = $PersonaDAO->todos();
    echo json_encode($data);
} else {
    header("location:./");
}

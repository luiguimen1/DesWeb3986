<?php

if ($_POST) {
    ini_set('display_errors', 0);
    require '../../Class/MySQL/datos.php';
    require '../../Class/MySQL/MySQLi.php';
    require '../../Class/DAO/PersonaDAO.php';
    require '../../Class/VO/PersonaVO.php';
    $PersonaDAO = new PersonaDAO();
    $data = $PersonaDAO->filtro($_POST);
    echo json_encode($data);
} else {
    header("location:./");
}
    
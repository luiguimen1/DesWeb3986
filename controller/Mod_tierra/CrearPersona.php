<?php

if ($_POST) {
    ini_set('error_reporting', E_ALL);
    require '../../Class/MySQL/datos.php';
    require '../../Class/MySQL/MySQLi.php';
    require '../../Class/VO/PersonaVO.php';
    require '../../Class/DAO/PersonaDAO.php';
    
    
    $PersonaDAO = new PersonaDAO();
    echo $PersonaDAO->crear($_POST);
} else {
    header("location:./");
}

<?php

if ($_POST) {
    require '../../Class/MySQL/datos.php';
    require '../../Class/MySQL/MySQLi.php';
    require '../../Class/VO/PersonaVO.php';
    require '../../Class/DAO/PersonaDAO.php';
    
    
    $PersonaDAO = new PersonaDAO();
    echo $PersonaDAO->crear($_POST);
} else {
    header("location:./");
}

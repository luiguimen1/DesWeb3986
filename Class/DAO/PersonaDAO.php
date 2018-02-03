<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of PersonaDAO
 *
 * @author asus25
 */
class PersonaDAO {

    //put your code here
    function crear($array) {
        $PersonaVO = new PersonaVO();
        $PersonaVO->setNombre($array["nombre"]);
        $PersonaVO->setCc($array["cc"]);
        $PersonaVO->setCorreo($array["correo"]);
        $PersonaVO->setEstado($array["estado"]);
        $PersonaVO->setEdad($array["edad"]);
        $sql = "insert into cliente (nombre,estado,cc,correo,edad) values(?,?,?,?,?);";
        $BD = new MySQL();
        
        $comm = $BD->getMysqli();
        $stmp=$comm->prepare($sql);
        $no=$PersonaVO->getNombre();
        $es=$PersonaVO->getEstado();
        $cc=$PersonaVO->getCc();
        $co=$PersonaVO->getCorreo();
        $ed=$PersonaVO->getEdad();
        $stmp->bind_param('ssssi',$no,$es,$cc,$co,$ed);
        $res = array();
        $res["success"] = $stmp->execute();
        $stmp->close();
        $comm->close();
        //$res["sql"] = $sql;
        echo json_encode($res);
    }

}

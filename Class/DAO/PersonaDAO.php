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
        $stmp = $comm->prepare($sql);
        $no = $PersonaVO->getNombre();
        $es = $PersonaVO->getEstado();
        $cc = $PersonaVO->getCc();
        $co = $PersonaVO->getCorreo();
        $ed = $PersonaVO->getEdad();
        $stmp->bind_param('ssssi', $no, $es, $cc, $co, $ed);
        $res = array();
        $res["success"] = $stmp->execute();
        $stmp->close();
        $comm->close();
        //$res["sql"] = $sql;
        echo json_encode($res);
    }

    function todos() {
        $sql = "select * from cliente;";
        $bd = new MySQL();
        return $bd->query($sql);
    }

    function filtro($array) {
        $PersonaVO = new PersonaVO();
        $PersonaVO->setCc($array["cc"]);
        $PersonaVO->setNombre($array["nombre"]);
        $PersonaVO->setId($array["id"]);
        $sql = "select * from cliente where 1=1 ";
        if ($PersonaVO->getCc() != "") {
            $sql .= " and cc = " . $PersonaVO->getCc() . " ";
        }
        if ($PersonaVO->getNombre() != "") {
            $sql .= " and nombre like '%" . $PersonaVO->getNombre() . "%' ";
        }
        if ($PersonaVO->getId() != "") {
            $sql .= " and id = " . $PersonaVO->getId() . " ";
        }
        $sql .= ";";
        $bd = new MySQL();
        return $bd->query($sql);
    }

    function eliminar($array) {
        $PersonaVO = new PersonaVO();
        $PersonaVO->setId($array["id"]);
        $bd = new MySQL();
        $comm = $bd->getMysqli();

        $sql = "delete from cliente where id = ?;";
        $stmp = $comm->prepare($sql);
        $id = $PersonaVO->getId();
        $stmp->bind_param("i", $id);
        
        $res = array();
        $res["success"] = $stmp->execute();
        
        $stmp->close();
        $comm->close();
        
        echo json_encode($res);
    }

}

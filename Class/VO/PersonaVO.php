<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of PersonaVO
 *
 * @author asus25
 */
class PersonaVO {

    //put your code here
    private $id;
    private $nombre;
    private $cc;
    private $estado;
    private $freg;
    private $correo;
    private $edad;

    function getEdad() {
        return $this->edad;
    }

    function setEdad($edad) {
        $this->edad = $edad;
    }

    function getId() {
        return $this->id;
    }

    function setId($id) {
        $this->id = $id;
    }

    function getNombre() {
        return $this->nombre;
    }

    function getCc() {
        return $this->cc;
    }

    function getEstado() {
        return $this->estado;
    }

    function getFreg() {
        return $this->freg;
    }

    function getCorreo() {
        return $this->correo;
    }

    function setNombre($nombre) {
        $this->nombre = $nombre;
    }

    function setCc($cc) {
        $this->cc = $cc;
    }

    function setEstado($estado) {
        $this->estado = $estado;
    }

    function setFreg($freg) {
        $this->freg = $freg;
    }

    function setCorreo($correo) {
        $this->correo = $correo;
    }

}

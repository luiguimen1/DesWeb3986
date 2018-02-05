<?php

class Datos {

    private $hostname = 'localhost';
    private $usuario = 'web';
    private $clave = 'web';
    private $db = 'web3986';

    function getPre() {
        return $this->pre;
    }

    public function Datos() {
        
    }

    /**
     * Metodo que retorna el nombre del HOst
     * @return type variable de tipo String
     */
    public function get_hostname() {
        return $this->hostname;
    }

    public function get_usuario() {
        return $this->usuario;
    }

    public function get_clave() {
        return $this->clave;
    }

    public function get_DB() {
        return $this->db;
    }

}

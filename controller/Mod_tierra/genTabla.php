<?php
if($_POST){
    echo "Esto es lo que dice el servidor \n";
    $n = $_POST["numero"];
    $l = $_POST["limite"];
    $texto1 = "La tabla a generar es ".$n." de los impares<br>";
    $texto2 = "La tabla a generar es ".$n." de los pares<br>";
    for($i=1;$i<=$l;$i++){
        if(($n*$i)%2==0){
            $texto2.=$n." * ".$i." = ".($n*$i)."<br>";
        }else{
            $texto1.=$n." * ".$i." = ".($n*$i)."<br>";
        }
    }
    echo $texto1."<br>".$texto2;   
}else{
    header("location:./");    
}
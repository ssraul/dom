<?php

//$partit = filter_input(INPUT_GET, "partit", FILTER_SANITIZE_STRING);
//if(!$partit){ throw new Exception ("Error"); }
//$partit = filter_var($partit,FILTER_VALIDATE_REGEXP, 
//        array("options"=>array("regexp"=>"/^[ABCD]$/u")));
//if(!$partit){ throw new Exception ("Error"); }


if(empty($_REQUEST["partit"])){
    echo json_encode("Error. Paràmetre incorrecte.");
}else{
    $resultat = 0;
    switch ($_REQUEST["partit"]){
        case "A": 
            $resultat = 25;
            break;
        case "B": 
            $resultat = 11;
            break;
        case "C": 
            $resultat = 7;
            break;
        case "D": 
            $resultat = 4;
            break;
    }
    sleep(4);
    echo json_encode($resultat);
}

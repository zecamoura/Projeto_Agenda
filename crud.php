
<?php
    const SERVIDOR ="localhost:3306";
    const BANCO ="agenda";
    const USUARIO ="root";
    const SENHA ="root";
    
    if(! isset ($_POST ['acao'] )){
        print json_encode(0);
        return;
    }
    
    switch($_POST['acao']){
        case 'buscar_contato' :
            $contato = new stdClass();
            $contato = json_decode( $_POST ['contato'] );
            try{
                $sql = "select * from contato where id = ?";
                $conexao = new PDO( "mysql:host=" .SERVIDOR . ";dbname=" . BANCO, USUARIO, SENHA );
                $pre = $conexao->prepare(  $sql);
                $pre->execute(array (
                    $contato->id
                ));
            }    
    }
    
    
    ?>
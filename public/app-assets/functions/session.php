<?php  
    
    // ini_set("display_errors", 1);
    // ini_set("track_errors", 1);
    // ini_set("html_errors", 1);
    // error_reporting(E_ALL); 

    setlocale(LC_TIME, 'pt_BR', 'pt_BR.utf-8', 'pt_BR.utf-8', 'portuguese');
    date_default_timezone_set('America/Sao_Paulo'); 
    
    /* *********************** */
    /* FUNCTION conectar_pgsql */
    /* Função que realiza conexão com o banco de dados
    /* Banco único: Whatsapp
    /* *********************** */ 
    function conectar_pgsql(){
        $host = "168.0.135.18";
        $port = "5432";
        $dbname = "Whatsapp";
        $user = "montenegropostgre";
        $password = "5uGkmzB1#pF2Vv@";
        $pg_options = "--client_encoding=UTF8";

        $dsn = "pgsql:host=$host;port=$port;dbname=$dbname;user=$user;password=$password";
     
        try{
            // create a PostgreSQL database connection
            $conn = new PDO($dsn);
            
            return $conn;
        }catch (PDOException $e){
         // report error message
         echo $e->getMessage();
        }
    } 

    function check_contatos($token, $id_licenca){ 

        $curl = curl_init();

        curl_setopt_array($curl, array(
          CURLOPT_URL => "http://localhost/api/operations/contacts",
          CURLOPT_RETURNTRANSFER => true,
          CURLOPT_ENCODING => "",
          CURLOPT_MAXREDIRS => 10,
          CURLOPT_TIMEOUT => 30,
          CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
          CURLOPT_CUSTOMREQUEST => "GET",
          CURLOPT_HTTPHEADER => array(
            "authorization: Bearer ".$token,
            "cache-control: no-cache",
            "license_id: 11",
            "postman-token: 604ee758-7069-166d-68ab-ff600fd95572"
          ),
        ));

        $response = curl_exec($curl);
        $err = curl_error($curl);

        curl_close($curl);

        if ($err) {
            echo "cURL Error #:" . $err;
        } else {
            return json_decode($response);
        }
    }

    function set_dados_message_by_clerk(){
        $id_licenca = $_POST['id_licenca'];
        $id_clerk = $_POST['id_clerk'];
        $token = $_POST['token']; 
        if ($id_clerk == null) {
            $query = "SELECT id, contact_id, created_at, finished, expires_in FROM sessions WHERE license_id = '$id_licenca' GROUP BY id, contact_id, created_at, finished, expires_in ORDER BY created_at DESC";
        }else{
            $query = "SELECT id, contact_id, created_at, finished, expires_in FROM sessions WHERE license_id = '$id_licenca' AND clerk_id = '$id_clerk' GROUP BY id, contact_id, created_at, finished, expires_in ORDER BY created_at DESC";
        }

        $contatos = check_contatos($token, $id_licenca);

        try{
            $con = conectar_pgsql();

            $sql = $con->prepare($query);
            $sql->execute();
            $dados2 = $sql->fetchAll(PDO::FETCH_OBJ); 

            $retorno = '';
            for ($y=0; $y < count($dados2); $y++) { 
                $session_id = $dados2[$y]->id;
                $stmt = $con->prepare("SELECT * FROM messages WHERE session_id = '$session_id' ORDER BY created_at DESC LIMIT 1");
                $stmt->execute();
                if($stmt->rowcount() != 0){
                    $dados = $stmt->fetchAll(PDO::FETCH_OBJ); 
                    $contacts = $contatos->data;  

                    for ($i=0; $i < count($dados); $i++) {  
                        for ($x=0; $x < count($contacts); $x++) {  
                            if ($dados[$i]->contact_id == $contacts[$x]->Jid) {
                                $nome_contato = $contacts[$x]->Name;  
                            }else{
                                $name = explode("@", $dados[$i]->contact_id);
                                $nome_contato = $name[0];
                            }

                            $number = explode("@", $dados[$i]->contact_id);
                            $number_contato = $number[0];
                        }

                        if ($dados[$i]->sent_received == '2') {
                            $validacao_mensagem = '<div class=""><i class="fas fa-bookmark text-muted"></i><span class="font-italic">novo</span></div>';
                        }else{
                            $validacao_mensagem = '';
                        }

                        if (strpos($dados[$i]->message, "|::|")) {
                            $message = explode("|::|", $dados[$i]->message);

                            $tipo_arquivo = explode(".", $message[0]);
                            if ($tipo_arquivo[3] == 'png' || $tipo_arquivo[3] == 'jpg' || $tipo_arquivo[3] == 'jpeg') {
                                $arquivo = "<i class='fa fa-camera'></i>";
                            }else{
                                $arquivo = "<i class='fa fa-file'></i>";
                            }
                            $mensagem = $arquivo.' '.substr($message[1], 0, 7);
                        }else{
                            $mensagem = substr($dados[$i]->message, 0, 15);
                        }
 
                        if ($dados2[$y]->finished == 'true' || $dados2[$y]->finished == '1') {
                            $parametrizacao_cor = 'color: #b1b1b1';
                        }else{
                            $parametrizacao_cor = '';
                        }

                        $contador = $i+1;
                        $retorno .= '<li class="contato list-group-item" contato="'.$contador.'" onclick="exibe_div_conversa(\''.$dados[$i]->contact_id.'\', \''.$id_licenca.'\', \''.$id_clerk.'\', \''.$token.'\', \''.$session_id.'\', \''.$nome_contato.'\', \''.$number_contato.'\')"><div class="row"><div class="col-sm-2 px-3 d-flex align-items-center justify-content-center border-right"><img src="../app-assets/assets/img/whatsapp-logo.png" alt="Cliente" class="img-fluid rounded-circle img-contato"></div><div class="col-sm-2 p-0 d-flex align-items-center justify-content-center"><img src="../app-assets/assets/img/client.jpg" alt="Cliente" class="img-fluid rounded-circle img-contato"></div><div class="col-sm-8" id="color__dados__contato" style="'.$parametrizacao_cor.'"><div class="d-flex"><span class="font-weight-bold">'.$nome_contato.'</span><span class="ml-auto">'.date("H:i", strtotime($dados[$i]->created_at)).'</span></div> '.$validacao_mensagem.' <div class="resumo-mensagem text-truncate"> '.$mensagem.'...</div></div></div></li>';
                    }

                }else{
                    return '2';
                }
            } 

            echo $retorno;
            
        }catch (PDOException $e){
            echo "Error" . $e->getMessage();
        }
    }

    function verify_message_by_session(){
        $id_licenca = $_POST['license_id'];
        $id_clerk = $_POST['clerk_id']; 
        $session_id = $_POST['session_id']; 
        try{
            $con = conectar_pgsql();

            $sql = $con->prepare("SELECT * FROM sessions WHERE id = '$session_id'");
            $sql->execute();
            $dados = $sql->fetch(PDO::FETCH_OBJ); 
            echo $dados->finished;
        }catch (PDOException $e){
            echo "Error" . $e->getMessage();
        }
    }

    function get_message_by_session(){
        $id_licenca = $_POST['license_id'];
        $id_clerk = $_POST['clerk_id'];
        $token = $_POST['token']; 
        $nome_contato = $_POST['nome_contato']; 
        $session_id = $_POST['session_id']; 

        try{
            $con = conectar_pgsql();

            $sql = $con->prepare("SELECT * FROM messages WHERE session_id = '$session_id' ORDER BY created_at ");
            $sql->execute();
            $dados = $sql->fetchAll(PDO::FETCH_OBJ); 

            $retorno = '';

            for ($i=0; $i < count($dados); $i++) {  
                $contador = $i+1;

                if (strpos($dados[$i]->message, "|::|")) {
                    $message = explode("|::|", $dados[$i]->message);

                    $tipo_arquivo = explode(".", $message[0]);
                    if ($tipo_arquivo[3] == 'png' || $tipo_arquivo[3] == 'jpg' || $tipo_arquivo[3] == 'jpeg') {
                        $arquivo = "<img src='".$message[0]."' style='max-height:250px'>";
                    }else{
                        $arquivo = "<a href='".$message[0]."' target='_blank'><i class='fa fa-file'></i></a>";
                    }
                    $mensagem = $arquivo."<br>".$message[1];
                }else{
                    $mensagem = $dados[$i]->message;
                }
                if ($dados[$i]->sent_received == '2') {
                    $retorno .= '<div class="contato__mensagem py-1 px-4">
                        <div class="container__mensagem rounded-right p-2">
                            '.$mensagem.'
                            <div class="text-muted text-right">
                                <small>'.date('d/m/Y', strtotime($dados[$i]->created_at)).' - '.date('H:i:s', strtotime($dados[$i]->created_at)).'</small> 
                            </div>
                        </div>
                    </div>';
                }else{
                
                    $retorno .= '<div class="minha__mensagem py-1 px-4">
                        <div class="container__mensagem rounded-left p-2">
                            '.$mensagem.'
                            <div class="text-muted text-right">
                                <small>'.date('d/m/Y', strtotime($dados[$i]->created_at)).' - '.date('H:i:s', strtotime($dados[$i]->created_at)).'</small> 
                            </div>
                        </div>
                    </div> '; 
                }
            } 
            echo $retorno; 
            
        }catch (PDOException $e){
            echo "Error" . $e->getMessage();
        }
    }

    function set_message_file(){
        //token:token, id_licenca:id_licenca, id_clerk:id_clerk, session_id:session_id, nome_contato:nome_contato, arquivo:arquivo, message:message
        $id_licenca = $_POST['id_licenca'];
        $id_clerk = $_POST['id_clerk'];
        $token = $_POST['token']; 
        $session_id = $_POST['session_id'];
        $nome_contato = $_POST['nome_contato'];
        $message = $_POST['arquivo'].'|::|'.$_POST['message'];  
        $created_at = date("Y-m-d H:i:s");
        $updated_at = date("Y-m-d H:i:s");

        try{
            $con = conectar_pgsql();

            $sql = $con->prepare("INSERT INTO messages (license_id, clerk_id, session_id, provider_id, contact_id, sent_received, message, created_at, updated_at) VALUES ('$id_licenca', '$id_clerk', '$session_id', '1', '$nome_contato', '1', '$message', '$created_at', '$updated_at')"); 
            if($sql->execute()){
                echo '1';
            }else{
                print_r($sql->errorInfo());
            }
        }catch (PDOException $e){
            echo "Error" . $e->getMessage();
        }
    }

    function close_session_contact(){
        $id_licenca = $_POST['id_licenca'];
        $id_clerk = $_POST['id_clerk']; 
        $session_id = $_POST['session_id']; 
        $updated_at = date("Y-m-d H:i:s");

        try{
            $con = conectar_pgsql();

            $sql = $con->prepare("UPDATE sessions SET finished = true, updated_at = '$updated_at' WHERE license_id = '$id_licenca' AND clerk_id = '$id_clerk' AND id = '$session_id'"); 
            if($sql->execute()){
                echo '1';
            }else{
                print_r($sql->errorInfo());
            }
        }catch (PDOException $e){
            echo "Error" . $e->getMessage();
        }
    }

    function close_session_clerk(){
        $id_licenca = $_POST['id_licenca'];
        $id_clerk_change = $_POST['id_clerk_change']; 
        $session_id = $_POST['session_id']; 
        $updated_at = date("Y-m-d H:i:s");

        try{
            $con = conectar_pgsql();

            $sql = $con->prepare("UPDATE sessions SET clerk_id = '$id_clerk_change', updated_at = '$updated_at' WHERE license_id = '$id_licenca' AND id = '$session_id'"); 
            if($sql->execute()){
                $sql2 = $con->prepare("UPDATE messages SET clerk_id = '$id_clerk_change', updated_at = '$updated_at' WHERE license_id = '$id_licenca' AND id = '$session_id'"); 
                $sql2->execute();
            }else{
                print_r($sql->errorInfo());
            }
        }catch (PDOException $e){
            echo "Error" . $e->getMessage();
        }
    }

    $acao = $_POST['acao'];
    switch ($acao) {
        case 'set_dados_message_by_clerk':
            set_dados_message_by_clerk();
            break; 
        case 'get_message_by_session':
            get_message_by_session();
            break; 
        case 'set_message_file':
            set_message_file();
            break; 
        case 'close_session_contact':
            close_session_contact();
            break; 
        case 'verify_message_by_session':
            verify_message_by_session();
            break; 
        case 'close_session_clerk';
            close_session_clerk();
            break; 
    }
?>
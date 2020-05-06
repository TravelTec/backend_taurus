<?php  
    
    ini_set("display_errors", 1);
    ini_set("track_errors", 1);
    ini_set("html_errors", 1);
    error_reporting(E_ALL); 

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

    /* *********************** */
    /* FUNCTION check_oauth  
    /* Função que checa se existe password_client na tabela de oauth
    /* Recebe o parâmetro $senha_auth (base64 do email e senha)
    /* Retorna o id do cliente oauth 
    /* *********************** */
    function check_oauth($senha_auth){
        try{
            $con = conectar_pgsql();
            $stmt = $con->prepare("SELECT * FROM oauth_clients WHERE secret = '$senha_auth'");
            $stmt->execute();
            if($stmt->rowcount() != 0){
                $dados = $stmt->fetch(PDO::FETCH_OBJ);
                return $dados->id;
            }else{
                return '2';
            }
        }catch (PDOException $e){
            echo "Error" . $e->getMessage();
        }
    }

    /* *********************** */
    /* FUNCTION check_license  
    /* Função que checa a licença com base no e-mail do usuário
    /* Recebe o parâmetro $email (parâmetro recebido da tela de login)
    /* Retorna os dados da licença
    /* *********************** */
    function check_license($email){
        try{
            $con = conectar_pgsql();
            $stmt = $con->prepare("SELECT * FROM licenses WHERE email = '$email'");
            $stmt->execute();
            if($stmt->rowcount() != 0){
                $dados = $stmt->fetch(PDO::FETCH_OBJ);
                return $dados;
            }else{
                return '2';
            }
        }catch (PDOException $e){
            echo "Error" . $e->getMessage();
        }
    }

    function check_license_by_id($id){
        try{
            $con = conectar_pgsql();
            $stmt = $con->prepare("SELECT * FROM licenses WHERE id = '$id'");
            $stmt->execute();
            if($stmt->rowcount() != 0){
                $dados = $stmt->fetch(PDO::FETCH_OBJ);
                return $dados;
            }else{
                return '2';
            }
        }catch (PDOException $e){
            echo "Error" . $e->getMessage();
        }
    }

    function check_clerk($email){
        try{
            $con = conectar_pgsql();
            $stmt = $con->prepare("SELECT * FROM clerks WHERE email = '$email'");
            $stmt->execute();
            if($stmt->rowcount() != 0){
                $dados = $stmt->fetch(PDO::FETCH_OBJ);
                return $dados;
            }else{
                return '2';
            }
        }catch (PDOException $e){
            echo "Error" . $e->getMessage();
        }
    }

    /* *********************** */
    /* FUNCTION access_token_login  
    /* Função que vai ao endpoint /oauth/token
    /* Recebe os parâmetros $senha_auth (base64 do email e senha), $client_id (retornado pela função check_aut), $email e $senha (parâmetros recebidos da tela de login)
    /* Retorna o token de acesso
    /* *********************** */
    function access_token_login($senha_auth, $client_id, $email, $senha){ 
        if ($_SERVER['HTTP_HOST'] == 'localhost') {
            $server_api = 'http://localhost';
        }else{
            $server_api = 'https://app.taurusmulticanal.com.br';
        }

        $curl = curl_init();

        curl_setopt_array($curl, array(
            CURLOPT_URL => $server_api."/oauth/token",
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => "",
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 30,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => "POST",
            CURLOPT_POSTFIELDS => '{"grant_type": "password", "client_id": "'.$client_id.'", "client_secret": "'.$senha_auth.'", "username": "'.$email.'", "password": "'.$senha.'", "scope": "*"}',
            CURLOPT_HTTPHEADER => array(
                "cache-control: no-cache",
                "content-type: application/json",
                "postman-token: 748a4c6d-f16e-a085-6647-f684ad127cba"
            ),
        ));

        $response = curl_exec($curl);
        $err = curl_error($curl);

        curl_close($curl);

        if ($err) {
            echo "cURL Error #:" . $err;
        } else {  
            $dados = json_decode($response, true);
            if (!empty($dados["access_token"])) {
                return $dados["access_token"];
            }else{
                echo "2";
            }
        }
    }  

    /* *********************** */
    /* FUNCTION verificar_dados_login  
    /* Função que é chamada para verificar os dados de login
    /* Recebe os parâmetros $email e $senha (parâmetros recebidos da tela de login)
    /* Retorna o token de acesso
    /* *********************** */
    function verificar_dados_login($email, $senha){
        $dados_clerk = check_clerk($email);

        if ($dados_clerk != '2') {
            $license_id = check_license_by_id($dados_clerk->license_id); 

            $senha_auth = base64_encode($license_id->email.':'.$license_id->password);  
            $client_id = check_oauth($senha_auth);

            if (access_token_login($senha_auth, $client_id, $license_id->email, $license_id->password) == '2') {
                return '0';
            }else{
                $license = check_license_by_id($dados_clerk->license_id);
                $client_id = check_oauth($senha_auth);
                $token_auth = access_token_login($senha_auth, $client_id, $license_id->email, $license_id->password); 

                $dados_licenca[] = array('dados_licenca' => $license, "clerk" => $dados_clerk, "client_id" => $client_id, "access_token" => $token_auth);
                
                echo json_encode($dados_licenca);
            }
        }else{
            $senha_auth = base64_encode($email.':'.$senha);  

            $license_id = check_license($email); 
            $client_id = check_oauth($senha_auth);

            if (access_token_login($senha_auth, $client_id, $email, $senha) == '2') {
                return '0';
            }else{
                $license = check_license($email);
                $client_id = check_oauth($senha_auth);
                $token_auth = access_token_login($senha_auth, $client_id, $email, $senha); 

                $dados_licenca[] = array('dados_licenca' => $license, "clerk" => "", "client_id" => $client_id, "access_token" => $token_auth);
                
                echo json_encode($dados_licenca);
            }
        }  
    }
    
    $email = $_POST['email'];
    $senha = $_POST['senha'];

    verificar_dados_login($email, $senha);
?>
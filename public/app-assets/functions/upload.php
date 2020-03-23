<?php  
	function uploadImagem($nome_final){

       if ( isset($_FILES['arquivo']) ) {
         $filename  = $_FILES['arquivo']['tmp_name'];
         $handle    = fopen($filename, "r");
         $data      = fread($handle, filesize($filename));
         $POST_DATA = array(
           'file' => base64_encode($data),
           'name' => $nome_final,
           'folder' => 'whatsapp'
         );
         $curl = curl_init();
         curl_setopt($curl, CURLOPT_URL, 'https://taurusmulticanal.com.br/upload.php');
         curl_setopt($curl, CURLOPT_TIMEOUT, 30);
         curl_setopt($curl, CURLOPT_POST, 1);
         curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
         curl_setopt($curl, CURLOPT_POSTFIELDS, $POST_DATA);
         $response = curl_exec($curl);
         curl_close ($curl);

          	return "https://taurusmulticanal.com.br/files/whatsapp/".$nome_final;
        }else{
          	return false;
        } 

	}

	$nome_final = '';
    if($_FILES['arquivo']['name'] != ''){
        $nome_final = date("YmdHis").".jpg";
        $nome_final = uploadImagem($nome_final);
    }

    echo $nome_final;
?>
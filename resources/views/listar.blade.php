<!doctype html>
<html lang="pt-br">
    <head>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Arimo">

        <title>Listagem - Dados</title>

        <style type="text/css">
            body{
                font-family: Arimo;
            }
        </style>
    </head>
    <body> 
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8 col-md-8 col-sm-12 col-12"> 
                    <br>
                    <h4>Listagens</h4>
                    <hr> 
                    <ul class="nav nav-tabs" id="myTab" role="tablist">
						<li class="nav-item">
						    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Licenças</a>
						</li>
						<li class="nav-item">
						    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Departamentos</a>
						</li>
						<li class="nav-item">
						    <a class="nav-link" id="profile2-tab" data-toggle="tab" href="#profile2" role="tab" aria-controls="profile2" aria-selected="false">Atendentes</a>
						</li>
						<li class="nav-item">
						    <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Motivos</a>
						</li>
						<li class="nav-item">
						    <a class="nav-link" id="contact2-tab" data-toggle="tab" href="#contact2" role="tab" aria-controls="contac2t" aria-selected="false">Config. Instância</a>
						</li>
					</ul>
					<div class="tab-content" id="myTabContent">
					  	<div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
					  		<?php

								$curl = curl_init();

								curl_setopt_array($curl, array(
								  CURLOPT_URL => "https://api.taurusmulticanal.com.br/api/licenses",
								  CURLOPT_RETURNTRANSFER => true,
								  CURLOPT_ENCODING => "",
								  CURLOPT_MAXREDIRS => 10,
								  CURLOPT_TIMEOUT => 30,
								  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
								  CURLOPT_CUSTOMREQUEST => "GET",
								  CURLOPT_HTTPHEADER => array(
								    "cache-control: no-cache",
								    "postman-token: ca377dbc-ceff-241a-d909-543c9d287a99"
								  ),
								));

								$response = curl_exec($curl);
								$err = curl_error($curl);

								curl_close($curl);

								if ($err) {
								  	echo "cURL Error #:" . $err;
								} else {
									$resposta_licencas = json_decode($response);
								  	$dados_licenca = $resposta_licencas->data; 
								}

							?>
							<br> 
							<?php $array_senhas = array("123mudar", "2545698", "CIC077228", "368kqie452", "10de10de", "789456", "okeuijd", "1a2d5e"); ?>
							<?php for ($i=0; $i < count($dados_licenca); $i++) {  ?>
								<div class="row">
									<div class="col-lg-12">
										<div class="card" style="padding: 10px;font-size: 14px;">
											<p style="margin-bottom: 0"><strong>Licença:</strong> <?=$dados_licenca[$i]->contact?></p>
											<p style="margin-bottom: 0"><strong>Status:</strong> <?=$dados_licenca[$i]->status?></p>
											<p style="margin-bottom: 0"><strong>E-mail:</strong> <?=$dados_licenca[$i]->email?></p>
											<p style="margin-bottom: 0"><strong>Senha:</strong> <?=$array_senhas[$i]?></p>
											<p style="margin-bottom: 0"><strong>Celular:</strong> <?=$dados_licenca[$i]->cellphone?></p>
											<p style="margin-bottom: 0"><strong>Celular App:</strong> <?=$dados_licenca[$i]->cellphone?></p>
											<p style="margin-bottom: 0"><strong>Qtd. créditos:</strong> <?=$dados_licenca[$i]->credits?></p>
										</div>
									</div>
								</div>
								<br>
							<?php } ?> 
					  	</div>
					  	<div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
					  		<?php

								$curl = curl_init();

								curl_setopt_array($curl, array(
								  CURLOPT_URL => "https://api.taurusmulticanal.com.br/api/departments",
								  CURLOPT_RETURNTRANSFER => true,
								  CURLOPT_ENCODING => "",
								  CURLOPT_MAXREDIRS => 10,
								  CURLOPT_TIMEOUT => 30,
								  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
								  CURLOPT_CUSTOMREQUEST => "GET",
								  CURLOPT_HTTPHEADER => array(
								    "cache-control: no-cache",
								    "postman-token: ca377dbc-ceff-241a-d909-543c9d287a99"
								  ),
								));

								$response = curl_exec($curl);
								$err = curl_error($curl);

								curl_close($curl);

								if ($err) {
								  	echo "cURL Error #:" . $err;
								} else {
									$resposta_licencas = json_decode($response);
								  	$dados_licenca = $resposta_licencas->data; 
								}

							?>
							<br> 
							<?php $array_senhas = array("123mudar", "2545698", "CIC077228", "368kqie452", "10de10de", "789456", "okeuijd", "1a2d5e"); ?>
							<?php for ($i=0; $i < count($dados_licenca); $i++) {  ?>
								<div class="row">
									<div class="col-lg-12">
										<div class="card" style="padding: 10px;font-size: 14px;">
											<p style="margin-bottom: 0"><strong>Licença:</strong> <?=$dados_licenca[$i]->license_id?></p>
											<p style="margin-bottom: 0"><strong>ID Departamento:</strong> <?=$dados_licenca[$i]->id?></p>
											<p style="margin-bottom: 0"><strong>Nome departamento:</strong> <?=$dados_licenca[$i]->name?></p> 
										</div>
									</div>
								</div>
								<br>
							<?php } ?> 
					  	</div>
					  	<div class="tab-pane fade" id="profile2" role="tabpanel" aria-labelledby="profile2-tab">
					  		<?php

								$curl = curl_init();

								curl_setopt_array($curl, array(
								  CURLOPT_URL => "https://api.taurusmulticanal.com.br/api/clerks",
								  CURLOPT_RETURNTRANSFER => true,
								  CURLOPT_ENCODING => "",
								  CURLOPT_MAXREDIRS => 10,
								  CURLOPT_TIMEOUT => 30,
								  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
								  CURLOPT_CUSTOMREQUEST => "GET",
								  CURLOPT_HTTPHEADER => array(
								    "cache-control: no-cache",
								    "postman-token: ca377dbc-ceff-241a-d909-543c9d287a99"
								  ),
								));

								$response = curl_exec($curl);
								$err = curl_error($curl);

								curl_close($curl);

								if ($err) {
								  	echo "cURL Error #:" . $err;
								} else {
									$resposta_licencas = json_decode($response);
								  	$dados_licenca = $resposta_licencas->data; 
								}

							?>
							<br> 
							<?php $array_senhas = array("123mudar", "2545698", "CIC077228", "368kqie452", "10de10de", "789456", "okeuijd", "1a2d5e"); ?>
							<?php for ($i=0; $i < count($dados_licenca); $i++) {  ?>
								<div class="row">
									<div class="col-lg-12">
										<div class="card" style="padding: 10px;font-size: 14px;">
											<p style="margin-bottom: 0"><strong>Licença:</strong> <?=$dados_licenca[$i]->license_id?></p>
											<p style="margin-bottom: 0"><strong>ID Departamento:</strong> <?=$dados_licenca[$i]->department_id?></p>
											<p style="margin-bottom: 0"><strong>Nome atendente:</strong> <?=$dados_licenca[$i]->name?></p> 
											<p style="margin-bottom: 0"><strong>E-mail atendente:</strong> <?=$dados_licenca[$i]->email?></p> 
										</div>
									</div>
								</div>
								<br>
							<?php } ?> 
					  	</div>
					  	<div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
					  		<?php

								$curl = curl_init();

								curl_setopt_array($curl, array(
								  CURLOPT_URL => "https://api.taurusmulticanal.com.br/api/reasons",
								  CURLOPT_RETURNTRANSFER => true,
								  CURLOPT_ENCODING => "",
								  CURLOPT_MAXREDIRS => 10,
								  CURLOPT_TIMEOUT => 30,
								  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
								  CURLOPT_CUSTOMREQUEST => "GET",
								  CURLOPT_HTTPHEADER => array(
								    "cache-control: no-cache",
								    "postman-token: ca377dbc-ceff-241a-d909-543c9d287a99"
								  ),
								));

								$response = curl_exec($curl);
								$err = curl_error($curl);

								curl_close($curl);

								if ($err) {
								  	echo "cURL Error #:" . $err;
								} else {
									$resposta_licencas = json_decode($response);
								  	$dados_licenca = $resposta_licencas->data; 
								}

							?>
							<br> 
							<?php $array_senhas = array("123mudar", "2545698", "CIC077228", "368kqie452", "10de10de", "789456", "okeuijd", "1a2d5e"); ?>
							<?php for ($i=0; $i < count($dados_licenca); $i++) {  ?>
								<div class="row">
									<div class="col-lg-12">
										<div class="card" style="padding: 10px;font-size: 14px;">
											<p style="margin-bottom: 0"><strong>Licença:</strong> <?=$dados_licenca[$i]->license_id?></p>
											<p style="margin-bottom: 0"><strong>Motivo:</strong> <?=$dados_licenca[$i]->name?></p> 
										</div>
									</div>
								</div>
								<br>
							<?php } ?> 
					  	</div>
					  	<div class="tab-pane fade" id="contact2" role="tabpanel" aria-labelledby="contact2-tab">
					  		<?php

								$curl = curl_init();

								curl_setopt_array($curl, array(
								  CURLOPT_URL => "https://api.taurusmulticanal.com.br/api/configurations",
								  CURLOPT_RETURNTRANSFER => true,
								  CURLOPT_ENCODING => "",
								  CURLOPT_MAXREDIRS => 10,
								  CURLOPT_TIMEOUT => 30,
								  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
								  CURLOPT_CUSTOMREQUEST => "GET",
								  CURLOPT_HTTPHEADER => array(
								    "cache-control: no-cache",
								    "postman-token: ca377dbc-ceff-241a-d909-543c9d287a99"
								  ),
								));

								$response = curl_exec($curl);
								$err = curl_error($curl);

								curl_close($curl);

								if ($err) {
								  	echo "cURL Error #:" . $err;
								} else {
									$resposta_licencas = json_decode($response);
								  	$dados_licenca = $resposta_licencas->data; 
								}

							?>
							<br> 
							<?php $array_senhas = array("123mudar", "2545698", "CIC077228", "368kqie452", "10de10de", "789456", "okeuijd", "1a2d5e"); ?>
							<?php for ($i=0; $i < count($dados_licenca); $i++) {  ?>
								<div class="row">
									<div class="col-lg-12">
										<div class="card" style="padding: 10px;font-size: 14px;">
											<p style="margin-bottom: 0"><strong>Licença:</strong> <?=$dados_licenca[$i]->license_id?></p>
											<p style="margin-bottom: 0"><strong>Instância:</strong> <?=$dados_licenca[$i]->name?></p>
											<p style="margin-bottom: 0"><strong>Mensagem de boas vindas:</strong> <?=$dados_licenca[$i]->welcome_message?></p> 
											<p style="margin-bottom: 0"><strong>Mensagem de saída:</strong> <?=$dados_licenca[$i]->logout_message?></p> 
											<p style="margin-bottom: 0"><strong>Mensagem de ausência:</strong> <?=$dados_licenca[$i]->absent_message?></p> 
											<p style="margin-bottom: 0"><strong>Atendente:</strong> <?=$dados_licenca[$i]->attendance?></p> 
											<p style="margin-bottom: 0"><strong>Horários:</strong> 
												<br>
												<span>Segunda: </span><?=$dados_licenca[$i]->monday_open?> a <?=$dados_licenca[$i]->monday_close?> <br>
												<span>Terça: </span><?=$dados_licenca[$i]->tuesday_open?> a <?=$dados_licenca[$i]->tuesday_close?> <br>
												<span>Quarta: </span><?=$dados_licenca[$i]->wednesday_open?> a <?=$dados_licenca[$i]->wednesday_close?> <br>
												<span>Quinta: </span><?=$dados_licenca[$i]->thursday_open?> a <?=$dados_licenca[$i]->thursday_close?> <br>
												<span>Sexta: </span><?=$dados_licenca[$i]->friday_open?> a <?=$dados_licenca[$i]->friday_close?> <br>
												<span>Sábado: </span><?=$dados_licenca[$i]->saturday_open?> a <?=$dados_licenca[$i]->saturday_close?> <br>
												<span>Domingo: </span><?=$dados_licenca[$i]->sunday_open?> a <?=$dados_licenca[$i]->sunday_close?> <br>
											</p> 
										</div>
									</div>
								</div>
								<br>
							<?php } ?> 
					  	</div>
					</div>
                </div>
            </div>
        </div>

        <!-- Optional JavaScript -->
        <!-- jQuery first, then Popper.js, then Bootstrap JS -->
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    </body>
</html>
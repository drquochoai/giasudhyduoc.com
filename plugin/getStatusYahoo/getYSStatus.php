<?php
	$cainao = $_GET['cainao'];
	$ai = $_GET['ai'];
	
	if($cainao == "yahoo"){
		$xxx = file_get_contents("http://opi.yahoo.com/online?u=".$ai."&m=k");
		if (strpos($xxx,'NOT') !== false) {
		echo 'off';
		}
		else echo 'on';
	}
	if($cainao == "skype"){
		$xxx = file_get_contents("http://mystatus.skype.com/".$ai.".num");
		if ($xxx === '2' ) {
		echo 'on';
		}
		else echo 'off';
	}
?>
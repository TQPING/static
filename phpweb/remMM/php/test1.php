<?php
	header("Content-type: text/html; charset=utf-8");
	echo '欢迎'. $_POST["fname"] .'!<br/>';//注意POST与GET只能是大写的
	echo '您的年龄是'. $_POST["age"].' 岁!';
?>
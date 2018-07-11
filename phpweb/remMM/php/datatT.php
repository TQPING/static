<?php

	header("Content-type: text/html; charset=utf-8");//用于在浏览器中识别中文
	header('Access-Control-Allow-Origin:*'); //允许跨域
//连接数据库
	$serverName = "localhost";
	$userName = "TQP";
	$passWord = "root";
	$dbName = "test";
	//连接数据库
	$con = mysqli_connect($serverName,$userName,$passWord,$dbName);
	if(!$con){
		die("Connection falid:".mysqli_connect_error());
	};
	/*echo "连接成功"."</br>";*/
	
	//读取数据：SELECT column_name(s) FROM table_name 或 SELECT * FROM table_name
	$sql = "SELECT * FROM test";
	$result = $con->query($sql);//执行数据查询语句
	if($result->num_rows > 0){
		$data = array();//定义数组
		while($row = $result->fetch_assoc()){
			array_push($data,$row);
		}
		$data = json_encode($data);
		echo $data;
	}
	mysqli_close($con);
?>
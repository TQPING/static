<?php
header("Content-type: text/html; charset=utf-8");
/*$q = isset($_POST['q']) ? $_POST['q'] : '';
if(is_array($q)){
	$sites = array(
		'Runoob' => '菜鸟教程：http://www.runoob.com',
		'Google' => 'Google 搜索：http://www.goole.com',
		'Taobao' => '淘宝：http://www.taobao.com',
	); 
	foreach($q as $val){
		//PHP_EOL 为常量，用于换行
		echo $sites[$val] . PHP_EOL;
	}
}
$p = isset($_POST['p']) ? $_POST['p'] : '';
if(is_array($p)){
	$sites = array(
		'Runoob' => '菜鸟教程：http://www.runoob.com',
		'Google' => 'Google 搜索：http://www.goole.com',
		'Taobao' => '淘宝：http://www.taobao.com',
	);
	foreach($p as $val){
		//PHP_EOL 为常量，用于换行
		echo $sites[$val] . '<br/>';
	}
};*/

//JSON 语法： json_encode ( $value [, $options = 0 ] )
$string = array("name"=>"Tom","age"=>"18","gender"=>"man","hobby"=>"basketball");
echo json_encode($string)."<br/>";
$jsons = '{"name":"Tom","age":"18","gender":"man","hobby":"basketball"}';
echo var_dump(json_decode($jsons))."<br/>";//没有第二个参数默认转换为对象
echo var_dump(json_decode($jsons,true))."<br/>";//有第二个参数，转换为数组
echo $string['name'];//取出数组中的值

//过滤器 （只对整形进行过滤）
/*$int = 1;
$min = 0;
$max = 255;
if(filter_var($int,FILTER_VALIDATE_INT,array("options"=>array("min_range"=>$min,"max_range"=>$max))) === false){
	 echo "变量不在合法范围内T_T，变量为：".$int;
}else{
	echo "变量合法~_~为：".$int;
}*/

//COOKIE
//设置COOKIE语法：setcookie(name, value, expire, path, domain);
/*if (isset($_COOKIE["user"])){
	echo "欢迎".$_COOKIE["user"]."用户登录<br/>";
}else{
	echo "请登录"."<br/>";
	setcookie("user","TQP",time()+60);//设置cookie
	setcookie("user","TOP",time()-60);//设置过期时间销毁cookie
}*/


//SESSION
/*session_start();
if(isset($_SESSION["view"])){
	$_SESSION["view"] = $_SESSION["view"]+1;
	//session_destroy();//销毁session
	//unset($_SESSION["view"]);//销毁session
}else{
	$_SESSION["view"] = 1;
};
// unset() 或 session_destroy() 销毁session

echo "浏览器弟".$_SESSION["view"]."次访问<br/>";*/

//MAIL 邮件
//语法：mail(to,subject,message,headers,parameters)
/*if(isset($_REQUEST["email"])){
	//$email = $_REQUEST["email"];
	$email = "TQP";
	//$subject = $_REQUEST["subject"];
	$subject = "今天的测试";
	//$message = $_REQUEST["message"];
	$message = "今天的测试今天的测试今天的测试今天的测试今天的测试今天的测试";
	mail("362370004@qq.com",$subject,$message,"From:".$email);
	echo "邮件发送成功！！！";
}else{
	echo "<form method='post' action='test2.php'>Email: <input name='email' type='text'><br>
    Subject: <input name='subject' type='text'><br>
    Message:<br>
    <textarea name='message' rows='15' cols='40'>
    </textarea><br>
    <input type='submit'></form>";
};*/


//处理错误bong输出，终止脚本执行
//错误处理函数
/*function customError($errno,$errstr){
	echo "<b>Error：</b>[$errno] $errstr</br>";
	echo "脚本执行结束。";
	die();
}
//设置错误处理函数
set_error_handler("customError");
echo($test);//触发错误处理函数
$test = 2;
if($test>1){
	trigger_error("变量必须小于1");//查询错误处也可以用trigger_error()函数
}*/

?>
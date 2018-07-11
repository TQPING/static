<!--表单提交测试页面显示代码:访问页面地址-->
<!--<!DOCTYPE html>
<html>
	<body>
		<form method="post" action="<?php echo $_SERVER['PHP_SELF'];?>">
			Name:<input type="text" name="fname"/>
			<input type="submit"/>
		</form>
	</body>
</html>-->
<?php
	header("Content-type: text/html; charset=utf-8");//用于在浏览器中识别中文
	header('Access-Control-Allow-Origin:*'); //允许跨域
	//注意在php中对于分号是严格要求必须写的，不写会报的
	
	/*include "form.php";//引入其他php文件*/
	
	/*获取提交表单内容
	//上面只是用来判断用什么方式提交的，顺便还可以映射一下,使用的话就更方便了
	if(!empty($_POST)){
	    $name = $_REQUEST['fname'];
		echo $name;
	}else{   
		die;//直接退出
	}*/

	//函数学习
	/*function stydy($color,$x,$y){
		echo 'my favorite color is '.$color.' !!!<br/>';
		$totle = $x + $y;
		return $totle;
	}
	echo '1 + 6 = '.stydy('red',1,6)."<br/>";*/
	
	//对日期进行处理及输出
	/*echo date('Y/m/d').'<br/>';*/
	
	//测试循环
	/*$i = 1;
	while($i<=5){
		echo 'WHILE...This number is '.$i.'<br/>';
		$i++;
	}
	do{
		echo 'DO...WHILE...This number is '.$i.'<br/>';
		$i++;
	}while($i<=5);
	for($i=0;$i<5;$i++){
		echo 'FOR...This number is '.$i.'<br/>';
	}*/

	/*//SERVER数组中的信息
	echo $_SERVER['PHP_SELF'].'<br/>';
	echo $_SERVER['SERVER_NAME'].'<br/>';
	echo $_SERVER['HTTP_HOST'].'<br/>';
	echo $_SERVER['HTTP_USER_AGENT'].'<br/>';
	echo $_SERVER['SCRIPT_NAME'].'<br/>';*/
	
	//数组:array("name"(键名)=>"Tom"(键值);"age"=>"16";"sex"=>"man");
	/*$people = array("name"=>"Tom","age"=>"16","sex"=>"man");
	echo $people['name'].' is '.$people['age'].'<br/>';
	//foreach循环输出键值名和键值
	foreach($people as $x=>$x_value){//foreach循环
		echo "key=".$x.",value=".$x_value."<br/>";
	};
	$arrs = array("玛莎拉蒂","奥迪","奔驰","林肯","宝马","大众","长安");
	$arrsLen = count($arrs);*/
	//循环输出每一个值
	/*for($x=0;$x<$arrsLen;$x++){//for循环
		echo $arrs[$x]."<br/>";
	};
	foreach($arrs as $x){//foreach循环
		echo $x.'<br/>';
	};*/
	
	
	//数组的排序sort()升序rsort()降序
	//asort()根据关联数组的值进行升序   ksort()根据关联数组的键进行升序
	//arsort()根据关联数组的值降序      krsort()根据关联数组的键降序
	
	
	
	/*判断 if...  if...else... if...else if...else...
	判断 switch(n){
	 * 	case x:
	 * 			echo ....
	 * 	break;
	 * .......
	 * default:
	 * 			echo ....
	 * }*/
	/*$favcolor = "blue";
	$istrue = 2;
	if($istrue == 1){
		echo "输入是否正确，是否需要！！！"."<br/>";
	};
	if($istrue == 1){
		echo "这里是1哦！！！"."<br/>";
	}else{
		echo "这不是我想要的。。。（这是if...else...中的else）"."<br/>";
	};
	if($istrue == 1){
		echo "这里是1哦！！！"."<br/>";
	}else if($istrue == 2){
		echo "这里是2哦！！！"."<br/>";
	}else{
		echo "这不是我想要的。。。"."<br/>";
	};
	switch($favcolor){
		case "red":
			echo "这是红色"."<br/>";
			break;
		case "green":
			echo "这是绿色"."<br/>";
			break;
		case "yellow":
			echo "这是黄色"."<br/>";
			break;
		default:
			echo "什么颜色都不符合"."<br/>";
			break;
	}*/
	
	/*$x = 5;
	$y = 9;
	//运算符的使用
	echo '加法：' . ($x += $y);//$x = $x + $y
	echo '<br/>';
	echo '减法：' . ($x -= $y);//$x = $x - $y
	echo '<br/>';
	echo '减法：' . ($y -= $x);//$y = $y - $x
	echo '<br/>';
	echo '乘法：' . ($y *= $x);//$y = $y * $x
	echo '<br/>';
	echo '除法：' . ($x /= $y);//$x = $x / $y
	echo '<br/>';
	echo '除法：' . ($y /= $x);//$y = $y / $x
	echo '<br/>';
	echo '取模：' . ($x %= $y);//$x = $x % $y
	echo '<br/>';
	echo '取反：' . (- $x);
	echo '<br/>';
	echo '取反：' . (- $y);
	echo '<br/>';*/
	
	//使用End
	/*$z = $x + $y;
	function test(){
		global $z;
		$a = "A";
		echo "变量a为：$a";
		echo "<br/>";
		print "变量z为：$z";
		echo "<br/>";
	}
	test();*/
	/*
	 * echo "变量a为：$a"; 
	 * 输出有问题，找不到变量A
	*/
	/*print "变量z为：$z";
echo <<< EOT
            <table style="width:80%;margin-left:10%;text-align:center;">
                <tr style="background-color:#84A9E1;">
	                <td style="padding:5px;">班级号</td>
	                <td style="padding:5px;">学生学号</td>
	                <td style="padding:5px;">学生姓名</td>
	                <td style="padding:5px;">家长姓名</td>
	                <td style="padding:5px;">家长手机号</td>
                </tr>
EOT;*/
	//字符串
	/*echo "<br/>";
	$txt = '单引号';
	echo $txt;
	echo "<br/>";
	$tst = "双引号";
	echo $tst;
	echo "<br/>";*/
	//数组
	/*$arrs = array("大众","雪福来","宾利");
	echo $arrs[0];*/
	//创建对象
	/*class Mine{
		var $color;
		function color($color = "yellow"){
			$this->color = $color;
			//echo $this;
		}
		function what_color(){
			//echo $this;
			return $this->color;
		}
	}
	$Mine = new Mine();
	$Mine->color();//调用实例化对象中的方法
	$Mine->what_color();*/
	
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
	echo "连接成功"."</br>";
	
	//读取数据：SELECT column_name(s) FROM table_name 或 SELECT * FROM table_name
	$sql = "SELECT name FROM test";
	$result = $con->query($sql);//执行数据查询语句
	if($result->num_rows > 0){
		while($row = $result->fetch_assoc()){
			foreach($row as $value){
				echo $value."</br>";
			}
		}
	}
	mysqli_close($con);
	
	//输出简单的html 要安装PDO
/*	echo "<table style='border:solid 1px block'>";
	echo "<tr><th>NAME</th><th>SEX</th><th>AGE</th>";
	
	class Tables extends RecursiveIteratorIterator{
		function _construct(){
			parent::_construct($it,self::LEAVES_ONLY);
		}
		function current(){
			return "<td style='width:150px;border:solid 1px black;'>".parent::current()."</td>";
		}
		function begins(){
			echo "<tr>";
		}
		function ends(){
			echo "</tr>"."\n";
		}
	};
	
	$serverName = "localhost";
	$userName = "TQP";
	$passWord = "root";
	$dbName = "test";
	
	try{
		$con = new PDO("mysql:host=$serverName;dbname=$dbName,$userName,$passWord");
		$con->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
		$stm = $CON->PREPARE("SELECT NAME,SEX,AGE FROM TEST");
		$stm->execute();
		
		//设置结果为关联数组
		$result = $stm->setFetchMode(PDO::FETCH_ASSOC);
		foreach(new tables(new RecursiveIteratorIterator($stm->fetchAll())) as $k=>$v){
			echo $v;
		}
	}
	
	catch(PDOException $e){
		echo "Error:".$e->getMessage();
	};
	$con = null;
	echo "</table>";*/
?>

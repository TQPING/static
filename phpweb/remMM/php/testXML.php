<?php
	//初始化xml解析器
	//$parser = xml_parser_create();
	/*function start($parser,$element_name,$element_attrs){
		switch($element_name){
			case "NOTE":
			echo "-- Note --<br>";
				break;
			case "TO":
			echo "To";
				break;
			case "FORM":
			echo "Form";
				break;
			case "HEADIGN":
			echo "Heading";
				break;
			case "BODY":
			echo "Message";
				break;
		}
	}
	
	function stop($parser,$element_name){
		echo　."<br>";
	};
	function char($parser,$data){
		echo　$data;
	};*/
	//element 处理
	//xml_set_element_handler($parser,"start","stop");
	//data处理
	//xml_set_character_data_handler($parser,"char");
	//打开xml文件
	//$fs = fopen("../XML/new1.xml","r");
	
	//读取数据
	//while ($data = fread($fs,4096)){
	//	xml_parse($parser,$data,feof($fs)) or die(sprintf("XML ERROR:%s at line %d",
	//	xmll_error_string(xml_get_error_code($parser)),
	//	xml_get_current_line_number($parser)))
	//};
	
	//xml_parser_free($parser);	
	
	
	$xmlDoc = new DOMDocument();
?>
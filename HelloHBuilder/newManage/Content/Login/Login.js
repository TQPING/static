$(function () {
    $("input[type='checkbox']").labelauty();
    $(".login-bg").height(document.documentElement.clientHeight);
    $("box").height(document.documentElement.clientHeight);
    if (localStorage.getItem("uid") != null) {
        $("#name").val(localStorage.getItem("uid"));
        $("#labelauty-1").attr("checked", true);
        flag = 1;
    }
    //setInterval("changeBg()",10);
    $(".loginClick").click(function () {
        login("loginBtn");
    });

    $("#roleSure").click(function () {
        var ids = $("#value1").val().split(',');
        $.ajax({
            url: '/Home/ajax_SwitchRole',
            data: { role_guid: ids[0], rgn_code: ids[1] },
        }).done(function (data) {
            window.location.href = '/';
        });
    });


});

document.onkeyup = function (event) {
    var e = event || window.event || arguments.callee.caller.arguments[0];
    if (e && e.keyCode == 13) { // enter 键
        login("loginBtn");
    }
};
var fliter = 10;
var fliterFlag = 0;
var flag = 0;
login = function (e) {
    $("#" + e + "").removeClass("loginClick");
    var __RequestVerificationToken = $("input[name='__RequestVerificationToken']").val();
    var name = $("#name").val();
    var pwd = $("#pwd").val();
    var validate = $("#validate").val();
    if (name == "" || name == null || pwd == "" || pwd == null) {
        swal('账号或密码不能为空!', '', 'warning');
        $("#" + e + "").addClass("loginClick");
        return;
    }
    if (validate == "" || validate == null) {
        swal('验证码不能为空!', '', 'warning');
        $("#" + e + "").addClass("loginClick");
        return;
    }
    $("#loginBtn").html("登录中..");
    var pass = $.md5(pwd);

    $.ajax({
        url: "/Account/LoginCheck",
        data: { 'name': name, 'pwd': pass, 'validate': validate, 'type': 1, '__RequestVerificationToken': __RequestVerificationToken },
        type: 'post',
        dataType: 'json',
        success: function (data) {
            if (data.code == 0) {
                if ($("#labelauty-1").attr("checked") == "checked")
                    localStorage.setItem("uid", name);
                else
                    localStorage.removeItem("uid");
                if (data.data == "") {
                    window.location.href = "/";
                    return;
                }
                //var list = {};
                //for (var i = 0; i < data.data.length; i++)
                //{
                //    list[i].id = data.data[i].id;
                //    list[i].name = data.data[i].text;
                //    if (data.data[i].data.length > 0)
                //    {
                //        for (j = 0; i < data.data[i].data[j];j++)
                //        {
                //            list[i].child[j].id = data.data[i].data[j].rgn_code;
                //            list[i].child[j].name = data.data[i].data[j].rgn_name;
                //        }
                //    }
                //}
                var u = navigator.userAgent;
                if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1 || u.indexOf('iPhone') > -1 || u.indexOf('Windows Phone') > -1) {
                    //手机
                    $("#" + e + "").addClass("loginClick");
                    $("#loginBtn").html("登录");
                    var area1 = new LArea();
                    area1.init({
                        'trigger': '#roleVal', //触发选择控件的文本框，同时选择完毕后name属性输出到该位置
                        'valueTo': '#value1', //选择完毕后id属性输出到该位置
                        'keys': {
                            id: 'id',
                            name: 'name'
                        }, //绑定数据源相关字段 id对应valueTo的value属性输出 name对应trigger的value属性输出
                        'type': 1, //数据源类型
                        'data': data.data//data.data//数据源
                    }, document.getElementById("roleSure"), '/Account/LoginOut');
                    $("#roleVal").click();
                } else {
                    //PC
                    pickerdata = data.data;
                    +function ($) {
                        //$.smConfig.rawCitiesData = [{ "id": "4ffc3412-d8a3-4466-93c5-d6f858679111", "name": "运营商啊", "child": null }, { "id": "4ffc3412-d8a3-4466-93c5-d6f858679222", "name": "业务员", "child": null }]
                        $.smConfig.rawCitiesData = pickerdata;
                    }(Zepto);
                    /* jshint unused:false*/

                    + function ($) {
                        "use strict";
                        var format = function (data) {
                            var result = [];
                            for (var i = 0; i < data.length; i++) {
                                var d = data[i];
                                if (d.name === "请选择") continue;
                                result.push(d.name);
                            }
                            if (result.length) return result;
                            return [""];
                        };

                        var formatId = function (data) {
                            var result = [];
                            for (var i = 0; i < data.length; i++) {
                                var d = data[i];
                                if (d.name === "请选择") continue;
                                result.push(d.id);
                            }
                            if (result.length) return result;
                            return [""];
                        };

                        var child = function (data) {
                            if (!data.child) return [""];
                            return format(data.child);
                        };

                        var childId = function (data) {
                            if (!data.child) return [""];
                            return formatId(data.child);
                        };

                        var getCities = function (d) {
                            for (var i = 0; i < raw.length; i++) {
                                if (raw[i].name === d) return child(raw[i]);
                            }
                            return [""];
                        };

                        var getCitiesId = function (d) {
                            for (var i = 0; i < raw.length; i++) {
                                if (raw[i].name === d) return childId(raw[i]);
                            }
                            return [""];
                        };

                        var getDistricts = function (p, c) {
                            for (var i = 0; i < raw.length; i++) {
                                if (raw[i].name === p) {
                                    for (var j = 0; j < raw[i].child.length; j++) {
                                        if (raw[i].child[j].name === c) {
                                            return child(raw[i].child[j]);
                                        }
                                    }
                                }
                            }
                            return [""];
                        };

                        var raw = $.smConfig.rawCitiesData;
                        var rawId = $.smConfig.rawCitiesData;
                        var provincesNames = raw.map(function (d) {
                            return d.name;
                        });
                        var provincesIds = raw.map(function (d) {
                            return d.id;
                        });
                        var initCities = child(raw[0]);
                        var initCitiesIds = childId(raw[0]);
                        //var initDistricts = [""];

                        var currentProvince = provincesNames[0];
                        var currentCity = initCities[0];
                        //var currentDistrict = initDistricts[0];

                        var t;
                        var defaults = {

                            cssClass: "city-picker",
                            rotateEffect: false,  //为了性能

                            onChange: function (picker, values, displayValues) {
                                var newProvince = picker.cols[0].displayValue;
                                var newCity;
                                if (newProvince !== currentProvince) {
                                    // 如果Province变化，节流以提高reRender性能
                                    clearTimeout(t);

                                    t = setTimeout(function () {
                                        var newCities = getCities(newProvince);
                                        var newCitiesId = getCitiesId(newProvince);
                                        newCity = newCities[0];
                                        //var newDistricts = getDistricts(newProvince, newCity);
                                        picker.cols[1].replaceValues(newCitiesId, newCities);
                                        //picker.cols[2].replaceValues(newDistricts);
                                        currentProvince = newProvince;
                                        currentCity = newCity;
                                        picker.updateValue();
                                    }, 200);
                                    return;
                                }
                                newCity = picker.cols[1].value;
                                /*if(newCity !== currentCity) {
                                picker.cols[2].replaceValues(getDistricts(newProvince, newCity));
                                currentCity = newCity;
                                picker.updateValue();
                                }*/
                            },

                            cols: [
                            {
                                textAlign: 'center',
                                values: provincesIds,
                                displayValues: provincesNames,
                                cssClass: "col-province"
                            },
                            {
                                textAlign: 'center',
                                values: initCitiesIds,
                                displayValues: initCities,
                                cssClass: "col-city"
                            }

                            //{
                            //    textAlign: 'center',
                            //    values: initDistricts,
                            //    cssClass: "col-district"
                            //}
                            ],
                            formatValue: function (picker, value, displayValue) {
                                $(picker.params.province).val(value[0]);
                                $(picker.params.place).val(value[1]);
                                return displayValue.join(' ');
                            }
                        };

                        $.fn.cityPicker = function (params) {
                            return this.each(function () {
                                if (!this) return;
                                var p = $.extend(defaults, params);
                                var value;
                                var val;
                                //计算value
                                if (p.value) {
                                    $(this).val(p.value.join(' '));
                                    val = $(this).val();
                                    if (val && val.split(' ').length > 1)
                                        value = val.split(' ');
                                } else {
                                    //待改进

                                    val = $(this).val();
                                    if (val && val.split(' ').length > 1)
                                        value = val.split(' ');

                                    var val1 = $(this).siblings("#province").val();
                                    var val2 = $(this).siblings("#place").val();
                                    if (val1 + val2 > 1)
                                        p.value = [val1, val2];
                                }

                                if (p.value) {
                                    //p.value = val.split(" ");
                                    if (p.value[0]) {
                                        currentProvince = value[0];
                                        p.cols[1].values = getCitiesId(value[0]);
                                        p.cols[1].displayValues = getCities(value[0]);
                                    }
                                    if (p.value[1]) {
                                        currentCity = value[1];
                                        //p.cols[2].values = getDistricts(p.value[0], p.value[1]);
                                        //} else {
                                        //p.cols[2].values = getDistricts(p.value[0], p.cols[1].values[0]);
                                    }
                                    //!p.value[2] && (p.value[2] = '');
                                    //currentDistrict = p.value[2];
                                }
                                $(this).picker(p);
                            });
                        };
                    }(Zepto);
                    $("#roleval2").cityPicker({
                        toolbarTemplate: '<header class="bar bar-nav">\
            <button class="button button-link pull-right close-picker" onclick="PClogin()">确定</button>\
            <h4 class="title">选择所在地址</h4>\
            </header>',
                        province: '#value1',//省输入框,一般都是隐藏的，获取身份ID
                        place: '#value2', //城市输入框，一般都是隐藏的，获取城市ID
                        onClose: function () {
                            PClogin();
                        }
                    });
                    //$("#roleval2").picker("setValue", pickerdata);
                    //        $("body").html();

                    //$("#pagea").show();
                    //$("#box").hide();
                    $("#roleval2").click();
                }

                //window.location.href = '/';
            }
            else {
                changeValidate();
                try {
                    swal(data.msg, '', 'warning');
                    $("#" + e + "").addClass("loginClick");
                    $("#loginBtn").html("登录");
                    return;
                } catch (e) { alert(e.message) }
            }
        },
        error: function () {
            swal('登录超时', '', 'warning');
            $("#" + e + "").addClass("loginClick");
            $("#loginBtn").html("登录");
        }
    });
};
changeValidate = function () {
    $("#validateImg").attr("src", "../../Account/ValidateCode" + "?r=" + Math.random());
};
changeBg = function () {
    if (fliterFlag == 0) {
        if (fliter <= 100)
            fliter += 1;
        else {
            fliterFlag = 1;
            fliter -= 1;
        }
    }
    else {
        if (fliter >= 1)
            fliter -= 1;
        else {
            fliterFlag = 0;
            fliter += 1;
        }
    }
    $(".login-bg").css("-webkit-filter", "blur(" + fliter + "px)");

};
check = function () {
    if (flag == 0) {
        $("#labelauty-1").attr("checked", true);
        flag = 1;
    }
    else {
        $("#labelauty-1").attr("checked", false);
        flag = 0;
    }
    console.log($("#labelauty-1").attr("checked"));
}
PClogin = function () {
    var ids = [];

    var pcvalue1 = $("#value1").val();
    var pcvalue2 = $("#value2").val();
    ids.push(pcvalue1);
    if (pcvalue2 != null && pcvalue2!="")
        ids.push(pcvalue2);
    $.ajax({
        url: '/Home/ajax_SwitchRole',
        data: { role_guid: ids[0], rgn_code: ids[1] },
    }).done(function (data) {
        window.location.href = '/';
    });
}
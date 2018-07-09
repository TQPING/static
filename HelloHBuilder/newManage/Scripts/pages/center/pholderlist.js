$(function () {
    var u = navigator.userAgent;
    if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1 || u.indexOf('iPhone') > -1 || u.indexOf('Windows Phone') > -1) {
        //手机
        agentFlag = 0;
    } else {
        agentFlag = 1;
    }
    pholderlist.LoadData();
    pholderlist.loading();
})

var agentFlag = 0;//0,手机1:电脑
var page = 1;
var pholderlist = {

    LoadData: function () {
        var Param = { ProvinceCode: $("#holderIds").val(), CenterName: $("#holder_search").val() };
        $("#infoPage").page({
            url: '/Center/GetPHolderList',
            pageSize: 10,
            searchparam: Param,
            viewCallback: pholderlist.outList
        });
    },
    search: function()
    {
        pholderlist.LoadData();
    },
    outList: function (result, j) {
        var html = '';
        $.each(result, function (i) {
            var itemData = result[i];
            html += `<tr>
                <td style="text-align: center; width: 30%; ">${itemData.CenterName}</td>
                        <td style="text-align: center; width: 30%; ">${itemData.Legalperson}</td>
                        <td style="text-align: center; width: 30%; ">${itemData.RegionName}</td>
                        <td style="text-align: center; width: 30%; "><a href="/Center/CenterDetail?centerid=${itemData.CenterID}"> 详情 </a></td>
                    </tr>`
        });
        $('#data_body').html(html);
    },
    loading: function () {
        page =pholderlist.getQueryString("page");
        if (agentFlag == 0) {
            var area2 = new LArea();
            area2.init({
                'trigger': '#holderVal', //触发选择控件的文本框，同时选择完毕后name属性输出到该位置
                'valueTo': '#holderIds', //选择完毕后id属性输出到该位置
                'keys': {
                    id: 'id',
                    name: 'name'
                }, //绑定数据源相关字段 id对应valueTo的value属性输出 name对应trigger的value属性输出
                'type': 1, //数据源类型
                'level': 1,
                'data': rgn2//data.data//数据源
            });
        }
        else {
            var list = [];
            for (var i = 0; i < rgn2.length; i++) {
                rgn2[i].child = [];
                list.push(rgn2[i]);
            }
            pickerdata = list;
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
            $("#holderVal").cityPicker({
                toolbarTemplate: '<header class="bar bar-nav">\
            <button class="button button-link pull-right close-picker">确定</button>\
            <h4 class="title">选择所在地址</h4>\
            </header>',
                province: '#holderIds',//省输入框,一般都是隐藏的，获取身份ID
                place: '#holderIds2' //城市输入框，一般都是隐藏的，获取城市ID
            });

        }     
    },
    getQueryString: function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]); return 1;
    }

}






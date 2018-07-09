// author jacob chen
+function($){

    //$.smConfig.rawCitiesData = [{"id":"4ffc3412-d8a3-4466-93c5-d6f858679111","name":"运营商啊","child":null},{"id":"4ffc3412-d8a3-4466-93c5-d6f858679222","name":"业务员","child":null}]
    $.smConfig.rawCitiesData = pickerdata;
}(Zepto);
/* jshint unused:false*/

+ function($) {
    "use strict";
    var format = function(data) {
        var result = [];
        for(var i=0;i<data.length;i++) {
            var d = data[i];
            if(d.name === "请选择") continue;
            result.push(d.name);
        }
        if(result.length) return result;
        return [""];
    };

    var formatId = function(data) {
        var result = [];
        for(var i=0;i<data.length;i++) {
            var d = data[i];
            if(d.name === "请选择") continue;
            result.push(d.id);
        }
        if(result.length) return result;
        return [""];
    };

    var child = function(data) {
        if(!data.child) return [""];
        return format(data.child);
    };

    var childId = function(data){
        if (!data.child) return [""];
        return formatId(data.child);
    };

    var getCities = function(d) {
        for(var i=0;i< raw.length;i++) {
            if(raw[i].name === d) return child(raw[i]);
        }
        return [""];
    };

    var getCitiesId = function(d) {
        for(var i=0;i< raw.length;i++) {
            if(raw[i].name === d) return childId(raw[i]);
        }
        return [""];
    };

    var getDistricts = function(p, c) {
        for(var i=0;i< raw.length;i++) {
            if(raw[i].name === p) {
                for(var j=0;j< raw[i].child.length;j++) {
                    if(raw[i].child[j].name === c) {
                        return child(raw[i].child[j]);
                    }
                }
            }
        }
        return [""];
    };

    var raw = $.smConfig.rawCitiesData;
    var rawId = $.smConfig.rawCitiesData;
    var provincesNames = raw.map(function(d) {
        return d.name;
    });
    var provincesIds = raw.map(function(d) {
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
            if(newProvince !== currentProvince) {
                // 如果Province变化，节流以提高reRender性能
                clearTimeout(t);

                t = setTimeout(function(){
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
        formatValue: function (picker, value, displayValue){
            $(picker.params.province).val(value[0]);
            $(picker.params.place).val(value[1]);
            return displayValue.join(' ');
        }
    };

    $.fn.cityPicker = function(params) {
        return this.each(function() {
            if(!this) return;
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
                if(val1+val2 > 1)
                    p.value = [val1, val2];
            }

            if (p.value) {
                //p.value = val.split(" ");
                if(p.value[0]) {
                    currentProvince = value[0];
                    p.cols[1].values = getCitiesId(value[0]);
                    p.cols[1].displayValues = getCities(value[0]);
                }
                if(p.value[1]) {
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

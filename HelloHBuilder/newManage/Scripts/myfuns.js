$.fn.serializeObject = function () {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function () {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    console.log(JSON.stringify(o));
    return o;
};


$(function () {
    tools.autoListTable();
});
$(window).resize(function () {
    tools.autoListTable();
});



var myfuns = {
        GetQueryString: function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) {
            return unescape(r[2]);
        }
        return null;
},
        GetQueryInt: function (name) {
        var result = this.GetQueryString(name);
        if (result != null) {
            return result;
        }
        return 0;
}
};


var tools = {
    autoListTable: function () {
        if ($('#div_table').length > 0) {
            $('#div_table').width($(window).width() - 32);
        }
    },
    goBack: function () {
        history.go(-1);
    },
    nullToEmptyString: function (obj) {
        if (obj == null)
            return '';
        else {
            return obj;
        }
    },
    formatTime: function (value) {//传入格式为  ：  /Date(1470819621000)/	
        if (value == '' || value == null)
            return '';
        value = eval('new ' + (value.replace(/\//g, '')));
        var year = value.getFullYear();
        var month = value.getMonth() + 1 < 10 ? "0" + (value.getMonth() + 1) : value.getMonth() + 1;
        var date = value.getDate() < 10 ? "0" + value.getDate() : value.getDate();
        var hour = value.getHours() < 10 ? "0" + value.getHours() : value.getHours();
        var minute = value.getMinutes() < 10 ? "0" + value.getMinutes() : value.getMinutes();
        var second = value.getSeconds() < 10 ? "0" + value.getSeconds() : value.getSeconds();
        return (year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second);
    },
    formatDate: function (value) {//传入格式为  ：  /Date(1470819621000)/
        if (value == '' || value == null)
            return '';
        value = eval('new ' + (value.replace(/\//g, '')));
        var year = value.getFullYear();
        var month = value.getMonth() + 1 < 10 ? "0" + (value.getMonth() + 1) : value.getMonth() + 1;
        var date = value.getDate() < 10 ? "0" + value.getDate() : value.getDate();
        return (year + "-" + month + "-" + date);
    },
    formatTimeU: function (value) { //传入格式为  ：  1470819621000	
        value = new Date(value);
        var year = value.getFullYear();
        var month = value.getMonth() + 1 < 10 ? "0" + (value.getMonth() + 1) : value.getMonth() + 1;
        var date = value.getDate() < 10 ? "0" + value.getDate() : value.getDate();
        var hour = value.getHours() < 10 ? "0" + value.getHours() : value.getHours();
        var minute = value.getMinutes() < 10 ? "0" + value.getMinutes() : value.getMinutes();
        var second = value.getSeconds() < 10 ? "0" + value.getSeconds() : value.getSeconds();
        return (year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second);
    },
    formatDateU: function (value) { //传入格式为  ：  1470819621000	
        value = new Date(value);
        var year = value.getFullYear();
        var month = value.getMonth() + 1 < 10 ? "0" + (value.getMonth() + 1) : value.getMonth() + 1;
        var date = value.getDate() < 10 ? "0" + value.getDate() : value.getDate();
        var hour = value.getHours() < 10 ? "0" + value.getHours() : value.getHours();
        var minute = value.getMinutes() < 10 ? "0" + value.getMinutes() : value.getMinutes();
        var second = value.getSeconds() < 10 ? "0" + value.getSeconds() : value.getSeconds();
        return (year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second);
    },
};
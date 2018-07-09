var examineCity = new Object();
var search = "";
var manager_rgn_code_sheng = "";
var state = "";

examineCity.loading = function () {
    examineCity.table();

}
examineCity.table = function () {
    $('#pcAgent').citys({
        required: false,
        nodata: 'disabled'
    });
    $("#examinecitytable").bootstrapTable("destroy").bootstrapTable({
        url: '/Center/ajax_GetAgentManageData',
        dataType: 'json',
        queryParams: examineCity.queryParams,
        queryParamsType: "limit",
        pagination: true,
        onLoadSuccess: function (data) { examineCity.initTotal(data); },
        sidePagination: 'server',
        toolbar: '#examinecity_toolbar',
        clickToSelect: true,
        striped: true,
        columns: examineCity.initCol()
    });

}
examineCity.initCol = function () {

    var col = [];
    var state = $("input[name='Stauts']:checked").val();
    var str = "";
    if (state == 2) {
        str = "详情";
    } else {
        str = "审核";
    }
    col.push({ field: 'Id', title: '', visible: false });
    col.push({
        field: 'Name', title: '机构名称/个人姓名', align: 'center', width: '30%', formatter: function (index, row) {
            return row.Isindividual == 1 ? row.Individualname : row.Name;
        }
    });
    col.push({ field: 'ApplyTel', title: '申请电话', align: 'center', width: '30%' });
    col.push({
        field: 'ManagerRgnCodeShi', title: '地区', align: 'center', width: '30%', formatter: function (index, row) {
            return row.ManagerRgnNameSheng + "-" + row.ManagerRgnNameShi;
        }
    });
    col.push({
        field: '', title: '操作', align: 'center', width: '30%',
        formatter: function (index, row, e) {
            var state_1 = $("input[name='manager_audit_status']:checked").val();
            var str_1 = "";
            if (state_1 == 2) {
                str_1 = "详情";
            } else {
                str_1 = "审核";
            }
            return '<a onclick="examineCity.Examine(\'' + row.Id + '\',\'' + row.manager_audit_id + '\',\'' + state_1 + '\')"> ' + str_1 + ' </a>';
        }
    });
    return col;
}

examineCity.queryParams = function (params) {

    search = $('#city_search').val();
  
    var manager_rgn_code_sheng = $('select[name=province]').val();
    var manager_rgn_code_shi = $('select[name=city]').val();
    var manager_rgn_code_xian = $('select[name=area]').val();
    state = $("input[name='manager_audit_status']:checked").val();

    var temp = {
        limit: params.limit,
        offset: params.offset,
        manager_full_name: search,
        manager_rgn_code_sheng: manager_rgn_code_sheng,
        manager_rgn_code_shi: manager_rgn_code_shi,
        manager_rgn_code_xian: manager_rgn_code_xian,
        manager_audit_status: state
    };
    return temp;

}

examineCity.initTotal = function (data) {
    $('#total').html(data.total);
}
$(function() { examineCity.loading(); });

examineCity.search = function () {
    $('#examinecitytable').bootstrapTable('refresh');
}

examineCity.changeState = function () {
    var state = $("input[name='manager_audit_status']:checked").val();
    var opt = {
        silent: true,
        query: {
            manager_audit_status: state
        }
    };
    $('#examinecitytable').bootstrapTable('refresh');

}
examineCity.Examine = function (uId, id, status) {
    window.location.href= "/Center/OperatorCheckDetail?mId=" + id + "&uId=" + uId + "&&status=" + status;
}
function formatedate(date) {
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    var d = date.getDate();
    return y + '-' + (m < 10 ? ('0' + m) : m) + '-' + (d < 10 ? ('0' + d) : d);
}
function formatetime(time) {
    var h = time.getHours();
    var m = time.getMinutes();
    var s = time.getSeconds();
    return (h < 10 ? ('0' + h) : h) + ':' + (m < 10 ? ('0' + m) : m) + ':' + (s < 10 ? ('0' + s) : s);
}
function ShowTime(value, rowData, rowIndex) {
    try {
        var NewDtime = new Date(parseInt(value.slice(6, 19)));
        value = formatedate(NewDtime) + " " + formatetime(NewDtime);
    }
    catch (e) { }
    return value;
}
function ShowTime2(value, rowData, rowIndex) {
    try {
        var NewDtime = new Date(parseInt(value.slice(6, 19)));
        value = formatetime(NewDtime);
    }
    catch (e) { }
    value = value.substring(0, 5);
    return value;
}
function ExportAgentData() {
    var state = $("input[name='manager_audit_status']:checked").val();
    var search = $('#city_search').val();
    var ids = $("#examineCityIds").val().split(",");
    var manager_rgn_code_sheng = ids[0];
    var manager_rgn_code_shi = (ids[1] == undefined ? "" : ids[1]);
    var manager_rgn_code_xian = (ids[2] == undefined ? "" : ids[2]);
    window.location.href = '/Examine/ExportAgentData?manager_rgn_code_shi=' + manager_rgn_code_shi + '&&manager_rgn_code_sheng=' + manager_rgn_code_sheng + '&&manager_rgn_code_xian=' + manager_rgn_code_xian + '&&manager_audit_status=' + state + '&&manager_full_name=' + search;

}
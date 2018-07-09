$(document).ready(function () {
    
    $("#but1").show();
    $("#but2").hide();
});

$("input[name='manager_exp_ustype']").change(function () {
    if ($(".display_person").css("display") == "none") {
        $(".display_person").css("display", "block");
    } else {
        $(".display_person").css("display", "none");
    }
});


//holderSubmit = function (e) {
//    $('#holderform').bootstrapValidator('validate');
//    var validator = $('#holderform').data('bootstrapValidator');
//    if (validator.isValid() == false) {
//        return;
//    }
//    var p1 = $("#file_1").val();
//    var p2 = $("#file_2").val();
//    var p3 = $("#file_3").val();
//    var p4 = $("#file_4").val();
//    var p5 = $("#file_5").val();
//    var p6 = $("#file_6").val();
//    var p7 = $("#file_7").val();
//    var p8 = $("#file_8").val();
//    if (p1 == "" || p2 == "" || p3 == "" || p4 == "" || p5 == "" || p6 == "" || p7 == "") {
//        swal("增加失败!", "请上传完图片!", "warning");
//        return;

//    }

//    var nsrlx_s = $("input[name='manager_exp_taxpayers_typ']:checked").val();

//    if (nsrlx_s == "1") {//一般纳税人
//        if (p8 == "") {
//            swal("增加失败!", "请上传一般纳税人证明!", "warning");
//            return;
//        }
//    }


//    $(e).attr("disabled", true);
//    $.ajax({
//        type: "POST",
//        url: "/Holder/ajax_AddHolder_Post",
//        data: $('#holderform').serialize(),
//        success: function (data) {
//            if (data.code == 0) {
//                swal("增加成功!", data.msg, "success").then(function () {
//                    $("#load").loading("/Holder/Holder");
//                });
//            } else {
//                swal("增加失败!", data.msg, "warning");
//                $(e).attr("disabled", false);
//            }
//        }
//    });
//    return false;
//};

holderSubmit2 = function (e) {
    //var p1 = $("#file_1").val();
    //var p2 = $("#file_2").val();
    //var p3 = $("#file_3").val();
    //var p4 = $("#file_4").val();
    //var p5 = $("#file_5").val();
    //var p6 = $("#file_6").val();
    //var p7 = $("#file_7").val();
    //var p8 = $("#file_8").val();
    //if (p1 == "" || p2 == "" || p3 == "" || p4 == "" || p5 == "" || p6 == "" || p7 == "" || p8 == "") {
    //    swal("增加失败!", "请上传完图片!", "warning");
    //    return;

    //}
    var manager_exp_name = $("input[name='manager_exp_name']").val();
    var province_code = $("#province_code").val();
    var province_name = $("#province_name").val();
    if (manager_exp_name == "" || manager_exp_name == null) {
        swal("股东名称不能为空!", "", "warning"); return;
    }
    if (province_code == "" || province_code == null) {
        swal("请选择管理地区!", "", "warning"); return;
    }
    if (province_name == "" || province_name == null) {
        swal("请选择管理地区!", "", "warning"); return;
    }

    var p6 = $("#file_6").val();

    if (p6 == "") {
        swal("开通失败!", "请上传收款凭证!", "warning");
        return;
    }

    $(e).attr("disabled", true);
    $.ajax({
        type: "POST",
        url: "/Holder/ajax_AddktHolder",
        data: $('#holderform').serialize(),
        success: function (data) {
            if (data.code > 0) {
                swal("增加成功!", data.msg, "success").then(function () {
                    $("#load").loading("/Holder/Holder");
                });
            } else {
                swal("增加失败!", data.msg, "warning");
                $(e).attr("disabled", false);
            }
        }
    });
    return false;
};

holderCancel = function () {
    $("#load").loading("/Holder/Holder");
    return false;
};
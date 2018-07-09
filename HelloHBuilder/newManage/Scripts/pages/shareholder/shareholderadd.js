$(function () {
    //绑定上传
    myUpload.bindImgUpload('file_CardFront', 'img_CardFront', 'CardFront');
    myUpload.bindImgUpload('file_CardReverse', 'img_CardReverse', 'CardReverse');
    //验证绑定
    pholderadd.validateBind();
    $("#ApplyTel").blur(function () {
        pholderadd.getGd();
    });
    if ($("#Id").val()!="0") {
        pholderadd.getGd();
    }
});

var pholderadd = {
    getGd:function(){
        $.ajax({
            url: "/Shareholder/GetGId",
            data: { phone: $("#ApplyTel").val() },
            type: "post",
            success: function (re) {
                if (re.Msg == "OK") {
                    $("#gdId").val(re.Name);
                    $("#AccountManagerId").val(re.ManagerId);
                } else {
                    $("#ApplyTel").val("");
                    $("#gdId").val("");
                    alert("当前手机号不存在！");
                }
            }
        });
    },
    //绑定验证关系
    validateBind: function () {
        $('#holderform').bootstrapValidator({
            excluded: [":disabled"],
            message: 'This value is not valid',
            feedbackIcons: {/*输入框不同状态，显示图片的样式*/
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {/*验证*/
                ApplyTel: {
                    message: '登录手机号',
                    validators: {
                        notEmpty: {
                            message: '登录手机号'
                        },
                        stringLength: {
                            min: 2,
                            max: 16,
                            message: '登陆手机号不能为空！'
                        }
                    }
                }, CardNumber: {
                    message: '身份证号',
                    validators: {
                        notEmpty: {
                            message: '身份证号'
                        },
                        stringLength: {
                            min: 2,
                            max: 16,
                            message: '身份证号不能为空！'
                        }
                    }
                }, ShareholderName: {
                    message: '姓名',
                    validators: {
                        notEmpty: {
                            message: '姓名'
                        },
                        stringLength: {
                            min: 2,
                            max: 16,
                            message: '姓名不能为空！'
                        }
                    }
                },
                CardFront: {
                    message: '法人身份证正面无效',
                    validators: {
                        notEmpty: {
                            message: '法人身份证正面不能为空'
                        }
                    }
                },
                CardReverse: {
                    message: '法人身份证反面无效',
                    validators: {
                        notEmpty: {
                            message: '法人身份证反面不能为空'
                        }
                    }
                }
            }
        });
    },
    holderSubmit: function () {
        $('#holderform').bootstrapValidator('validate');
        var validator = $('#holderform').data('bootstrapValidator');
        if (validator.isValid() == false) {
            return;
        }
        var postData = $('#holderform').serializeObject();
        $.post('/Shareholder/Post', postData, function (result) {
            if (result.status == 1) {
                swal("添加成功", '', 'success').then(function () {
                    window.location.href = '/Shareholder/Index?ID=' + getQueryString("ID");
                });
            } else {
                swal(result.message, '', 'warning');
            }
        });
    },
    getQueryString: function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]); return 1;
    } 
};
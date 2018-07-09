$(function () {
    //加载区域信息
    Manageradd.loadAreaList();
    //绑定上传
    myUpload.bindImgUpload('file_LegalpersonSfzzmImg', 'img_LegalpersonSfzzmImg', 'LegalpersonSfzzmImg');
    myUpload.bindImgUpload('file_LegalpersonSfzfmImg', 'img_LegalpersonSfzfmImg', 'LegalpersonSfzfmImg');
    myUpload.bindImgUpload('file_LinkmainSfzZmImg', 'img_LinkmainSfzZmImg', 'LinkmainSfzZmImg');
    myUpload.bindImgUpload('file_LinkmainSfzFmImg', 'img_LinkmainSfzFmImg', 'LinkmainSfzFmImg');
    myUpload.bindImgUpload('file_BusinessLicense', 'img_BusinessLicense', 'BusinessLicense');
    myUpload.bindImgUpload('file_MoneyCertificates', 'img_MoneyCertificates', 'MoneyCertificates');
    myUpload.bindImgUpload('file_OpenAccountImg', 'img_OpenAccountImg', 'OpenAccountImg');
    myUpload.bindImgUpload('file_GeneralTaxpayerImg', 'img_GeneralTaxpayerImg', 'GeneralTaxpayerImg');


    myUpload.bindImgUpload('file_ContractImg', 'img_ContractImg', 'ContractImg');
    myUpload.bindImgUpload('file_ContractImg1', 'img_ContractImg1', 'ContractImg1');
    myUpload.bindImgUpload('file_ContractImg2', 'img_ContractImg2', 'ContractImg2');
    myUpload.bindImgUpload('file_ContractImg3', 'img_ContractImg3', 'ContractImg3');
    myUpload.bindImgUpload('file_ContractImg4', 'img_ContractImg4', 'ContractImg4');
    myUpload.bindImgUpload('file_ContractImg5', 'img_ContractImg5', 'ContractImg5');

    //验证绑定
    Manageradd.validateBind();

    //绑定数据
    Manageradd.BindArea();

});
var initProvince = 0;

var Manageradd = {
    loadAreaList: function () { },
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
                CenterName: {
                    message: '股东名称无效',
                    validators: {
                        notEmpty: {
                            message: '股东名称不能为空'
                        },
                        stringLength: {
                            min: 2,
                            max: 16,
                            message: '股东名称最多16个字'
                        }
                    }
                },
                ManagerFullName: {
                    message: '姓名无效',
                    validators: {
                        notEmpty: {
                            message: '姓名不能为空'
                        },
                        stringLength: {
                            min: 2,
                            max: 16,
                            message: '姓名最多16个字'
                        }
                    }
                },

                manager_account: {
                    message: '登录手机号无效',
                    validators: {
                        notEmpty: {
                            message: '登录手机号不能为空'
                        },
                        regexp: {
                            regexp: /^1\d{10}$/,
                            message: '登录手机号只能是11位手机号'
                        }
                    }
                },
                MobileNo: {
                    message: '登录手机号无效',
                    validators: {
                        notEmpty: {
                            message: '登录手机号不能为空'
                        },
                        regexp: {
                            regexp: /^1\d{10}$/,
                            message: '登录手机号只能是11位手机号'
                        }
                    }
                },


                CompanyAddress: {
                    message: '详细地址无效',
                    validators: {
                        notEmpty: {
                            message: '详细地址不能为空'
                        },
                        stringLength: {
                            min: 2,
                            max: 40,
                            message: '详细地址最多40个字'
                        }
                    }
                },
                CompanyTel: {
                    message: '企业电话格式(例如：023-88888888)',
                    validators: {
                        notEmpty: {
                            message: '企业电话不能为空'
                        },
                        regexp: {
                            regexp: /^((0\d{2,3}-\d{7,8})|(1\d{10}))$/,
                            message: '企业电话格式(例如：023-88888888)'
                        }
                    }
                },
                CompanyName: {
                    message: '企业名称无效',
                    validators: {
                        notEmpty: {
                            message: '企业名称不能为空'
                        },
                        stringLength: {
                            min: 2,
                            max: 40,
                            message: '企业名称最多40个字'
                        }
                    }
                },
                CompanyProfile: {
                    message: '企业简介无效',
                    validators: {
                        notEmpty: {
                            message: '企业简介不能为空'
                        },
                        stringLength: {
                            min: 2,
                            max: 40,
                            message: '企业简介最多100个字'
                        }
                    }
                },
                TaxpayersSbh: {
                    message: '税务识别号无效',
                    validators: {
                        notEmpty: {
                            message: '税务识别号不能为空'
                        },
                        stringLength: {
                            min: 2,
                            max: 100,
                            message: '税务识别号最多100个字'
                        }
                    }
                },
                BusinessLicenseNum: {
                    message: '营业执照号无效',
                    validators: {
                        notEmpty: {
                            message: '营业执照号不能为空'
                        },
                        stringLength: {
                            min: 2,
                            max: 100,
                            message: '营业执照号最多100个字'
                        }
                    }
                },
                BankName: {
                    message: '开户行无效',
                    validators: {
                        notEmpty: {
                            message: '开户行不能为空'
                        },
                        stringLength: {
                            min: 2,
                            max: 40,
                            message: '开户行最多40个字'
                        }
                    }
                },
                BankOpenname: {
                    message: '开户支行无效',
                    validators: {
                        notEmpty: {
                            message: '开户支行不能为空'
                        },
                        stringLength: {
                            min: 2,
                            max: 40,
                            message: '开户支行最多40个字'
                        }
                    }
                },
                BankAccountName: {
                    message: '开户名无效',
                    validators: {
                        notEmpty: {
                            message: '开户名不能为空'
                        },
                        stringLength: {
                            min: 2,
                            max: 20,
                            message: '开户名最多20个字'
                        }
                    }
                },
                BankAccountNumber: {
                    message: '银行账号无效',
                    validators: {
                        notEmpty: {
                            message: '银行账号不能为空'
                        },
                        regexp: {
                            regexp: /^[0-9]*$/,
                            message: '请输入正确的银行帐号'
                        }
                    }
                },
                CompanyFzrname: {
                    message: '负责人无效',
                    validators: {
                        notEmpty: {
                            message: '负责人不能为空'
                        },
                        stringLength: {
                            min: 2,
                            max: 16,
                            message: '负责人最多16个字'
                        }
                    }
                },
                CompanyFzrposition: {
                    message: '职务无效',
                    validators: {
                        notEmpty: {
                            message: '职务不能为空'
                        },
                        stringLength: {
                            min: 2,
                            max: 20,
                            message: '职务最多20个字'
                        }
                    }
                },
                CompanyLegalperson: {
                    message: '法人无效',
                    validators: {
                        notEmpty: {
                            message: '法人不能为空'
                        },
                        stringLength: {
                            min: 2,
                            max: 16,
                            message: '法人最多16个字'
                        }
                    }
                },
                FinanceContactor: {
                    message: '财务联系人无效',
                    validators: {
                        notEmpty: {
                            message: '财务联系人不能为空'
                        },
                        stringLength: {
                            min: 2,
                            max: 16,
                            message: '财务联系人最多16个字'
                        }
                    }
                },
                FinancePhone: {
                    message: '财务联系人电话无效',
                    validators: {
                        notEmpty: {
                            message: '财务联系人电话不能为空'
                        }
                    }
                },
                LegalpersonSfzh: {
                    message: '法人身份证号无效',
                    validators: {
                        notEmpty: {
                            message: '法人身份证号不能为空'
                        },
                        regexp: {
                            regexp: /^(\d{15}$|^\d{18}$|^\d{17}(\d|X|x))$/,
                            message: '请输入正确的身份证号'
                        }
                    }
                },
                LegalpersonSfzzmImg: {
                    message: '法人身份证正面无效',
                    validators: {
                        notEmpty: {
                            message: '法人身份证正面不能为空'
                        }
                    }
                },
                LegalpersonSfzfmImg: {
                    message: '法人身份证反面无效',
                    validators: {
                        notEmpty: {
                            message: '法人身份证反面不能为空'
                        }
                    }
                },
                LinkmainSfzZmImg: {
                    message: '联系人身份证正面无效',
                    validators: {
                        notEmpty: {
                            message: '联系人身份证正面不能为空'
                        }
                    }
                },
                LinkmainSfzFmImg: {
                    message: '联系人身份证反面无效',
                    validators: {
                        notEmpty: {
                            message: '联系人身份证反面不能为空'
                        }
                    }
                },
                BusinessLicense: {
                    message: '营业执照无效',
                    validators: {
                        notEmpty: {
                            message: '营业执照不能为空'
                        }
                    }
                },
                MoneyCertificates: {
                    message: '收款凭证无效',
                    validators: {
                        notEmpty: {
                            message: '收款凭证不能为空'
                        }
                    }
                },
                OpenAccountImg: {
                    message: '对公帐号开户许可证无效',
                    validators: {
                        notEmpty: {
                            message: '对公帐号开户许可证不能为空'
                        }
                    }
                },
                FinanceContactor: {
                    message: '财务联系人无效',
                    validators: {
                        notEmpty: {
                            message: '财务联系人不能为空'
                        },
                        stringLength: {
                            min: 2,
                            max: 16,
                            message: '财务联系人最多16个字'
                        }
                    }
                },
                FinancePhone: {
                    message: '财务联系人电话（例：023-XXXXXXXX或手机号码）',
                    validators: {
                        notEmpty: {
                            message: '财务联系人电话不能为空'
                        },
                        regexp: {
                            regexp: /^((0\d{2,3}-\d{7,8})|(1\d{10}))$/,
                            message: '财务联系人电话（例：023-XXXXXXXX或手机号码）'
                        }
                    },
                }
            }
        });
    },
    BindArea: function () {
        $("#InvitedOrderNo").blur(function () {
            $.post("/Center/GetMerchantInfo", { orderNo: $("#InvitedOrderNo").val() }, function (data) {






                if (data.data != null) {
                    if (data.data.InvitedManagerCenter == null || data.data.ManagementCenterId == null) {
                        $("#InvitedOrderNo1").show();
                    } else {
                        $("#InvitedOrderNo1").hide();
                        debugger;
                        var html = " 邀请管理中心:" + data.data.InvitedManagerCenter;
                        var html1 = " 邀请商家:" + data.data.InvitedMerchantName;
                        $("#Info").text(html);
                        $("#Info1").text(html1);
                    }
                } else {
                    $("#InvitedOrderNo1").show();
                }


            });


        });

    },
    chooseType: function (Vtype) {
        $("#RecommendedType").val(Vtype);
        //DeclarationType  报单
        if (Vtype == "1") {
            $("#DeclarationType").show();
            $("#DirectShareType").hide();
        }
        else {
            $("#DeclarationType").hide();
            $("#DirectShareType").show();
            if (initProvince == 0) {
                initProvince += 1;
                loadProvinceData();
            }
            //$("#ManagementCenterId")
        }
    },
    centerSubmit: function () {
        var _areaList = "";
        for (var i = 0; i < areaList.length; i++) {
            _areaList += areaList[i] + ",";
        }
        $("#BelongProvinceCode").val(_areaList);
        $('#holderform').bootstrapValidator('validate');
        var validator = $('#holderform').data('bootstrapValidator');
        if (validator.isValid() == false) {
            return;
        }

        var postData = $('#holderform').serializeObject();
        $.post('/Center/CenterManageMentAdd', postData, function (result) {
            if (result.status == 1) {
                swal("添加成功", '', 'success').then(function () {
                    location.href = '/Center/ManageMentList';
                });
            } else {
                swal(result.message, '', 'warning');
            }
        });
    },

};
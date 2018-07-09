$(function () {
    login.pageLoad();
    

    
});


var login = {
    //页面加载
    pageLoad: function () {
        $("input[type='checkbox']").labelauty();
        $(".login-bg").height(document.documentElement.clientHeight);
        $("box").height(document.documentElement.clientHeight);
        if (localStorage.getItem("uid") != null) {
            $("#name").val(localStorage.getItem("uid"));
            $("#labelauty-1").attr("checked", true);
            flag = 1;
        }
        
        //登录事件绑定
        $("#loginBtn").click(function () {
            login.doLogin();
        });

        //绑定更换验证码
        $('#validateImg').click(function () {
            login.changeValidate();
        });
        //加载验证码
        login.changeValidate();
        $(".loginitem").keyup(function (e) {
            var eCode = e.keyCode ? e.keyCode : e.which ? e.which : e.charCode;
            if (eCode == 13) {
                login.doLogin();
            }
        })
    },
    //更换验证码
    changeValidate: function () {
        $("#validateImg").attr("src", "/User/ValidateCode" + "?r=" + Math.random());
    },
    //登录实现
    doLogin: function () {
        var postData = {
            UserName: $('#UserName').val(),
            Password: $('#Password').val(),
            VCode: $('#VCode').val()
        };

        if (postData.UserName == "" || postData.UserName == null || postData.Password == "" || postData.Password == null) {
            swal('账号或密码不能为空!', '', 'warning');
            return;
        }
        if (postData.VCode == "" || postData.VCode == null) {
            swal('验证码不能为空!', '', 'warning');
            return;
        }
        $.ajax({
            url: '/User/Ajax_Login',
            data: postData,
            type: 'POST',
            dataType: 'JSON',
            beforeSend: function () {
                $("#loginBtn").removeClass("loginClick");
                $("#loginBtn").html("登录中..");
            },
            success: function (data) {
                if (data.status != 1) {
                    login.changeValidate();
                    swal(data.message, '', 'warning');
                    $('#loginBtn').addClass("loginClick");
                    $("#loginBtn").html("登录");
                    return;
                }
                else {
                    location.href = "/Home/Index";
                }
            },
            error: function () {
                swal('登录超时', '', 'warning');
                $("#loginBtn").addClass("loginClick");
                $("#loginBtn").html("登录");
            }
        });
    }
};
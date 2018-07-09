$(function () {
    idx.loadMenu();
})

var idx = {
    loadMenu: function () {
        $.ajax({
            url: '/Home/LoadMenu',
            type: 'POST',
            dataType: 'JSON',
            success: function (result) {
                if (result.status != 1)
                    return;
                var html = '';
                $.each(result.data, function (i) {
                    var itemData = result.data[i]
                    html += '<li class="treeview">';
                    html += '<a href="">\
                                <i class="fa fa-' + itemData.MenuIcon + '"></i><span>' + itemData.MenuName + '</span>\
                                <span class="pull-right-container"><i class="fa fa-angle-left pull-right"></i></span>\
                            </a>';
                    html += '<ul class="treeview-menu">';
                    $.each(itemData.ChildMenus, function (j) {
                        var itemDataC = itemData.ChildMenus[j];
                        html += '<li>\
                                    <a href="' + itemDataC.MenuLink + '" target="ifr_main" class="menuitemlink">\
                                    <i class="fa fa-circle" style="font-size:12px;"></i><span>' + itemDataC.MenuName + '</span></a>\
                                </li>';
                    });
                    html += '</ul>';
                    html += '</li>';
                });

                $('#menuTree').html(html);
                $('.menuitemlink').click(function () {
                    var screenSizes = $.AdminLTE.options.screenSizes;
                    if ($(window).width() <= (screenSizes.sm - 1)) {
                        if ($("body").hasClass('sidebar-open')) {

                            $("body").removeClass('sidebar-open').removeClass('sidebar-collapse').trigger('collapsed.pushMenu');
                        } else {
                            $("body").addClass('sidebar-open').trigger('expanded.pushMenu');
                        }
                    }
                });
            },
        });
    },
    //显示修改密码
    showChangePwd: function () {
        $('#coverPwd').show();
    },
    //关闭修改密码
    closeChangePwd: function () {
        $('#coverPwd').hide();
    },
    //执行修改密码
    doChangePwd: function () {
        var postData = {
            oldPass: $('#oldPass').val(),
            newPass: $('#newPass').val(),
            newpayPwd2: $('#newpayPwd2').val()
        };
        if (postData.oldPass == '' || postData.oldPass == null) {
            swal('请输入原密码!', '', 'warning');
            return;
        }

        if (postData.newPass == '' || postData.newPass == null) {
            swal('请输入新密码!', '', 'warning');
            return;
        }

        if (postData.newpayPwd2 == '' || postData.newpayPwd2 == null) {
            swal('请输入确认密码!', '', 'warning');
            return;
        }

        if (postData.newPass != postData.newpayPwd2) {
            swal('新密码与确认密码不一致!', '', 'warning');
            return;
        }
        
        $.post('/Account/ChangePassword', postData, function (result) {
            if (result.status != 1) {
                swal(result.message, '', 'warning');
                return;
            }
            swal(result.message, '', 'success').then(function (s) {
                $('#coverPwd').hide();
                $('#oldPass').val('');
                $('#newPass').val('');
                $('#newpayPwd2').val('');
            });
        });


    },
};
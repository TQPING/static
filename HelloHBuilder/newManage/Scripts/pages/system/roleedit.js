$(function () {
    var roleid = myfuns.GetQueryInt('roleid');
    roleedit.loadInfo(roleid);
});

var roleedit = {
    loadInfo: function (roleid) {
        var postData = {
            roleid: roleid
        };
        $.post('/System/RoleLoadInfo', postData, function (result) {
            if (result.status != 1) {
                return;
            }
            var roleData = result.data;
            $('#RoleId').val(roleData.RoleId);
            $('#RoleName').val(roleData.RoleName);
            $('#RoleRemarks').val(roleData.RoleRemarks);
            $.each($('.RoleStatus'), function (i) {
                if (roleData.RoleStatus == $('.RoleStatus').eq(i).val()) {
                    $('.RoleStatus').eq(i).prop('checked', true);
                }
            });
            var menuhtml = '';
            $.each(roleData.RoleMenus, function (i) {
                var itemMenu = roleData.RoleMenus[i];
                menuhtml += '<div class="role-menu">';
                menuhtml += '<div class="role-menu-main">';
                menuhtml += '<label><input type="checkbox" class="rolemenu mainmenu mmenu_' + itemMenu.MenuID + '" data-menuid="' + itemMenu.MenuID + '" data-parentid="' + itemMenu.MenuParentID + '" ' + (itemMenu.Checked == 1 ? ' checked="checked"' : '') + ' value="' + itemMenu.MenuID + '"/> ' + itemMenu.MenuTitle + '</label>';
                menuhtml += '</div>';
                menuhtml += '<div class="role-menu-sub">';
                var subMenus = itemMenu.ChildMenus;
                $.each(subMenus, function (j) {
                    var subMenu = subMenus[j];
                    menuhtml += '<label><input type="checkbox" class="rolemenu submenu smenu_' + subMenu.MenuParentID + '" data-menuid="' + subMenu.MenuID + '" data-parentid="' + subMenu.MenuParentID + '" ' + (subMenu.Checked == 1 ? ' checked="checked"' : '') + ' value="' + subMenu.MenuID + '"/> ' + subMenu.MenuTitle + '</label>';
                });
                menuhtml += '</div>';
                menuhtml += '<div class="mycl"></div>';
                menuhtml += '</div>';
            });
            $('#div_menus').html(menuhtml);


            $('.submenu').click(function () {
                var pid = $(this).attr('data-parentid');
                var scobjs = $('.smenu_' + pid + ':checked');
                if(scobjs.length > 0){
                    $('.mmenu_' + pid).prop('checked',true);
                } 
                else{
                    $('.mmenu_' + pid).prop('checked',false);
                }
            });

            $('.mainmenu').click(function () {
                var mid = $(this).attr('data-menuid');
                if ($(this).prop('checked')) {
                    $('.smenu_' + mid).prop('checked', true);
                }
                else {
                    $('.smenu_' + mid).prop('checked', false);
                }
            });
        });
    },
    saveRole: function () {
        var postData = {};
        postData.RoleId = $('#RoleId').val();
        postData.RoleName = $('#RoleName').val();
        postData.RoleStatus = 0;
        if ($('.RoleStatus:checked').length > 0) {
            postData.RoleStatus = $('.RoleStatus:checked').eq(0).val();
        }
        postData.RoleRemarks = $('#RoleRemarks').val();
        var menuObjs = $('.rolemenu:checked');
        $.each(menuObjs, function (i) {
            postData['RoleMenus[' + i + '].MenuID'] = menuObjs.eq(i).val();
        });
        $.post('/System/RoleSave', postData, function (result) {
            if (result.status != 1) {
                swal(result.message, '', 'warning');
                return;
            }
            swal("角色保存成功", '', 'success').then(function (s) {
                location.href = '/System/RoleList';
            });
        });
    }
};
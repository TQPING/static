$(function () {
    var menuid = myfuns.GetQueryInt('menuid');
    //if (menuid > 0) {
    menuedit.loadInfo(menuid);
    //}
});

var menuedit = {
    loadInfo: function (menuid) {
        var postData = {
            menuid:menuid
        };
        $.post('/System/MenuLoadInfo', postData, function (result) {
            if (result.status != 1) {
                return;
            }
            var menuData = result.data.menu;
            var topMenus = result.data.topMenus;
            $('#MenuId').val(menuData.MenuId);
            $('#MenuLink').val(menuData.MenuLink);
            var menuParentHtml = '<option value="0" selected="selected">顶级菜单</option>';
            $.each(topMenus, function (i) {
                menuParentHtml += '<option value="' + topMenus[i].MenuId + '">' + topMenus[i].MenuTitle + '</option>';
            });
            $('#MenuParentId').html(menuParentHtml);

            $('#MenuParentId').val(menuData.MenuParentId);
            $('#MenuRemark').val(menuData.MenuRemark);
            $('#MenuSort').val(menuData.MenuSort);
            $('#MenuTitle').val(menuData.MenuTitle);
            $('#MenuIcon').val(menuData.MenuIcon);
            $('#MenuStatus').val(menuData.MenuStatus);
            var statusObjs = $('.MenuStatus');
            statusObjs.removeProp('checked');
            $.each(statusObjs, function (i) {
                if (statusObjs.eq(i).val() == menuData.MenuStatus) {
                    statusObjs.eq(i).prop('checked', true);
                }
            });
            console.log(JSON.stringify(result.data));
        });
    },
    back: function () {
        history.go(-1);
    },
    menuModify: function () {
        var MenuStatus = 0;
        if ($('.MenuStatus:checked').length > 0) {
            MenuStatus = $('.MenuStatus:checked').eq(0).val();
        }
        var saveObj = {
            MenuId: $('#MenuId').val(),
            MenuParentId: $('#MenuParentId').val(),
            MenuIcon: $('#MenuIcon').val(),
            MenuLink: $('#MenuLink').val(),
            MenuSort: $('#MenuSort').val(),
            MenuStatus: MenuStatus,
            MenuTitle: $('#MenuTitle').val()
        };

        $.post('/System/MenuSave', saveObj, function (result) {
            if (result.status != 1) {
                swal(result.message, '', 'warning');
                return;
            }
            swal("菜单保存成功", '', 'success').then(function (s) {
                location.href = '/System/MenuList';
            });
        });

    }
};
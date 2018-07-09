$(function () {
    var accountid = myfuns.GetQueryInt('accountid');
    accountedit.loadInfo(accountid);
});

var accountedit = {
    loadInfo: function (accountid) {
        var postData = {
            accountid:accountid
        };
        $.post('/System/AccountLoadInfo', postData, function (result) {
            if (result.status != 1) {
                return;
            }
            var accData = result.data;
            $('#ManagerId').val(accData.ManagerId);
            $('#ManagerEmail').val(accData.ManagerEmail);
            $('#ManagerRealname').val(accData.ManagerRealname);

            $.each($('.ManagerStatus'), function (i) {
                if ($('.ManagerStatus').eq(i).val() == accData.ManagerStatus) {
                    $('.ManagerStatus').eq(i).prop('checked', true);
                }
            });

            $.each($('.IsSupper'), function (i) {
                if ($('.IsSupper').eq(i).val() == accData.IsSupper) {
                    $('.IsSupper').eq(i).prop('checked', true);
                }
            });

            $('#ManagerTel').val(accData.ManagerTel);
            $('#ManagerName').val(accData.ManagerName);
            if (accData.ManagerId > 0) {
                $('#ManagerName').attr('disabled', 'disabled');
            }
            $('#Password').val(accData.Password);
            $('#RePassword').val(accData.RePassword);
            var roleHtml = '';
            $.each(accData.Roles, function (i) {
                var curRole = accData.Roles[i];
                roleHtml += '<label><input type="checkbox" class="roleitem" ' + (curRole.Checked == 1 ? ' checked="checked"' : '') + ' value="' + curRole.RoleID + '"/> ' + curRole.RoleName + '</label>';
            });
            $('#div_roles').html(roleHtml);
        });
    },
    saveInfo: function () {
        var postData = {};
        postData.ManagerId = $('#ManagerId').val();
        postData.ManagerName = $('#ManagerName').val();
        postData.ManagerRealname = $('#ManagerRealname').val();
        postData.ManagerTel = $('#ManagerTel').val();
        postData.ManagerStatus = 0;
        if ($('.ManagerStatus:checked').length > 0) {
            postData.ManagerStatus = $('.ManagerStatus:checked').eq(0).val();
        }
        postData.IsSupper = 0;
        if ($('.IsSupper:checked').length > 0) {
            postData.IsSupper = $('.IsSupper:checked').eq(0).val();
        }
        $.each($('.roleitem:checked'), function (i) {
            postData['Roles[' + i + '].RoleID'] = $('.roleitem:checked').eq(i).val();
        });
        $.post('/System/AccountSaveInfo', postData, function (result) {
            if (result.status != 1) {
                swal(result.message, '', 'warning');
                return;
            }
            swal("账号保存成功", '', 'success').then(function (s) {
                location.href = '/System/AccountList';
            });
        });
    }
};
$(function () {
    menulist.loadInfo();
})


var menulist = {
    loadInfo: function () {
        var postData = {};
        $.post('/System/MenuLoadList', postData, function (result) {
            var data = result.data;
            var html = '<thead style="display: table-header-group;">\
                    <tr>\
                        <th tabindex="0"><div class="th-inner">菜单标题</div></th>\
                        <th tabindex="0"><div class="th-inner">菜单连接地址</div></th>\
                        <th tabindex="0"><div class="th-inner">状态</div></th>\
                        <th tabindex="0"><div class="th-inner">操作</div></th>\
                    </tr>\
                </thead>';
            html += '<tbody>';
            $.each(data, function (i) {
                var itemData = data[i];
                html += '<tr data-index="0">\
                        <td><span style="display: inline-block; width:0px;"></span><span class="folder-open"></span>' + itemData.MenuName + '</td>\
                        <td></td>\
                        <td></td>\
                        <td align="center"><a href="/System/MenuEdit?menuid=' + itemData.MenuID + '">编辑</a></td>\
                    </tr>';
                $.each(itemData.ChildMenus, function (j) {
                    var itemCData = itemData.ChildMenus[j];
                    html += '<tr data-index="1">\
                        <td><span style="display: inline-block; width:20px;"></span><span class="folder-line"></span><span class="folder-open"></span>' + itemCData.MenuName + '</td>\
                        <td>' + itemCData.MenuLink + '</td>\
                        <td></td>\
                        <td align="center"><a href="/System/MenuEdit?menuid=' + itemCData.MenuID + '">编辑</a></td>\
                    </tr>';
                });
            });
            html += '</tbody>';
            $('#menutable').html(html);
        });
    }
};
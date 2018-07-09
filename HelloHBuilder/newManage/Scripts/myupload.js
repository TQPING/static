var myUpload = {

    bindImgUpload: function (fileCtrlid, imgid,orginid) {
        $('#' + fileCtrlid).parent().dmUploader({
            url: '/File/UploadImage',
            dataType: 'json',
            allowedTypes: 'image/*',
            onBeforeUpload: function (id) {
                //上传前
            },
            onComplete: function () {
                
            },
            onUploadProgress: function (id, percent) {
                //上传中
                
            },
            onUploadSuccess: function (id, data) {
                debugger;
                $('#' + imgid).attr('src', data.imgPath)
                $('#' + orginid).val(data.imgPath).change();
            },
            onUploadError: function (id, message) {
                swal("上传失败");
            }
        });

        //$('#' + fileCtrlid).change(function () {
        //    if ($('#' + fileCtrlid).val().length < 1) {
        //        swal("请选择文件", '', 'warning');
        //        return;
        //    }
        //    $.ajaxFileUpload({
        //        url: '/File/UploadImage', //用于文件上传的服务器端请求地址
        //        type: 'post',
        //        xhr: function () { // custom xhr
        //            //上传进度
        //            //myXhr = $.ajaxSettings.xhr();
        //            //if (myXhr.upload) { // check if upload property exists
        //            //    myXhr.upload.addEventListener('progress', progressHandlingFunction, false); // for handling the progress of the upload
        //            //}
        //            //return myXhr;
        //        },
        //        cache: false,
        //        contentType: false,
        //        processData: false,
        //        //  data: { Id: 'file_head1', name: 'manager_exp_legalperson_sfzimg' }, //此参数非常严谨，写错一个引号都不行
        //        secureuri: false, //一般设置为false
        //        fileElementId: fileCtrlid, //文件上传空间的id属性  <input type="file" id="file" name="file" />
        //        dataType: 'json', //返回值类型 一般设置为json
        //        success: function (data, status)  //服务器成功响应处理函数
        //        {
        //            $('#' + imgid).attr('src', data.imgPath)
        //            //hideProgress();
        //            //$("#headimg" + type).attr("src", data.imgPath);
        //            //$("#file_" + type).val(data.imgPath);
        //        },
        //        error: function (data, status, e)//服务器响应失败处理函数
        //        {
        //            //hideProgress();
        //            swal("上传失败");
        //        }
        //    });
        //
        //});
    }
};
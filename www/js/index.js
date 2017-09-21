
(function ($, w, doc) {

    "use strict"

    var socket = io.connect();

    //dom对象缓存
    var cache = {
        message: $('#message'),
        container: $('.container')
    }

    function send() {
        if (cache.message.val() == '') {
            alert('请输入消息内容');
            return
        }
        //$.bulletScreen.send(cache.message.val(),cache.container);
        //console.log(cache.message.val());

        socket.emit('msg', cache.message.val());
        cache.message.val('');
    }

    var handler = {
        init: function () {
            this.bindEvent();

        },
        bindEvent: function () {
            $(doc).on('click', '#send', send);

            $(doc).on('keyup', '#message', function (e) {
                if (e.keyCode == 13) {
                    send();
                }
            })
            socket.on('news', function (data) {

                $.bulletScreen.send(data, cache.container);
            });

            $(doc).on('click', '#clear', function () {
                $.bulletScreen.clear(cache.container);
            })
        }
    }


    //入口
    $(function () {
        handler.init();

    })

})(jQuery, window, document)
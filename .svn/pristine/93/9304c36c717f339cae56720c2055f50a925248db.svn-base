(function() {

    if (window.XuntongJSBridge) {
        // Android加上了这个if判断，如果当前window已经定义了XuntongBridge对象，不再重新加载
        // 避免重新初始化_callback_map等变量，导致之前的消息回调失败，返回cb404
        //alert('window already has a XuntongBridge object!!!');
        return;
    };

    /////////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////本地调用的实际逻辑////////////////////////////////////////////
    var _CUSTOM_PROTOCOL_SCHEME = 'xuntong',
        callbacksCount = 1,
        iframe = null,
        callbacks = {};
    var iframeArray;
    var init = false;
    var functionCount = 0;

    function _handleMessageFromXT(callbackId, message) {

        try {
            var callback = callbacks[callbackId];
            if (!callback) return;
            callback.apply(null, [message]);
        } catch (e) {
            alert(e)
        }
    }

    /**
     * 获取用户ua信息,判断OS
     * @returns {string}
     */
    function getOS() {
        var userAgent = navigator.userAgent;
        return userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) ? 'ios' : userAgent.match(/Android/i) ? 'android' : '';
    }
    /**
     * 判断用户是否在云之家桌面端中
     * @returns {Array|{index: number, input: string}}
     */
    function isCloudHub() {
        var userAgent = navigator.userAgent;
        return userAgent.match(/App\/cloudhub/);
    }

    // Use this in javascript to request native objective-c code
    // functionName : string (I think the name is explicit :p)
    // args : array of arguments
    // callback : function with n-arguments that is going to be called when the native code returned
    function _call(functionName, message, callback) {
        //只有在手机或电脑端云之家中才允许调用Xuntong JSBridge
        // if ( !(getOS() || isCloudHub()) )return false;
        var hasCallback = callback && typeof callback == "function";
        var callbackId = hasCallback ? callbacksCount++ : 0;

        if (hasCallback)
            callbacks[callbackId] = callback;

        if (!init) {
            iframeArray = new Array(4);
            for (var i = 0; i < iframeArray.length; i++) {
                var frame = window.document.createElement("IFRAME");
                frame.setAttribute("height", "1px");
                frame.setAttribute("width", "1px");
                //            frame.style.cssText = 'position:absolute;top:-1000000px;left:-100000px;';
                frame.style.display = 'none';
                window.document.documentElement.appendChild(frame);
                iframeArray[i] = frame;
            }
            init = true;
        }
        var index = functionCount % 4;
        var frameTemp = iframeArray[index];
        frameTemp.src = _CUSTOM_PROTOCOL_SCHEME + ":" + functionName + ":" + callbackId + ":" + encodeURIComponent(JSON.stringify(message));
        functionCount++;
    }




    var __XuntongJSBridge = {
        // public
        invoke: _call,
        call: _call,
        handleMessageFromXT: _handleMessageFromXT
    };

    window.XuntongJSBridge = __XuntongJSBridge;

})();
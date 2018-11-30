(function() {
    function wxjump() {
        var _proto = wxjump.prototype;
        _proto.getQueryString = function(name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
            var r = window.location.search.substr(1).match(reg);
            if (r != null) return decodeURIComponent(r[2]);
            return null;
        }
        _proto.getUserInfo = function() {
            //如果没有openid则跳去授权获取客户信息 "nickname", "headimgurl", "openid", "province", "city", "error"]
            if (!localStorage.getItem("mt_openid")) {
                //如果链接中也没有参数则跳转授权
                if (!this.getQueryString("openid")) {
                    window.location.href = "http://act.guoanfamily.com/openweixin/user/getCode?redirect_url=" + window.location.href;
                } else {
                    //从链接中获取了参数，则存到本地
                    localStorage.setItem("strategy_name", this.getQueryString("nickname"));
                    localStorage.setItem("strategy_photoUrl", this.getQueryString("headimgurl"));
                    localStorage.setItem("mt_openid", this.getQueryString("openid"));
                    localStorage.setItem("mt_province", this.getQueryString("province"));
                    localStorage.setItem("mt_city", this.getQueryString("city"));
                }
            }
        }
    }

    window.$wxjump = new wxjump();
})(window)
// window.$wxjump.getUserInfo();
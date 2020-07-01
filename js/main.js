$(function(){
    var mobile_flag = isMobile(); // true为PC端，false为手机端
    if(mobile_flag){
        $('.aside-menu').on('click',function () {
            $('.mav-main div:eq(0)').removeClass('aside-nav');
            $('.mav-main div:eq(0)').addClass('m_aside-nav');
        });
    }
});

function isMobile() {
    var userAgentInfo = navigator.userAgent;

    var mobileAgents = [ "Android", "iPhone", "SymbianOS", "Windows Phone", "iPad","iPod"];

    var mobile_flag = false;

    //根据userAgent判断是否是手机
    for (var v = 0; v < mobileAgents.length; v++) {
        if (userAgentInfo.indexOf(mobileAgents[v]) > 0) {
            mobile_flag = true;
            break;
        }
    }

    var screen_width = window.screen.width;
    var screen_height = window.screen.height;

    //根据屏幕分辨率判断是否是手机
    if(screen_width < 500 && screen_height < 800){
        mobile_flag = true;
    }

    return mobile_flag;
}
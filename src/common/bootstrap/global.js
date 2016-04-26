/**
 * this file will be loaded before server started
 * you can define global functions used in controllers, models, templates
 */

/**
 * use global.xxx to define global functions
 * 
 * global.fn1 = function(){
 *     
 * }
 */
/**
 * 密码加密
 * @param password
 * @param md5encoded
 * @returns {*}
 */
/*global encryptPassword */
global.encryptPassword = function (password, md5encoded) {
    md5encoded = md5encoded || false;
    password = md5encoded ? password : think.md5(password);
    return think.md5(password + think.md5('ala'));
}
/**
 * global times
 * 时间格式化
 * @param d
 * @returns {string}
 */
global.gettimes = function () {
    var time;
    var date = new Date();
    var y = date.getFullYear();
    var M = date.getMonth() + 1;
    M = M < 10 ? "0" + M : M;
    var d = date.getDate();
    d = d < 10 ? "0" + d : d;
    var h = date.getHours();
    h = h < 10 ? "0" + h : h;
    var m = date.getMinutes();
    m = m < 10 ? "0" + m : m;
    var s = date.getSeconds();
    s = s < 10 ? "0" + s : s;

    time = y + "-" + M + "-" + d + " " + h + ":" + m + ":" + s;


    return time;
}
/**
 * 根据经纬度测距离
 * @param password
 * @param md5encoded
 * @returns {*}
 */
/*global encryptPassword */
global.getDistance = function (lat1, lng1, lat2, lng2) {
    lat1 * PI / 180.0
    var EARTH_RADIUS = 6378137.0; //单位M 
    var PI = Math.PI;
    var radLat1 = lat1 * PI / 180.0;
    var radLat2 = lat2 * PI / 180.0;

    var a = radLat1 - radLat2;
    var b = lng1 * PI / 180.0 - lng2 * PI / 180.0;

    var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)));
    s = s * EARTH_RADIUS;
    s = Math.round(s * 10000) / 10000.0;

    return s;
}
/**
 * 判断时间交集
 * @param password
 * @param md5encoded
 * @returns {*}
 */
/*global encryptPassword */
global.timeInclude = function (btime1, etime1, btime2, etime2) {
    begin1Time = new Date(btime1).getTime();
    end1Time = new Date(etime1).getTime();
    begin2Time = new Date(btime2).getTime();
    end2Time = new Date(etime2).getTime();
    
    if((begin1Time>=begin2Time && begin1Time<end2Time)||
    (end1Time>begin2Time && end1Time<=end2Time)||
    (begin1Time<=begin2Time && begin2Time>=end2Time))
    {
        return true;
    }else{
        return false;
        
    }

}
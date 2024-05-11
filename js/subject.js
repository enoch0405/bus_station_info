console.log("안녕하세요")

var xhr = new XMLHttpRequest();
var url = 'http://ws.bus.go.kr/api/rest/stationinfo/getStationByName'; /*URL*/
var queryParams = '?' + encodeURIComponent('serviceKey') + '='+'Xhhtp6o3z4f7BOdsmlZ94BhZZKweTPbK9SwsaxHQmLhdWTYvOrFdAs4aSD6yPZZSJRh5VBGU2v%2BuABrSXp1bBQ%3D%3D'; /*Service Key*/
queryParams += '&' + encodeURIComponent('stSrch') + '=' + encodeURIComponent('경성중고사거리'); /**/
xhr.open('GET', url + queryParams);

xhr.onreadystatechange = function () {
    if (this.readyState == 4) {
        alert('Status: '+this.status+'nHeaders: '+JSON.stringify(this.getAllResponseHeaders())+'nBody: '+this.responseText);
    }
};

xhr.send('');

console.log(xhr, queryParams);
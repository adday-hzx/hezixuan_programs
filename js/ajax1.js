function  respondes(x1,x2,x3,callback) {
    var xhr = new XMLHttpRequest();
    xhr.open(x1, 'https://mockapi.eolinker.com/2ZhGVxjacb39010e6753bd9c02ee803e6e3bfeab6e8007c/' + x2)
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    xhr.send(x3);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var res = JSON.parse(xhr.responseText);
            var str = res.data;
            callback(str);
        }
    }
}
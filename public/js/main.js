function getHost() {
    var x = 'http://' + location.hostname + '/https://yourblockedurl.com/image.png';
    document.getElementById("host").innerHTML= x;
    document.getElementById("host2").innerHTML= x;
}
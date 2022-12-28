const items = document.getElementById('items');

let xnr = new XMLHttpRequest();
xnr.open('GET', 'http://netology-slow-rest.herokuapp.com');
xnr.responseType = 'text';
xnr.setRequestHeader('Content-Type', 'http://netology-slow-rest.herokuapp.com');
xnr.send();
xnr.onreadystatechange = function () {
    if(xnr.readyState === 4) {
    console.log(xnr.responseType);
    };
    };
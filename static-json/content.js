var urlParams;
(window.onpopstate = function () {
    var match,
        pl     = /\+/g,  // Regex for replacing addition symbol with a space
        search = /([^&=]+)=?([^&]*)/g,
        decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
        query  = window.location.search.substring(1);

    urlParams = {};
    while (match = search.exec(query))
        urlParams[decode(match[1])] = decode(match[2]);
})();
// console.log(urlParams);

var content = {
    img1: 'img/stageelement_1532291238.MQ6.0.stage.20180727114230.jpeg'
}


if ("audience" in urlParams && urlParams.audience == "young_women") {
    content.headerText1 = "All possibilities, same car";
    content.text1 = "The philosophy behind the dynamic C-Class is to never stop improving. The new model offers more comfort, more innovation, and more style than ever before. Explore the whole range of Mercedes-Benz C-Class today.";
    content.img1 = 'img/audience_young_women/1.jpg';
    content.img2 = 'img/audience_young_women/2.jpg';
    content.img3 = 'img/audience_young_women/3.jpg';
    content.img4 = 'img/audience_young_women/4.jpg';
    content.img5 = 'img/audience_young_women/5.jpg';
}

if ("language" in urlParams) {
    content.headerText1 = "Todas las posibilidades, el mismo coche";
    content.text1 = "La filosofía detrás del dinámico C-Class es mejorar continuamente. El nuevo modelo ofrece más comodidad, más innovación y más estilo que nunca. Explore toda la gama de Mercedes-Benz C-Class hoy.";
    content.img1 ='img/stageelement_1532291238.MQ6.0.stage.20180727114230.jpeg';
    content.img2 = content.img3 =content.img4 = content.img5 = '';
}


var img1 = document.getElementById('img1');
var img2 = document.getElementById('img2');
var img3 = document.getElementById('img3');
var img4 = document.getElementById('img4');
var img5 = document.getElementById('img5');
var headerText1 = document.getElementById('headerText1');
var text1 = document.getElementById('text1');

if (content.img1) {
    img1.setAttribute("src", content.img1);
}else{

}
if (content.img2) {
    img2.setAttribute("src", content.img2);
}
if (content.img3) {
    img3.setAttribute("src", content.img3);
}
if (content.img4) {
    img4.setAttribute("src", content.img4);
}
if (content.img5) {
    img5.setAttribute("src", content.img5);
}
if (content.headerText1) {
    headerText1.innerText = content.headerText1;
}
if (content.text1) {
    text1.innerText = content.text1;
}
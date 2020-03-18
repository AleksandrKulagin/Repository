imgs = [
'orange.jpg',
'Red.png',
'yellow.png',
'green.jpg'
];

setInterval(function(){
    img = imgs[Math.floor(Math.random()*imgs.length)];
    $('span').text(img);
    $('img').attr('src', img);
}, 1000);
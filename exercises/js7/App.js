const ele1 = document.getElementById('img_1');
const ele2 = document.getElementById('img_2');
console.log(ele1.getAttribute('src'))
ele1.addEventListener('mouseover', function () {
    ele1.setAttribute('src', "img/libazz-fashion-bag-2.jpeg");
});
ele1.addEventListener('mouseout', function () {
    ele1.setAttribute('src', "img/libazz-fashion-bag-1.jpeg");
});
ele2.addEventListener('mouseover', function () {
    ele2.setAttribute('src', "img/libazz-fashion-jacket-1.jpeg");
});
ele2.addEventListener('mouseout', function () {
    ele2.setAttribute('src', "img/libazz-fashion-jacket-2.jpeg");
});
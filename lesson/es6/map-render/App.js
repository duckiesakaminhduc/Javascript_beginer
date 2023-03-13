let product = document.getElementById('product')

// tao mang de chua thong tin cua san pham
let arr = [
    {
        id: 1,
        name: 'ip13',
        ram: '8gb',
        price: '12345',
        thumb: "https://cdn.hoanghamobile.com/i/preview/Uploads/2022/09/08/222222.png"
    },
    {
        id: 2,
        name: 'ip14',
        ram: '12gb',
        price: '56789',
        thumb: "https://cdn.hoanghamobile.com/i/preview/Uploads/2022/09/08/222222.png"
    },
    {
        id: 3,
        name: 'ip14',
        ram: '12gb',
        price: 'Trung Quan',
        thumb: "https://cdn.hoanghamobile.com/i/preview/Uploads/2022/09/08/222222.png"
    }
];
// map du lieu vao arr_html
let arr_Html = arr.map((element) => {
    return`
    <li>
            <div id="thumb">
                <img src="${element.thumb}" alt="">
            </div>
            <span id="title">${element.name}</span>
            <span id="info">${element.ram}</span>
            <span id="price">${element.price}$</span>
        </li>
    `;
});

console.log(arr_Html)
//innter arr-html vao html
product.innerHTML = arr_Html;

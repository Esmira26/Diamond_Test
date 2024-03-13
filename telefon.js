setTimeout(circle,4000)
function circle() {
    document.querySelector(".telephone").style.display="block"
    document.querySelector(".spinner").style.display="none"
}

const categories = ["samsung","iphone","xiaomi","huawei"]
var text1 = [
    {sekil:"./img/img4.jpg",yazi:"Samsung Galaxy S22 ",aciqlama:"(SM-S901B) Phantom Black",category:"samsung",evvelki:"Əvvəlki qiymət:1569.99",movcud:"Mövcud qiymət:1299.99",purchase:"1299.99"},
    {sekil:"./img/img1.jpg",yazi:"iPhone 11",aciqlama:"128 GB Black",category:"iphone",evvelki:"Əvvəlki qiymət:1859.99",movcud:"Mövcud qiymət:1549.99",purchase:"1549.99"},
    {sekil:"./img/img2.jpg",yazi:"Xiaomi Redmi Note 12",aciqlama:"8/128 GB w/o NFC Onyx",category:"xiaomi",evvelki:"Əvvəlki qiymət:1659.99",movcud:"Mövcud qiymət:1549.99",purchase:"1549.99"},
    {sekil:"./img/img50.jpg",yazi:"HUAWEI Nova Y91",aciqlama:"8/128 GB Starry Black",category:"huawei",evvelki:"Əvvəlki qiymət:1859.99",movcud:"Mövcud qiymət:1129.99",purchase:"1129.99"},
    {sekil:"./img/img4.jpg",yazi:"Samsung Galaxy S23",aciqlama:"(SM-S918B) 12/512 GB",category:"samsung",evvelki:"Əvvəlki qiymət:1769.99",movcud:"Mövcud qiymət:1549.99",purchase:"1549.99"},
    {sekil:"./img/img3.jpg",yazi:"iPhone 13 ",aciqlama:"128 GB Blue",category:"iphone",evvelki:"Əvvəlki qiymət:1859.99",movcud:"Mövcud qiymət:1439.99",purchase:"1439.99"},
    {sekil:"./img/img2.jpg",yazi:"Xiaomi Redmi Note 12 ",aciqlama:"4/128 GB W/O NFC Mint",category:"xiaomi",evvelki:"Əvvəlki qiymət:1549.99",movcud:"Mövcud qiymət:1129.99",purchase:"1129.99"},
    {sekil:"./img/img4.jpg",yazi:"Samsung Galaxy S22",aciqlama:"(SM-S901B) Green",category:"samsung",evvelki:"Əvvəlki qiymət:1349.99",movcud:"Mövcud qiymət:1089.99",purchase:"1089.99"},
    {sekil:"./img/img51.jpg",yazi:"HUAWEI Nova Y61",aciqlama:"6/64 GB Sapphire Blue",category:"huawei",evvelki:"Əvvəlki qiymət:1859.99",movcud:"Mövcud qiymət:1549.99",purchase:"1549.99"},
    {sekil:"./img/img5.jpg",yazi:"iPhone 13",aciqlama:"512 GB Green",category:"iphone",evvelki:"Əvvəlki qiymət:1349.99",movcud:"Mövcud qiymət:1089.99",purchase:"1089.99"},
    {sekil:"./img/img52.jpg",yazi:"HUAWEI Nova Y91",aciqlama:"8/256 GB Moonlight Silver",category:"huawei",evvelki:"Evvelki qiymət:1859.99",movcud:"Mövcud qiymət:1349.99",purchase:""},
    {sekil:"./img/img2.jpg",yazi:"Xiaomi Redmi Note 11 ",aciqlama:"Pro 5G 6GB/64GB Polar",category:"xiaomi",evvelki:"Əvvəlki qiymət:1259.99",movcud:"Mövcud qiymət:1089.99",purchase:"1089.99"},
    {sekil:"./img/img4.jpg",yazi:"Samsung Galaxy Z",aciqlama:"12/256GB Black",category:"samsung",evvelki:"Əvvəlki qiymət:1099.99",movcud:"Mövcud qiymət:899.99",purchase:"899.99"},
    {sekil:"./img/img5.jpg",yazi:"iPhone 13 Pro",aciqlama:"Max 1TB Sierra Blue",category:"iphone",evvelki:"Əvvəlki qiymət:1859.99",movcud:"Mövcud qiymət:1129.99",purchase:"1129.99"},
    {sekil:"./img/img51.jpg",yazi:"HUAWEI Nova 10",aciqlama:"8/128GB Starry Silver",category:"huawei",evvelki:"Əvvəlki qiymət:1349.99",movcud:"Mövcud qiymət:1159.99",purchase:"1159.99"},
    {sekil:"./img/img4.jpg",yazi:"Samsung Galaxy A34",aciqlama:"5G (SM-A346) 6/128 GB",category:"samsung",evvelki:"Əvvəlki qiymət:1859.99",movcud:"Mövcud qiymət:1129.99",purchase:"1129.99"},
    {sekil:"./img/img1.jpg",yazi:"iPhone 14 Pro",aciqlama:"256 GB Deep Purple",category:"iphone",evvelki:"Əvvəlki qiymət:1269.99",movcud:"Mövcud qiymət:1129.99",purchase:"1129.99"},
    {sekil:"./img/img2.jpg",yazi:"Xiaomi Poco M5",aciqlama:"4/128 GB Black",category:"xiaomi",evvelki:"Əvvəlki qiymət:1349.99",movcud:"Mövcud qiymət:1879.99",purchase:"1879.99"},
    {sekil:"./img/img50.jpg",yazi:"HUAWEI Nova 11i",aciqlama:"8/128 GB Starry Black",category:"huawei",evvelki:"Əvvəlki qiymət:1859.99",movcud:"Mövcud qiymət:1349.99",purchase:"1349.99"}
]
for (var i = 0; i < text1.length; i++) {
    document.querySelector(".yeni5").innerHTML+=`
    <div class="yeni4" cat="${text1[i].category}">
    <div class="h4">
       <h4 class="hh4">komissiyasız</h4>
       <h4 class="hh5">pulsuz çatdırılma</h4>
    </div>
    <img src="${text1[i].sekil}" alt="">
    <h1>${text1[i].yazi}</h1>
    <p class="birinci">${text1[i].aciqlama}</p>
    <div class="yeni6">
    <i class="fa-solid fa-eject"></i>
    </div>
    <div class="yeni7">
    <div class="star">
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
    </div>
    <i class="fa-solid fa-heart"></i>
    <p class="evvelki">${text1[i].evvelki}</p>
    <p class="movcud">${text1[i].movcud}</p>
    <button class="sebet" onclick="funk(${i})">
        <h2>Səbətə at</h2>
        <i class="fa-solid fa-cart-plus"></i>
    </button>
    </div>
    `
}
document.querySelectorAll(".btn button").forEach(x => {
    x.addEventListener("click",function () {
        document.querySelectorAll(".yeni5 .yeni4").forEach(y => {
            if(y.getAttribute("cat") == x.getAttribute("class") || x.getAttribute("class")=="hamısı"){
                y.style.display = "block"
            }
            else{
                y.style.display = "none"
            }
        });
    })
});
document.querySelectorAll(".fa-heart").forEach(z => {
    z.addEventListener("click",function () {
        z.classList.toggle("active")
    })
});
$(".div1 i").click(function () {
    $(".yeni").css("opacity","1")
    $(".yeni").css("height","490px")
})
$(".yeni6 i").click(function () {
    $(".yeni7").css("opacity","0")
    $(".yeni7").css("height","0")
    $(this).parents(".yeni4").children().eq(5).css({"opacity":"1","height":"195px"})
})

$(".div3 i").click(function () {
    $(".sebet5").show()
})
$(".fa-xmark").click(function () {
    $(".sebet5").hide()
    $(".yeni").hide()
})



var deyer=0;
document.querySelectorAll(".sebet").forEach(d => {
    d.addEventListener("click",function () {
        deyer++
        document.querySelector(".div3 span").innerHTML=deyer;
    })
});

var common=0;
function funk(i) {
    document.querySelector(".boyuk").innerHTML+=`
    <div class="kicik">
    <img src="${text1[i].sekil}" alt="">
    <h1>${text1[i].yazi}</h1>
    <p>${text1[i].purchase}</p>
    <i class="fa-solid fa-trash"></i>
    </div>
    `
    document.querySelector(".sebet2 p").style.display = "none"
    common+=Number(text1[i].purchase)
    document.querySelector(".sebet6 .total").innerText=common     
}

$(".btn2").click(function () {
    $(".boyuk").html("")
    $(".sebet6 .total").text("0")
    $(".div3 span").text("0")
    document.querySelector(".sebet2 p").style.display = "block"
})

$("body").on("click",".fa-trash",function () {
    deyer--
    document.querySelector(".div3 span").innerHTML=deyer;
    common-=Number($(this).parent().children().eq(2).text())
    console.log(Number($(this).parent().children().eq(2).text()));
    $(".sebet6 .total").text("$"+common)
    $(this).parent().remove()
    console.log("common");
})

document.querySelector("nav input").addEventListener("keyup",function () {
    document.querySelectorAll(".yeni4 h1").forEach(e => {
        if (e.innerText.toLowerCase().includes(document.querySelector("nav input").value.toLowerCase())){
            e.parentElement.style.display="block"
        }
        else{
            e.parentElement.style.display="none"
        }
        console.log(e.parentElement);
    });
});
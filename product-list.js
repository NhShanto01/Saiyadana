export const electronicsProductData = [
  {
    img: "https://rukminim1.flixcart.com/image/200/200/kmp7ngw0/monitor/j/z/h/s2721hn-27-py0df-dell-original-imagfjphuywuh2a7.jpeg?q=70",
    productName: "Monitor",
    discount: "From ₹8279",
    brand: "DELL",
    link: "#",
  },
  {
    img: "https://rukminim1.flixcart.com/image/200/200/l5jxt3k0/dslr-camera/m/n/a/-original-imagg7hsggshhwbz.jpeg?q=70",
    productName: "Top Mirrorless Cameras",
    discount: "Shop Now!",
    brand: "Canon, Sony, Fujifilm...",
    link: "#",
  },
  {
    img: "https://rukminim1.flixcart.com/image/200/200/printer/j/j/y/hp-laserjet-m1005-multifunction-original-imadxhzpeb9qbrfg.jpeg?q=70",
    productName: "Printers",
    discount: "From ₹3999",
    brand: "HP",
    link: "#",
  },
  {
    img: "https://rukminim1.flixcart.com/image/200/200/kmp7ngw0/monitor/j/z/h/s2721hn-27-py0df-dell-original-imagfjphuywuh2a7.jpeg?q=70",
    productName: "Monitor",
    discount: "From ₹8279",
    brand: "DELL",
    link: "#",
  },
  {
    img: "https://rukminim1.flixcart.com/image/400/400/ks7tuvk0/gimbal/v/z/7/0-43-om4-se-dji-original-imag5u6rgsdh6k4g.jpeg?q=70",
    productName: "Monitor",
    discount: "From ₹8279",
    brand: "DELL",
    link: "#",
  },
  {
    img: "https://rukminim1.flixcart.com/image/400/400/kingqkw0-0/hair-straightener/s/v/x/hp8302-06-philips-original-imaf9jzzzurgqykt.jpeg?q=70",
    productName: "Best of Hair straighteners",
    discount: "From ₹8279",
    brand: "DELL",
    link: "#",
  },
  {
    img: "https://rukminim1.flixcart.com/image/200/200/kmp7ngw0/monitor/j/z/h/s2721hn-27-py0df-dell-original-imagfjphuywuh2a7.jpeg?q=70",
    productName: "Monitor",
    discount: "From ₹8279",
    brand: "DELL",
    link: "#",
  },
  {
    img: "https://rukminim1.flixcart.com/image/200/200/kmp7ngw0/monitor/j/z/h/s2721hn-27-py0df-dell-original-imagfjphuywuh2a7.jpeg?q=70",
    productName: "Monitor",
    discount: "From ₹8279",
    brand: "DELL",
    link: "#",
  },
];

let renderProduct = "";

let bestofElctronic_product_itemEl = document.getElementById(
  "card-product-container-1"
);
let bestofElctronic_product_itemEl_02 = document.getElementById(
  "card-product-container-2"
);
let bestofElctronic_product_itemEl_03 = document.getElementById(
  "card-product-container-3"
);
let bestofElctronic_product_itemEl_04 = document.getElementById(
  "card-product-container-4"
);
let bestofElctronic_product_itemEl_05 = document.getElementById(
  "card-product-container-5"
);
let bestofElctronic_product_itemEl_06 = document.getElementById(
  "card-product-container-6"
);
let bestofElctronic_product_itemEl_07 = document.getElementById(
  "card-product-container-7"
);
let bestofElctronic_product_itemEl_08 = document.getElementById(
  "card-product-container-8"
);
let bestofElctronic_product_itemEl_09 = document.getElementById(
  "card-product-container-9"
);
let bestofElctronic_product_itemEl_10 = document.getElementById(
  "card-product-container-10"
);
let bestofElctronic_product_itemEl_11 = document.getElementById(
  "card-product-container-11"
);

for (let i = 0; i < electronicsProductData.length; i++) {
  console.log(electronicsProductData[i]);
  renderProduct += `
    <div >
           <a href="${electronicsProductData[i].link}" class="BestofElectronic_item">   
             <div class="bestOfElectornic_image_Product">
                 <img
                     src="${electronicsProductData[i].img}" />
             </div>
             <div class="bestofElectronicmoreOption">
                 <p class="bestofElectornicProduct_name">${electronicsProductData[i].productName}</p>
                 <p class="bestofElecronic_discount">${electronicsProductData[i].discount}</p>
                 <p class="bestofElectronic_brand">${electronicsProductData[i].brand}</p>
             </div>
             </a>
         </div>    
    `;
}

bestofElctronic_product_itemEl.innerHTML = renderProduct;

let cardBtnRightEl = document.getElementById("card-btn-right-1");
let cardBtnLeftEl = document.getElementById("card-btn-left-1");

cardBtnRightEl.addEventListener("click", function () {
  bestofElctronic_product_itemEl.style.transform = "translateX(-31%)";
  cardBtnRightEl.style.display = "none";
  cardBtnLeftEl.style.display = "block";
});
cardBtnLeftEl.addEventListener("click", function () {
  bestofElctronic_product_itemEl.style.transform = "translateX(0%)";
  cardBtnRightEl.style.display = "block";
  cardBtnLeftEl.style.display = "none";
});

// slider-2
bestofElctronic_product_itemEl_02.innerHTML = renderProduct;

let cardBtnRightEl_02 = document.getElementById("card-btn-right-2");
let cardBtnLeftEl_02 = document.getElementById("card-btn-left-2");

cardBtnRightEl_02.addEventListener("click", function () {
  bestofElctronic_product_itemEl_02.style.transform = "translateX(-31%)";
  cardBtnRightEl_02.style.display = "none";
  cardBtnLeftEl_02.style.display = "block";
});
cardBtnLeftEl_02.addEventListener("click", function () {
  bestofElctronic_product_itemEl_02.style.transform = "translateX(0%)";
  cardBtnRightEl_02.style.display = "block";
  cardBtnLeftEl_02.style.display = "none";
});

// slider-3
bestofElctronic_product_itemEl_03.innerHTML = renderProduct;

let cardBtnRightEl_03 = document.getElementById("card-btn-right-3");
let cardBtnLeftEl_03 = document.getElementById("card-btn-left-3");

cardBtnRightEl_03.addEventListener("click", function () {
  bestofElctronic_product_itemEl_03.style.transform = "translateX(-31%)";
  cardBtnRightEl_03.style.display = "none";
  cardBtnLeftEl_03.style.display = "block";
});
cardBtnLeftEl_03.addEventListener("click", function () {
  bestofElctronic_product_itemEl_03.style.transform = "translateX(0%)";
  cardBtnRightEl_03.style.display = "block";
  cardBtnLeftEl_03.style.display = "none";
});

// slider-3
bestofElctronic_product_itemEl_04.innerHTML = renderProduct;

let cardBtnRightEl_04 = document.getElementById("card-btn-right-4");
let cardBtnLeftEl_04 = document.getElementById("card-btn-left-4");

cardBtnRightEl_04.addEventListener("click", function () {
  bestofElctronic_product_itemEl_04.style.transform = "translateX(-31%)";
  cardBtnRightEl_04.style.display = "none";
  cardBtnLeftEl_04.style.display = "block";
});
cardBtnLeftEl_04.addEventListener("click", function () {
  bestofElctronic_product_itemEl_04.style.transform = "translateX(0%)";
  cardBtnRightEl_04.style.display = "block";
  cardBtnLeftEl_04.style.display = "none";
});

// slider-5
bestofElctronic_product_itemEl_05.innerHTML = renderProduct;

let cardBtnRightEl_05 = document.getElementById("card-btn-right-5");
let cardBtnLeftEl_05 = document.getElementById("card-btn-left-5");

cardBtnRightEl_05.addEventListener("click", function () {
  bestofElctronic_product_itemEl_05.style.transform = "translateX(-31%)";
  cardBtnRightEl_05.style.display = "none";
  cardBtnLeftEl_05.style.display = "block";
});
cardBtnLeftEl_05.addEventListener("click", function () {
  bestofElctronic_product_itemEl_05.style.transform = "translateX(0%)";
  cardBtnRightEl_05.style.display = "block";
  cardBtnLeftEl_05.style.display = "none";
});

// slider-6
bestofElctronic_product_itemEl_06.innerHTML = renderProduct;

let cardBtnRightEl_06 = document.getElementById("card-btn-right-6");
let cardBtnLeftEl_06 = document.getElementById("card-btn-left-6");

cardBtnRightEl_06.addEventListener("click", function () {
  bestofElctronic_product_itemEl_06.style.transform = "translateX(-31%)";
  cardBtnRightEl_06.style.display = "none";
  cardBtnLeftEl_06.style.display = "block";
});
cardBtnLeftEl_06.addEventListener("click", function () {
  bestofElctronic_product_itemEl_06.style.transform = "translateX(0%)";
  cardBtnRightEl_06.style.display = "block";
  cardBtnLeftEl_06.style.display = "none";
});

// slider-7
bestofElctronic_product_itemEl_07.innerHTML = renderProduct;

let cardBtnRightEl_07 = document.getElementById("card-btn-right-7");
let cardBtnLeftEl_07 = document.getElementById("card-btn-left-7");

cardBtnRightEl_07.addEventListener("click", function () {
  bestofElctronic_product_itemEl_07.style.transform = "translateX(-31%)";
  cardBtnRightEl_07.style.display = "none";
  cardBtnLeftEl_07.style.display = "block";
});
cardBtnLeftEl_07.addEventListener("click", function () {
  bestofElctronic_product_itemEl_07.style.transform = "translateX(0%)";
  cardBtnRightEl_07.style.display = "block";
  cardBtnLeftEl_07.style.display = "none";
});

// slider-8
bestofElctronic_product_itemEl_08.innerHTML = renderProduct;

let cardBtnRightEl_08 = document.getElementById("card-btn-right-8");
let cardBtnLeftEl_08 = document.getElementById("card-btn-left-8");

cardBtnRightEl_08.addEventListener("click", function () {
  bestofElctronic_product_itemEl_08.style.transform = "translateX(-31%)";
  cardBtnRightEl_08.style.display = "none";
  cardBtnLeftEl_08.style.display = "block";
});
cardBtnLeftEl_08.addEventListener("click", function () {
  bestofElctronic_product_itemEl_08.style.transform = "translateX(0%)";
  cardBtnRightEl_08.style.display = "block";
  cardBtnLeftEl_08.style.display = "none";
});

// slider-9
bestofElctronic_product_itemEl_09.innerHTML = renderProduct;

let cardBtnRightEl_09 = document.getElementById("card-btn-right-9");
let cardBtnLeftEl_09 = document.getElementById("card-btn-left-9");

cardBtnRightEl_09.addEventListener("click", function () {
  bestofElctronic_product_itemEl_09.style.transform = "translateX(-31%)";
  cardBtnRightEl_09.style.display = "none";
  cardBtnLeftEl_09.style.display = "block";
});
cardBtnLeftEl_09.addEventListener("click", function () {
  bestofElctronic_product_itemEl_09.style.transform = "translateX(0%)";
  cardBtnRightEl_09.style.display = "block";
  cardBtnLeftEl_09.style.display = "none";
});

// slider-10
bestofElctronic_product_itemEl_10.innerHTML = renderProduct;

let cardBtnRightEl_10 = document.getElementById("card-btn-right-10");
let cardBtnLeftEl_10 = document.getElementById("card-btn-left-10");

cardBtnRightEl_10.addEventListener("click", function () {
  bestofElctronic_product_itemEl_10.style.transform = "translateX(-31%)";
  cardBtnRightEl_10.style.display = "none";
  cardBtnLeftEl_10.style.display = "block";
});
cardBtnLeftEl_10.addEventListener("click", function () {
  bestofElctronic_product_itemEl_10.style.transform = "translateX(0%)";
  cardBtnRightEl_10.style.display = "block";
  cardBtnLeftEl_10.style.display = "none";
});

// slider-11
bestofElctronic_product_itemEl_11.innerHTML = renderProduct;

let cardBtnRightEl_11 = document.getElementById("card-btn-right-11");
let cardBtnLeftEl_11 = document.getElementById("card-btn-left-11");

cardBtnRightEl_11.addEventListener("click", function () {
  bestofElctronic_product_itemEl_11.style.transform = "translateX(-31%)";
  cardBtnRightEl_11.style.display = "none";
  cardBtnLeftEl_11.style.display = "block";
});
cardBtnLeftEl_11.addEventListener("click", function () {
  bestofElctronic_product_itemEl_11.style.transform = "translateX(0%)";
  cardBtnRightEl_11.style.display = "block";
  cardBtnLeftEl_11.style.display = "none";
});
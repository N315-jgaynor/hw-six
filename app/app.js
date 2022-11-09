var PRODUCTS = [
  {
    prodName: "The North Face Stormbreak 2 Tent",
    prodThumb: "thumb1.png",
    prodImg: "",
    prodBrief:
      "2 person tent designed for the toughest weather conditions. Features a canopy and airflow vents.",
    prodDesc1:
      "Large and spacious headroom reduces constricted feel above head",
    prodDesc2:
      "Loop on center of ceiling allows hanging of lights at dark night hours or wet clothing/towels to dry out",
    prodDesc3:
      "Fully seam-taped canopy and floor to seal out water and provide dryness in protected interior",
    prodDesc4:
      "High-low ventilation for cooling airflow to reduce stuffy and humid interior",
    prodRating: "5 stars",
    prodPrice: "350",
  },

  {
    prodName: "Kelty Rumpus 6-Person Tent",
    prodThumb: "thumb2.png",
    prodImg: "",
    prodBrief:
      "This 6 person tent is easy to set up and features wind guards. Perfect for mountain hikes and casual campers alike.",
    prodDesc1: "Kelty Quick Corners for quick setup",
    prodDesc2: "Extra-large vestibule for chairs, gear, dogs, bikes and more",
    prodDesc3: "Vented rainfly",
    prodDesc4: "Color coded tent body and fly attachment",
    prodRating: "4.5 stars",
    prodPrice: "280",
  },
];

// function loadData() {
//   $.each(PRODUCTS, function (index, product) {
//     $("#app").append(`<div class="products">
//     <h1>Popular Products</h1>
//     <div class="products-container">
//       <div id="${index}" class="product-box">
//         <div class="product-img"></div>
//         <div class="product-desc">
//           <h1>${product.prodName}</h1>
//           <p>
//             short description short description short description short
//             description short description short description short description
//             short description short description short description short
//           </p>
//           <div class="learn-more">
//             <p>Learn more</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   `);
//   });
// }

function loadData() {
  $.each(PRODUCTS, function (index, product) {
    $(".products-container").append(`
      <div id="${index}" class="product-box">
        <div class="product-img">
        <img src="images/${product.prodThumb}" alt="tent thumbnail" /></div>
        <div class="product-desc">
          <h1>${product.prodName}</h1>
          <p>
            ${product.prodBrief}
          </p>
          <div class="learn-more">
            <p>Learn more</p>
          </div>
        </div>
      </div>
  `);

    $(".product-img").on(function (product) {
      css("background-image", `${product.prodImg}`);
    });
  });
}

function changeRoute() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");

  if (pageID != "") {
    $.get(`pages/${pageID}/${pageID}.html`, function (data) {
      $("#app").html(data);

      // loadData();
    });
  } else {
    $.get(`pages/products/products.html`, function (data) {
      $("#app").html(data);

      // loadData();
    });
  }
}

function initURLListener() {
  $(window).on("hashchange", changeRoute);
  changeRoute();
}

function navListener() {
  $(".nav-bars").click(function (e) {
    $(".nav-bars").toggleClass("active");
    $(".nav-links").toggleClass("active");
  });

  $(".nav-links a").click(function (e) {
    $(".nav-bars").removeClass("active");
    $(".nav-links").removeClass("active");
  });
}

$(document).ready(function () {
  initURLListener();
  navListener();
});

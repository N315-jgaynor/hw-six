var PRODUCTS = [
  {
    prodName: "The North Face Stormbreak 2 Tent",
    prodThumb: "thumb1.png",
    prodImg: "full1.png",
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
    prodImg: "full2.png",
    prodBrief:
      "This 6 person tent is easy to set up and features wind guards. Perfect for mountain hikes and casual campers alike.",
    prodDesc1: "Kelty Quick Corners for quick setup",
    prodDesc2: "Extra-large vestibule for chairs, gear, dogs, bikes and more",
    prodDesc3: "Vented rainfly",
    prodDesc4: "Color coded tent body and fly attachment",
    prodRating: "4.5 stars",
    prodPrice: "280",
  },

  {
    prodName: "GCI Outdoor Comfort Chair",
    prodThumb: "thumb3.png",
    prodImg: "full3.png",
    prodBrief:
      "Premium rocking chair perfect for any terrain and any environment.",
    prodDesc1: "Premium outdoor rocking camp chair",
    prodDesc2: "Durable nylon mesh",
    prodDesc3: "Spring-action rocking technology",
    prodDesc4: "Carry weight 11 lbs",
    prodRating: "4.5 stars",
    prodPrice: "70",
  },

  {
    prodName: "YETI Roadie 24 Cooler",
    prodThumb: "thumb4.png",
    prodImg: "full4.png",
    prodBrief:
      "Durable premium cooler for carrying beverages, food, and so much more!",
    prodDesc1: "Durable, lightweight cooler",
    prodDesc2: "Holds up to 18 cans",
    prodDesc3: "Flexible quick latches",
    prodDesc4: "Permafrost insulation",
    prodRating: "4 stars",
    prodPrice: "50",
  },

  {
    prodName: "Solo Stove Bonfire Firepit",
    prodThumb: "thumb5.png",
    prodImg: "full5.png",
    prodBrief:
      "This portable bonfire is perfect for camping parks that do not allow in-ground fires. Childproof lock included.",
    prodDesc1: "Double wall construction",
    prodDesc2: "Included ash pan",
    prodDesc3: "Vent chamber",
    prodDesc4: "Childproof",
    prodRating: "3 stars",
    prodPrice: "400",
  },

  {
    prodName: "Coleman Skydome Darkroom Tent",
    prodThumb: "thumb6.png",
    prodImg: "full6.png",
    prodBrief: "4 person tent perfect for any camping environment.",
    prodDesc1:
      "Fast & easy set up design allows for quick set up & tear down of tent",
    prodDesc2:
      "Dark Room™ technology blocks 90% of sunlight reducing heat inside tent",
    prodDesc3: "Strengthened frame designed to stand up to 35 mph winds",
    prodDesc4: "Able to fit one queen sized air mattress",
    prodRating: "5 stars",
    prodPrice: "200",
  },

  {
    prodName: "The North Face Men's Sprag 5-Pocket Pants",
    prodThumb: "thumb7.png",
    prodImg: "full7.png",
    prodBrief:
      "These pants are perfect for any outdoor environment, suited with waterproof technology and several pockets",
    prodDesc1: "Slim fit",
    prodDesc2: "Inseam: S 29 R 31 L 33",
    prodDesc3: "Water resistant",
    prodDesc4: "Perfect for any age",
    prodRating: "4.5 stars",
    prodPrice: "48",
  },

  {
    prodName: "The North Face Men's Long Sleeve Hit T-Shirt",
    prodThumb: "thumb8.png",
    prodImg: "full8.png",
    prodBrief:
      "Look and feel great in nature with this slim fit t-shirt! Available in 3 colors.",
    prodDesc1: "Set-in sleeves provide a casual and comfortable look",
    prodDesc2: "Rib on collar and cuffs offer a durable, yet snug fit",
    prodDesc3:
      "Discharge screen-printed logo on left chest and graphic on right sleeve",
    prodDesc4: "Country of Origin : Imported",
    prodRating: "Unrated",
    prodPrice: "30",
  },

  {
    prodName: "YETI LoadOut Bucket",
    prodThumb: "thumb9.png",
    prodImg: "full9.png",
    prodBrief:
      "This bucket is perfect for carrying anything and everything you need at the campsite.",
    prodDesc1: "Heavy duty versatile bucket",
    prodDesc2: "High density polyethylene construction",
    prodDesc3: "Virtually indestructible",
    prodDesc4: "Easy to carry",
    prodRating: "5 stars",
    prodPrice: "40",
  },

  {
    prodName: "Rumpl Original Puffy Blanket",
    prodThumb: "thumb10.png",
    prodImg: "full10.png",
    prodBrief:
      "Never go cold again wiht Rumpl's premium puffy blankets. Suited for any environment.",
    prodDesc1: "Lofty with 3D Hollow Fibers",
    prodDesc2: "Ends Clip Around Shoulders",
    prodDesc3: "Fabric Survives Stains and Water",
    prodDesc4: "Outdoor-Ready and Quick Drying Insulation",
    prodRating: "4 stars",
    prodPrice: "120",
  },
];

function loadData() {
  $.each(PRODUCTS, function (index, product) {
    $(".products-container").append(`
      <div id="${index}" class="product-box">
        <div class="product-img">
        <img src="images/${product.prodThumb}" alt="product thumbnail" /></div>
        <div class="product-desc">
          <h1>${product.prodName}</h1>
          <p>
            ${product.prodBrief}
          </p>
          <div id="${index}" class="learn-more">
            <p>Learn more</p>
          </div>
        </div>
      </div>
  `);

    fullProductListeners();
  });
}

function fullProductListeners() {
  $(".learn-more").click(function (e) {
    let productIndex = e.currentTarget.id;
    $("#app").html(`<div class="product-full">
    <h1>${PRODUCTS[productIndex].prodName}</h1>
    <div class="prod-full-box">
      <div class="prod-full-img">
        <img src="images/${PRODUCTS[productIndex].prodImg}" alt="" />
      </div>
      <div class="prod-full-desc">
        <li>
        ${PRODUCTS[productIndex].prodDesc1}
        </li>
        <li>
        ${PRODUCTS[productIndex].prodDesc2}
        </li>
        <li>
        ${PRODUCTS[productIndex].prodDesc3}
        </li>
        <li>
        ${PRODUCTS[productIndex].prodDesc4}
        </li>
        <p>Rating: ${PRODUCTS[productIndex].prodRating}</p>
        <p>$${PRODUCTS[productIndex].prodPrice}USD</p>
        <div class="close-button">Close</div>
      </div>
    </div>
  </div>`);

    closeListener();
  });
}

function initProductsContainer() {
  $("#app").html(`<div class="products">
  <h1>Popular Products</h1>
  <div class="products-container">
  </div>
</div>`);
}

function closeListener() {
  $(".close-button").click(function () {
    initProductsContainer();
    loadData();
  });
}

function changeRoute() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");

  if (pageID != "") {
    $.get(`pages/${pageID}/${pageID}.html`, function (data) {
      $("#app").html(data);

      loadData();
    });
  } else {
    $.get(`pages/products/products.html`, function (data) {
      $("#app").html(data);

      loadData();
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

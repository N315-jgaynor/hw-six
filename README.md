# N315 Homework Six

This assignment involved creating a page that would loop through objects using JSON and displaying them on a gallery page. Additional JavaScript allowed users to click on a "learn more" button, taking them to another page that would display a product's information in full.

# Web4 Link

in-info-web4.informatics.iupui.edu/~jgaynor/hw-six/index.html

# Project Highlights

## JSON Loops

We looped through objects with JSON by defining string objects in a variable and recalling those objects using .append to add content to the page. We used jQuery to retrieve different values for different keys to inject into #app, such as ${game.gameTitle} to get the game title.

```javascript
$.each(GAMES, function (index, game) {
    $("#app").append(`<div id="${index}" class="gameHolder">
      <h1>${game.gameTitle}</h1>
```

We also added a "learn more" button to allow users to display the product information on its own page. We used the id of "index" to identify which object the user was clicking on (accessed via e.currentTarget.id), which then replaced everything on the page with a new set of markup/styling.

```html
<div id="${index}" class="learn-more"></div>
```

```javascript
$(".learn-more").click(function (e) {
    let productIndex = e.currentTarget.id;
    $("#app").html();
```

We then added a button that would allow the user to navigate back to the initial product gallery.

## Problems Encountered

One issue I encountered was figuring out the styling of the page while injecting content. In the lectures, we had injected content into #app directly and were able to style #app as if it were a container. This works for one page projects but not for dynamic applications. I ended up injecting the JSON loop into a pre-existing container that was hard-coded in products.html.

```html
<div class="products">
  <h1>Popular Products</h1>
  <div class="products-container">
    <!-- insert product-box markup -->
  </div>
</div>
```

```javascript
$.each(PRODUCTS, function (index, product) {
    $(".products-container").append();
```

This created another issue when going back and forth between the product gallery and invididual product information pages.
When clicking on the "close" button, in previous examples we would just clear #app using .html() and then execute the function that loaded the product gallery in again. This did not work because we needed to load in the container before reloading the gallery content. This was solved by creating another function that would reload markup with the container before injecting the gallery content.

```javascript
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
```

## Final Questions

- I typically use background-image in css for images, however I found myself using <img> because I was unable to get things working on the JS end to change a css property with an index value. Is there a way to use .css or something similar with an index value? Below are a couple examples of things I tried.

```javascript
$(".product-img").on(function (product) {
  css("background-image", `${product.prodImg}`);
});
```

```javascript
$(".product-img").css(
  "background-image",
  "url(../images/${product.prodThumb})"
);
```

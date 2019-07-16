class Product {
    constructor(category, name, price, imageSource) {
        this.category = category;
        this.name = name;
        this.price = price;
        this.imageSource = imageSource;
    }
}
const mainCarousel = document.getElementsByClassName("main-carousel")[0];

products = [
    new Product("Dresses", "Stretch Knit Dress", "$169.00", "images/stretch-knit-dress.jpg", "stretch knit dress"),
    new Product("Shirts", "Cotton Blue Shirt", "$89.00", "images/cotton-blue-shirt.jpg", "cotton blue shirt"),
    new Product("Dresses", "Checked Stretch Dress", "$129.00", "images/checked-stretch-dress.jpg", "checked stretch dress"),
    new Product("Bags", "Blue Hipster Backpack", "$69.00", "images/blue-hipster-backpack.jpg", "blue hipster backpack"),
    new Product("Denim", "Denim Overall Shorts", "$89.00", "images/demin-overall-shorts.jpg", "denim overall shorts"),
    new Product("Dresses", "Pink Dotted Dress", "$99.00", "images/pink-dotted-dress.jpg", "pink dotted dress"),
    new Product("Dresses", "Blue Silk Dress", "$119.00", "images/blue-silk-dress.jpg", "blue silk dress"),
    new Product("Shirts", "Cotton Yellow Tshirt", "$39.00", "images/cotton-yellow-tshirt.jpg", "cotton yellow t-shirt")
];

//Create a carousel-cell for each Product in products
products.forEach(function (product, index) {
    let newCarouselCell = document.createElement('div');
    newCarouselCell.setAttribute("class", "carousel-cell");

    let newCarouselImg = document.createElement('img');
    newCarouselImg.setAttribute("src", products[index].imageSource);
    newCarouselImg.setAttribute("alt", products[index].imageAlt);
    newCarouselCell.append(newCarouselImg);

    let newCarouselCategory = document.createElement('p');
    newCarouselCategory.setAttribute("class", "product-category");
    newCarouselCategory.innerText = products[index].category;
    newCarouselCell.append(newCarouselCategory);

    let newCarouselName = document.createElement('p');
    newCarouselName.setAttribute("class", "product-name");
    newCarouselName.innerText = products[index].name;
    newCarouselCell.append(newCarouselName);

    let newCarouselPrice = document.createElement('p');
    newCarouselPrice.setAttribute("class", "product-price");
    newCarouselPrice.innerText = products[index].price;
    newCarouselCell.append(newCarouselPrice);
    
    let newCarouselPrice = document.createElement('p');
    newCarouselPrice.setAttribute("class", "product-price");
    newCarouselPrice.innerText = products[index].price;
    newCarouselCell.append(newCarouselPrice);

    newCarouselCell.addEventListener("click", function(){
        addItemToCart();
    });

    mainCarousel.append(newCarouselCell);
});
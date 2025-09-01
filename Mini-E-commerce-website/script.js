//-----Data:pick One of these sources-----
//A)Incline data (simple)
        const products = [
            {name: "T-shirt", price: 120, img: "/imgs/t-shirt.jpg"}, 
            {name: "Jeans", price: 40, img: "/imgs/jeans.webp"},
            {name: "Sneakers", price: 60, img: "/imgs/sneakers.jpg"},
            {name: "Jacket", price: 80, img: "/imgs/jacket.webp"},
            {name: "Hat", price: 15, img: "/imgs/hat.jpg"},
            {name: "Sunglasses", price: 25, img: "/imgs/sunsglasses.webp"},
            {name: "shoes", price: 50, img: "/imgs/shoes.jpg"},
            {name: "Watch", price: 100, img: "/imgs/watch.webp"},
            {name: "Backpack", price: 70, img: "/imgs/backpack.jpg"},
            {name: "Belt", price:   30, img: "/imgs/belt.jpg"},
            {name: "Scarf", price:  20, img: "/imgs/scarf.webp"},
            {name: "Gloves", price: 25, img: "/imgs/gloves.webp"}
        ];
        //B) Or load from products.json (uncomment to use)
        // let products = [];
        // $.getJSON("./data/products.json",(data)=>{
            // products = data;
            // renderProducts(products);
            // });

            //-----Render----
        function renderProducts(list) {
            const $grid = $("#productList");
            $grid.empty();

    const cardsHtml = products.map(p => `
        <div class="col-12 col-sm-6 col-lg-4">
          <div class="card h-100 shadow-sm">
            <img src="${p.img}" class="card-img-top" alt="${p.name}"
            style="object-fit:cover; height: 220px;">
            <div class="card-body d-flex flex-column">
                <h5 class="card-title mb-2">${p.name}</h5>
                <p class="card-text mb-3">$${Number(p.price).toFixed(2)}</p>
                <button class="btn btn-success mt-auto add-to-cart" data-name="${p.name}" data-price="$
                {Number(p.price)}">
                    Add to Cart
                </button>
            </div>
          </div>
        </div>
    `).join("");

    $grid.append(cardsHtml);
    }

    $(document).on("click", ".add-to-cart", function() {
        const name = $(this).data("name");
        const price = Number($(this).data("price"));
        //TODO add to cart array/
        
        alert('Added "' + name + '" ($' + price.toFixed(2) + ') to cart.');
    });

    //initial render if using inline data
    $(function() {
        if (Array.isArray(products) && products.length) {
            renderProducts(products);
        }
    });
 
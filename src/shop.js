let output = document.getElementById('output');
let men = document.getElementById("men");
let women = document.getElementById("women");
let electronic = document.getElementById("ele");
let jewelery = document.getElementById("jwa");
let reset = document.getElementById("resetFilter");
let redColor = document.getElementById("red");

// Show All Product 
let product = function () {
    fetch('../src/db/db.json')
    .then( res => {
        return res.json();
    })
    .then(info => {

        let html = '';

        info.forEach(post => {
            html += `
                
            <div class="single_product product-box bg-darkopacity rounded-20 position-relative mb-5 grid_view p-3">
                <!-- 
                    Hover Zoom you can cancel if you don'tt like it just remove "hover-zoom" class  
                -->
                <div class="hover-zoom drop-shadow-product position-relative">
                    <!-- PLaceholder Image  -->
                    <img src="${post.image}" alt="Image" />
                    <!-- User Rating  -->
                    <div class="show-rating">
                        <div class="rate">
                            ${post.rating.rate} ⭐ | ${post.rating.count}
                        </div>
                    </div>
                </div>

                <!-- Product Wishlist  -->
                <div class="love bubbly-button">
                    <i class="fa-regular fa-heart"></i>
                </div>
                <!-- Product Offer  -->
                <div class="product-tag-warning badge bg-warning">${post.tag}</div>

                <div class="product-functionality text-center mt-3">
                    <!-- Product title  -->
                    <div class="product-title fw-bold text-break">
                    ${post.title.substring(0, 18)}...
                    </div>
                    <!-- Product price  -->
                    <div class="product-price mb-2"><strong>${post.price} only</strong></div>
                    
                    <!-- Router navigation  -->
                    <div class="two-btn-sm">
                        <a href="./src/pages/product/single-product.html" class="btn-1 shadow-box-2">View</a> 
                        <a href="./src/pages/shop/shop_1.html" class="btn-2 shadow-box-2">Buy</a>
                    </div>
                </div>
                <!-- Product Description  -->
                <div class="discription">
                    <small class="text-decoration-underline">
                        <strong>Discription</strong>
                    </small>
                    <p class="p-0">
                        ${post.description} <a href="#">SeeMore</a>
                    </p>
                </div>
            </div>
            `;

        });
        
        output.innerHTML = html
        console.log(info)
    })
    .catch(error =>  {
        console.log(error)
    })
}
product()

// Reset filter
reset.addEventListener('click', resetData);
function resetData() {
    product()
}

// Traditional fetch 
men.addEventListener('click', () => {
    fetch('../src/db/db.json')
    
    .then( res => {
        return res.json();
    })

    .then(info => {
        let html = '';

            let filteredPosts = info.filter((post) => post.category === "men's clothing");

            if(filteredPosts.length <= 0){
                html = `<p>Product not found</p>`;
            }else {
                for(let post of filteredPosts) {
                    html += `
                    
                        <div class="single_product product-box bg-darkopacity rounded-20 position-relative mb-5 grid_view p-3">
                            <!-- 
                                Hover Zoom you can cancel if you don'tt like it just remove "hover-zoom" class  
                            -->
                            <div class="hover-zoom drop-shadow-product position-relative">
                                <!-- PLaceholder Image  -->
                                <img src="${post.image}" alt="Image" />
                                <!-- User Rating  -->
                                <div class="show-rating">
                                    <div class="rate">
                                        ${post.rating.rate} ⭐ | ${post.rating.count}
                                    </div>
                                </div>
                            </div>
        
                            <!-- Product Wishlist  -->
                            <div class="love bubbly-button">
                                <i class="fa-regular fa-heart"></i>
                            </div>
                            <!-- Product Offer  -->
                            <div class="product-tag-warning badge bg-warning">${post.tag}</div>
    
                            <div class="product-functionality text-center mt-3">
                                <!-- Product title  -->
                                <div class="product-title fw-bold text-break">
                                ${post.title.substring(0, 18)}...
                                </div>
                                <!-- Product price  -->
                                <div class="product-price mb-2"><strong>${post.price} only</strong></div>
                                
                                <!-- Router navigation  -->
                                <div class="two-btn-sm">
                                    <a href="./src/pages/product/single-product.html" class="btn-1 shadow-box-2">View</a> 
                                    <a href="./src/pages/shop/shop_1.html" class="btn-2 shadow-box-2">Buy</a>
                                </div>
                            </div>
                            <!-- Product Description  -->
                            <div class="discription">
                                <small class="text-decoration-underline">
                                    <strong>Discription</strong>
                                </small>
                                <p class="p-0">
                                    ${post.description} <a href="#">SeeMore</a>
                                </p>
                            </div>
                        </div>
                    `;

                }
            }
            output.innerHTML = html

    })
    
    .catch(err => {
        console.log(err)
    })
})

// Traditional fetch 
electronic.addEventListener('click', () => {
    fetch('../src/db/db.json')
    
    .then( res => {
        return res.json();
    })

    .then(info => {
        let html = '';

            let filteredPosts = info.filter((post) => post.category === "electronics");

            if(filteredPosts.length <= 0){
                html = `<p>Product not found</p>`;
            }else {
                for(let post of filteredPosts) {
                    html += `
                    
                        <div class="single_product product-box bg-darkopacity rounded-20 position-relative mb-5 grid_view p-3">
                            <!-- 
                                Hover Zoom you can cancel if you don'tt like it just remove "hover-zoom" class  
                            -->
                            <div class="hover-zoom drop-shadow-product position-relative">
                                <!-- PLaceholder Image  -->
                                <img src="${post.image}" alt="Image" />
                                <!-- User Rating  -->
                                <div class="show-rating">
                                    <div class="rate">
                                        ${post.rating.rate} ⭐ | ${post.rating.count}
                                    </div>
                                </div>
                            </div>
        
                            <!-- Product Wishlist  -->
                            <div class="love bubbly-button">
                                <i class="fa-regular fa-heart"></i>
                            </div>
                            <!-- Product Offer  -->
                            <div class="product-tag-warning badge bg-warning">${post.tag}</div>
    
                            <div class="product-functionality text-center mt-3">
                                <!-- Product title  -->
                                <div class="product-title fw-bold text-break">
                                ${post.title.substring(0, 18)}...
                                </div>
                                <!-- Product price  -->
                                <div class="product-price mb-2"><strong>${post.price} only</strong></div>
                                
                                <!-- Router navigation  -->
                                <div class="two-btn-sm">
                                    <a href="./src/pages/product/single-product.html" class="btn-1 shadow-box-2">View</a> 
                                    <a href="./src/pages/shop/shop_1.html" class="btn-2 shadow-box-2">Buy</a>
                                </div>
                            </div>
                            <!-- Product Description  -->
                            <div class="discription">
                                <small class="text-decoration-underline">
                                    <strong>Discription</strong>
                                </small>
                                <p class="p-0">
                                    ${post.description} <a href="#">SeeMore</a>
                                </p>
                            </div>
                        </div>
                    `;

                }
            }
            output.innerHTML = html

    })
    
    .catch(err => {
        console.log(err)
    })
})

// Traditional fetch 
jewelery.addEventListener('click', () => {
    fetch('../src/db/db.json')
    
    .then( res => {
        return res.json();
    })

    .then(info => {
        let html = '';

            let filteredPosts = info.filter((post) => post.category === "jewelery");

            if(filteredPosts.length <= 0){
                html = `<p>Product not found</p>`;
            }else {
                for(let post of filteredPosts) {
                    html += `
                    
                        <div class="single_product product-box bg-darkopacity rounded-20 position-relative mb-5 grid_view p-3">
                            <!-- 
                                Hover Zoom you can cancel if you don'tt like it just remove "hover-zoom" class  
                            -->
                            <div class="hover-zoom drop-shadow-product position-relative">
                                <!-- PLaceholder Image  -->
                                <img src="${post.image}" alt="Image" />
                                <!-- User Rating  -->
                                <div class="show-rating">
                                    <div class="rate">
                                        ${post.rating.rate} ⭐ | ${post.rating.count}
                                    </div>
                                </div>
                            </div>
        
                            <!-- Product Wishlist  -->
                            <div class="love bubbly-button">
                                <i class="fa-regular fa-heart"></i>
                            </div>
                            <!-- Product Offer  -->
                            <div class="product-tag-warning badge bg-warning">${post.tag}</div>
    
                            <div class="product-functionality text-center mt-3">
                                <!-- Product title  -->
                                <div class="product-title fw-bold text-break">
                                ${post.title.substring(0, 18)}...
                                </div>
                                <!-- Product price  -->
                                <div class="product-price mb-2"><strong>${post.price} only</strong></div>
                                
                                <!-- Router navigation  -->
                                <div class="two-btn-sm">
                                    <a href="./src/pages/product/single-product.html" class="btn-1 shadow-box-2">View</a> 
                                    <a href="./src/pages/shop/shop_1.html" class="btn-2 shadow-box-2">Buy</a>
                                </div>
                            </div>
                            <!-- Product Description  -->
                            <div class="discription">
                                <small class="text-decoration-underline">
                                    <strong>Discription</strong>
                                </small>
                                <p class="p-0">
                                    ${post.description} <a href="#">SeeMore</a>
                                </p>
                            </div>
                        </div>
                    `;

                }
            }
            output.innerHTML = html

    })
    
    .catch(err => {
        console.log(err)
    })
})


let selectedCategory= "women's clothing";
let selectedColor= "red";
let url = '../src/db/db.json'


// for(let categoryItem of women){
    // this  for ... of loop give me not itarable
    //foreach category found
    women.addEventListener('click', function(event){
        // selectedCatory=this.innerHTML; //get the clicked category
        showFilteredItems();
    });
// }

// for(let colorItem of redColor){
    //foreach color found
    // And here only show my 3 red color product  
    redColor.addEventListener('click', function(event){
        // selectedColor=this.innerHTML; //get the clicked color
        showFilteredItems();
        // Note why my red function work .........................
    });
// }



// Async await 
async function showFilteredItems() {
    try {
        const res = await fetch(url)
        const info = await res.json()

        let filteredPosts = info;

        //category filter
        if(selectedCategory){
            filteredPosts=filteredPosts.filter((post)=>post.category === selectedCategory);
        }
        //color filter
        if(selectedColor){
            filteredPosts=filteredPosts.filter((post)=>post.color=== selectedColor);
        }

        let html = '';


        if(filteredPosts.length <= 0){
            html = `<p>Product not found</p>`;
        }else {
            for(let post of filteredPosts) {
                // Always reu this html tag 
                // is there any option I can  put a variable ??? 
                // I want to reuew this html body ??

                html += `
                
                    <div class="single_product product-box bg-darkopacity rounded-20 position-relative mb-5 grid_view p-3">
                        <!-- 
                            Hover Zoom you can cancel if you don'tt like it just remove "hover-zoom" class  
                        -->
                        <div class="hover-zoom drop-shadow-product position-relative">
                            <!-- PLaceholder Image  -->
                            <img src="${post.image}" alt="Image" />
                            <!-- User Rating  -->
                            <div class="show-rating">
                                <div class="rate">
                                    ${post.rating.rate} ⭐ | ${post.rating.count}
                                </div>
                            </div>
                        </div>
    
                        <!-- Product Wishlist  -->
                        <div class="love bubbly-button">
                            <i class="fa-regular fa-heart"></i>
                        </div>
                        <!-- Product Offer  -->
                        <div class="product-tag-warning badge bg-warning">${post.tag}</div>

                        <div class="product-functionality text-center mt-3">
                            <!-- Product title  -->
                            <div class="product-title fw-bold text-break">
                            ${post.title.substring(0, 18)}...
                            </div>
                            <!-- Product price  -->
                            <div class="product-price mb-2"><strong>${post.price} only</strong></div>
                            
                            <!-- Router navigation  -->
                            <div class="two-btn-sm">
                                <a href="./src/pages/product/single-product.html" class="btn-1 shadow-box-2">View</a> 
                                <a href="./src/pages/shop/shop_1.html" class="btn-2 shadow-box-2">Buy</a>
                            </div>
                        </div>
                        <!-- Product Description  -->
                        <div class="discription">
                            <small class="text-decoration-underline">
                                <strong>Discription</strong>
                            </small>
                            <p class="p-0">
                                ${post.description} <a href="#">SeeMore</a>
                            </p>
                        </div>
                    </div>
                `;

            }

        }

        output.innerHTML = html

        
    } catch (err) {
        console.log(err)
    }
   
}

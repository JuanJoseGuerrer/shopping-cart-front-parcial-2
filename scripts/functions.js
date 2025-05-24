
function getProducts(){
    const contenedor = document.getElementById("row")
    fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(data => data.products.forEach(product => {
     const card = document.createElement("div")
     card.className = "col mb-3"
     card.innerHTML = `
            <div class="card" style="width: 18rem;">
                 <div class="card-body">
                    <h5 class="card-title">${product.title}</h5>
                    <p class="card-text text-secondary"> # ${product.category}</p>
                    <p class="card-text text-danger"> $ ${product.price}</p>
                    <a href="#" class="card-link">ver mas</a>
                </div>
            </div>
        </div>
     ` 
    contenedor.appendChild(card)

}));
}

function getUsers(){
    const container = document.getElementById("ol")
    fetch('https://dummyjson.com/users')
    .then(res => res.json())
    .then(console.log)
    .then(data => data.users.forEach(users => {
     const li = document.createElement("li")
     li.innerHTML = `
            <div class="card" style="width: 18rem;">
                 <div class="card-body">
                    <h5 class="card-title">${users.firstName}</h5>
                    
        
                    <a href="#" class="card-link">ver mas</a>
                </div>
            </div>
        </div>
     ` 
    container.appendChild(li)

     console.log("")
}));
}

function getCarts(){
    const contenedor = document.getElementById("row")
    fetch('https://dummyjson.com/carts')
    .then(res => res.json())
    .then(console.log)
    .then(data => data.carts.forEach(carts => {
     const card = document.createElement("div")
     card.className = "col mb-3"
     card.innerHTML = `
            <div class="card" style="width: 18rem;">
                 <div class="card-body">
                    <h5 class="card-title">${carts.id}</h5>
                    
                    <a href="#" class="card-link">ver mas</a>
                </div>
            </div>
        </div>
     ` 
    contenedor.appendChild(card)

}));
}



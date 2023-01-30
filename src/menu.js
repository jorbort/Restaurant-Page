

function createMenu(){
    let menu = document.createElement('div');
    menu.className = 'menu-grid'

    let burger = document.createElement('div')
    burger.className = 'menu-item';
    let burgerImg = document.createElement('img')
    burgerImg.src = "https://64.media.tumblr.com/b468a40070cac271b3bbd482447f5465/tumblr_p1y9cz3xce1vqc713o1_500.gifv"
    burgerImg.className = "menu-image"
    let burgerTitle = document.createElement('h2')
    burgerTitle.textContent = 'Krabby Patty'
    let burgerPrice = document.createElement('p')
    burgerPrice.textContent = "$ 4"
    burger.appendChild(burgerTitle);
    burger.appendChild(burgerImg);
    burger.appendChild(burgerPrice);


    let colorBurger = document.createElement('div')
    colorBurger.className = 'menu-item';
    let colorBurgerImg = document.createElement('img')
    colorBurgerImg.src = "https://i.gifer.com/origin/9b/9b10de8cb9c73c105f3d25e187bd8667_w200.gif"
    colorBurgerImg.className = "menu-image"
    let colorBurgerTitle = document.createElement('h2')
    colorBurgerTitle.textContent = 'Krabby  Pretty Color Patty'
    let colorBurgerPrice = document.createElement('p')
    colorBurgerPrice.textContent = "$ 5"
    colorBurger.appendChild(colorBurgerTitle);
    colorBurger.appendChild(colorBurgerImg);
    colorBurger.appendChild(colorBurgerPrice);


    let pizza = document.createElement('div')
    pizza.className = 'menu-item';
    
    let pizzaImg = document.createElement('img')
    pizzaImg.src = 'https://static.wikia.nocookie.net/bd08bca7-1622-49e8-89c6-832c51b78cd1/scale-to-width/755'
    pizzaImg.className = "menu-image"
    
    let pizzaTitle = document.createElement('h2')
    pizzaTitle.textContent = 'Krusty Krab pizza'

    let pizzaDesc = document.createElement('p')
    pizzaDesc.textContent = 'Krusty krab pizza is the best pizza for me and for you $8'

    pizza.appendChild(pizzaTitle)
    pizza.appendChild(pizzaImg)
    pizza.appendChild(pizzaDesc)

    menu.appendChild(burger)
    menu.appendChild(pizza)
    menu.appendChild(colorBurger)

    return menu

}

function loadMenu(){
    let body = document.querySelector('.body')
    body.textContent = '';
    body.appendChild(createMenu());
}

export {loadMenu}
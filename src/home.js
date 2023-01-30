

function createHome(){
    let card = document.createElement('div');
    card.className = 'card';

    let image = document.createElement('img');
    image.src = 'https://media.tenor.com/-RKAY-AR0yEAAAAM/spongebob-squarepants-pizza.gif'
    image.id = 'sponge-gif'
    card.appendChild(image);
    
    return card;
}

function createTitle(){
    let title = document.createElement('h2')
    title.textContent = 'Mr Crab Pizza'
    return title;
}

function loadHome(){
    let body = document.querySelector('.body')
    body.textContent = "";
    body.appendChild(createHome())
    body.appendChild(createTitle())
}

export {loadHome}
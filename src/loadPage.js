import { loadHome } from "./home";
import { loadMenu } from "./menu";
//creates the header element in the dom 
function createHeader(){
    
    let header = document.createElement('div');
    header.className = 'header'
    header.appendChild(createNav())

    return header;
}

function createNav(){
    let nav = document.createElement('nav')

    let main = document.createElement('button');
    main.className = 'button-nav';
    main.innerText = 'main'
    main.addEventListener('click',(e)=>{
        if (e.target.classList.contains("active")) return;
    setActiveButton(main);
    loadHome();
    })


    let menu = document.createElement('button');
    menu.className = 'button-nav';
    menu.innerText = 'menu'
    menu.addEventListener('click', (e)=>{
        if (e.target.classList.contains("active")) return;
        setActiveButton(menu);
        loadMenu();
    }) 

    let contact = document.createElement('button');
    contact.className = 'button-nav';
    contact.textContent = 'contact';
    contact.addEventListener('click',(e)=>{
        if (e.target.classList.contains("active")) return;
        setActiveButton(contact);
        loadContact();
    });
    nav.appendChild(main);
    nav.appendChild(menu);
    nav.appendChild(contact);

    return nav;   
}

function setActiveButton(button) {
    const buttons = document.querySelectorAll(".button-nav");

    buttons.forEach((button) => {
        if (button !== this) {
        button.classList.remove("active");
    }
    });
    button.classList.add("active");
}

function createBody(){
    let body = document.createElement('div');
    body.className = 'body';
    body.style.display = 'flex';
    body.style.flexDirection = 'column-reverse';
    
    return body;
}

function loadPage(){
    let con = document.querySelector('.content');
    con.appendChild(createHeader());
    con.appendChild(createBody());
    setActiveButton(document.querySelector(".button-nav"));
    loadHome();
    
}


export {loadPage}
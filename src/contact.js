function createContact(){
const contact = document.createElement('div');
contact.className = 'contact'

const phone = document.createElement('p');
phone.textContent = '📞 655-878-999'

const address = document.createElement('p');
address.textContent = '🏠 Wallaby Street 123, Bikini Bottom '

const restImg = document.createElement('img');
restImg.src = 'https://y101fm.com/images/articleimages/112516/2016-11-23-KRUSTY-4-FOOD--banner.jpg'
restImg.id = 'restImg'

contact.appendChild(phone)
contact.appendChild(address)
contact.appendChild(restImg)

return contact
}

function loadContact(){
    const body = document.querySelector('.body')
    body.textContent = ''
    body.appendChild(createContact())
}
export {loadContact}
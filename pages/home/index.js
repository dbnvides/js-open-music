function createButtonCategory(category){
    
    let sectionFilter = document.querySelector('.filter-gen');

    let ulListCategory = document.createElement('ul');
    ulListCategory.classList.add('list-category');
    
    
    category.forEach(element => {

        let liCategory = document.createElement('li');

        let btnCategory = document.createElement('button');
        btnCategory.classList.add('category');
        btnCategory.classList.add('btn-default');

        btnCategory.innerHTML = element;

        btnCategory.id = category.indexOf(element);

        liCategory.appendChild(btnCategory);
        ulListCategory.appendChild(liCategory);
        sectionFilter.appendChild(ulListCategory);
    });
   
}

function createProducts(listProducts){

    let ulList = document.querySelector('.list-album')

    listProducts.forEach(element => {
        

        let liCard = document.createElement('li');
        liCard.classList.add('list-card');

        let liCardImg = document.createElement('div');
        liCardImg.classList.add('list-card-header');

        let imgCard = document.createElement('img');
        imgCard.src = element.img;

        let contentCard = document.createElement('div');
        contentCard.classList.add('card-content');

        let bandAlbumCard = document.createElement('div');
        bandAlbumCard.classList.add('band-album');

        let nameBandCard = document.createElement('p');
        nameBandCard.innerText = element.band;

        let yearBandCard = document.createElement('p');
        yearBandCard.innerText = element.year;

        let nameMusicCard = document.createElement('h2');
        nameMusicCard.classList.add('name-music');
        nameMusicCard.innerText = element.title;

        let boxPriceMusicCard = document.createElement('div');
        boxPriceMusicCard.classList.add('price-music');

        let priceMusicCard = document.createElement('span');
        priceMusicCard.innerHTML = element.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

        let category = element.category

        let buttonBuyMusicCard = document.createElement('button');
        buttonBuyMusicCard.classList.add('btn-buy-music');
        buttonBuyMusicCard.innerText = 'Comprar'

        liCardImg.appendChild(imgCard)
        bandAlbumCard.append(nameBandCard, yearBandCard)
        boxPriceMusicCard.append(priceMusicCard, buttonBuyMusicCard);
        contentCard.append(bandAlbumCard, nameMusicCard, boxPriceMusicCard);
        liCard.append(liCardImg, contentCard);
        ulList.appendChild(liCard)
        
    });
}

function render(list){

    let ulList = document.querySelector('.list-album');
    let empyList = document.createElement('h2');

    empyList.classList.add('empy-list');
    empyList.innerText = 'Album não encontrado'
    ulList.innerHTML = '';

    if(list == 0 || list == undefined){
       
        ulList.appendChild(empyList)
    }

    const html = document.querySelector('html')
    const dmPref = localStorage.getItem('darkmode')
    const themeButton = 'btn-dark-mode-actived';
    const buttonDark = document.querySelector('.btn-dark-mode');

    if(dmPref) {
      html.classList.add('dark-mode')
      buttonDark.classList.toggle(themeButton)
    }

    return createProducts(list)
}



render(products)
createButtonCategory(categories)
buttonCategory(products)





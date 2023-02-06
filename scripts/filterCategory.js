function buttonCategory(listProdcuts) {

    let idButton = document.querySelectorAll('.category')
    let inputRange = document.querySelector('#p-range')
    let valueRange = document.querySelector('#filter-price-range')
    let valueSearch;


    idButton.forEach(item => {

        item.addEventListener('click', () => {

            let filterAlbum = listProdcuts.filter((element) => element.category == item.id)

            render(filterAlbum)
            
            inputRange.addEventListener('input', () => {

                valueRange.innerHTML = `R$ ${inputRange.value}`;
                valueSearch = inputRange.value;

                item.classList.toggle('btn-enter')

                let filterPrice = [];

                if (item.id == 0) {
                    filterPrice = listProdcuts.filter((element) => element.price <= valueSearch)
                } else {
                    filterPrice = filterAlbum.filter((element) => element.price <= valueSearch)
                }

                return render(filterPrice);
            })
        });

    })

}

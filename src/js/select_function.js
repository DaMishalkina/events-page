const selectCity = document.querySelector('#city-select');
const selectMonth = document.querySelector('#month-select');


function filterItems(city, month){
    const valCity = city.options[city.selectedIndex].value;
    const valMonth = month.options[month.selectedIndex].value;
    const allItems = document.querySelectorAll('.event-card');
    allItems.forEach(function (item) {
        item.classList.remove('hide')
        if(valCity === 'All' && valMonth !=='All'){
            if(item.getAttribute('month') !== valMonth){
                item.classList.add('hide');
            }
        }
        if(valMonth === 'All' && valCity !== 'All'){
            if(item.getAttribute('city') !== valCity){
                item.classList.add('hide');
            }
        }
        if(valCity !== 'All' && valMonth !== 'All'){
            item.classList.add('hide');
            if(item.getAttribute('city') === valCity && item.getAttribute('month') === valMonth){
                item.classList.remove('hide');
            }
        }
        if(valCity === 'All' && valMonth === 'All'){
            item.classList.remove('hide');
        }

    })
};

selectCity.addEventListener('change', (event) => {
    filterItems(selectCity, selectMonth);


});

selectMonth.addEventListener('change', (event) => {
    filterItems(selectCity, selectMonth)


});







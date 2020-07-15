

const EventCard = (()=>{
    return {
        setData:(data) => {
            for (let event of data){
                const card = document.createElement('div');
                card.className = 'event-card';
                card.style.background = 'url('+event.image+') no-repeat center center #000000 ';
                let currentElem = document.querySelector('.page-main__events-container');
                currentElem.appendChild(card);
                card.setAttribute('city',event.city);
                card.setAttribute('month', event.date.slice(3,5));
                const dayContainer = document.createElement('div');
                dayContainer.className = 'event-card__date-container';
                card.appendChild(dayContainer);
                const dayContent = document.createElement('p');
                dayContent.className = 'event-card__date';
                dayContent.textContent = event.date.slice(0,2);
                dayContainer.appendChild(dayContent);

                const EventTitle = document.createElement('h1');
                EventTitle.className = 'event-card__event-title';
                EventTitle.textContent = event.name;
                card.appendChild(EventTitle);

                const bookmark = document.createElement('img');
                bookmark.className = 'event-card__bookmark-icon';
                bookmark.src = 'icons/bookmark.svg';
                bookmark.width = 14;
                bookmark.height = 18;
                card.appendChild(bookmark);


            }

        }
    }

})();

fetch('https://damishalkina.github.io/xsolla-test-assignment/events.json')
    .then((resp) => resp.json())
    .then((data) =>
        /*console.log(data)*/ {
        EventCard.setData(data.events);
    });
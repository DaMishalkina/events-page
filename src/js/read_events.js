

const EventCard = (()=>{

    const title = document.querySelector('.event-card__event-title');
    /*const eventContainer = document.querySelector('.event-card');*/
    return {
        setData:(data) => {
            for (let event of data){
                const card = document.createElement('div');
                card.className = 'event-card';
                card.style.background = 'url('+event.image+')';
                let currentElem = document.querySelector('.page-main__events-container');
                currentElem.appendChild(card);

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
           /* document.body.onload = addElements;
            function addElements() {
                const card = document.createElement('div');
                card.className = 'event-card';
                let currentElem = document.querySelector('.page-main__events-container');
                currentElem.appendChild(card);
                const dayContainer = document.createElement('div');
                dayContainer.className = 'event-card__date-container';
                card.appendChild(dayContainer);
                const dayContent = document.createElement('p');
                dayContent.className = 'event-card__date';
                dayContainer.appendChild(dayContent);*/

            // }
           /* data.forEach(event => {
              /!*  addElements();
                let DocDayContents = document.querySelectorAll('.event-card__date');
                for (var DocDayContent of DocDayContents) {
                    DocDayContent.textContent = event.date.slice(0,2);}*!/
                /!*day.textContent = event.date.slice(0,2);*!/
            /!*    day.textContent = event.date.slice(0,2);*!/!*!/
            })*/

        }
    }

})();

fetch('http://localhost:3000/events')
    .then((resp) => resp.json())
    .then((data) =>
        /*console.log(data)*/ {
        EventCard.setData(data);
    });
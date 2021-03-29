import {getData} from '../services/request';

const showMore =(trigger, wrapper)=> {
    const btn = document.querySelector(trigger);

    btn.addEventListener( 'click', function() {
        getData().then( data => {
            createCards(data);
        }).catch(e => console.log(e));
        this.remove();
    });

    function createCards (res){
        res.forEach( item => {
            let card = document.createElement('div');
            card.classList.add('animated', 'fadeInUp', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
            const {src, title, link} = item;
            card.innerHTML = `
                <div class="styles-block">
                    <img src=${src} alt="style">
                    <h4>${title}</h4>
                    <a href=${link}>Подробнее</a>
                </div>
            `;
            
            document.querySelector(wrapper).appendChild(card);
        });
    }

};
export default showMore;
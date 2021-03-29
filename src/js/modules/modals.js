const modals = (modalState={}) => {
    let btnPressed;


    function bindModal(triggerSelector, modalSelector, closeSelector, destroy = false ){
        const trigger = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector),
        close = document.querySelector(closeSelector),
        windows = document.querySelectorAll('[data-modal]'),
        imgGifts = document.querySelector('.fixed-gift'),
        scroll = calcScroll();
        
        
        trigger.forEach( i => {
            i.addEventListener('click', (e)=> {
                if (e.target){
                    e.preventDefault();
                }
                btnPressed = true;
                if (destroy){
                    i.remove();
                }
                windows.forEach( item => {
                    item.style.display = 'none';
                    item.classList.add('animated', 'fadeIn' );
                });
                modal.style.display = 'block';
                document.body.classList.add('modal-open');
                document.body.style.marginRight = `${scroll}px`;/* document.body.style.overflow = 'hidden' */
                imgGifts.style.marginRight = `${scroll}px`;
            });
        });


        close.addEventListener('click', ()=> {
           
            windows.forEach( item => {
                item.style.display = 'none';
            });
            modal.style.display = 'none';
            document.body.classList.remove('modal-open');
            document.body.style.marginRight = `0px`;
            imgGifts.style.marginRight = `0px`;
        });


        modal.addEventListener('click', (e) => {
            if (e.target === modal ){
                windows.forEach( item => {
                    item.style.display = 'none';
                });
                modal.style.display = 'none';
                document.body.classList.remove('modal-open');
                document.body.style.marginRight = `0px`;
                imgGifts.style.marginRight = `0px`;
            }
        });
    }
    
    function showModalBytime (selector, time) {
        setTimeout(()=>{
            let display;
            document.querySelectorAll('[data-modal]').forEach( item => {
                if (getComputedStyle(item).display !== 'none'){
                    display = 'block';
                }
            });
            if (!display){
                document.querySelector(selector).style.display = 'block';
                document.body.classList.add('modal-open');
                let scroll = calcScroll();
                let imgGifts = document.querySelector('.fixed-gift');
                document.body.style.marginRight = `${scroll}px`;/* document.body.style.overflow = 'hidden' */
                imgGifts ? imgGifts.style.marginRight = `${scroll}px`: null;
                
            }
        }, time);
    }

    function calcScroll(){
        let div = document.createElement('div');
        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';
        document.body.appendChild(div);

        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
    } 

    function openByScroll(selector){
        window.addEventListener('scroll', () => {
            if (!btnPressed && (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight )){
                document.querySelector(selector).click();
            }
        });
    }
    


    bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
    bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
    bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true);
    openByScroll('.fixed-gift');
    showModalBytime('.popup-consultation', 50000);
};
export default modals;
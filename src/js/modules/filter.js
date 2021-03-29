const filter = () => {
    const menu = document.querySelector('.portfolio-menu'),
        items = menu.querySelectorAll('li'),
        btnAll = menu.querySelector('.all'),
        btnLovers = menu.querySelector('.lovers'),
        btnChef = menu.querySelector('.chef'),
        btnGirl = menu.querySelector('.girl'),
        btnGuys = menu.querySelector('.guy'),
        btnGM = menu.querySelector('.grandmother'),
        btnGF = menu.querySelector('.granddad'),
        wrapper = document.querySelector('.portfolio-wrapper'),
        markAll = wrapper.querySelectorAll('.all'),
        markGirl = wrapper.querySelectorAll('.girl'),
        markLovers = wrapper.querySelectorAll('.lovers'),
        markChef = wrapper.querySelectorAll('.chef'),
        markGuy = wrapper.querySelectorAll('.guy'),
        no = document.querySelector('.portfolio-no');

    const typeFilter =( marktype) => {
        markAll.forEach( mark => {
            mark.style.display = 'none';
            mark.classList.remove('animated', 'fadeIn' );
        });
        no.style.display = 'none';
        no.classList.remove('animated', 'fadeIn' );

        if (marktype){
            marktype.forEach( mark => {
                mark.style.display = 'block';
                mark.classList.remove('animated', 'fadeIn' );
            });
        } else {
            no.style.display = 'block';
            no.classList.remove('animated', 'fadeIn' );
        }
    };
    btnAll.addEventListener('click', ()=> {
        typeFilter(markAll);
    });
    btnLovers.addEventListener('click', ()=> {
        typeFilter(markLovers);
    });
    btnChef.addEventListener('click', ()=> {
        typeFilter(markChef);
    });
    btnGuys.addEventListener('click', ()=> {
        typeFilter(markGuy);
    });
    btnGirl.addEventListener('click', ()=> {
        typeFilter(markGirl);
    });
    btnGM.addEventListener('click', ()=> {
        typeFilter();
    });
    btnGF.addEventListener('click', ()=> {
        typeFilter();
    });
    menu.addEventListener('click', (e)=> {
        let target = e.target;
        if (target && target.tagName == 'LI'){
            items.forEach( item => {
                item.classList.remove('active');
                target.classList.add('active');
            });
        }
    });
};
export default filter;
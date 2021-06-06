import './scss/style.scss';
window.addEventListener('DOMContentLoaded', (event) => {

    //tabs contains
    let body = document.querySelector('body');
    let burger = document.querySelector('.burger--btn')

    burger.addEventListener('click', () => {
        body.classList.toggle('__nav-open');
    })


    //tabs logic
    document.querySelectorAll('.courses--tabs--title').forEach((item, index) => {
        item.addEventListener('click', () => {
            document.querySelectorAll('.courses--tabs--content').forEach((item) => {
                item.classList.remove('active')
            })
            document.querySelectorAll('.courses--tabs--content')[index].classList.add('active');
        })
    })

    //tabs contains items
    var prevEl = null;
    $(".courses--tabs--title").each(function(index) {
        $(this).on('click', function() {
            console.log(prevEl, index)
            if (prevEl < index) {
                $(".uk-tab-bottom").animate({ scrollLeft: '+=60' }, 300);
            } else {

                $(".uk-tab-bottom").animate({ scrollLeft: '-=70' }, 300);
            }
            prevEl = index;
        })
    })
});
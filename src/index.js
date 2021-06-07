import './scss/style.scss';
window.addEventListener('DOMContentLoaded', (event) => {

    //fixed  dropdown while scrolling
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if (scroll >= 150) {
            $(".header--dropdown").addClass("sticky");
        }
        else  {
            $(".header--dropdown").removeClass("sticky");
        }
    }); 


    //tabs contains
    let body = document.querySelector('body');
    let burger = document.querySelector('.burger--btn')
    let headerDropdownMobile = document.querySelector('.header--dropdown--title');
    let bgOverlay = document.getElementById('bg-overlay');
    let modileMenuDropdown = document.querySelector('.mobile-menu--footer--dropdown');

    //burger logic
    burger.addEventListener('click', () => {
        body.classList.toggle('__nav-open');
        cancelScrollCheck()
    })


    //check if scroll on body needed
    function cancelScrollCheck() {
        if(bgOverlay.classList.contains('active') || body.classList.contains('__nav-open')  ) {
            body.style.overflow = 'hidden'
        }
        else  {
            body.style.overflow = 'auto'
        }
    }


    //add overlay function
    function addOverlay(elem) {
        elem.addEventListener('click', () => {
            bgOverlay.classList.toggle('active');
            cancelScrollCheck()
        })
    }

    //add overlay for dropdown header
    addOverlay(headerDropdownMobile)

    

    //tabs logic
    document.querySelectorAll('.courses--tabs--title')[0].classList.add('active-title')
    document.querySelectorAll('.courses--tabs--title').forEach((item, index) => {

        item.addEventListener('click', function(event) {
            document.querySelectorAll('.courses--tabs--title').forEach((item) => {
                item.classList.remove('active-title')
            })
            document.querySelectorAll('.courses--tabs--content').forEach((item) => {
                item.classList.remove('active')
            })
            document.querySelectorAll('.courses--tabs--content')[index].classList.add('active');
            this.classList.add('active-title')
        })
    })

    //tabs contains items
    var prevEl = null;
    $(".courses--tabs--title").each(function(index) {
        $(this).on('click', function() {
            if(index===0) return
            if (prevEl < index) {
                $(".uk-tab-bottom").animate({ scrollLeft: '+=130' }, 300);
            }else if (prevEl-1 < index) {
                $(".uk-tab-bottom").animate({ scrollLeft: '+=170' }, 300);
            }
            else {
                $(".uk-tab-bottom").animate({ scrollLeft: '-=150' }, 300);
            }
            prevEl = index;
        })
    })

    //owlinit
    $('.owl-carousel').owlCarousel({
        stagePadding: 50,
        loop:true,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })
});
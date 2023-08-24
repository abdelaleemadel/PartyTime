export default class Nav {
    constructor() {
    }

    changeColor(anchor) {
        let prevLink = $('nav a.text-danger');
        prevLink.removeClass('text-danger');
        $(anchor).addClass('text-danger')
    }
    navigate(anchor) {
        let sectionId = $(anchor).attr('href');
        let sectionPosition = $(`${sectionId}`).offset().top;
        $('html, body').animate({ scrollTop: sectionPosition - 50 }, 1000);


    }
    openNav() {
        const navBar = $('nav');
        const layout = $('.layout');
        const open = $('#toggle span');
        navBar.css('width', '0');
        navBar.removeClass('d-none');
        navBar.animate({ width: 250 }, 1000);
        layout.animate({ marginLeft: 240 }, 1000);
        navBar.attr("data-toggle", "expanded");
        setTimeout(function () {
            open.html('close');
        }, 1000);
    }
    closeNav() {
        const navBar = $('nav');
        const layout = $('.layout');
        const open = $('#toggle span');
        navBar.animate({ width: 0 }, 1000);
        layout.animate({ marginLeft: 0 }, 1000);
        navBar.attr("data-toggle", "collapsed");
        setTimeout(function () {
            open.html('open');
        }, 1000);
    }

}


import Nav from './nav.module.js';
import { Timer } from './timer.module.js';
import Counter from './counter.module.js';
const nav = new Nav;

const navLinks = $("a[href^='#']");
/* When clicking link in nav bar navigate to the section and change the anchor color */
navLinks.click(function (event) {
    console.log(event.target);
    nav.changeColor(event.target);
    nav.navigate(event.target);
})
/* Scroll changing nav anchors color */
const homeOffset = $('#home').offset().top;
const singersOffset = $('#singers').offset().top;
const timerOffset = $('#timer').offset().top;
const joinOffset = $('#join').offset().top;

$(window).scroll(function () {
    const currentPosition = $('html, body').scrollTop();
    if (currentPosition < singersOffset - 300) {
        nav.changeColor($("a[href='#home']"));

    }
    else if (currentPosition > singersOffset - 300 && currentPosition < timerOffset - 300) {
        nav.changeColor($("a[href='#singers']"));
    } else if (currentPosition > timerOffset - 300 && currentPosition < joinOffset - 300) {
        nav.changeColor($("a[href='#timer']"))
    } else if (currentPosition > joinOffset - 300) {
        nav.changeColor($("a[href='#join']"))
    }
})

/* Opening and closing the nav  */

/* Using the open/close toggle */
const navBar = $('nav');
const navToggle = $('#toggle');
navToggle.click(function () {
    if (navBar.attr('data-toggle') == "collapsed") {
        nav.openNav();

    } else if (navBar.attr('data-toggle') == 'expanded') {
        nav.closeNav();
    }
})

/* Close using the x icon */
$('.bi-x').click(function () {
    nav.closeNav();
})
/* ------------------------------------------------------------ */
/* --------------------SINGER------------------------------- */
let prevSinger;
let beforePreSinger;
const singerNumber = $('.singer-number');
singerNumber.click(function (event) {
    let singerDetails = $(event.target).next();
    singerDetails.slideToggle(1000);
    if (prevSinger && !(prevSinger.is(singerDetails))) {
        if (beforePreSinger) {
            if (!(beforePreSinger.is(prevSinger))) {
                prevSinger.slideToggle(1000);
            }
        } else {
            prevSinger.slideToggle(1000);
        }
    }
    beforePreSinger = prevSinger;
    prevSinger = singerDetails;
})
/* ------------------------------------------------------------ */

/* --------------------Timer -----------------------*/
const partyTime = "May 01, 2024";
let timer = new Timer(partyTime);
timer.timeDifference();

let myInterval =
    setInterval(function () {
        timer.timeDifference();
    }, 1000)
/* ------------------------------------------------------------------ */


/* Counter */
const counter = new Counter;
let textArea = $('#exampleFormControlTextarea1');
textArea.keyup(function (event) {
    counter.countChar();
    console.log(event.target)
})
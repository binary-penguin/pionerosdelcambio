// SMOOTH SCROLLING FOOTER LINKS

const btnFooterToInicio = document.querySelector("#footer__inicio");
const btnFooterToConocenos = document.querySelector("#footer__conocenos");
const btnFooterToCultura = document.querySelector("#footer__cultura");
const btnFooterToComites = document.querySelector("#footer__comites");

const inicio = document.querySelector("#hero");
const conocenos = document.querySelector("#quienes-somos");
const cultura = document.querySelector("#cultura");
const comites = document.querySelector("#comites");

// Event Handlers for smooth scrolling

btnFooterToInicio.addEventListener("click", function (e) {
    e.preventDefault();
    inicio.scrollIntoView({ behavior: "smooth" });
});

btnFooterToConocenos.addEventListener("click", function (e) {
    e.preventDefault();
    conocenos.scrollIntoView({ behavior: "smooth" });
});

btnFooterToCultura.addEventListener("click", function (e) {
    e.preventDefault();
    cultura.scrollIntoView({ behavior: "smooth" });
});

btnFooterToComites.addEventListener("click", function (e) {
    e.preventDefault();
    comites.scrollIntoView({ behavior: "smooth" });
});

/*

// OLD SCHOOL

const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

btnScrollTo.addEventListener("click", function (e) {
    // Get DYNAMIC x, y, width and height of an element
    const s1coords = section1.getBoundingClientRect();
    console.log(s1coords);
    // Get DYNAMIC x, y, width and height of the element that triggers the event

    console.log(e.target.getBoundingClientRect());

    // Get DYNAMIC scroll ( X / Y )
    // Y from the very top how many pixels to the beginning of the page
    // Y from the very left how many pixels to the beginning of the page
    console.log(window.pageXOffset, pageYOffset);

    // Get height and width of the viewport (client view)

    console.log(
        document.documentElement.clientHeight,
        document.documentElement.clientWidth
    );

    // Scrolling

    // window.scrollTo({
    //     behavior: "smooth",
    //     left: s1coords.left + window.pageXOffset,
    //     top: s1coords.top + window.pageYOffset,
    // });

    // MODERN WAY

    section1.scrollIntoView({ behavior: "smooth" });
});

*/

(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function scrollTo(id) {
    $('.content-body').animate({
        scrollTop: $(id).offset().top
    }, 1000);
}

$('#sidebar-about').click(() => {
    scrollTo('#about');
});

$('#sidebar-projects').click(() => {
    scrollTo('#projects');
});

$('#sidebar-contact').click(() => {

});

$('#sidebar-github').click(() => {
    window.open('https://github.com/zak-grumbles', '_blank');
});
},{}]},{},[1])
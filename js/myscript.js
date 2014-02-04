/*** Custom JavaScript for Florent Barriol Portfolio
 *** http://florentbarriol.com
***/
/** General var element **/
var carousel = $('.carousel');
var nav = $('#nav');

/** Menu effect **/
var $navButton = $('#nav-icon');
var $navContainer = $('.navbar-fade');
var $nav = $('.nav');

$navButton.click(function () {
    if ($nav.hasClass('fadeIn')) {
        $nav.removeClass('fadeIn').addClass('fadeOut');
        setTimeout(function () {
            $navContainer.find($nav);
        }, 500);
        $('.navbar-toggle').toggleClass('active');
    } else {
        $nav.addClass('fadeIn').removeClass('fadeOut');
        $('.navbar-toggle').toggleClass('active');
    }
});
// After 10sec click on a menu's item, the menu is hide
$('.nav a').mouseup(function() {
    setTimeout(function() {
        $navButton.click();
    }, 10000);
});

/** Bootstrap Affix **/
nav.affix({
    offset: {
        top: function () {
            return (this.top = $('.header').outerHeight(true) - 1)
        }
    }
});

/** Smooth Scrolling **/
$(function () {
    $('a[href*=#]:not([href=#]).smooth-scroll').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});

/** Portfolio - Grid Transition **/
$(".portfolio-item a").click(function (e) {
    // Cache la grille et affiche le carousel
    if ($(".grid").hasClass("visible")) {
        $(".grid").addClass("pullUpGrid").removeClass("pullDownGrid");
        $(".preview").addClass("pullUpPreview").removeClass("pullDownPreview");
        $(".preview").toggleClass("visible");
        $(".grid").toggleClass("visible");
    }
    // Selectionne le bon item dans le carousel
    var $item = $(this).data("link");
    $(".carousel .item").removeClass("active");
    $("#" + $item).addClass("active");
    $(".carousel .carousel-indicators li").removeClass("active");
    $(".carousel-indicators li:nth-child(" + $item.split("-")[1] + ")").addClass("active");
});
$("#close-preview").click(function (e) {
    // Cache le carousel et affiche la grille
    if ($(".preview").hasClass("visible")) {
        $(".grid").addClass("pullDownGrid").removeClass("pullUpGrid");
        $(".preview").addClass("pullDownPreview").removeClass("pullUpPreview");
        $(".grid").toggleClass("visible");
        $(".preview").toggleClass("visible");
    }
});

/** Bootstrap Carousel **/
carousel.carousel({
    interval: 0
});
/* tooltip close button */
// tooltip demo
$('body').tooltip({
    selector: "[data-toggle=tooltip]",
    container: "body",
});


/** Google Map Skin - Get more at http://snazzymaps.com/ **/

// Rue Général Ferrié
var myLatlngMyStreet = new google.maps.LatLng(45.1779254,5.7241706);
// Grenoble
var LatlngCenter = new google.maps.LatLng(45.1836331, 5.7283021);
var myOptions = {
    zoom: 15,
    center: LatlngCenter,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    zoomControl: true,
    zoomControlOptions: {
        style: google.maps.ZoomControlStyle.SMALL,
    },
    disableDoubleClickZoom: true,
    mapTypeControl: false,
    scaleControl: false,
    scrollwheel: false,
    streetViewControl: false,
    draggable : true,
    overviewMapControl: false,
    styles: [{
            "featureType": "water",
            "stylers": [
                {
                    "saturation": 43
                },
                {
                    "lightness": -11
                },
                {
                    "hue": "#0088ff"
                }
            ]
        }, {
            "featureType": "road",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "hue": "#ff0000"
                },
                {
                    "saturation": -100
                },
                {
                    "lightness": 99
                }
            ]
        }, {
            "featureType": "road",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#808080"
            },
                {
                    "lightness": 54
            }
        ]
    },
        {
            "featureType": "landscape.man_made",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#ece2d9"
            }
        ]
    },
        {
            "featureType": "poi.park",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#ccdca1"
            }
        ]
    },
        {
            "featureType": "road",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#767676"
            }
        ]
    },
        {
            "featureType": "road",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "color": "#ffffff"
            }
        ]
    },
        {
            "featureType": "poi",
            "stylers": [
                {
                    "visibility": "off"
            }
        ]
    },
        {
            "featureType": "landscape.natural",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "visibility": "on"
            },
                {
                    "color": "#b8cb93"
            }
        ]
    },
        {
            "featureType": "poi.park",
            "stylers": [
                {
                    "visibility": "on"
            }
        ]
    },
        {
            "featureType": "poi.sports_complex",
            "stylers": [
                {
                    "visibility": "on"
            }
        ]
    },
        {
            "featureType": "poi.medical",
            "stylers": [
                {
                    "visibility": "on"
            }
        ]
    },
        {
            "featureType": "poi.business",
            "stylers": [
                {
                    "visibility": "simplified"
            }
        ]
    }
]
};

var map = new google.maps.Map(document.getElementById('map'), myOptions);

var marker = new google.maps.Marker({
    icon: '',
    position: myLatlngMyStreet,
    map: map,
    animation: google.maps.Animation.DROP,
});
google.maps.event.addListener(marker, 'click', toggleBounce);

// marker bounce when clikcked
function toggleBounce() {
  if (marker.getAnimation() != null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}
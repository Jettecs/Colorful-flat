//Menu

$(window).scroll(function() { 
    var top = $(document).scrollTop();
    
    if( (top > 100) ) { 
      if ( $('#top_navigation').hasClass("fixed_desctop") ) {} else {
      $('#top_navigation').addClass('fixed_desctop');
      $('.logo').addClass('logo-fixed');
      $('nav').addClass('nav-fixed') 
    }
    } else { 
      if ( $('#top_navigation').hasClass("fixed_desctop") ) {
      $('#top_navigation').removeClass('fixed_desctop');
      $('.logo').removeClass('logo-fixed');
      $('nav').removeClass('nav-fixed') 
    }
    }
   });

//Carousel

$(document).ready(function() {
  $('.carousel').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  autoplay: true,
  autoplaySpeed: 3000
});

$('.carousel-2').slick({
  dots: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 3000
});

})

//Parallax
    $(document).ready(function(){
            $(window).stellar({
                horizontalScrolling: false,
                verticalOffset: 40
            });
        })


//Tabs
$(function() {
    
    $('#tabs').tabs();    
});

$( "#tab-1" ).tabs({
  active: 1
});

//Lightbox

$(document).ready(function(){
        $(".group").colorbox({rel:'group'});
        $(".callbacks").colorbox({
          onOpen:function(){ alert('onOpen: colorbox is about to open'); },
          onLoad:function(){ alert('onLoad: colorbox has started to load the targeted content'); },
          onComplete:function(){ alert('onComplete: colorbox has displayed the loaded content'); },
          onCleanup:function(){ alert('onCleanup: colorbox has begun the close process'); },
          onClosed:function(){ alert('onClosed: colorbox has completely closed'); }
        });
      });

//Accordion
$(document).ready(function() {
  
    $("#accordion").accordion({
    collapsible: true,
    active: 5,
    autoHeight: false
}).accordion("activate" -1);

   $("#accordion-1").accordion({
    collapsible: true,
    active: 5,
    autoHeight: false
}).accordion("activate" -1  );

   $("#accordion-2").accordion({
    collapsible: true,
    active: 5,
    autoHeight: false
}).accordion("activate" -1);

   $("#accordion-3").accordion({
    collapsible: true,
    active: 5,
    autoHeight: false
}).accordion("activate" -1);

});

//Button Up
var top_show = 150; 
  var delay = 1000; 
  $(document).ready(function() {
    $(window).scroll(function () { 
      
      if ($(this).scrollTop() > top_show) $('#top').fadeIn();
      else $('#top').fadeOut();
    });

    $('#top').click(function () { 
      
      $('body, html').animate({
        scrollTop: 0
      }, delay);
    });
  });

//Map

var map;
var NY = new google.maps.LatLng(40.6962494, -73.9922393);
 
var MY_MAPTYPE_ID = 'mystyle';
 
function initialize() {
 
  var stylez =  [
  {
    "featureType": "administrative",
    elementType: "all",
    "stylers": [
      { "color": "#fff" },
      { "visibility": "on" }
    ]
  },{
    "featureType": "landscape",
    elementType: "geometry",
    "stylers": [
      { "color": "#353535" },
      { "visibility": "on" }
    ]
  },{
    "featureType": "poi",
    elementType: "geometry",
    "stylers": [
      { "color": "#2b2b2b" },
      { "visibility": "off" }
    ]
  },{
    "featureType": "road",
    elementType: "geometry",
    "stylers": [
      { "color": "#2e2e2e" },
      { "visibility": "on" }
    ]
  },
  {
    "featureType": "road.highway",
    elementType: "geometry",
    "stylers": [
      { "color": "#2e2e2e" },
      { "visibility": "on" }
    ]
  },{
    "featureType": "road.local",
    elementType: "geometry",
    "stylers": [
      { "color": "#282828" },
      { "visibility": "on" }
    ]
  },{
    "featureType": "water",
    elementType: "geometry",
    "stylers": [
      { "color": "#2b2b2b" },
      { "visibility": "on" }
    ]
  }
];
 
  var mapOptions = {
    zoom: 15,
    center: NY,
    mapTypeControlOptions: {
       mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
    },
    mapTypeId: MY_MAPTYPE_ID
  };
 
  map = new google.maps.Map(document.getElementById("map_canvas"),
      mapOptions);
  var image = 'img/marker.png';
 var marker = new google.maps.Marker({
      position: new google.maps.LatLng (40.6962494, -73.9922393),
      map: map,
      icon: image,
      });
  var styledMapOptions = {
    name: "Custom Style"
  };
 
  var jayzMapType = new google.maps.StyledMapType(stylez, styledMapOptions);
 
  map.mapTypes.set(MY_MAPTYPE_ID, jayzMapType);
}



(function($) {
    var jQuery = $.noConflict(false);
    var $ = jQuery;

    $('#toggleDrawer').on('click', function() {
      // console.log('#toggleDrawer selected');
      $('#drawer').addClass('show');
      $('#closeDrawer').focus();
    });

    $('#closeDrawer').on('click', function() {
        // console.log('#closeDrawer selected');
        $('#drawer').removeClass('show');
        $('#toggleDrawer').focus();
    });

    $('#closeLoop').on('keypress', function(e) {
      // console.log('closeloop keypress');
      if(e.which == 13) {
        $('#closeDrawer').focus();
      }
    });

    $('#drawer .navlinks a').on('click', function() {
      $('#drawer').removeClass('show');
      $('#toggleDrawer').focus();
    }); 

    function checkScroll(y) {
        // console.log(checkScroll);
        // If the scroll is at the top, not sticky.
        // Transition comes farther down the page for
        // the the front page.
        var heroHeight = $('#hero') ? $('#hero').height() : 0;
        // console.log(heroHeight);
        if (y <= (heroHeight - 48)) {
            // $('body').addClass('scroll-top');
            $('nav').removeClass('sticky-top');
            $('.subnav').removeClass('sticky-top');
        } else if (y > (heroHeight - 64)) {
            // $('body').removeClass('scroll-top');
            $('nav').addClass('sticky-top');
            $('.subnav').addClass('sticky-top');
        }
    }

 

  $( document ).ready(function() {
    // Manage navbar appearance by scroll position
    $( window ).scroll(function() {
      var t = $(window).scrollTop();
      checkScroll(t);
    });
    // Check on page load as well.
    var t = $(window).scrollTop();
    checkScroll(t);

    // Smooth scroll down on button click
    $('.scroll-to-section').on('click', function(e) {
        console.log('click');
        e.preventDefault();
        var target_id = $(e.target).attr('data-scroll-target');
        // console.log(target_id);
        $target = $('#' + target_id);
        // console.log($target);
        $('html, body').animate({
            scrollTop: ($target.offset().top) - 48
        }, 500);
        var t = $(window).scrollTop();
        checkScroll(t);
    });
  });
   
// CLP Data Page ----------------------------------------------------------------


$(document).ready(function () {
  var gatag = " onclick=\"ga(‘send’, ‘event’, ‘PDF’, ‘Download’, ‘Company Brochure – PDF Download’);\"";
  $('.years').append('<a href="https://economics.princeton.edu/censuslinkingproject/1850-1860.zip">1850-1860.zip</a>');
  $('.file-title').append('&nbsp;1850-1860');

  $("select").change(function(){
    var censusID1 = $( "#census1" ).val();
    var censusID2 = $( "#census2" ).val();
   
    if (censusID2 <= censusID1  && censusID1 != 1880) {
      censusID2 = Number(censusID1) + 10
      $("select#census2").val(censusID2);
    };
    if (censusID2 <= censusID1 && censusID1 == 1880) {
      censusID2 = Number(censusID1) + 20
      $("select#census2").val(censusID2);
    }; 

    $('select#census2').find('option').each(function() {
        if (Number(this.value) <= censusID1) {
            $(this).hide();
        } else {
            $(this).show();
        }
    });
  
    var fileLinkTitle = '<a href="https://economics.princeton.edu/censuslinkingproject/' + 
    censusID1 + '-' + censusID2 + '.zip"' + '>' + censusID1 + '-' + censusID2 + '.zip</a>';
    
    function rollover2() {
      var element2 = document.getElementById("show-crosswalk");
      $('.years').removeClass('rollover1');
      void element2.offsetWidth;
      $('.years').addClass('rollover1');
    };  
    function changeCrosswalk() {  
      $('.years').empty();
      $('.years').append(fileLinkTitle);
    }
    setTimeout(rollover2, 0);
    setTimeout(changeCrosswalk, 280);
  });
});


// CLP Homepage ------------------------------------------------ //

$(document).ready(function () {

 

anime.set(['.tabletUp svg#tophalf'], {
  opacity: 0,
  translateX: '-50%',
});

anime({ 
  targets: ['.tabletUp svg#tophalf'],
  opacity: 1,
  translateX: 0,
  easing: 'easeInOutSine',
  duration: 2000,
  delay: 0,
});

anime.set(['.tabletUp svg#bottomhalf'], {
  opacity: 0,
  translateX: '50%',
  translateY: -1,
});

anime({ 
  targets: ['.tabletUp svg#bottomhalf'],
  opacity: 1,
  translateX: 0,
  easing: 'easeInOutSine',
  duration: 2000,
  delay: 0,
});










 });
   
  
})(jQuery);

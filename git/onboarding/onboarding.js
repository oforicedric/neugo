//  Inspired by Jonathan Moreira

//  http://dribbble.com/shots/1216346-Guided-tour-tooltip

// Twitter @YoannHELIN

$(document).ready(function () {
    var nbP = $('.container p').length;
    var w = parseInt($('.container p').css("width"));
    var max = (nbP - 1) * w;
    $("ul li[data-num='1']").addClass('active');
    $('.step span').html('Step 1');
    
    $('body').on('click','.btn', function(){
      var margL = parseInt($('.slider-turn').css('margin-left'));
      var modulo = margL%w;
      if (-margL < max && modulo == 0) {
        margL -= w;
     
        $('.slider-turn').animate({
          'margin-left':margL
        },300);
        $('ul li.active').addClass('true').removeClass('active');
        var x = -margL/w +1;
        $('ul li[data-num="'+x+'"]').addClass('active');
        $('.step span').html("Step "+x);
      }
      else  {}
    });

    $('body').on('change','#degreedropdown', function(){
        var margL = parseInt($('.slider-turn').css('margin-left'));
        var modulo = margL%w;
        if (-margL < max && modulo == 0) {
          margL -= w;
       
          $('.slider-turn').animate({
            'margin-left':margL
          },300);
          $('ul li.active').addClass('true').removeClass('active');
          var x = -margL/w +1;
          $('ul li[data-num="'+x+'"]').addClass('active');
          $('.step span').html("Step "+x);
        }
        else  {}
      });

    $('body').on('click','.btn1', function(){
        $(this).hide();
        $("#form1").hide();
        var margL = parseInt($('.slider-turn').css('margin-left'));
        var modulo = margL%w;
        if (-margL < max && modulo == 0) {
          margL -= w;
       
          $('.slider-turn').animate({
            'margin-left':margL
          },300);
          $('ul li.active').addClass('true').removeClass('active');
          var x = -margL/w +1;
          $('ul li[data-num="'+x+'"]').addClass('active');
          $('.step span').html("Step "+x);
        }
        else  {}
      });

          $('body').on('click','.btn2', function(){
        $(this).hide();
        $("#unidropdown").hide();
        var margL = parseInt($('.slider-turn').css('margin-left'));
        var modulo = margL%w;
        if (-margL < max && modulo == 0) {
          margL -= w;
       
          $('.slider-turn').animate({
            'margin-left':margL
          },300);
          $('ul li.active').addClass('true').removeClass('active');
          var x = -margL/w +1;
          $('ul li[data-num="'+x+'"]').addClass('active');
          $('.step span').html("Step "+x);
        }
        else  {}
      });

      $('body').on('click','#yesbtn', function(){
        var margL = parseInt($('.slider-turn').css('margin-left'));
        var modulo = margL%w;
        if (-margL < max && modulo == 0) {
          margL -= w;
       
          $('.slider-turn').animate({
            'margin-left':margL
          },300);
          $('ul li.active').addClass('true').removeClass('active');
          var x = -margL/w +1;
          $('ul li[data-num="'+x+'"]').addClass('active');
          $('.step span').html("Step "+x);
        }
        else  {}
      });

    $('body').on('click','.btn', function(){
        var margL = parseInt($('.slider-turn').css('margin-left'));
        var modulo = margL%w;
        if (-margL < max && modulo == 0) {
          margL -= w;
       
          $('.slider-turn').animate({
            'margin-left':margL
          },300);
          $('ul li.active').addClass('true').removeClass('active');
          var x = -margL/w +1;
          $('ul li[data-num="'+x+'"]').addClass('active');
          $('.step span').html("Step "+x);
        }
        else  {}
      });
    
    $('body').on('click','.close',function(){
      $('.container').animate({
        'opacity':0
      },600);
      $('.container').animate({
        'top':-1200
      }, {
        duration: 2300,
        queue: false
      });
      $('.open').animate({
        'top':'50%'
      });
    });
    
    $('body').on('click','.open',function() {
      $('.open').animate({
        'top':-1000
      });
      $('.container').animate({
        'opacity':1
      },400);
      $('.container').animate({
        'top':'50%'
      }, {
        duration: 800,
        queue: false
      });
    });
  });

//dropdown stuff

function showDropdown() {
    document.getElementById('unidropdown').style.display = "block";
    document.getElementById('unibutton').style.display = "block";
 
}

 function showDropdown1() {
    document.getElementById('degreedropdown').style.display = "block";
 }

 function showFinal() {
    document.getElementById('nobtn').style.display = "inline";
    document.getElementById('yesbtn').style.display = "inline";
    document.getElementById('degreedropdown').style.display = "none";
}

function showstart() {
    document.getElementById('nobtn').style.display = "none";
    document.getElementById('yesbtn').style.display = "none";
    document.getElementById('gobtn').style.display = "block";

}





 $(document).ready(function(){
    $('#unidropdown').change(function(){
        $selected_value=$('#unidropdown option:selected').text();
       // selcted value $('#result').text($selected_value);
    });
});

$(document).ready(function(){
    $('#degreedropdown').change(function(){
        $selected_value=$('#degreedropdown option:selected').text();
        //$selcted value $('#result').text($selected_value);
    });
});


//profile code

var messageBox = document.querySelector('.js-message');
  var btn = document.querySelector('.js-message-btn');
  var card = document.querySelector('.js-profile-card');
  var closeBtn = document.querySelectorAll('.js-message-close');

  btn.addEventListener('click',function (e) {
      e.preventDefault();
      card.classList.add('active');
  });

  closeBtn.forEach(function (element, index) {
     console.log(element);
      element.addEventListener('click',function (e) {
          e.preventDefault();
          card.classList.remove('active');
      });
  });

// graphs

// Our labels along the x-axis
var years = [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050];
// For drawing the lines
var africa = [86,114,106,106,107,111,133,221,783,2478];
var asia = [282,350,411,502,635,809,947,1402,3700,5267];
var europe = [168,170,178,190,203,276,408,547,675,734];
var latinAmerica = [40,20,10,16,24,38,74,167,508,784];
var northAmerica = [6,3,2,2,7,26,82,172,312,433];

var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: years,
    datasets: [
      { 
        data: africa,
        label: "Africa",
        borderColor: "#3e95cd",
        fill: false
      },
      { 
        data: asia,
        label: "Asia",
        borderColor: "#8e5ea2",
        fill: false
      },
      { 
        data: europe,
        label: "Europe",
        borderColor: "#3cba9f",
        fill: false
      },
      { 
        data: latinAmerica,
        label: "Latin America",
        borderColor: "#e8c3b9",
        fill: false
      },
      { 
        data: northAmerica,
        label: "North America",
        borderColor: "#c45850",
        fill: false
      }
    ]
  }
});

//end of graphs

//button

$(function() {
    $('.btn').click(function() {
      $(this).toggleClass('is-clicked');
    });
  });

//endof button


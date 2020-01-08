//  Inspired by Jonathan Moreira

//  http://dribbble.com/shots/1216346-Guided-tour-tooltip

// Twitter @YoannHELIN

$(document).ready(function () {
  var nbP = $('.container p').length;
  var w = parseInt($('.container p').css("width"));
  var max = (nbP - 1) * w;
  $("ul li[data-num='1']").addClass('active');
  $('.step span').html('Step 1');

  $('body').on('click', '.btn', function () {
    var margL = parseInt($('.slider-turn').css('margin-left'));
    var modulo = margL % w;
    if (-margL < max && modulo == 0) {
      margL -= w;

      $('.slider-turn').animate({
        'margin-left': margL
      }, 300);
      $('ul li.active').addClass('true').removeClass('active');
      var x = -margL / w + 1;
      $('ul li[data-num="' + x + '"]').addClass('active');
      $('.step span').html("Step " + x);
    }
    else { }
  });

  $('body').on('change', '#degreedropdown', function () {
    var margL = parseInt($('.slider-turn').css('margin-left'));
    var modulo = margL % w;
    if (-margL < max && modulo == 0) {
      margL -= w;

      $('.slider-turn').animate({
        'margin-left': margL
      }, 300);
      $('ul li.active').addClass('true').removeClass('active');
      var x = -margL / w + 1;
      $('ul li[data-num="' + x + '"]').addClass('active');
      $('.step span').html("Step " + x);
    }
    else { }
  });

  $('body').on('click', '.btn1', function () {
    $(this).hide();
    $("#form1").hide();
    var margL = parseInt($('.slider-turn').css('margin-left'));
    var modulo = margL % w;
    if (-margL < max && modulo == 0) {
      margL -= w;

      $('.slider-turn').animate({
        'margin-left': margL
      }, 300);
      $('ul li.active').addClass('true').removeClass('active');
      var x = -margL / w + 1;
      $('ul li[data-num="' + x + '"]').addClass('active');
      $('.step span').html("Step " + x);
    }
    else { }
  });

  $('body').on('click', '.btn2', function () {
    $(this).hide();
    $("#unidropdown").hide();
    var margL = parseInt($('.slider-turn').css('margin-left'));
    var modulo = margL % w;
    if (-margL < max && modulo == 0) {
      margL -= w;

      $('.slider-turn').animate({
        'margin-left': margL
      }, 300);
      $('ul li.active').addClass('true').removeClass('active');
      var x = -margL / w + 1;
      $('ul li[data-num="' + x + '"]').addClass('active');
      $('.step span').html("Step " + x);
    }
    else { }
  });

  $('body').on('click', '#yesbtn', function () {
    var margL = parseInt($('.slider-turn').css('margin-left'));
    var modulo = margL % w;
    if (-margL < max && modulo == 0) {
      margL -= w;

      $('.slider-turn').animate({
        'margin-left': margL
      }, 300);
      $('ul li.active').addClass('true').removeClass('active');
      var x = -margL / w + 1;
      $('ul li[data-num="' + x + '"]').addClass('active');
      $('.step span').html("Step " + x);
    }
    else { }
  });

  $('body').on('click', '.btn', function () {
    var margL = parseInt($('.slider-turn').css('margin-left'));
    var modulo = margL % w;
    if (-margL < max && modulo == 0) {
      margL -= w;

      $('.slider-turn').animate({
        'margin-left': margL
      }, 300);
      $('ul li.active').addClass('true').removeClass('active');
      var x = -margL / w + 1;
      $('ul li[data-num="' + x + '"]').addClass('active');
      $('.step span').html("Step " + x);
    }
    else { }
  });

  $('body').on('click', '.close', function () {
    $('.container').animate({
      'opacity': 0
    }, 600);
    $('.container').animate({
      'top': -1200
    }, {
      duration: 2300,
      queue: false
    });
    $('.open').animate({
      'top': '50%'
    });
  });

  $('body').on('click', '.open', function () {
    $('.open').animate({
      'top': -1000
    });
    $('.container').animate({
      'opacity': 1
    }, 400);
    $('.container').animate({
      'top': '50%'
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


$(document).ready(function () {
  $('#unidropdown').change(function () {
    $selected_value = $('#unidropdown option:selected').text();
    // selcted value $('#result').text($selected_value);
  });
});

$(document).ready(function () {
  $('#degreedropdown').change(function () {
    $selected_value = $('#degreedropdown option:selected').text();
    //$selcted value $('#result').text($selected_value);
  });
});


//profile code

var messageBox = document.querySelector('.js-message');
var btn = document.querySelector('.js-message-btn');
var card = document.querySelector('.js-profile-card');
var closeBtn = document.querySelectorAll('.js-message-close');

btn.addEventListener('click', function (e) {
  e.preventDefault();
  card.classList.add('active');
});

closeBtn.forEach(function (element, index) {
  console.log(element);
  element.addEventListener('click', function (e) {
    e.preventDefault();
    card.classList.remove('active');
  });
});

// graphs

//button

$(function () {
  $('.btn').click(function () {
    $(this).toggleClass('is-clicked');
  });
});

//endof button

function showChart(user_activity, all_activity) {
  var ctx = document.getElementById("myChart");
  ctx.width = 100;
  ctx.height = 100;
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: graph_labels,
      datasets: [
        {
          data: user_activity,
          label: "My Study Activity",
          borderColor: "#3e95cd",
          fill: false
        },
        {
          data: all_activity,
          label: "Average Neugo User Activity",
          borderColor: "#8e5ea2",
          fill: false
        },
      ]
    },
    options: {
      maintainAspectRatio: false,
      responsive: true,
    }
  });

  // slider

  var swiper = new Swiper('.blog-slider', {
    // spaceBetween: 30,
    effect: 'fade',
    loop: true,
    mousewheel: {
      invert: false,
    },
    // autoHeight: true,
    pagination: {
      el: '.blog-slider__pagination',
      clickable: true,
    }
  });
}

// onboarding final margins
function smallMargin(){
  if ($(window.width())<400){
  document.getElementById('p2').style.marginLeft ="-17px";
  }
  else if ($(window.width())>401) {
  document.getElementById('p2').style.marginLeft ="-13px";
  }
};


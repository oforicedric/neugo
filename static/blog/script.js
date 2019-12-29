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
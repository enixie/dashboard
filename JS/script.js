// SIDEBAR

var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");

function openSidebar() {
    if(!sidebarOpen) {
        sidebar.classList.add("sidebar-responsive");
        sidebarOpen = true;
    } // OPENSIDEBAR
}

function closeSidebar() {
    if(sidebarOpen) {
        sidebar.classList.remove("sidebar-responsive");
        sidebarOpen = false;
    }
}


// ---------------- CHARTS ----------------

// BAR CHART

var barChartOptions = {
    series: [{
      name: 'Actual',
      data: [{
          x: 'Triagem',
          y: 249,
          goals: [{
              name: 'Expected',
              value: 528,
              strokeWidth: 2,
              strokeDashArray: 2,
              strokeColor: '#775DD0'
            }]
        },
        {
          x: 'Abertura',
          y: 523,
          goals: [{
              name: 'Expected',
              value: 1020,
              strokeWidth: 5,
              strokeHeight: 10,
              strokeColor: '#775DD0'
            }]
        },
        {
          x: 'Análise',
          y: 358,
          goals: [{
              name: 'Expected',
              value: 900,
              strokeWidth: 10,
              strokeHeight: 0,
              strokeLineCap: 'round',
              strokeColor: '#775DD0'
            }]
        },
        {
          x: 'Montagem',
          y: 447,
          goals: [{
              name: 'Expected',
              value: 1000,
              strokeWidth: 10,
              strokeHeight: 0,
              strokeLineCap: 'round',
              strokeColor: '#775DD0'
            }]
        },
        {
          x: 'Estanque',
          y: 695,
          goals: [{
              name: 'Expected',
              value: 1200,
              strokeWidth: 10,
              strokeHeight: 0,
              strokeLineCap: 'round',
              strokeColor: '#775DD0'
            }]
        },
        {
          x: 'Demanda',
          y: 254,
          goals: [{
              name: 'Expected',
              value: 1000,
              strokeWidth: 5,
              strokeHeight: 10,
              strokeColor: '#775DD0'
            }]
        }]
    }],
    chart: {
        height: 350,
        type: 'bar'
  },
  plotOptions: {
    bar: {
      horizontal: true,
    }
  },
  colors: ['#00E396'],
  dataLabels: {
    formatter: function(val, opt) {
      const goals =
        opt.w.config.series[opt.seriesIndex].data[opt.dataPointIndex]
          .goals
  
      if (goals && goals.length) {
        return `${val} / ${goals[0].value}`
      }
      return val;
        }
    },
    xaxis: {
        labels: {
            style: {
                colors: ['#FFFFFF']  // Cor dos rótulos do eixo x
            }
        }
    },
    yaxis: {
        labels: {
            style: {
                colors: ['#FFFFFF']  // Cor dos rótulos do eixo y
            }
        }
    },
  legend: {
    show: true,
    showForSingleSeries: true,
    customLegendItems: ['Atual', 'Esperado'],
    markers: {
        fillColors: ['#00E396', '#775DD0']
    },
    labels: {
        colors: '#FFFFFF'  // Mudar a cor dos rótulos da legenda para branco
    }
    }
  };

  var barChart = new ApexCharts(document.querySelector("#bar-chart"), barChartOptions);
  barChart.render();
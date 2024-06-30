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

// AREA CHART

var areaChartOptions = {
    series: [{
        name: 'Mês anterior',
        data: [44, 55, 31, 47, 31, 43, 26, 41, 31, 47, 33, 44]
    }, {
        name: 'Mês atual',
        data: [55, 69, 45, 61, 43, 54, 37, 52, 44, 61, 43, 52]
    }],
    chart: {
        type: "area",
        background: "transparent",
        height: 350,
        stacked: false,
        toolbar: {
            show: false,
        },
    },
    colors: ["#00ab57", "#775DD0"],
    labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "De"],
    dataLabels: {
        enabled: false,
    },
    fill: {
        gradient: {
            opacityFrom: 0.4,
            opacityTo: 0.1,
            shadeIntensity: 1,
            stops: [0, 100],
            type: "vertical",
        },
        type: "gradient",
    },
    grid: {
        borderColor: "#55596e",
        yaxis: {
            lines: {
                show: true,
            },
        },
        xaxis: {
            lines: {
                show: true,
            },
        },
    },
    legend: {
        labels: {
            colors: "#f5f7ff",
        },
        show: true,
        position: "top",
    },
    markers: {
        size: 6,
        strokeColors: "#1b2635",
        strokeWidth: 3
    },
    stroke: {
        curve: "smooth",
    },
    xaxis: {
        axisBorder: {
            color: "#55596e",
            show: true,
        },
        axisTicks: {
            color: "#55596e",
            show: true,
        },
        labels: {
            offsetY: 5,
            style: {
                colors: "#f5f7ff"
            },
        },
    },
    yaxis: [
        {
            title: {
                text: 'Mês anterior',
                style: {
                    color: "#f5f7ff",
                },
            },
            labels: {
                style: {
                    colors: ["#f5f7ff"],
                },
            },
        },
        {
            opposite: true,
            title: {
                text: 'Mês atual',
                style: {
                    color: "#f5f7ff"
                },
            },
            labels: {
                style: {
                    colors: ["#f5f7ff"],
                },
            },
        },
    ],
    tooltip: {
        shared: true,
        intersect: false,
        theme: "dark",
    }
};

var areachart = new ApexCharts(document.querySelector("#area-chart"), areaChartOptions);
areachart.render();


// GAUGE-CHART TRIAGEM
// Valor alvo
const targetValue = 528;
// Progresso atual
let currentProgress = 0;

// Configurações do gráfico
var options = {
    chart: {
        height: 350,
        type: 'radialBar',
    },
    series: [0],
    labels: ['Progresso'],
    plotOptions: {
        radialBar: {
            dataLabels: {
                value: {
                    color: '#FFFFFF',
                    formatter: function(val) {
                        return parseFloat(val).toFixed(1) + "%";
                    }
                }
            },
            track: {
                background: '#FFFFFF'
            }
        }
    }
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();

// Função para submeter a produção
function submitProduction(event) {
    if (event) event.preventDefault();
    
    const inputValue = parseInt(document.getElementById('production-quantity').value);
    if (isNaN(inputValue) || inputValue < 0) {
        alert("Por favor, insira um número válido.");
        return;
    }

    currentProgress += inputValue;

    // Calcula a porcentagem
    const percentage = (currentProgress / targetValue) * 100;

    // Atualiza o gráfico
    chart.updateSeries([percentage.toFixed(1)]);

    // Limpa o campo de input
    document.getElementById('production-quantity').value = '';
}

// Adiciona ouvinte de eventos para a tecla Enter
document.getElementById('production-quantity').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        submitProduction(event);
    }
});

// TRIAGEM



// Import Chart.js library.  This needs to be added to your HTML file as well, typically within the `<head>` section.  For example: `<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>`
//import Chart from "chart.js/auto"

document.addEventListener("DOMContentLoaded", () => {
  const data = {
    city1: {
      management: {
        punching: {
          labels: [
            "4TH JAN",
            "7TH JAN",
            "8TH JAN",
            "9TH JAN",
            "10TH JAN",
            "11TH JAN",
            "12TH JAN",
            "13TH JAN",
            "14TH JAN",
            "15TH JAN",
            "16TH JAN",
            "17TH JAN",
            "18TH JAN",
            "20TH JAN",
            "21st JAN",
            "22nd JAN",
            "23rd JAN",
            "24th JAN",
            "25TH JAN",
            "26TH JAN",
            "27TH JAN",
            "28TH JAN",
            "29TH JAN",
            "30TH JAN",
            "31st JAN",
          ],
          target: Array(25).fill(95),
          achieved: [
            74, 82, 81, 78, 80, 82, 84, 83, 84, 86, 85, 89, 92, 89, 82, 86, 94, 91, 92, 89, 91, 93, 92, 96, 99,
          ],
        },
        visitors: {
          labels: [
            "06TH JAN",
            "07TH JAN",
            "08TH JAN",
            "09TH JAN",
            "10TH JAN",
            "11TH JAN",
            "12TH JAN",
            "13TH JAN",
            "14TH JAN",
            "15TH JAN",
            "16TH JAN",
            "17th JAN",
            "18th JAN",
            "19th JAN",
            "20th JAN",
            "21st JAN",
            "22nd JAN",
            "23rd JAN",
            "24th JAN",
            "25TH JAN",
            "26th JAN",
            "27th JAN",
            "28TH JAN",
            "29TH JAN",
          ],
          target: Array(24).fill(500),
          achieved: [
            530, 601, 549, 524, 617, 559, 27, 659, 569, 576, 543, 581, 483, 41, 667, 634, 634, 600, 556, 550, 546, 553,
            553, 499,
          ],
        },
        patients: {
          labels: [
            "06TH JAN",
            "07TH JAN",
            "08TH JAN",
            "09TH JAN",
            "10TH JAN",
            "11TH JAN",
            "13TH JAN",
            "14TH JAN",
            "15TH JAN",
            "16TH JAN",
            "17th JAN",
            "18th JAN",
            "19th JAN",
            "20TH JAN",
            "21st JAN",
            "22nd JAN",
            "23rd JAN",
            "24TH JAN",
            "25TH JAN",
            "26TH JAN",
            "27TH JAN",
            "28TH JAN",
            "29TH JAN",
          ],
          target: Array(23).fill(3),
          achieved: [4, 0, 0, 0, 0, 2, 1, 1, 0, 1, 1, 3, 1, 1, 1, 0, 3, 2, 2, 2, 2, 2, 1],
        },
        revenue: {
          labels: [
            "5TH JAN",
            "6TH JAN",
            "7TH JAN",
            "8TH JAN",
            "9TH JAN",
            "10TH JAN",
            "11TH JAN",
            "12TH JAN",
            "13TH JAN",
            "14TH JAN",
            "15TH JAN",
            "16TH JAN",
            "17TH JAN",
            "18TH JAN",
            "19TH JAN",
            "20th JAN",
            "21st JAN",
            "22nd JAN",
            "23rd JAN",
            "24TH JAN",
            "25TH JAN",
            "26TH JAN",
            "27TH JAN",
            "28TH JAN",
            "29TH JAN",
          ],
          achieved: [
            0, 9600, 2350, 2700, 11400, 700, 700, 0, 11550, 8450, 16305, 700, 9400, 12850, 9650, 0, 7250, 10800, 10850,
            6450, 40550, 0, 13650, 7550, 10650,
          ],
        },
      },
      medical: {
        nursingSatisfaction: {
          labels: [
            "06th JAN",
            "07th JAN",
            "08th JAN",
            "09th JAN",
            "10th JAN",
            "11th JAN",
            "12th JAN",
            "13th JAN",
            "14th JAN",
            "15th JAN",
            "16th JAN",
            "17th JAN",
            "18th JAN",
            "19th JAN",
            "20th JAN",
            "21st JAN",
            "22nd JAN",
            "23rd JAN",
            "24th JAN",
            "25th JAN",
            "26th JAN",
            "27th JAN",
            "28th JAN",
            "29th JAN",
            "30th JAN",
            "31st JAN",
          ],
          achieved: [
            100, 100, 100, 100, 100, 100, 100, 96, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 0, 100,
            100, 100, 100, 100,
          ],
        },
        ivf: {
          labels: [
            "06TH JAN",
            "07TH JAN",
            "08TH JAN",
            "09TH JAN",
            "10TH JAN",
            "11TH JAN",
            "13TH JAN",
            "14TH JAN",
            "15TH JAN",
            "16TH JAN",
            "17TH JAN",
            "18TH JAN",
            "20TH JAN",
            "21st JAN",
            "22nd JAN",
            "23rd JAN",
            "24TH JAN",
            "25TH JAN",
            "27TH JAN",
            "28TH JAN",
            "29TH JAN",
            "30TH JAN",
            "31st JAN",
          ],
          achieved: [0, 75, 100, 100, 100, 50, 80, 80, 0, 100, 60, 66, 33, 100, 100, 100, 33, 100, 100, 100, 50, 0, 0],
        },
        oocytes: {
          labels: [
            "06TH JAN",
            "07TH JAN",
            "08TH JAN",
            "09TH JAN",
            "10TH JAN",
            "11TH JAN",
            "13TH JAN",
            "14TH JAN",
            "15TH JAN",
            "16TH JAN",
            "17TH JAN",
            "18TH JAN",
            "20TH JAN",
            "21st JAN",
            "22nd JAN",
            "23rd JAN",
            "24TH JAN",
            "25TH JAN",
            "27TH JAN",
            "28TH JAN",
            "29TH JAN",
            "30TH JAN",
            "31st JAN",
          ],
          target: Array(23).fill(75),
          achieved: [73, 63, 63, 65, 75, 73, 70, 60, 64, 67, 68, 62, 61, 69, 62, 63, 64, 68, 69, 67, 61, 67, 67],
        },
      },
      operations: {
        opd: {
          labels: ["29.01.2025", "30.01.2025", "31.01.2025"],
          achieved: [26, 12, 9],
        },
        pharmacyRevenue: {
          labels: ["29.01.2025", "30.01.2025", "31.01.2025"],
          achieved: [7587, 0, 29818],
        },
      },
    },
    city2: {
      management: {
        punching: {
          labels: [
            "4TH JAN",
            "7TH JAN",
            "8TH JAN",
            "9TH JAN",
            "10TH JAN",
            "11TH JAN",
            "12TH JAN",
            "13TH JAN",
            "14TH JAN",
            "15TH JAN",
            "16TH JAN",
            "17TH JAN",
            "18TH JAN",
            "20TH JAN",
            "21st JAN",
            "22nd JAN",
            "23rd JAN",
            "24th JAN",
            "25TH JAN",
            "26TH JAN",
            "27TH JAN",
            "28TH JAN",
            "29TH JAN",
            "30TH JAN",
            "31st JAN",
          ],
          target: Array(25).fill(95),
          achieved: [
            70, 80, 85, 82, 78, 80, 88, 86, 87, 89, 88, 92, 95, 91, 85, 88, 96, 93, 94, 91, 93, 95, 94, 98, 100,
          ],
        },
        visitors: {
          labels: [
            "06TH JAN",
            "07TH JAN",
            "08TH JAN",
            "09TH JAN",
            "10TH JAN",
            "11TH JAN",
            "12TH JAN",
            "13TH JAN",
            "14TH JAN",
            "15TH JAN",
            "16TH JAN",
            "17th JAN",
            "18th JAN",
            "19th JAN",
            "20th JAN",
            "21st JAN",
            "22nd JAN",
            "23rd JAN",
            "24th JAN",
            "25TH JAN",
            "26th JAN",
            "27th JAN",
            "28TH JAN",
            "29TH JAN",
          ],
          target: Array(24).fill(500),
          achieved: [
            520, 590, 540, 515, 605, 550, 30, 650, 560, 570, 535, 575, 475, 45, 660, 625, 625, 590, 550, 545, 540, 545,
            545, 490,
          ],
        },
        patients: {
          labels: [
            "06TH JAN",
            "07TH JAN",
            "08TH JAN",
            "09TH JAN",
            "10TH JAN",
            "11TH JAN",
            "13TH JAN",
            "14TH JAN",
            "15TH JAN",
            "16TH JAN",
            "17th JAN",
            "18th JAN",
            "19th JAN",
            "20TH JAN",
            "21st JAN",
            "22nd JAN",
            "23rd JAN",
            "24TH JAN",
            "25TH JAN",
            "26TH JAN",
            "27TH JAN",
            "28TH JAN",
            "29TH JAN",
          ],
          target: Array(23).fill(3),
          achieved: [3, 1, 1, 1, 1, 2, 2, 2, 1, 2, 2, 3, 2, 2, 2, 1, 3, 3, 3, 3, 3, 3, 2],
        },
        revenue: {
          labels: [
            "5TH JAN",
            "6TH JAN",
            "7TH JAN",
            "8TH JAN",
            "9TH JAN",
            "10TH JAN",
            "11TH JAN",
            "12TH JAN",
            "13TH JAN",
            "14TH JAN",
            "15TH JAN",
            "16TH JAN",
            "17TH JAN",
            "18TH JAN",
            "19TH JAN",
            "20th JAN",
            "21st JAN",
            "22nd JAN",
            "23rd JAN",
            "24TH JAN",
            "25TH JAN",
            "26TH JAN",
            "27TH JAN",
            "28TH JAN",
            "29TH JAN",
          ],
          achieved: [
            1000, 10000, 3000, 3500, 12000, 1500, 1500, 500, 12000, 9000, 17000, 1500, 10000, 13500, 10000, 500, 8000,
            11500, 11500, 7000, 41000, 500, 14000, 8000, 11000,
          ],
        },
      },
      medical: {
        nursingSatisfaction: {
          labels: [
            "06th JAN",
            "07th JAN",
            "08th JAN",
            "09th JAN",
            "10th JAN",
            "11th JAN",
            "12th JAN",
            "13th JAN",
            "14th JAN",
            "15th JAN",
            "16th JAN",
            "17th JAN",
            "18th JAN",
            "19th JAN",
            "20th JAN",
            "21st JAN",
            "22nd JAN",
            "23rd JAN",
            "24th JAN",
            "25th JAN",
            "26th JAN",
            "27th JAN",
            "28th JAN",
            "29th JAN",
            "30th JAN",
            "31st JAN",
          ],
          achieved: [
            98, 99, 100, 98, 99, 100, 98, 97, 99, 100, 98, 99, 100, 98, 99, 100, 98, 99, 100, 98, 10, 98, 99, 100, 98,
            99,
          ],
        },
        ivf: {
          labels: [
            "06TH JAN",
            "07TH JAN",
            "08TH JAN",
            "09TH JAN",
            "10TH JAN",
            "11TH JAN",
            "13TH JAN",
            "14TH JAN",
            "15TH JAN",
            "16TH JAN",
            "17TH JAN",
            "18TH JAN",
            "20TH JAN",
            "21st JAN",
            "22nd JAN",
            "23rd JAN",
            "24TH JAN",
            "25TH JAN",
            "27TH JAN",
            "28TH JAN",
            "29TH JAN",
            "30TH JAN",
            "31st JAN",
          ],
          achieved: [10, 80, 95, 95, 95, 60, 85, 85, 10, 95, 65, 70, 40, 95, 95, 95, 40, 95, 95, 95, 60, 10, 10],
        },
        oocytes: {
          labels: [
            "06TH JAN",
            "07TH JAN",
            "08TH JAN",
            "09TH JAN",
            "10TH JAN",
            "11TH JAN",
            "13TH JAN",
            "14TH JAN",
            "15TH JAN",
            "16TH JAN",
            "17TH JAN",
            "18TH JAN",
            "20TH JAN",
            "21st JAN",
            "22nd JAN",
            "23rd JAN",
            "24TH JAN",
            "25TH JAN",
            "27TH JAN",
            "28TH JAN",
            "29TH JAN",
            "30TH JAN",
            "31st JAN",
          ],
          target: Array(23).fill(75),
          achieved: [75, 65, 65, 68, 78, 75, 72, 62, 66, 70, 70, 65, 63, 72, 65, 65, 66, 70, 72, 70, 63, 70, 70],
        },
      },
      operations: {
        opd: {
          labels: ["29.01.2025", "30.01.2025", "31.01.2025"],
          achieved: [30, 15, 12],
        },
        pharmacyRevenue: {
          labels: ["29.01.2025", "30.01.2025", "31.01.2025"],
          achieved: [8000, 500, 30000],
        },
      },
    },
  }

  const charts = {}
  let currentCity = "all"

  function createChart(ctx, type, labels, datasets) {
    return new Chart(ctx, {
      type: type,
      data: {
        labels: labels,
        datasets: datasets,
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    })
  }

  function initializeCharts() {
    // Management Charts
    charts.punching = createChart(
      document.getElementById("punchingChart").getContext("2d"),
      "line",
      [],
      [
        {
          label: "Target",
          data: [],
          borderColor: "rgb(255, 99, 132)",
          fill: false,
        },
        {
          label: "Achieved",
          data: [],
          borderColor: "rgb(54, 162, 235)",
          fill: false,
        },
      ],
    )

    charts.visitors = createChart(
      document.getElementById("visitorsChart").getContext("2d"),
      "bar",
      [],
      [
        {
          label: "Target",
          data: [],
          backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
        {
          label: "Achieved",
          data: [],
          backgroundColor: "rgba(54, 162, 235, 0.5)",
        },
      ],
    )

    charts.patients = createChart(
      document.getElementById("patientsChart").getContext("2d"),
      "line",
      [],
      [
        {
          label: "Target",
          data: [],
          borderColor: "rgb(255, 99, 132)",
          fill: false,
        },
        {
          label: "Achieved",
          data: [],
          borderColor: "rgb(54, 162, 235)",
          fill: false,
        },
      ],
    )

    charts.revenue = createChart(
      document.getElementById("revenueChart").getContext("2d"),
      "bar",
      [],
      [
        {
          label: "Revenue (in Rs)",
          data: [],
          backgroundColor: "rgba(75, 192, 192, 0.5)",
        },
      ],
    )

    // Medical Charts
    charts.nursingSatisfaction = createChart(
      document.getElementById("nursingSatisfactionChart").getContext("2d"),
      "line",
      [],
      [
        {
          label: "Satisfaction (%)",
          data: [],
          borderColor: "rgb(75, 192, 192)",
          fill: false,
        },
      ],
    )

    charts.ivf = createChart(
      document.getElementById("ivfChart").getContext("2d"),
      "line",
      [],
      [
        {
          label: "IVF Procedures (%)",
          data: [],
          borderColor: "rgb(153, 102, 255)",
          fill: false,
        },
      ],
    )

    charts.oocytes = createChart(
      document.getElementById("oocytesChart").getContext("2d"),
      "line",
      [],
      [
        {
          label: "Target",
          data: [],
          borderColor: "rgb(255, 99, 132)",
          fill: false,
        },
        {
          label: "Achieved",
          data: [],
          borderColor: "rgb(54, 162, 235)",
          fill: false,
        },
      ],
    )

    // Operations Charts
    charts.opd = createChart(
      document.getElementById("opdChart").getContext("2d"),
      "bar",
      [],
      [
        {
          label: "Number of OPDs",
          data: [],
          backgroundColor: "rgba(255, 159, 64, 0.5)",
        },
      ],
    )

    charts.pharmacyRevenue = createChart(
      document.getElementById("pharmacyRevenueChart").getContext("2d"),
      "bar",
      [],
      [
        {
          label: "Revenue (in Rs)",
          data: [],
          backgroundColor: "rgba(153, 102, 255, 0.5)",
        },
      ],
    )
  }

  function updateCharts(city) {
    const cityData = city === "all" ? combineData() : data[city]

    // Update Management Charts
    updateChart(charts.punching, cityData.management.punching)
    updateChart(charts.visitors, cityData.management.visitors)
    updateChart(charts.patients, cityData.management.patients)
    updateChart(charts.revenue, cityData.management.revenue, true)

    // Update Medical Charts
    updateChart(charts.nursingSatisfaction, cityData.medical.nursingSatisfaction, true)
    updateChart(charts.ivf, cityData.medical.ivf, true)
    updateChart(charts.oocytes, cityData.medical.oocytes)

    // Update Operations Charts
    updateChart(charts.opd, cityData.operations.opd, true)
    updateChart(charts.pharmacyRevenue, cityData.operations.pharmacyRevenue, true)
  }

  function updateChart(chart, data, singleDataset = false) {
    chart.data.labels = data.labels
    if (singleDataset) {
      chart.data.datasets[0].data = data.achieved
    } else {
      chart.data.datasets[0].data = data.target
      chart.data.datasets[1].data = data.achieved
    }
    chart.update()
  }

  function combineData() {
    const combined = JSON.parse(JSON.stringify(data.city1)) // Deep clone city1 data

    for (const category in combined) {
      for (const chart in combined[category]) {
        if (Array.isArray(combined[category][chart].achieved)) {
          combined[category][chart].achieved = combined[category][chart].achieved.map(
            (value, index) => (value + data.city2[category][chart].achieved[index]) / 2,
          )
        }
        if (combined[category][chart].target) {
          combined[category][chart].target = combined[category][chart].target.map(
            (value, index) => (value + data.city2[category][chart].target[index]) / 2,
          )
        }
      }
    }

    return combined
  }

  function showDashboard(dashboardId) {
    document.querySelectorAll(".dashboard-page").forEach((dashboard) => {
      dashboard.style.display = "none"
    })
    document.getElementById(dashboardId).style.display = "block"
  }

  document.querySelectorAll("#sidebar .nav-link").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      document.querySelectorAll("#sidebar .nav-link").forEach((l) => l.classList.remove("active"))
      this.classList.add("active")
      showDashboard(this.getAttribute("data-page") + "Dashboard")
    })
  })

  document.querySelectorAll("#citySelector button").forEach((button) => {
    button.addEventListener("click", function () {
      document.querySelectorAll("#citySelector button").forEach((b) => b.classList.remove("active"))
      this.classList.add("active")
      currentCity = this.getAttribute("data-city")
      updateCharts(currentCity)
    })
  })

  initializeCharts()
  updateCharts("all")
  showDashboard("managementDashboard")
})


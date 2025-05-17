// JS - Dashboard ----------------------------------------------------------|
// Toggle tampilan datepicker
function tampilkanPemilihTanggal() {
  const pemilihTanggal = document.getElementById("pemilih-tanggal");
  pemilihTanggal.classList.toggle("hidden");
}

// Update teks tanggal setelah dipilih
function aturTanggalTerpilih(nilaiTanggal) {
  const elemenTeksTanggal = document.getElementById("tanggal-terpilih");

  const tgl = new Date(nilaiTanggal);
  const opsi = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const tglFormat = tgl.toLocaleDateString("id-ID", opsi);

  elemenTeksTanggal.textContent = tglFormat;
  document.getElementById("pemilih-tanggal").classList.add("hidden");
}

// Function to toggle modal visibility
function toggleModal() {
  const modal = document.getElementById("modal");
  modal.classList.toggle("hidden");
}

// DiagramBar Chart - Diagram
const chartConfig = {
  series: [
    {
      name: "Laporan",
      data: [50, 40, 300, 320, 500, 350],
    },
  ],
  chart: {
    type: "bar",
    height: 240,
    toolbar: {
      show: false,
    },
  },
  title: {
    show: "",
  },
  dataLabels: {
    enabled: false,
  },
  colors: ["#88cf0f"],
  plotOptions: {
    bar: {
      columnWidth: "40%",
      borderRadius: 2,
    },
  },
  xaxis: {
    axisTicks: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    labels: {
      style: {
        colors: "#ffffff",
        fontSize: "12px",
        fontFamily: "inherit",
        fontWeight: 400,
      },
    },
    categories: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  },
  yaxis: {
    labels: {
      style: {
        colors: "#ffffff",
        fontSize: "12px",
        fontFamily: "inherit",
        fontWeight: 400,
      },
    },
  },
  grid: {
    show: true,
    borderColor: "#2f3c33",
    strokeDashArray: 5,
    xaxis: {
      lines: {
        show: true,
      },
    },
    padding: {
      top: 5,
      right: 20,
    },
  },
  fill: {
    opacity: 0.8,
  },
  tooltip: {
    theme: "dark",
  },
};

const chart = new ApexCharts(document.querySelector("#bar-chart"), chartConfig);

chart.render();

// DiagramPie Chart - Laporan
const chartConfigPie = {
  series: [44, 55, 13, 43, 22],
  chart: {
    type: "pie",
    width: 280,
    height: 280,
    toolbar: {
      show: false,
    },
  },
  title: {
    show: "",
  },
  dataLabels: {
    enabled: false,
  },
  colors: ["#88cf0f", "#A1D97E", "#285539", "#6C8768", "#f2f2e8"],
  legend: {
    show: false,
  },
};

const chartPie = new ApexCharts(
  document.querySelector("#pie-chart"),
  chartConfigPie
);

chartPie.render();

// DiagramDonut Chart - Anggaran
const chartDataPersen = [60, 40]; // Total: 100
const chartTotalPersen = chartDataPersen.reduce((a, b) => a + b, 0);

const chartOptionsPersen = {
  series: chartDataPersen,
  chart: {
    type: "donut",
    height: 200,
  },
  colors: ["#88cf0f", "#2f3c33"],
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  plotOptions: {
    pie: {
      donut: {
        labels: {
          show: true,
          name: {
            show: true,
            fontSize: "16px",
            fontWeight: 500,
            offsetY: -10,
            color: "#2f3c33",
            formatter: () => "Persen",
          },
          value: {
            show: true,
            fontSize: "20px",
            fontWeight: 700,
            color: "#000",
            offsetY: 10,
            formatter: function (_, { seriesIndex, w }) {
              const value = w.config.series[seriesIndex];
              const total = w.config.series.reduce((a, b) => a + b, 0);
              const percent = ((value / total) * 100).toFixed(1);
              return percent + "%";
            },
          },
        },
      },
    },
  },
};

const donutChartPersen = new ApexCharts(
  document.querySelector("#donutChartPersen"),
  chartOptionsPersen
);
donutChartPersen.render();
// JS - Dashboard ----------------------------------------------------------|

// JS - Laporan ----------------------------------------------------|
// line chart Pemasukan
const tanggalPemasukkan = [
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "30",
  "31",
];
const dataPemasukkan = [0, 0, 0, 0, 0, 50000, 15000, 500, 3000];

const optionsLinePemasukkan = {
  chart: { type: "line", height: 300 },
  series: [{ name: "Pemasukkan", data: dataPemasukkan }],
  xaxis: { categories: tanggalPemasukkan, title: { text: "Tanggal" } },
  yaxis: { title: { text: "Rupiah (Rp)" } },
  colors: ["#88cf0f"],
};

const chartLinePemasukkan = new ApexCharts(
  document.querySelector("#lineChartPemasukkan"),
  optionsLinePemasukkan
);
chartLinePemasukkan.render();

// Chart pie Pemasukkan
const optionsPiePemasukkan = {
  chart: { type: "pie", height: 200 },
  labels: ["Gaji", "Bonus", "Hasil Jual", "Lainnya"],
  series: [50000, 15000, 5000, 3000],
  colors: ["#88cf0f", "#A1D97E", "#6C8768", "#2f3c33"],
  legend: { show: false },
};

// Tampilkan pie chart
const chartPiePemasukkan = new ApexCharts(
  document.querySelector("#pieChartPemasukkan"),
  optionsPiePemasukkan
);
chartPiePemasukkan.render();

// (Opsional) Hitung total pemasukan untuk ditampilkan
const totalPiePemasukan = optionsPiePemasukkan.series.reduce(
  (a, b) => a + b,
  0
);
document.getElementById(
  "totalPemasukkan"
).innerText = `Rp ${totalPiePemasukan.toLocaleString("id-ID")}`;

// line chart Pengeluaran -----------------------------------
const tanggalPengeluaran = ["23", "24", "25", "26", "27", "28", "29", "30"];
const dataPengeluaran = [0, 0, 0, 0, 0, 8000, 1000, 2000];

const optionsLinePengeluaran = {
  chart: { type: "line", height: 300 },
  series: [{ name: "Pengeluaran", data: dataPengeluaran }],
  xaxis: { categories: tanggalPengeluaran, title: { text: "Tanggal" } },
  yaxis: { title: { text: "Rupiah (Rp)" } },
  colors: ["#EF4444"],
};

const chartLinePengeluaran = new ApexCharts(
  document.querySelector("#lineChartPengeluaran"),
  optionsLinePengeluaran
);
chartLinePengeluaran.render();

// Chart pie pengeluaran
const optionsPiePengeluaran = {
  chart: { type: "pie", height: 200 },
  labels: ["Makan", "Laundry", "Sayuran", "Lainnya"],
  series: [47000, 11000, 11000, 8000],
  colors: ["#ef4444", "#f87171", "#b91c1c", "#991b1b"],
  legend: { show: false },
};

// Tampilkan pie chart
const chartPiePengeluaran = new ApexCharts(
  document.querySelector("#pieChartPengeluaran"),
  optionsPiePengeluaran
);
chartPiePengeluaran.render();

// Total pengeluaran (gunakan langsung dari series jika tidak ada array `dataPengeluaran`)
const totalPengeluaran = optionsPiePengeluaran.series.reduce(
  (acc, val) => acc + val,
  0
);

// Tampilkan total
document.getElementById(
  "totalPengeluaran"
).innerText = `Rp ${totalPengeluaran.toLocaleString("id-ID")}`;

// JS - Laporan ----------------------------------------------------|

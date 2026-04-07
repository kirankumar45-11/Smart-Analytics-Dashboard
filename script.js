// Toggle Query
function toggleQuery(){
  const q = document.getElementById("queryBox");
  q.style.display = q.style.display === "none" ? "block" : "none";
}

// Dark Mode
function toggleDark(){
  document.body.classList.toggle("dark");
}

// Sidebar Navigation
document.querySelectorAll(".menu-item").forEach(item => {
  item.addEventListener("click", function(){

    // Remove active
    document.querySelectorAll(".menu-item")
      .forEach(i => i.classList.remove("active"));

    this.classList.add("active");

    // Change title
    const section = this.innerText;
    document.getElementById("pageTitle").innerText = section;

    // Load section
    loadSection(section);
  });
});

// Load different sections dynamically
function loadSection(section){

  const charts = document.querySelector(".charts");
  const cards = document.querySelector(".cards");

  if(section === "Dashboard"){

    cards.style.display = "grid";

    charts.innerHTML = `
      <div class="chart-box">
        <h3>Sales Overview</h3>
        <canvas id="barChart"></canvas>
      </div>

      <div class="chart-box">
        <h3>Traffic Sources</h3>
        <canvas id="pieChart"></canvas>
      </div>
    `;

    charts.style.display = "grid";

    loadDefaultCharts();
  }

  else if(section === "Reports"){

    cards.style.display = "none";

    charts.innerHTML = `
      <div class="chart-box">
        <h3>Monthly Report</h3>
        <canvas id="reportChart"></canvas>
      </div>
    `;

    charts.style.display = "grid";

    new Chart(document.getElementById("reportChart"), {
      type: 'line',
      data: {
        labels: ['Jan','Feb','Mar','Apr','May'],
        datasets: [{
          label: 'Report Data',
          data: [10000,15000,13000,17000,19000],
          borderColor: '#4f46e5',
          fill: false
        }]
      }
    });
  }

  else if(section === "Analytics"){

    cards.style.display = "none";

    charts.innerHTML = `
      <div class="chart-box">
        <h3>Analytics Overview</h3>
        <canvas id="analyticsChart"></canvas>
      </div>
    `;

    charts.style.display = "grid";

    new Chart(document.getElementById("analyticsChart"), {
      type: 'doughnut',
      data: {
        labels: ['Performance','Growth','Users'],
        datasets: [{
          data: [40,30,30],
          backgroundColor: ['#4f46e5','#22c55e','#f59e0b']
        }]
      }
    });
  }

  else if(section === "Settings"){

    cards.style.display = "none";

    charts.innerHTML = `
      <div class="chart-box">
        <h3>Settings</h3>
        <p>Theme settings, preferences and account options.</p>
      </div>
    `;

    charts.style.display = "block";
  }
}

// Default Charts (Dashboard)
function loadDefaultCharts(){

  new Chart(document.getElementById("barChart"), {
    type: 'bar',
    data: {
      labels: ['Jan','Feb','Mar','Apr','May','Jun'],
      datasets: [{
        label: 'Revenue',
        data: [12000,19000,15000,22000,18000,25000],
        backgroundColor: '#4f46e5'
      }]
    }
  });

  new Chart(document.getElementById("pieChart"), {
    type: 'pie',
    data: {
      labels: ['Direct','Social','Email','Referral'],
      datasets: [{
        data: [40,25,20,15],
        backgroundColor: ['#4f46e5','#22c55e','#f59e0b','#ef4444']
      }]
    }
  });
}

// Load default on page start
loadDefaultCharts();
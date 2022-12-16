// JavaScript

// API URL for player stats
const API_URL = 'https://www.example.com/api/player-stats';

// Function to fetch player stats from API
async function getPlayerStats() {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data;
}

// Function to create chart
async function createChart() {
  const stats = await getPlayerStats();

  // Extract last 10 games from stats
  const lastTenGames = stats.slice(-10);

  // Create data for chart
  const chartData = {
    labels: lastTenGames.map(game => game.date),
    datasets: [
      {
        label: 'Points',
        data: lastTenGames.map(game => game.points),
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      },
      {
        label: 'Assists',
        data: lastTenGames.map(game => game.assists),
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      }
    ]
  };

  // Get chart container element
  const chartContainer = document.getElementById('chart');

  // Create chart
  const myChart = new Chart(chartContainer, {
    type: 'bar',
    data: chartData,
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}

// Initialize chart when the page loads
window.onload = createChart;

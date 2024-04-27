document.addEventListener('DOMContentLoaded', function () {
    const recentFormCells = document.querySelectorAll('.recent-form');

    recentFormCells.forEach(function (cell) {
        const recentForm = cell.textContent.trim();
        const recentFormSpans = recentForm.split('').map(function (form) {
            const span = document.createElement('span');
            if (form === 'W') {
                span.classList.add('win');
                span.title = 'Win';
            } else if (form === 'L') {
                span.classList.add('loss');
                span.title = 'Loss';
            }
            return span;
        });

        cell.innerHTML = '';
        recentFormSpans.forEach(function (span) {
            cell.appendChild(span);
        });
    });
});

function showDetails(memberId) {
    var modal = document.getElementById(memberId);
    modal.style.display = "block";
}

function hideDetails(memberId) {
    var modal = document.getElementById(memberId);
    modal.style.display = "none";
}

window.onclick = function (event) {
    var modals = document.getElementsByClassName('modal');
    for (var i = 0; i < modals.length; i++) {
        if (event.target == modals[i]) {
            modals[i].style.display = "none";
        }
    }
}


let responses = []; // Global variable to store email and team choice

function submitPoll() {
    const email = document.getElementById('email').value;
    const team = document.getElementById('team').value;
    responses.push({ email: email, team: team });
    document.getElementById('pollForm').reset(); // Reset form after submission
    alert('Thank you for your response!');
}
/*
  function viewResponses1() {
       const responseDiv = document.getElementById('responses');
       let voteCounts = {}; // Object to store vote counts
       
       // Count votes
       responses.forEach(response => {
           voteCounts[response.team] = (voteCounts[response.team] || 0) + 1;
       });
   
       // Prepare data for the chart
       const data = {
           labels: Object.keys(voteCounts),
           datasets: [{
               label: 'Votes per Team',
               data: Object.values(voteCounts),
               backgroundColor: ['red', 'blue', 'green', 'yellow'], // Add more colors as needed
               borderColor: ['black'],
               borderWidth: 1
           }]
       };
   
       // Configure the chart
       const config = {
           type: 'bar',
           data: data,
           options: {
               scales: {
                   y: {
                       beginAtZero: true
                   }
               }
           }
       };
   
       // Render the chart
       new Chart(document.getElementById('voteChart'), config);
   
       // Optional: Display text results as well
       responseDiv.innerHTML = '';
       Object.keys(voteCounts).forEach(team => {
           const p = document.createElement('p');
           p.textContent = `Team: ${team}, Votes: ${voteCounts[team]}`;
           responseDiv.appendChild(p);
       });
   }
   */

/*
function viewResponses1() {
    const responseDiv = document.getElementById('responses');
    responseDiv.innerHTML = ''; // Clear previous responses

    responses.forEach((response, index) => {
        const responseContainer = document.createElement('div');
        responseContainer.className = 'response-container';

        const p = document.createElement('p');
        p.textContent = `Email: ${response.email}, Team: ${response.team}`;

        // Create delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'X'; // Text for the button
        deleteBtn.className = 'delete-response';
        deleteBtn.onclick = function () {
            // Remove response from the array
            responses.splice(index, 1);
            // Update the display
            viewResponses1();
        };

        // Append paragraph and delete button to the container
        responseContainer.appendChild(p);
        responseContainer.appendChild(deleteBtn);

        // Append the container to the responseDiv
        responseDiv.appendChild(responseContainer);
    });
}
*/

/*Latest*/
let barChart = null;
let pieChart = null;

function viewResponses1() {
    const responseDiv = document.getElementById('responses');
    let voteCounts = {}; 

   
    responses.forEach(response => {
        voteCounts[response.team] = (voteCounts[response.team] || 0) + 1;
    });

   
    const labels = Object.keys(voteCounts);
    const barColors = ['red', 'blue']; 

    const barData = {
        labels: ['Votes'], 
        datasets: labels.map((label, index) => ({
            label: `Voted for ${label}`,
            data: [voteCounts[label]], 
            backgroundColor: barColors[index],
            borderColor: 'black',
            borderWidth: 1
        }))
    };

    
    const pieColors = ['yellow', 'orange']; 
    const pieData = {
        labels: labels,
        datasets: [{
            label: 'Vote Distribution',
            data: Object.values(voteCounts),
            backgroundColor: pieColors,
            borderColor: ['white', 'white'],
            borderWidth: 1
        }]
    };

    const barConfig = {
        type: 'bar',
        data: barData,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    };

    const pieConfig = {
        type: 'pie',
        data: pieData,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top'
                }
            }
        }
    };

    
    if (barChart) {
        barChart.destroy();
    }

    
    if (pieChart) {
        pieChart.destroy();
    }

    
    const pieChartContainer = document.getElementById('voteChartPie').parentElement;
    const doughnutChartContainer = document.getElementById('voteChartDoughnut').parentElement;


    
    insertChartHeading(pieChartContainer, 'Pie Chart');
    insertChartHeading(doughnutChartContainer, 'DoughNut Chart');


    barChart = new Chart(document.getElementById('voteChart'), barConfig);


   
    pieChart = new Chart(document.getElementById('voteChartPie'), pieConfig);

 
    responseDiv.innerHTML = '';
    labels.forEach(team => {
        const p = document.createElement('p');
        p.textContent = `Team: ${team}, Votes: ${voteCounts[team]}`;
        responseDiv.appendChild(p);
    });
}


function insertBarGraphHeading() {
    const barChartContainer = document.getElementById('voteChart').parentElement;
    const existingHeading = barChartContainer.querySelector('h3');

    if (!existingHeading) {
        const barHeading = document.createElement('h3');
        barHeading.textContent = 'Bar Graph';
        barChartContainer.insertBefore(barHeading, barChartContainer.firstChild);
    }
}

function insertChartHeading(container, headingText) {
    if (!container.querySelector('h3')) {
        const heading = document.createElement('h3');
        heading.textContent = headingText;
        container.insertBefore(heading, container.firstChild);
    }
}

let doughnutChart = null;

function ViewDoughnut() {
    const doughnutCanvas = document.getElementById('voteChartDoughnut');
    let voteCounts = {}; 

    
    responses.forEach(response => {
        voteCounts[response.team] = (voteCounts[response.team] || 0) + 1;
    });

    const labels = Object.keys(voteCounts);
    const data = Object.values(voteCounts);
    const doughnutColors = ['green', 'purple'];

    const doughnutData = {
        labels: labels,
        datasets: [{
            label: 'Vote Distribution',
            data: data,
            backgroundColor: doughnutColors,
            borderColor: 'white',
            borderWidth: 2
        }]
    };

    const doughnutConfig = {
        type: 'doughnut',
        data: doughnutData,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top'
                },
                tooltip: {
                    mode: 'index',
                    intersect: false
                }
            },
            animation: {
                animateScale: true,
                animateRotate: true
            }
        }
    };

  
    if (doughnutChart) {
        doughnutChart.destroy();
    }

  
    doughnutChart = new Chart(doughnutCanvas, doughnutConfig);

    insertChartHeading(document.getElementById('voteChartDoughnut').parentElement, 'DOUGHNUT');
}

document.addEventListener('DOMContentLoaded', function () {
  
});
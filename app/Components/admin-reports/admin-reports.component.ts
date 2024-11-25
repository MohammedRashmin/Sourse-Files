// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-admin-reports',
//   templateUrl: './admin-reports.component.html',
//   styleUrl: './admin-reports.component.css'
// })
// export class AdminReportsComponent {



// }

import { Component, OnInit } from '@angular/core';
import { Chart, ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-admin-reports',
  templateUrl: './admin-reports.component.html',
  styleUrl: './admin-reports.component.css'
})
export class AdminReportsComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    this.createChart();
  }

  createChart(): void {
    const canvas = document.getElementById('rentalChart') as HTMLCanvasElement | null;

    if (canvas) {
      const ctx = canvas.getContext('2d');

      if (ctx) {
        const config: ChartConfiguration = {
          type: 'line',
          data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
              label: 'Monthly Rentals',
              data: [200, 300, 250, 400, 450, 600, 700, 750, 500, 400, 350, 300],
              borderColor: 'rgba(75, 192, 192, 1)',
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              fill: true,
              tension: 0.4
            }]
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
              },
              title: {
                display: true,
                text: 'Monthly Motorbike Rentals'
              }
            },
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        };

        new Chart(ctx, config);
      }
    }
  }
}


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contoh',
  templateUrl: './contoh.page.html',
  styleUrls: ['./contoh.page.scss'],
})
export class ContohPage implements OnInit {
  chartData: { label: string; value: number }[] = []; // Array untuk data chart (label + value)

  ngOnInit() {
    // Contoh data dinamis untuk 1 minggu
    this.chartData = [
      { label: 'Mon', value: 40 }, // 40% tinggi bar
      { label: 'Tue', value: 90 }, // 60% tinggi bar
      { label: 'Wed', value: 30 }, // 80% tinggi bar
      { label: 'Thu', value: 95 }, // 30% tinggi bar
      { label: 'Fri', value: 80 }, // 50% tinggi bar
      { label: 'Sat', value: 30 }, // 70% tinggi bar
      { label: 'Sun', value: 10 }, // 90% tinggi bar
    ];
  }
}

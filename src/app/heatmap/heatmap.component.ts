import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heatmap',
  templateUrl: './heatmap.component.html',
  styleUrls: ['./heatmap.component.css'],
})
export class HeatmapComponent implements OnInit {
  public data = [
    [1589, 1058, 5255, 5996, 6088, 7854, 2547],
    [3695, 7896, 9696, 3333, 4747, 7878, 1414],
    [4815, 9476, 1888, 4777, 4788, 3686, 6654],
  ];
  private max: number;
  private min: number;

  constructor() {
    let onedimension: any = [];
    onedimension = this.data.flat();
    onedimension.sort((a: number, b: number) => a - b);
    this.max = onedimension[onedimension.length - 1];
    this.min = onedimension[0];
  }

  ngOnInit(): void {}

  private numberToHex(c: number): string {
    let hex = c.toString(16);
    return hex.length == 1 ? '0' + hex : hex;
  }

  public getBackgroundColor(n: number, variation?: boolean): string {
    let colorRed = Math.round((n - this.min) / ((this.max - this.min) / 255));
    let colorGreenBlue = this.numberToHex(255 - colorRed);
    if (variation) return '#' + 'ff' + colorGreenBlue + colorGreenBlue;
    else return '#' + this.numberToHex(colorRed) + '0000';
  }
}

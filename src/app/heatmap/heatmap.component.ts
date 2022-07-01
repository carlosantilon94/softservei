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
  public colors: any = {};
  public colors_red_composed: any = {};

  constructor() {
    let onedimension: any = [];
    this.data.forEach((element) => {
      onedimension.push(...element);
    });
    onedimension.sort((a: number, b: number) => a - b);
    let max: number = onedimension[onedimension.length - 1];
    onedimension.forEach((n: number) => {
      let r = Math.round((n * 255) / max);
      let rhex = this.numberToHex(r);
      this.colors[n] = '#' + rhex + '0000';
      let gb = 255 - r;
      let gbhex = this.numberToHex(gb);
      this.colors_red_composed[n] = '#ff' + gbhex + gbhex;
    });
  }

  ngOnInit(): void {}

  private numberToHex(c: number): string {
    let hex = c.toString(16);
    return hex.length == 1 ? '0' + hex : hex;
  }
}

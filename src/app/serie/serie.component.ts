import { Component, OnInit } from '@angular/core';
import { SerieService } from './serie.service';
import { Serie } from './serie';

@Component({
  selector: 'app-series',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SeriesComponent implements OnInit {
  series: Array<Serie> = [];
  numberSeries: number = 0;

  constructor(private serieService: SerieService) { }

  getSeries()
  {
    this.serieService.getSeries().subscribe(series => {
      this.series = series;
      this.numberSeries = series.length;
    })
  }

  ngOnInit() {
    this.getSeries();
  }

}

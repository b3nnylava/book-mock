import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { DataService, Edition, Book, Series } from '../../services/data/data.service'

@Component({
  selector: 'series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css'],
  providers: [DataService]
})
export class SeriesComponent {
  series: Series
  books: Book[]
  editions: Edition[]

  constructor (private route: ActivatedRoute,
    private dataService: DataService) {
    this.route.params.subscribe(params => {
      this.series = this.dataService.getSeries(+params['seriesId'])
      this.books = this.dataService.getBooksBySeriesId(this.series.id)
    })
  }
}

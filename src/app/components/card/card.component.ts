import { Component, Input } from '@angular/core'
import { DataService, Edition, Book, Series } from '../../services/data/data.service'

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  providers: [DataService]
})
export class CardComponent {
  @Input() index: number
  @Input() editionId: number

  edition: Edition
  book: Book
  series: Series

  constructor (private dataService: DataService) {}

  ngOnInit () {
    this.edition = this.dataService.getEditionById(this.editionId)
    this.book = this.dataService.getBookById(this.edition.bookId)
    this.series = this.dataService.getSeriesById(this.book.seriesId)
  }
}

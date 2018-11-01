import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { DataService, Edition, Book } from '../../services/data/data.service'

@Component({
  selector: 'book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  providers: [DataService]
})
export class BookComponent {
  seriesId: number
  bookId: number
  private sub: any

  constructor (private route: ActivatedRoute,
    private dataService: DataService) {}

  ngOnInit () {
    this.sub = this.route.params.subscribe(params => {
      this.seriesId = +params['seriesId']
      this.bookId = +params['bookId']
    })
  }

  ngOnDestroy () {
    this.sub.unsubscribe()
  }
}

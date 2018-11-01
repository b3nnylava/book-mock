import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { DataService, Edition, Book } from '../../services/data/data.service'

@Component({
  selector: 'edition',
  templateUrl: './edition.component.html',
  styleUrls: ['./edition.component.css'],
  providers: [DataService]
})
export class EditionComponent {
  seriesId: number
  bookId: number
  editionId: number
  private sub: any

  constructor (private route: ActivatedRoute,
    private dataService: DataService) {}

  ngOnInit () {
    this.sub = this.route.params.subscribe(params => {
      this.seriesId = +params['seriesId']
      this.bookId = +params['bookId']
      this.editionId = +params['editionId']
    })
  }

  ngOnDestroy () {
    this.sub.unsubscribe()
  }
}

import { Component } from '@angular/core'
import { ListingsService, BookListing } from '../../services/listings/listings.service'

@Component({
  selector: 'grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
  providers: [ListingsService]
})
export class GridComponent {
  bookListings: BookListing[]

  constructor (private listingsService: ListingsService) {
    this.bookListings = listingsService.getListings()
  }

  onEditorPreparing (e) {
    e.updateValueTimeout = 200
  }
}

import { Component } from '@angular/core'
import { GridService, BookListing } from './grid.service'

@Component({
  selector: 'grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
  providers: [GridService]
})
export class GridComponent {
  bookListings: BookListing[]

  constructor (private gridService: GridService) {
    this.bookListings = gridService.getListings()
  }

  onEditorPreparing (e) {
    e.updateValueTimeout = 500
  }
}

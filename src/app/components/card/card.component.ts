import { Component } from '@angular/core'
import { ListingsService, BookListing } from '../../services/listings/listings.service'

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  providers: [ListingsService]
})
export class CardComponent {
  listings: BookListing[]

  constructor (private listingsService: ListingsService) {
    this.listings = listingsService.getListings()
  }

  getProductId (url: string, store: string) {
    let match
    switch (store) {
      case 'Lulu': match = url.match(/\d{8}/)[0]
        break
      case 'Amazon': match = url.match(/dp\/(\w{10})\//)[1]
    }
    return match
  }
}

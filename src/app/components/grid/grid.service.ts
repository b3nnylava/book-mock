import { Injectable } from '@angular/core'
import { listings } from './grid.data'

export class BookListing {
  id: number
  title: string
  storyURL: string
  author: string
  rating: string
  store: string
  storeURL: string
  notes: string
}

@Injectable()
export class GridService {
  getListings (): BookListing[] {
    return listings
  }
}

import { Injectable } from '@angular/core'

export class BookListing {
  id: number
  name: string
  storyURL: string
  author: string
  rating: string
  store: string
  storeURL: string
  notes: string
}

const listings: BookListing[] = [{
  id: 1,
  name: `Dr Hoof: The Complete Series - Director's Cut`,
  storyURL: 'https://www.deviantart.com/thegoldencrowbar/gallery/?q=doctor+whoof&offset=0',
  author: 'Johnathan Lopez / The Golden Crowbar',
  rating: 'E',
  store: 'Lulu',
  storeURL: 'http://www.lulu.com/shop/jonathan-lopez/doctor-whoof-the-complete-series-directors-cut/hardcover/product-16671951.html',
  notes: 'Appears to lack pre-readers or editors'
},{
  id: 2,
  name: `The Story of My Life`,
  storyURL: 'https://www.fimfiction.net/story/30494/the-story-of-my-life',
  author: 'Xupla Mindblower',
  rating: 'E',
  store: 'Lulu',
  storeURL: 'http://www.lulu.com/shop/xupla-mindblower/the-story-of-my-life/paperback/product-20404756.html',
  notes: ''
},{
  id: 3,
  name: `Conversations in a Canterlot Cafe`,
  storyURL: 'https://www.fimfiction.net/story/192085/conversations-in-a-canterlot-caf',
  author: 'Bernard Doove / Goldfur',
  rating: 'E',
  store: 'Amazon',
  storeURL: 'http://www.amazon.com/Conversations-In-A-Canterlot-Cafe/dp/1505411041/',
  notes: ''
},{
  id: 4,
  name: `The Hope Called Night: Firstborn`,
  storyURL: '',
  author: 'Shaelyn Green',
  rating: '',
  store: 'Lulu',
  storeURL: 'http://www.lulu.com/shop/shaelyn-green/the-hope-called-night-firstborn/hardcover/product-21584438.html',
  notes: `Apparently a crossover with Warriors and Guardians of Ga'Hoole`
},{
  id: 5,
  name: `Change of Life`,
  storyURL: 'https://www.fimfiction.net/story/141487/change-of-life',
  author: 'Bernard Doove / Goldfur',
  rating: 'T',
  store: 'Amazon',
  storeURL: 'http://www.amazon.com/Change-Life-Bernard-Doove/dp/149482177X/',
  notes: ''
}]

@Injectable()
export class GridService {
  getListings (): BookListing[] {
    return listings
  }
}

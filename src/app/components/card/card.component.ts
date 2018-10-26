import { Component } from '@angular/core'
import { DataService, Edition, Book } from '../../services/data/data.service'

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  providers: [DataService]
})
export class CardComponent {
  editions: Edition[]

  constructor (private dataService: DataService) {
    this.editions = dataService.getEditions()
  }

  getBook (id: number): Book {
    return this.dataService.getBook(id)
  }
}

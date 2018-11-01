import { Component } from '@angular/core'
import { DataService, Edition } from '../../services/data/data.service'


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [DataService]
})
export class HomeComponent {
  editions: Edition[]

  constructor (private dataService: DataService) {
    this.editions = dataService.getAllEditions()
  }
}

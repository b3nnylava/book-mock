import { Component } from '@angular/core'
import DxThemes from 'devextreme/ui/themes'

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isCard = true

  onOptionChanged (e) {
    if (e.value) {
      DxThemes.current('generic.dark')
      $('body').css('background-color','#424548')
      $('#menu').removeClass('navbar-light bg-light').addClass('navbar-dark bg-dark')
    } else {
      DxThemes.current('generic.light')
      $('body').css('background-color','lightgrey')
      $('#menu').removeClass('navbar-dark bg-dark').addClass('navbar-light bg-light')
    }
  }
}

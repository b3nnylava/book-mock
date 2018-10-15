import { Component } from '@angular/core'
import DxThemes from 'devextreme/ui/themes'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isCard

  ngOnInit () {
    DxThemes.current('generic.dark')
  }

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

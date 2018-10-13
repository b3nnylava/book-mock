import { Component } from '@angular/core'
import DxThemes from 'devextreme/ui/themes'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ngOnInit () {
    DxThemes.current('generic.dark')
  }
}

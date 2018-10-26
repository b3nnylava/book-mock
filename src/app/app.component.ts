import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isDark = true

  toggleTheme () {
    if (this.isDark) {
      $('.dark-theme').each(function () {
        $(this).addClass('light-theme')
        $(this).removeClass('dark-theme')
      })
      $('#theme-toggle').text('LIGHT')
    } else {
      $('.light-theme').each(function () {
        $(this).addClass('dark-theme')
        $(this).removeClass('light-theme')
      })
      $('#theme-toggle').text('DARK')
    }
    this.isDark = !this.isDark
  }
}

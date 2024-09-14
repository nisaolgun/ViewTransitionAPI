import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('backgroundChange', [
      state('day', style({
        backgroundColor: '#007BA7',
        backgroundImage: 'url()'
      })),
      state('night', style({
        backgroundColor: '#003153',
        backgroundImage: 'url()'
      })),
      transition('day <=> night', animate('1s ease-in-out'))
    ])
  ]
})
export class AppComponent {
  currentState = 'day';

  toggleTheme() {
    this.currentState = this.currentState === 'day' ? 'night' : 'day';
  }

  get buttonIcon() {
    return this.currentState === 'day' ? '☀️' : '🌙';
  }

  get buttonText() {
    return this.currentState === 'day' ? 'Gece Moduna Geç' : 'Gündüz Moduna Geç';
  }
}

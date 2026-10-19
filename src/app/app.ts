import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TripList } from './components/trip-list/trip-list';
import { TripItem } from './components/trip-item/trip-item';

@Component({
  imports: [RouterOutlet, TripList, TripItem],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('TestChtibaTaher');
}

import { Component, input } from '@angular/core';
import { Trip } from '../../models/trip';

@Component({
  imports: [],
  selector: 'app-trip-item',
  styleUrl: './trip-item.css',
  templateUrl: './trip-item.html',
})
export class TripItem {
  tab=input.required<Trip>();
  i=input.required<Number>;
}

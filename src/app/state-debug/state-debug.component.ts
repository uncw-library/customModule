import { Component, inject } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { Store } from '@ngrx/store';

@Component({
  selector: 'custom-state-debug',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './state-debug.component.html',
  styleUrl: './state-debug.component.scss'
})
export class StateDebugComponent {
  private store = inject(Store);
  state = this.store.selectSignal(s => s);
}

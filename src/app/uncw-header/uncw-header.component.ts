import { Component } from '@angular/core';
import { AssetsPublicPathDirective } from '../services/assets-public-path.directive';

@Component({
  selector: 'custom-uncw-header',
  standalone: true,
  imports: [AssetsPublicPathDirective],
  templateUrl: './uncw-header.component.html',
  styleUrl: './uncw-header.component.scss'
})
export class UncwHeaderComponent {

}

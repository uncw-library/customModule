import { Component } from '@angular/core';
import { AssetsPublicPathDirective } from '../services/assets-public-path.directive';

declare const __webpack_public_path__: string;

@Component({
  selector: 'custom-uncw-header',
  standalone: true,
  imports: [AssetsPublicPathDirective],
  templateUrl: './uncw-header.component.html',
  styleUrl: './uncw-header.component.scss'
})
export class UncwHeaderComponent {
  private publicPath = (typeof __webpack_public_path__ === 'string' ? __webpack_public_path__ : '');
  logoMask = `url('${this.publicPath}assets/images/UNCW-Logo.png') no-repeat center`;
}

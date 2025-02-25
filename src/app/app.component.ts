import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TypographyExamplesComponent } from './components/typography-examples/typography-examples.component';
import { TypographyDemoComponent } from './components/typography-demo/typography-demo.component';

@Component({
  selector: 'app-root',
  imports: [TypographyDemoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'iosense-design-system';
}

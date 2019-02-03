import { Component } from '@angular/core';
import { PageTitleService } from './shared/page-title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private pageTitleService: PageTitleService) {
    this.pageTitleService.init();
  }
}

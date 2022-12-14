import { useAnimation } from '@angular/animations';
import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movie_review';

  constructor(iconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon('search', domSanitizer.bypassSecurityTrustResourceUrl('assets/svg/search-2.svg'));

    iconRegistry.addSvgIcon('user', domSanitizer.bypassSecurityTrustResourceUrl('assets/svg/user.svg'));
  }


}


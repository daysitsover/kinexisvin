import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(public router: Router) {
    setTimeout(() => {
      this.router.navigateByUrl('resultlanjutan');
    }, 1000);
  }
  ngOnInit() {}
}

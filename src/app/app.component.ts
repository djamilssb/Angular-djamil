import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductSearchComponent } from './product-search/product-search.component';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterLink, RouterModule, ProductSearchComponent]
})
export class AppComponent {
  constructor(private router: Router) {}

  title = 'Dragon Ball Figures';

  login(): void {
    this.router.navigate(['/login']);
  }
}

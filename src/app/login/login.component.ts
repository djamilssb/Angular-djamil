import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [FormsModule]
})
export class LoginComponent {
  username : string = '';
  password : string = '';
  errorMessage: string | null = null;

  private validUsername = 'username';
  private validPassword = 'root';

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    this.authService.login(this.username, this.password)
  }

  onSubmit() {
    if (this.username === this.validUsername && this.password === this.validPassword) {
      this.errorMessage = null;
      alert('Connexion réussie!');
 
      this.router.navigate(['/product-list']);
    } else {
      this.errorMessage = 'Identifiants incorrects. Veuillez réessayer.';
    }
  }
}

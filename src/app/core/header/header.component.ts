import { Component, inject } from '@angular/core';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { LogoComponent } from '../../shared/components/logo/logo.component';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent, LogoComponent, RouterLinkActive, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  #router = inject(Router);
  isLoggedIn = inject(AuthService).isLoggedIn();
  routeToLogin() {
    this.#router.navigate(['auth']);
  }

  logout() {
    localStorage.removeItem('token');
    this.#router.navigate(['auth']);
  }
}

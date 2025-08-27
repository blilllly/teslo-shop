import { Component, computed, effect, inject } from '@angular/core';
import { Router, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthService } from '@auth/services/auth.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard-layout',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './admin-dashboard-layout.component.html',
})
export class AdminDashboardLayoutComponent {
  authService = inject(AuthService);
  router = inject(Router);

  user = computed(() => this.authService.user());

  //return the user to the parent path when they logout
  private checkAdminEffect = effect(() => {
    if (!this.authService.isAdmin()) this.router.navigateByUrl('/');
  });
}

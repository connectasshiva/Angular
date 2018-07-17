import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from 'app/auth.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router/src/router_state';
import { CanActivateChild } from '@angular/router/src/interfaces';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

    constructor(private router: Router, private authService: AuthService) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

        let url = state.url;
        console.log('AuthGuard#canActivate called');
        return true;
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.canActivate(route, state);
    }


    checkLogin(url: string): boolean {

        if (this.authService.isLoggedIn) return true;
        this.authService.redirectUrl = url;
        this.router.navigate(['/login']);

        return false;
    }
}
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {AuthenticationService} from "../_services/authentication.service";
import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const user = this.authenticationService.userValue;
    if (user!=null) {
      //logged so return true
      return true;
    }else{
      //not logged in so redirect to login page
      this.router.navigate(['/login']);
      return false;
    }
  }

}

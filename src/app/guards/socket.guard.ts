import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {SocketService} from "../services/socket.service";

@Injectable()
export class SocketGuard implements CanActivate {

  constructor(private socketService: SocketService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.socketService.isConnected()) {
      return true;
    }

    this.router.navigate(['/home']);
    return false;
  }
}

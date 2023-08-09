// import { Injectable, inject } from "@angular/core";
// import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
// import { Observable, map, tap } from "rxjs";
// import { AuthService } from "../Services/auth.service";

// Injectable({providedIn: 'root'})
// class AdminGuard{
    
//     constructor (private authService: AuthService,private router: Router){}

//     canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//         return this.authService.user.pipe(
//             map(user => {
//                 return !!user; 
//             }),
//             tap(isAdmin => {
//                 if (!isAdmin) {
//                     this.router.navigate(['/auth']);
//                 }
//             })

//         )
//     };
// }
// export const isAdminGuard: CanActivateFn = (route: ActivatedRouteSnapshot,state: RouterStateSnapshot):Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree => {
//     return inject(AdminGuard).canActivate(route,state);
// }


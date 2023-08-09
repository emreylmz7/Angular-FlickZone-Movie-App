import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthResponse } from './auth-response.model';
import { BehaviorSubject, Subject, catchError, tap, throwError } from 'rxjs';
import { User } from './user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user = new BehaviorSubject<User| null>(null);
  private api_key= environment.api_key;
  private RegisterUrl = environment.RegisterUrl;  
  private loginUrl = environment.LoginUrl;

  constructor(private http:HttpClient) { }

  register(email:string,password:string){
    return this.http.post<AuthResponse>(this.RegisterUrl + this.api_key,{
      email: email,
      password: password,
      returnSecureToken: true 
    }).pipe(
      tap(response => {
        this.handleUser(response.email,response.localId,response.idToken,response.expiresIn);
      }),
      catchError(this.handleError)
    );
  }
  login(email:string,password:string){
    return this.http.post<AuthResponse>(this.loginUrl + this.api_key,{
      email: email,
      password: password,
      returnSecureToken: true 
    }).pipe(
      tap(response => {
        this.handleUser(response.email,response.localId,response.idToken,response.expiresIn);
      }),
      catchError(this.handleError)
    );
  }
  logout(){
    this.user.next(null);
    localStorage.removeItem("user");
  }
  autoLogin(){
    if (localStorage.getItem("user")== null) {
      return;
    }
    const user = JSON.parse(localStorage.getItem("user") || "{}")
    const loadedUser = new User(user.email,user.id,user._token,new Date(user._tokenExpirationDate))
    if (loadedUser.token) {
      this.user.next(loadedUser);
      
    }
  }

  private handleError(err: HttpErrorResponse){
    let message = "Error :(";

    if (err.error.error) {
      switch(err.error.error.message){
        case "EMAIL_EXISTS":
          message = "This e-mail address is already in use"
          break;
        case "OPERATION_NOT_ALLOWED":
          message = "Password sign-in is disabled for this project."
          break; 
        case "TOO_MANY_ATTEMPTS_TRY_LATER":
          message = "We have blocked all requests from this device due to unusual activity. Try again later."
          break;
        case "EMAIL_NOT_FOUND":
          message = "There is no user record corresponding to this identifier. The user may have been deleted."
          break;
        case "INVALID_PASSWORD":
          message = "The password is invalid or the user does not have a password."
          break;  
        case "USER_DISABLED":
          message = "The user account has been disabled by an administrator."
          break;
      }
    }

    return throwError(() => message)

  }
  private handleUser(email: string,localId: string,idToken : string,expiresIn:string){

    const expirationDate = new Date(new Date().getTime() + (+expiresIn * 1000))
    const user = new User(
      email,
      localId,
      idToken,
      expirationDate
    );
    
    this.user.next(user);
    localStorage.setItem("user",JSON.stringify(user));
  }
}

import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  obs$ = new Subject<any>();

   login(): Observable<boolean> {
     return of(true).pipe(
       delay(1000),
       tap(val => this.isLoggedIn = true)
     );
   }

  observame(val) {
    this.obs$.next(val);
  }

  get observar() {
    return this.obs$;
  }

   logout(): void {
     this.isLoggedIn = false;
   }

  constructor() { }
}

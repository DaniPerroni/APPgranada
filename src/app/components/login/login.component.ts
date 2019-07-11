import { Component, OnInit } from '@angular/core';
import { LogModel } from 'src/app/models/login.model';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { ApiService } from 'src/app/services/api.service';
import { NgForm } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

log = new LogModel();

  constructor(
    private apiService: ApiService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  login(form: NgForm) {
    this.apiService.logIn(this.log).subscribe((user) => {
      console.log(user);
      Swal.fire({
        type: 'success',
        title: '¡Bien!',
        text: 'Se ha iniciado correctamente',
      }).then(() => {
        this.router.navigate(['/inbox'])
      });
    }, (err) => {
      console.log(err);
      Swal.fire({
        type: 'error',
        title: 'Error de autentificación',
        text: 'Ocurrió un error',
      });
    });
  }

}

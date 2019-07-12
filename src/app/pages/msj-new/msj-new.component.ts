import { Component, OnInit } from '@angular/core';

// service
import { ApiService } from 'src/app/services/api.service';
import { from, Subject } from 'rxjs';
import { MailModel } from '../../models/mail.model';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { AuthService } from '../../auth/auth.service';


@Component({
  selector: 'app-msj-new',
  templateUrl: './msj-new.component.html',
  styleUrls: ['./msj-new.component.css']
})
export class MsjNewComponent implements OnInit {

// tslint:disable-next-line: new-parens
  mail = new MailModel();

  draft$;

  constructor(
    private apiService: ApiService,
    private authService: AuthService) {
  }

  ngOnInit() {
    this.draft$ = this.authService.observar;
    this.draft$.subscribe(data => console.log('esta es la data', data));
  }

  enviar( form: NgForm) {

    if ( form.invalid ) {
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'por favor llena todos los campos',
      });
      return;
    } else {
      Swal.fire({
        title: '¡Bien!',
        text: 'se ha enviado correctamente',
        type: 'success',
        });
    }

    this.apiService.addMail(this.mail).subscribe( data => {
      console.log(data);
    });


  }

  pushDraft() {
    this.authService.observame(this.mail);
  }

/////
}

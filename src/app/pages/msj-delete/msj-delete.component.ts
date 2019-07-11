import { Component, OnInit } from '@angular/core';



// service
import { ApiService } from 'src/app/services/api.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-msj-delete',
  templateUrl: './msj-delete.component.html',
  styleUrls: ['./msj-delete.component.css']
})
export class MsjDeleteComponent implements OnInit {

  constructor(private apiService: ApiService) { }

outMails;

  ngOnInit() {
    this.apiService.getDelete({ "id": [17, 18] }).subscribe((eliminados) => {
      console.log(eliminados);
      this.outMails = eliminados['data'];
    });
  }

}

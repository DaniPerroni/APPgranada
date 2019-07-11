import { Component, OnInit } from '@angular/core';

// service
import { ApiService } from 'src/app/services/api.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-msj-sent',
  templateUrl: './msj-sent.component.html',
  styleUrls: ['./msj-sent.component.css']
})
export class MsjSentComponent implements OnInit {
  sents;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
 this.apiService.getSents().subscribe((value) => {
   console.log(value);
   this.sents = value['data'];
 });

  }

}

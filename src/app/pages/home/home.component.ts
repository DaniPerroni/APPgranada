import { Component, OnInit } from '@angular/core';

// service
import { ApiService } from 'src/app/services/api.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  searchMail: string;
  mails;

  selectedValue;
  selectBy = [
    { id: 0, name: 'Asunto', type: 'subject' },
    { id: 1, name: 'Enviado Por', type: 'sender' },
    { id: 2, name: 'Descripcion', type: 'description' }
  ];
  selectedLevel = this.selectBy[0];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getMails().subscribe((bandeja) => {
      console.log(bandeja);
      this.mails = bandeja['data'];
    });
  }

}

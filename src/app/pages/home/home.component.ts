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

  mails;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getMails().subscribe((bandeja) => {
      console.log(bandeja);
      this.mails = bandeja['data'];
    });
  }

}

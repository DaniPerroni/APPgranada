import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-draft',
  templateUrl: './draft.component.html',
  styleUrls: ['./draft.component.css']
})
export class DraftComponent implements OnInit {

drafting;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.observar.subscribe(draft => {
      console.log(draft);
      this.drafting = draft['data'];
    }
    );

  }

}

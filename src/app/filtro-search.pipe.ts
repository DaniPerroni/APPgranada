import { Pipe, PipeTransform } from '@angular/core';
import { MailModel } from './models/mail.model';

@Pipe({
  name: 'filtroSearch'
})
export class FiltroSearchPipe implements PipeTransform {

  transform(Emails: MailModel[], searchMail: string, search): MailModel[] {
    if (!Emails || !searchMail) {
      return Emails;
    }
    // console.log('search', search)
    return Emails.filter(mail => mail[search.type].toLowerCase().indexOf(searchMail.toLowerCase()) !== -1);
  }

}

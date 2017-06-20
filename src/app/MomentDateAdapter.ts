import {NativeDateAdapter} from '@angular/material';
import * as moment from 'moment';

export class MomentDateAdapter extends NativeDateAdapter {
  format(date: Date, displayFormat: any): string {
    return moment(date).fromNow();
  }
}

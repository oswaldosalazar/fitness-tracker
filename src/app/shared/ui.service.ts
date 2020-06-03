import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';

@Injectable()
export class UIService {
  loadingStateChanged = new Subject<boolean>();

  constructor(private snakBar: MatSnackBar) {}

  showSnackBar(message, action, duration) {
    this.snakBar.open(message, action, { duration });
  }
}

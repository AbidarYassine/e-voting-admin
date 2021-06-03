import {Injectable} from '@angular/core';
import {ComponentType} from '@angular/cdk/overlay';
import {MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class Modal {

  constructor(private dialog: MatDialog) {
  }

  public open<T>(component: ComponentType<T>, data: object = {}, config: string | MatDialogConfig = {}): MatDialogRef<T> {
    if (!data) {
      data = {};
    }

    if (typeof config === 'string') {
      config = {panelClass: config};
    }
    if (!Array.isArray(config.panelClass)) {
      config.panelClass = [config.panelClass];
    }
    if (typeof config.restoreFocus === 'undefined') {
      config.restoreFocus = false;
    }
    config.panelClass.push('be-modal');

    return this.dialog.open(component, {...config, data});
  }

  public show<T>(component: ComponentType<T>, data: object = {}): MatDialogRef<T> {
    return this.open(component, data);
  }

  public anyDialogOpen(): boolean {
    return this.dialog.openDialogs.length > 0;
  }

  public closeAll() {
    this.dialog.closeAll();
  }
}

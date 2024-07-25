import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { TooltipPosition, MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { User } from '../../models/user.class';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [MatIconModule, MatDividerModule, MatButtonModule, MatTooltipModule, MatDialogModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  position: TooltipPosition = 'above';
  user: User = new User();


  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(DialogAddUserComponent);
  }

  
}

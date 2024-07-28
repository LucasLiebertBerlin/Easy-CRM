import { Component } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogContent, MatDialogActions, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { User } from '../../models/user.class';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dialog-edit-address',
  standalone: true,
  imports: [MatProgressBarModule, MatDialogContent, MatDialogActions, MatFormFieldModule, FormsModule],
  templateUrl: './dialog-edit-address.component.html',
  styleUrl: './dialog-edit-address.component.scss'
})
export class DialogEditAddressComponent {
  user: User | null = null;
  loading = false;

  constructor(public dialogRef: MatDialogRef<DialogEditAddressComponent>,) { }


  saveUser() { }





}

import { Component } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogContent, MatDialogActions, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { User } from '../../models/user.class';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { doc, Firestore, updateDoc } from '@angular/fire/firestore';


@Component({
  selector: 'app-dialog-edit-user',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    MatProgressBarModule, 
    MatDialogContent, 
    MatDialogActions, 
    MatFormFieldModule, 
    FormsModule, 
    CommonModule, 
    MatInputModule, 
    MatButtonModule, 
    MatDatepickerModule,
  CommonModule],
  templateUrl: './dialog-edit-user.component.html',
  styleUrl: './dialog-edit-user.component.scss'
})
export class DialogEditUserComponent {
  user: User | any;
  loading = false;
  birthDate!: Date;
  userId: string | undefined;

  constructor(public dialogRef: MatDialogRef<DialogEditUserComponent>, private readonly firestore: Firestore) { }
  
  saveUser() {
    updateDoc(doc(this.firestore, 'users', this.user['id']), this.user.toJSON())
    .then(() => {
      this.loading = false;
      this.dialogRef.close();
      console.log('werewrw', this.user['id']);
    })
  }
}

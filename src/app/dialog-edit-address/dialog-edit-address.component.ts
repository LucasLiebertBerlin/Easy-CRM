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
import { collection, doc, Firestore, updateDoc } from '@angular/fire/firestore';


@Component({
  selector: 'app-dialog-edit-address',
  standalone: true,
  imports: [MatProgressBarModule, MatDialogContent, MatDialogActions, MatFormFieldModule, FormsModule, CommonModule, MatInputModule, MatButtonModule],
  templateUrl: './dialog-edit-address.component.html',
  styleUrl: './dialog-edit-address.component.scss'
})

export class DialogEditAddressComponent {
  user: User | any;
  loading: boolean = false;
  userId: string = '';

  constructor(public dialogRef: MatDialogRef<DialogEditAddressComponent>, private readonly firestore: Firestore) { }


  saveUser() {
    updateDoc(doc(this.firestore, 'users', this.user['userId']), this.user.toJSON())
    .then(() => {
      this.loading = false;
      this.dialogRef.close();
    })
  }


//   saveUser(){
//     this.user.birthDate = this.birthDate.getTime();
//     console.log('Current User is', this.user);
//     this.loading = true;

//     addDoc(collection(this.firestore, 'users'), this.user.toJSON())
//     .then((result: any) => {
//       this.loading = false;
//       this.user['id'] = result.id
//       updateDoc(doc(this.firestore, 'users', this.user['id']), this.user.toJSON());
//       console.log(result);
//       this.dialogRef.close();
//     })
//   }
// }


}

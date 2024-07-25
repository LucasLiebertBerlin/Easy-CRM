import { Component, inject } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/user.class'; // Stelle sicher, dass der Pfad zu User korrekt ist
import { Firestore, collection, collectionData, addDoc, doc, getDoc, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [MatDialogModule, MatButtonModule, MatInputModule, MatIconModule, MatFormFieldModule, MatDatepickerModule, FormsModule],
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent {
  user = new User();
  birthDate: Date = new Date();
  loading = false;
  items$: Observable<any[]>;

  constructor(private firestore: Firestore) {
    const itemsCollection = collection(firestore, 'items');
    this.items$ = collectionData(itemsCollection);
  }


  saveUser(){
    this.user.birthDate = this.birthDate.getTime();
    console.log('Current User is', this.user);
    this.loading = true;

    addDoc(collection(this.firestore, 'users'), this.user.toJSON())
    .then((result: any) => {
      this.loading = false;
      this.user['userId'] = result.id
      updateDoc(doc(this.firestore, 'users', this.user['userId']), this.user.toJSON());
      console.log(result);
      // this.dialogRef.close();
    })
  }
}




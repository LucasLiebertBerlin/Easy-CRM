import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { TooltipPosition, MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { User } from '../../models/user.class';
import { MatCardModule } from '@angular/material/card';
import { collection, Firestore, getDocs, collectionData } from '@angular/fire/firestore';
import { RouterModule } from '@angular/router';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [MatIconModule, MatDividerModule, MatButtonModule, MatTooltipModule, MatDialogModule, MatCardModule, RouterModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  position: TooltipPosition = 'above';
  user: User = new User();
  allUsers: User[] = [];



  constructor(public dialog: MatDialog, private readonly firestore: Firestore) { }

  // wartet auf veränderungen im firebas user und wenn eine passiert dann gibt sie diese aus
  ngOnInit(): void {
    const usersCollection = collection(this.firestore, 'users');
    collectionData(usersCollection, { idField: 'id' }).subscribe((changes: any) => {
      console.log('received changes from Database', changes);
      this.allUsers = changes;
    });
  }



  openDialog() {
    this.dialog.open(DialogAddUserComponent);
  }


}

import { Component } from '@angular/core';
import { collection, collectionData, doc, Firestore, onSnapshot } from '@angular/fire/firestore';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../models/user.class';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialog } from '@angular/material/dialog';
import { DialogEditAddressComponent } from '../dialog-edit-address/dialog-edit-address.component';
import { DialogEditUserComponent } from '../dialog-edit-user/dialog-edit-user.component';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [MatCardModule, MatIcon, MatButtonModule, MatMenuModule],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent {

  userId: string = "";
  user: User = new User;


  constructor(
    private route: ActivatedRoute,
    private readonly firestore: Firestore,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(paramMap => {
      this.userId = paramMap.get('id') ?? "";
      console.log('GOT ID', this.userId);
      this.getUser();
    })
  }


  getUser() {
    onSnapshot(doc(collection(this.firestore, 'users'), this.userId), (user: any) => {
      this.user = new User(user.data());
      console.log('Retrieved User', this.user)
    })
  }

  
  editMenu() {
    const dialog = this.dialog.open(DialogEditAddressComponent);
    dialog.componentInstance.user = this.user;
  }


  editUserDetail() {
    this.dialog.open(DialogEditUserComponent);
  }

}

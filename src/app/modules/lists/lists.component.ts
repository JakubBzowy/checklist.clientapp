import { Component, OnInit, Inject } from '@angular/core';
import { ChecklistApi } from 'src/app/checlistApi.service';
import { AuthService } from 'src/app/core/auth/auth.service';
import { ListForCreation } from 'src/app/shared/models/list-for-creation';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {
  name: string;
  dateToExecute: string;
  createdDate: string;
  
  constructor(private checklistApiService: ChecklistApi, private auth: AuthService, public dialog: MatDialog) { }

  ngOnInit() {
    this.getAllListsForUser();
  }

  openDialog():void{
    const dialogRef = this.dialog.open(AddNewListDialog, {
      width: '250px',
      data: {Name: this.name, DateToExecute: this.dateToExecute, CreatedDate: new Date().toISOString() }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.addNewList(result);
    });
  }

  getAllListsForUser(){    
    this.checklistApiService.getAllListsForUser(this.auth.getUserId())
      .subscribe(res => {console.log(res)});
  }

  addNewList(list: ListForCreation){
    this.checklistApiService.postList(this.auth.getUserId(), list)
      .subscribe(res => {console.log(res)});
  }

}

@Component({
  selector: 'app-lists-new-dialog',
  templateUrl: './add-new-list-dialog.html',
  styleUrls: ['./lists.component.css']
})

export class AddNewListDialog{
  constructor(
      public dialogRef: MatDialogRef<AddNewListDialog>,
      @Inject(MAT_DIALOG_DATA) public data: ListForCreation) {}
  
    onNoClick(): void {
      this.dialogRef.close();
    }
}

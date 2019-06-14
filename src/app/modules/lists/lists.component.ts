import { Component, OnInit } from '@angular/core';
import { ChecklistApi } from 'src/app/checlistApi.service';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {

  constructor(private checklistApiService: ChecklistApi, private auth: AuthService) { }

  ngOnInit() {
    this.getAllListsForUser();
  }

  getAllListsForUser(){
    this.checklistApiService.getAllListsForUser(this.auth.getUserId())
      .subscribe(res => {console.log(res)});
  }

}

import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { AuthGuardService } from './core/auth/auth-guard.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListsComponent } from './modules/lists/lists.component';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(
    [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent},
      { path: 'lists', component: ListsComponent, canActivate: [AuthGuardService]},
      { path: '**', redirectTo: 'home' }
    ]
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }

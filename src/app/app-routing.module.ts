import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Shared/Home/home.component';
import { WatchListComponent } from './Shared/Watch-list/watch-list.component';
import { NotFoundComponent } from './Shared/not-found/not-found.component';
// import { isAdminGuard } from './guards/admin-guard';

const routes: Routes = [
  {path: 'home',component: HomeComponent},
  {path: 'watchlist',component: WatchListComponent},
  {path: '',redirectTo: '/home',pathMatch: 'full'},
  {path: '**',component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

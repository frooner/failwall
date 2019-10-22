import { RouterModule, Routes } from '@angular/router';

import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';
import { FailwallComponent } from './failwall/failwall.component';
import { NgModule } from '@angular/core';

const routes: Routes = [{
  path: 'failwall',
  component: FailwallComponent,
  canActivate: [AuthGuard]
},
{
  path: 'login',
  component: AuthComponent
},
{
  path: '**',
  redirectTo: 'login',
  pathMatch: 'full'
}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

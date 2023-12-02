import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from "./components/authentication/authentication.component";
import { UserNoobComponent } from "./components/user-noob/user-noob.component";
import {AdminSupremeComponent} from "./components/admin-supreme/admin-supreme.component";

const routes: Routes = [
  { path: '', redirectTo: '/pagina-inicial', pathMatch: 'full' },
  { path: 'pagina-inicial', component: AuthenticationComponent },
  { path: 'user-noob', component: UserNoobComponent },
  { path: 'admin-supreme', component: AdminSupremeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

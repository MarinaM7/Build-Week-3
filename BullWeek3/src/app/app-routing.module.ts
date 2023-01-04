import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/Homepage/home/home.component';
import { FormComponent } from './components/form/form.component';
import { ListaComponent } from './components/lista/lista.component';
import { PostsDetailsComponent } from './posts-details/posts-details.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './auth.guard';
import { LogoutComponent } from './components/logout/logout.component';
const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,

  },
  {
    path: "register",
    component: RegisterComponent,
  },
  {
    path: 'post/:id',
    component: PostsDetailsComponent,
  },
  {
    path: 'post',
    component: ListaComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'form',
    component: FormComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "logout",
    component: LogoutComponent
  },

  {
    path: 'form/:id',
    component: FormComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

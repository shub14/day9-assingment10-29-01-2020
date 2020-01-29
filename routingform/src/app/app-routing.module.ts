import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from '..//app/form/form.component';
import { RegisterComponent } from './/register/register.component';

const routes: Routes = [
  {path: 'form', component: FormComponent},
  {path: 'register', component: RegisterComponent},
  {path: '', component: FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }

export const routing = RouterModule.forRoot(routes);

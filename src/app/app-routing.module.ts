import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { ServicesComponent } from './services/services.component';


const routes: Routes = [

{path:'home',component:HomeComponent},
{path:'register',component:RegisterComponent},
{path:'services',component:ServicesComponent},
{path:'products',component:ProductsComponent},
{path:'',redirectTo:'/home',pathMatch:'full'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

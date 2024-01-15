import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {MenuComponent} from "./pages/menu/menu.component";
import {AboutComponent} from "./pages/about/about.component";
import {ContactComponent} from "./pages/contact/contact.component";
import {CoursepageComponent} from "./pages/coursepage/coursepage.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'course/:id', component: CoursepageComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

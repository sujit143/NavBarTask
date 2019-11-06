import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule,NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './layout/home/home.component';
import { ContactusComponent } from './layout/contactus/contactus.component';
import { LoginComponent } from './login/login.component';
// import { NgbdModalBasic } from '@angular/modal-basic';
import { HttpClientModule } from "@angular/common/http";
import { routerModule } from './app.routing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar.component';
import {SidebarModule} from 'primeng/sidebar';
import { GallaryComponent } from './gallary/gallary.component';
// import { NavComponent } from './nav/nav.component';
import {EditorModule} from 'primeng/editor';
import {AccordionModule} from 'primeng/accordion';



@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,

    ContactusComponent,

    LoginComponent,

    SidebarComponent,

    GallaryComponent

    // NavComponent,

  ],
  imports: [
    BrowserModule,routerModule,NgbModule,NgbPaginationModule,FormsModule,
     NgbAlertModule,ReactiveFormsModule,HttpClientModule,SidebarModule,EditorModule,AccordionModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  // declarations: [NgbdModalBasic],
})
export class AppModule { }

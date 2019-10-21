import { Route } from "@angular/compiler/src/core";
import { Component } from '@angular/core';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './layout/home/home.component';
import { ContactusComponent } from './layout/contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import { Router,Routes,RouterModule } from "@angular/router";
import { GallaryComponent } from './gallary/gallary.component';

const arr: Routes =[
    {path:'' ,component:LayoutComponent},
    {path:'home',component:HomeComponent},
    {path:'contact us',component:ContactusComponent},
    {path:'login', component:LoginComponent},
    {path:'gallary',component:GallaryComponent}
];


export const routerModule=RouterModule.forRoot(arr);

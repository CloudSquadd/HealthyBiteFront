import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { LandingComponent } from './examples/landing/landing.component';
import { LoginComponent } from './examples/login/login.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { ListeRestaurantComponent } from './liste-restaurant/liste-restaurant.component';
import { AddLivraisonComponent } from './components/add-livraison/add-livraison.component';
import { GetAllLivraisonComponent } from './components/get-all-livraison/get-all-livraison.component';
import { UpdateLivraisonComponent } from './components/update-livraison/update-livraison.component';

const routes: Routes =[
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'index',                component: ComponentsComponent },
    { path: 'nucleoicons',          component: NucleoiconsComponent },
    { path: 'examples/landing',     component: LandingComponent },
    { path: 'examples/login',       component: LoginComponent },
    { path: 'examples/profile',     component: ProfileComponent },
    { path: 'restaurant',           component: ListeRestaurantComponent },
    { path: 'AllLiv', component: GetAllLivraisonComponent },
    { path: 'addLiv', component: AddLivraisonComponent },
    { path: 'updateLiv/:id', component: UpdateLivraisonComponent }
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule
    ],
})

export class AppRoutingModule { }

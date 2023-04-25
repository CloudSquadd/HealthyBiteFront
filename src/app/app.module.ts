import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { ExamplesModule } from './examples/examples.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ListeRestaurantComponent } from './liste-restaurant/liste-restaurant.component';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';
import { ListeReclamationsComponent } from './liste-reclamations/liste-reclamations.component';
import { AddReclamationsComponent } from './add-reclamations/add-reclamations.component';
import { AddReponseComponent } from './add-reponse/add-reponse.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        ListeRestaurantComponent,
        ListeReclamationsComponent,
        AddReclamationsComponent,
        AddReponseComponent
    ],
    imports: [
        BrowserAnimationsModule,
        NgbModule,
        FormsModule,
        RouterModule,
        AppRoutingModule,
        ComponentsModule,
        ExamplesModule,
        HttpClientModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbDatepicker, NgbDatepickerModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClientCreationComponent } from './client-creation/client-creation.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { ClientService } from './services/client.service';
import { ClientCreatedComponent } from './client-created/client-created.component';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientComponent } from './client/client.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientCreationComponent,
    WelcomeComponent,
    ClientCreatedComponent,
    ClientListComponent,
    ClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    NgbDatepickerModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireModule,
  ],
  providers: [ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientCreatedComponent } from './client-created/client-created.component';
import { ClientCreationComponent } from './client-creation/client-creation.component';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientComponent } from './client/client.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [{
  component: ClientCreationComponent,
  path: "client-creation"
},
{
  component: ClientCreatedComponent,
  path: "created"
},
{
  component: ClientListComponent,
  path: "client-list"
},
{
  component: ClientComponent,
  path: "client/:id"
},
{
  component: WelcomeComponent,
  path: "**"
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

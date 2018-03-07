import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FruitComponent } from './fruit/fruit.component';
import { FruitListComponent } from './fruit-list/fruit-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FruitService } from './fruit.service';

let appRoutes: Routes = [
  {path: 'fruit-list', component: FruitListComponent},
  {path: 'fruit/:id', component: FruitComponent},
  {path: '', redirectTo: '/fruit-list', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    FruitComponent,
    FruitListComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    )
  ],
  providers: [FruitService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HomeComponent } from './home/home.component';
import {RouterModule, Routes} from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import {HttpClientModule} from '@angular/common/http';
import { JqueryComponent } from './jquery/jquery.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MydatePipe } from './mydate.pipe';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'heroes', component: HeroesComponent, children: [
    {path: ':hero_id', component: HeroDetailComponent}
    ]},
  {path: 'todo', component: TodoComponent},
  {path: 'jquery', component: JqueryComponent},
]


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    TodoComponent,
    HomeComponent,
    JqueryComponent,
    MydatePipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ResultPageComponent } from './result-page/result-page.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { DocsComponent } from './docs/docs.component';
import { FormsModule } from '@angular/forms';
import { DocComponent } from './doc/doc.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ResultPageComponent,
    SearchBarComponent,
    DocsComponent,
    DocComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

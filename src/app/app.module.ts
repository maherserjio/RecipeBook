import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing-module';
import { HttpClientModule} from '@angular/common/http';
import {SharedModule} from './Shared/shared.module';
import {CoreModule} from './core.module';

@NgModule({
  declarations: [
    HeaderComponent,
    AppComponent
  ],
  imports: [
    CoreModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }



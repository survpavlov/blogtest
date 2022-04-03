import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule }   from '@angular/forms';
import { MaterialAppModule } from './ngmaterial.module';
import { AppComponent }   from './app.component';
@NgModule({
    imports:      [ BrowserModule, FormsModule, BrowserAnimationsModule, MaterialAppModule ],
    declarations: [ AppComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
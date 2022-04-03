import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
imports: [MatButtonModule, MatDividerModule],
exports: [MatButtonModule, MatDividerModule]
})
export class MaterialAppModule { }
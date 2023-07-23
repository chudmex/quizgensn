import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { SelectButtonModule } from 'primeng/selectbutton';
import { InputSwitchModule } from 'primeng/inputswitch';
import { BlockUIModule } from 'primeng/blockui';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CheckboxModule,
    RadioButtonModule,
    FormsModule,
    ButtonModule,
    BrowserAnimationsModule,
    CardModule,
    DialogModule,
    DropdownModule,
    SelectButtonModule,
    InputSwitchModule,
    BlockUIModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

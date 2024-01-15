import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './topdata/topdata.component';



@NgModule({
  declarations: [
    TopdataComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [TopdataComponent]
})
export class UserModule { }

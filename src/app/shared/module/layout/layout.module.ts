import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from './header/header.module';
import { SideMenuModule } from './side-menu/side-menu.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, HeaderModule, SideMenuModule],
  exports: [CommonModule, HeaderModule, SideMenuModule]
})
export class LayoutModule { }

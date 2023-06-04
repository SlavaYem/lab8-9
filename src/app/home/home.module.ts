import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { ReactiveFormsModule } from '@angular/forms';

import { HomePageRoutingModule } from './home-routing.module';

import { HeaderComponent } from '../header/header.component';
import { MyformComponent} from '../myform/myform.component';
import { ViewformComponent } from '../viewform/viewform.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [HomePage, HeaderComponent, MyformComponent, ViewformComponent],
})
export class HomePageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { VaccineRoutingModule } from './vaccine-routing.module';
import { VaccineComponent } from './vaccine.component';

@NgModule({
  declarations: [VaccineComponent],
  imports: [CommonModule, ReactiveFormsModule, VaccineRoutingModule],
})
export class VaccineModule {}

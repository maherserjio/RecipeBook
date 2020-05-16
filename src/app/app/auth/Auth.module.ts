import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AuthComponent} from './auth.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../../Shared/shared.module';

@NgModule({
     declarations: [AuthComponent]
    , imports: [SharedModule , CommonModule , FormsModule , RouterModule.forChild(
      [
      {path: '' , component: AuthComponent}
      ]) ]

}
)
export class AuthModule {}

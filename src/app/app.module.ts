import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlanNodeComponent } from './components/plan-node/plan-node.component';
import { PlanViewComponent } from './components/plan-view/plan-view.component';
import {FormsModule} from '@angular/forms';
import {DurationPipe, DurationUnitPipe, MomentDatePipe} from './pipes';
import {PlanService} from './services/plan-service';
import {SyntaxHighlightService} from './services/syntax-highlight-service';
import {HelpService} from './services/help-service';
import {ColorService} from './services/color-service';

@NgModule({
  declarations: [
    AppComponent,
    PlanNodeComponent,
    PlanViewComponent,
    MomentDatePipe,
    DurationPipe,
    DurationUnitPipe
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [
      PlanService,
      SyntaxHighlightService,
      HelpService,
      ColorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

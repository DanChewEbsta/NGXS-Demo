import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';
import { environment } from 'src/environments/environment';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { AddComponent } from './counter/add/add.component';
import { DecrementComponent } from './counter/decrement/decrement.component';
import { IncrementComponent } from './counter/increment/increment.component';
import { ALL_STATES } from '../state/state.root';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { HttpClientModule }  from '@angular/common/http';
import { MetricTileComponent } from './metric-tile/metric-tile.component';
import { TileComponent } from './metric-tile/tile/tile.component';
import { SelectedTileComponent } from './metric-tile/selected-tile/selected-tile.component';
import { ActionNotifierComponent } from './metric-tile/action-notifier/action-notifier.component';
import { FilterComponent } from './metric-tile/filter/filter.component';
import { LoadingDetailsComponent } from './loading-details/loading-details.component';
import { StatusDisplayComponent } from './loading-details/status-display/status-display.component';
import { GridDataComponent } from './loading-details/grid-data/grid-data.component'
import { NgxsStoragePluginModule, StorageOption } from '@ngxs/storage-plugin';
import { CountState } from 'src/state/count/count.state';
@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    AddComponent,
    DecrementComponent,
    IncrementComponent,
    MetricTileComponent,
    TileComponent,
    SelectedTileComponent,
    ActionNotifierComponent,
    FilterComponent,
    LoadingDetailsComponent,
    StatusDisplayComponent,
    GridDataComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxsModule.forRoot(ALL_STATES, {
      developmentMode: !environment.production,
      selectorOptions: {
        injectContainerState: false,
        suppressErrors: false
      }
    }),
    NgxsReduxDevtoolsPluginModule.forRoot({
      disabled: environment.production
    }),
    NgxsStoragePluginModule.forRoot({
      storage: StorageOption.SessionStorage,
      key:[CountState]
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

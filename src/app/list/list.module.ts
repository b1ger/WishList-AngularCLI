import { NgModule } from '@angular/core';
import { CreateListComponent } from './create/create.list.component';
import { IndexListComponent}  from './index/index.list.component';

@NgModule({
  declarations: [
    CreateListComponent,
    IndexListComponent
  ],
  imports: [],
  exports: [
    CreateListComponent,
    IndexListComponent
  ],
  bootstrap: [
    CreateListComponent,
    IndexListComponent
  ],
  providers: []
})
export class ListModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RootComponent } from './root.component';
import { ChildComponent } from './child.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MyFilterPipe } from './myFilterPipe.pipe';
@NgModule({
    declarations: [
        RootComponent,
        ChildComponent,
        MyFilterPipe
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
    ],
    bootstrap: [RootComponent]
})
export class RootModule {

}

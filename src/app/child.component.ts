import { Component, Input, SimpleChanges, OnChanges, OnInit, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { Myservice } from './myservice.service';
import { MyFilterPipe } from './myFilterPipe.pipe';
@Component({
    selector: 'app-child',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.css'],
    providers: [Myservice]
})
export class ChildComponent implements OnChanges, OnInit {
    @Input('property') property: String;
    @Output() onItemPicked: EventEmitter<String> = new EventEmitter<String>();
    hideMe: Boolean;
    private data: any = [];
    constructor(private myservice: Myservice, private cdRef: ChangeDetectorRef) { }
    ngOnInit(): void {
        this.myservice.getData().subscribe((data) => {
            this.data = data;
        });
    }
    ngOnChanges(changes: SimpleChanges) {
        this.doSomethingAfter(changes.property.previousValue, changes.property.currentValue);
        console.log(changes.property.isFirstChange());
        if (!this.hideMe) {
            this.hideMe = true;
        }
    }
    doSomethingAfter = (a, b) => {
        console.log(a, b);
    }
    itemClicked = (item: any): void => {
        this.onItemPicked.emit(item.username);
        this.hideMe = false;
    }
}

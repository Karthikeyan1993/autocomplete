import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'app-root',
    templateUrl: './root.component.html',
    styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit {
    scripName: String = '';
    ngOnInit(): void {

    }

    constructor() {

    }

    doSomething = (data: String): void => {
        this.scripName = data;
    }
}

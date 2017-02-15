# Asynchronous with RxJS 

This lesson assumes you are already familiar with *promises*, or the API for handling asynchronous operations that allows you to reference a value that may not become available until some point in the future. 

RxJS, or [ReactiveX](http://reactivex.io/), is a library that implements a special combination of the observer and interator patterns to manage asynchronous streams. The library enables creating streams, composing streams, and listening to streams to respond. 

## Simple example 

1. Create a new project `ng new reactive` 

2. Create the file `assets\sample.txt` and add any content you like 

3. Generate a component `ng g component reader` 

4. Populate the HTML `reader\reader.component.html` with a simple dropdown and click action: 

```html
    <select #selection>
        <option id="sample.dat" selected="selected">Bad File</option>
        <option id="sample.txt">Good File</option>
    </select>
    <button (click)="loadFile(selection.options[selection.selectedIndex].id)">Load</button>
    <p>{{result || 'Choose a file and click the load button'}}</p>
```
5. Edit the component code to issue an HTTP call and subscribe to the result:

```TypeScript 
    import { Component, OnInit } from '@angular/core';

    import { Http } from '@angular/http';

    @Component({
        selector: 'app-reader',
        templateUrl: './reader.component.html',
        styleUrls: ['./reader.component.css']
    })
    export class ReaderComponent implements OnInit {

        public result: string;

        constructor(private http: Http) { }

        public loadFile(fileName: string): void {
            this.http.get('assets/' + fileName)
            .subscribe(result => this.result = result.text(), error => this.result = error);
        }

        ngOnInit() {
        }

    }
```
6. Add the component to `app.component.html` 

```html
    <app-reader></app-reader>
```

7. Compile and run and observe the difference between selecting the file that is there and the file that is not. 

## Debouncing 

1. For a more complex stream, paste the following text to `assets\sample.txt`: 

```
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rutrum ac nisi eget placerat. Nulla facilisi. Aliquam tristique ante sit amet dictum sollicitudin. Proin varius vehicula gravida. Fusce lectus metus, condimentum sed auctor in, dictum ac sem. Cras laoreet pulvinar nibh, sed luctus mi cursus sit amet. Praesent ultricies lobortis iaculis. Sed placerat lorem nec ultricies luctus. Donec quis dui faucibus ante egestas finibus. Nulla luctus tellus sed dapibus placerat. Mauris venenatis sollicitudin ornare. Cras dapibus, lectus eget consectetur dignissim, ipsum magna accumsan leo, ac volutpat lectus turpis ut nisl. Mauris quis justo nisl. Duis semper condimentum ullamcorper. Fusce tempus sapien id nunc dapibus, eget interdum arcu tristique.
```

2. Remove the button, and add an `input` tag to the top of the `reader\reader.component.html` markup: 

```html
    <input #filter type="text" placeholder="enter filter" 
        (keyup)="loadFile(filter.value, selection.options[selection.selectedIndex].id)"/>
```
    Update the default result text if you like.

3. Implement the function to filter words based on user input in `reader\reader.component.ts`: 

```TypeScript 
    public loadFile(filter: string, fileName: string): void {
        this.http.get('assets/' + fileName)
        .subscribe(result =>
            this.result = result.text().split(' ').filter(line => line.indexOf(filter) >= 0).join(' '),
            error => this.result = error);
    }
```

4. Notice that the filter is applied immediately as you type. Now we will update the stream to debounce so that we: 

    4a. Don't filter until the user pauses typing 
    
    4b. Don't filter duplicate requests 

    4c. Ensure results come back in order 

5. Simplify the input tag to this: 

```html
<input #filter type="text" placeholder="enter filter"/>
```

6. Update the `reader\reader.component.ts` to use observables to watch the input events, debounce, avoid duplicates, etc.: 

```TypeScript
    import { Component, ViewChild, ElementRef, AfterViewInit, ChangeDetectorRef } from '@angular/core';

    import { Http } from '@angular/http';

    import { Observable } from 'RxJs';
    import 'rxjs/add/operator/map';

    @Component({
        selector: 'app-reader',
        templateUrl: './reader.component.html',
        styleUrls: ['./reader.component.css']
    })
    export class ReaderComponent implements AfterViewInit {

        @ViewChild('filter')
        public inputElement: ElementRef;

        @ViewChild('selection')
        public selectElement: ElementRef;

        public result: string;

        constructor(private http: Http, private change: ChangeDetectorRef) { }

        public loadFile(filter: string, fileName: string): Observable<string> {
            return this.http.get('assets/' + fileName)
            .map(result => result.text().split(' ').filter(line => line.indexOf(filter) >= 0).join(' '));
        }

        ngAfterViewInit() {
            let select = this.selectElement.nativeElement as HTMLSelectElement;
            let input = this.inputElement.nativeElement as HTMLInputElement;
            let typing = Observable.fromEvent(input, 'keyup');
            typing.debounceTime(400).distinctUntilChanged().
            flatMap(filter => this.loadFile(input.value, select.options[select.selectedIndex].id))
            .subscribe(word => {
                this.result = word;
                this.change.detectChanges();
                }, err => this.result = err);
        }
    }
```

>Notice that because the result is updated from inside a subscription, Angular 2 won't know the model has mutated (it's outside of a zone) so we use the change detector to detect the changes. When you type, notice there is nothing happening until you pause. Then it will return the error message or the filtered words based on what you type. If you started typing in the error condition, refresh and select the good file to see the filter in action.

>You may receive warning messages "there are multiple modules with names that only differ in casing." This is a result of the libraries that are imported and can be safely ignored. 

## Polling 

1. You can create streams that poll on a regular interval. Create a service to return the current date `ng g service get-date`

2. Register the service in `app.module.ts` by importing it and listing it in the `Providers` declaration 

3. Place this code in `get-date.service.ts`:

```TypeScript 
    import { Injectable } from '@angular/core';
    import { Observable } from 'RxJs';

    @Injectable()
    export class GetDateService {

        constructor() { }

        public getDate(): Observable<Date> {
            return Observable.from([new Date()]);
        }

    }
```
4. Import the date service into `reader\reader.component.ts`: 

```TypeScript 
import { GetDateService } from '../get-date.service';
```
5. Expose an array for dates and inject the date service into the constructor: 

```TypeScript 
    public dates: Date[] = [];
    constructor(private http: Http, private change: ChangeDetectorRef, private svc: GetDateService) { }
```

6. Add the following code to poll to the end of the `ngAfterViewInit` method. This will poll the date service every second, and stop after 10 polls. You can remove the `take` statement to continuously poll, and just as easily change the service to an http call instead of a date service call for real world scenarios. 

```TypeScript
    Observable.interval(1000).switchMap(() => this.svc.getDate())
        .take(10)
        .subscribe(date => this.dates.push(date));
```

7. Update `reader\reader.component.html` to show the time portion of the dates (add this to the end): 

```html
    <h2>Times</h2>
    <span *ngFor="let date of dates">{{date | date:'mm:ss'}}&nbsp;</span>
```

Refresh to watch the times scroll across every second and stop at 10 entries, and the ponder the amazing possibilities! Note you can also run your filter simultaneously without issue.
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css'
})


export class Counter {

  counter = signal(0)

  Increment(){
    this.counter.update((value)=> value+1)
  }

  Decrement(){
    this.counter.update((value)=> value-1)
  }

  Reset(){
    this.counter.set(0)
  }
}

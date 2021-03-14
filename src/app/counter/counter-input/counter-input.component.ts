import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { changechannel, customIncrement, decrement, increment, reset } from '../state/counter.action';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-counter-input',
  templateUrl: './counter-input.component.html',
  styleUrls: ['./counter-input.component.css']
})
export class CounterInputComponent implements OnInit {
  value:number;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  onIncrement() {
    this.store.dispatch(increment())
  }
  onDecrement() {
    this.store.dispatch(decrement())
  }
  onReset() {
    this.store.dispatch(reset())
  }

  onAdd() {
    this.store.dispatch(customIncrement({value: +this.value}))
  }
  changeChannel() {
    this.store.dispatch(changechannel())
  }

}

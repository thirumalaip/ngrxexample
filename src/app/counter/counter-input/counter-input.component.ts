import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter-input',
  templateUrl: './counter-input.component.html',
  styleUrls: ['./counter-input.component.css']
})
export class CounterInputComponent implements OnInit {
  @Output() increment = new EventEmitter<void>();
  @Output() decrement = new EventEmitter<void>();
  @Output() reset = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onIncrement() {
    this.increment.emit();
  }
  onDecrement() {
    this.decrement.emit();
  }
  onReset() {
    this.reset.emit();
  }

}

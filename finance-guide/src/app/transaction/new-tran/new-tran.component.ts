import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-tran',
  templateUrl: './new-tran.component.html',
  styleUrls: ['./new-tran.component.css']
})
export class NewTranComponent implements OnInit {
  @Output() confirmTransacation = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }

  onConfirmTransacation() {
    this.confirmTransacation.emit();
  }
}

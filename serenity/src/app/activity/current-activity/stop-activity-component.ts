import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA} from '@angular/material';

@Component({
    selector: 'app-stop-activity',
    template: `<h1 mat-dialog-title>Are you sure?</h1>
                <mat-dialog-content>
                <p> You are {{ passedData.progress }}% complete, keep going!</p>
                <p> <i> Progress will not be saved unless completed </i></p>
                </mat-dialog-content>
                <mat-dialog-actions>
                <button mat-button [mat-dialog-close]="false">Continue</button>
                <button mat-button [mat-dialog-close]="true">Exit</button>
                <mat-dialog-actions>`
})

export class StopActivityComponent {
    constructor(@Inject(MAT_DIALOG_DATA) private passedData: any) {}
}


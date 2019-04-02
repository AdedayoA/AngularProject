import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatChipsModule, MatInputModule, MatFormFieldModule, MatDatepickerModule, MatNativeDateModule, MatCheckboxModule, MatSidenavModule, MatToolbarModule, MatListModule, MatTabsModule, MatCardModule, MatSelectModule, MatProgressSpinnerModule } from '@angular/material';

@NgModule({
	imports: [MatButtonModule, MatIconModule, MatChipsModule, MatInputModule, MatFormFieldModule, MatDatepickerModule, MatNativeDateModule, MatCheckboxModule, MatSidenavModule, MatToolbarModule, MatListModule, MatTabsModule, MatCardModule, MatSelectModule, MatProgressSpinnerModule],
	exports: [MatButtonModule, MatIconModule, MatChipsModule, MatInputModule, MatFormFieldModule, MatDatepickerModule, MatNativeDateModule, MatCheckboxModule, MatSidenavModule, MatToolbarModule, MatListModule, MatTabsModule, MatCardModule, MatSelectModule, MatProgressSpinnerModule]

})
export class MaterialModule { }

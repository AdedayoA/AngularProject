import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatChipsModule, MatInputModule, MatFormFieldModule, MatDatepickerModule, MatNativeDateModule, MatCheckboxModule, MatSidenavModule} from '@angular/material';

@NgModule({
	imports: [MatButtonModule, MatIconModule, MatChipsModule, MatInputModule, MatFormFieldModule, MatDatepickerModule, MatNativeDateModule, MatCheckboxModule, MatSidenavModule],
	exports: [MatButtonModule, MatIconModule, MatChipsModule, MatInputModule, MatFormFieldModule, MatDatepickerModule, MatNativeDateModule, MatCheckboxModule, MatSidenavModule]

})
export class MaterialModule {}

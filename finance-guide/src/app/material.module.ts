import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatChipsModule } from '@angular/material';

@NgModule({
	imports: [MatButtonModule, MatIconModule, MatChipsModule],
	exports: [MatButtonModule, MatIconModule, MatChipsModule]

})
export class MaterialModule {}

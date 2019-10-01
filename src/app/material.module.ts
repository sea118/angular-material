import {NgModule} from '@angular/core';

import {
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
    MatSelectModule,
    MatSidenavModule,
    MatTableModule
} from '@angular/material';
@NgModule({
    imports: [
        MatButtonModule,
        MatCardModule,
        MatToolbarModule,
        MatInputModule,
        MatSelectModule,
        MatSidenavModule,
        MatTableModule
    ],
    exports: [
        MatButtonModule,
        MatCardModule,
        MatToolbarModule,
        MatInputModule,
        MatSelectModule,
        MatSidenavModule,
        MatTableModule
    ]
})

export class MaterialModule{}
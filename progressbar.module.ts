/*
* @Author: Gabriel Lucena
* @Date:   2018-01-10 18:32:45
* @Last Modified by:   Gabriel Lucena
* @Last Modified time: 2018-01-10 18:32:45
*/
import { NgModule } from '@angular/core';

// Directive
import { ProgressBarDirective } from './progressbar.directive';


@NgModule({
    declarations: [
        ProgressBarDirective
    ],
    exports: [
        // exporting root module
        ProgressBarDirective
    ]
})
export class ProgressBarModule {}

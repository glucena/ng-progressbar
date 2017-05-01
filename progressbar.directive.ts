/*
* @Author: Gabriel Lucena
* @Date:   2017-05-01 10:15:34
* @Last Modified by:   gabriel
* @Last Modified time: 2017-05-01 10:16:59
*/

import { Directive, ElementRef, Input, OnInit } from '@angular/core';

declare var ProgressBar: any;

@Directive({
    selector: '[progressBar]'
})
export class ProgressBarDirective implements OnInit {
    constructor(elem: ElementRef) {
        this.elem = elem.nativeElement;
    }

    elem: any;

    @Input('progressBar') barType: string;
    @Input() progressBarColor: string;
    @Input() progressBarTrailColor: string;
    @Input() progressBarTrailwidth: string;
    @Input() progressBarStrokewidth: string;
    @Input() progressBarFrom: Object;
    @Input() progressBarTo: Object;
    @Input() progressBarValue: string;
    @Input() progressBarEasing: string;
    @Input() progressBarDuration: string;

    progressbarConfig( ) {
        return {
            value: (typeof this.progressBarValue != "undefined") ? parseFloat(this.progressBarValue) : 1,
            progressbar: (typeof this.barType != "undefined") ? this.barType : 'circle',
            color: (typeof this.progressBarColor != "undefined") ? this.progressBarColor : '#fff',
            strokeWidth: (typeof this.progressBarStrokewidth != "undefined") ? parseInt(this.progressBarStrokewidth) : 4,
            trailWidth: (typeof this.progressBarTrailwidth != "undefined") ? parseFloat(this.progressBarTrailwidth) : 1,
            trailColor: (typeof this.progressBarTrailColor != "undefined") ? this.progressBarTrailColor : '#f4f4f4',
            easing: (typeof this.progressBarEasing != "undefined") ? this.progressBarEasing : 'easeInOut',
            duration: (typeof this.progressBarDuration != "undefined") ? parseInt(this.progressBarDuration) : 1400,
            text: {
                autoStyleContainer: false
            },
            from: (typeof this.progressBarFrom != "undefined") ? this.progressBarFrom : { color: '#aaa', width: 1 },
            to: (typeof this.progressBarTo != "undefined") ? this.progressBarTo : { color: '#333', width: 4 },
            // Set default step function for all animate calls
            step: function(state, circle) {
                circle.path.setAttribute('stroke', state.color);
                circle.path.setAttribute('stroke-width', state.width);

                var value = Math.round(circle.value() * 100);
                if (value === 0) {
                    circle.setText('');
                } else {
                    circle.setText(value + '%');
                }
            }
        };
    };

    ngOnInit() {
        let config = this.progressbarConfig();

        switch (this.barType) {
            case 'line':
                this.elem = new ProgressBar.Line(this.elem, config);
                break;
            case 'circle':
                this.elem = new ProgressBar.Circle(this.elem, config);
                break;
            case 'semicircle':
                this.elem = new ProgressBar.SemiCircle(this.elem, config);
                break;
        }
        this.elem.animate(config.value);
    }
}
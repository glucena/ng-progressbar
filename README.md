# Progressbar directive

Diretive to use [Progress Bar JS](https://kimmobrunfeldt.github.io/progressbar.js/) in angular apps.

## Usage
Install the progressbar library
```
npm install progressbar.js
```

Add the library to the angular-cli 

```json
      ...
      "scripts": [
        "../node_modules/progressbar.js/dist/progressbar.min.js",
        ...
      ],
      ...
```

Put the directive somewhere in your app and import the directive into the module

```typescript
import { ProgressBarDirective } from './directives/progressbar.directive';


@NgModule({
    declarations: [,
        ProgressBarDirective,
        ...
    ],
    ...
    exports: [
        MyModule
    ]
})
export class MyModule {}
```

And use it in the HTML as follow

```html
<div id="circularProgressBar"
     [progressBar]="'circle'"
     [progressBarColor]="'#fff'"
     [progressBarTrailColor]="'#fff'"
     [progressBarFrom]='{"color": "#3498db", "width": 4}'
     [progressBarTo]='{"color": "#ffd200", "width": 4}'
     [progressBarValue]="42">
</div>

```

# Progress bar parameters

| Name | Description
| --- | ---
progressBar | The bar type. Could be circle, semicircle or line
progressBarColor | The bar color
progressBarTrailColor | 
progressBarTrailwidth | 
progressBarStrokewidth | Stronke width
progressBarFrom | Progress bar initial color 
progressBarTo | Progress bar final color
progressBarValue | The progress bar value
progressBarEasing | Easing function: linear, easeIn, easeOut, easeInOut

progressBarDuration | Animation duration
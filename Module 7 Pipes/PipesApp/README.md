# Pipes

- Pipes is a feature built into Angular 2 to transform output in a template
- There are 2 types of Pipes
- built-in pipes => you can use them to transform your output
  - Example: You want to present the user name uppercased without manipulate it with TS code in the component, and once at the presentation

```{html}
   <p>{{UserName | UpperCase}} </p>
```

- Parametrized Pipes can called by column

```{html}
// 1 parameter
{{ server.started  |date :"fullDate"}}
// Multi params
{{ array | slice:1:4}}
```

- Chaining Multible Pipes, the pipes works from left to write so take care about the arrangements

```{html}
{{ server.started  |date :"fullDate" |uppercase}} // true as the date pipes the Date to a string and the uppercase pipes a string
{{ server.started |uppercase |date :"fullDate" }} // fdlse as the Date type is not a string
```

- Custom Pipes => which developer Generate
  - first creating a class that implement the interface of `PipeTransform` from `@angular/core` module, this will can make you override a function of transform that take the value provided to return it in a custom way
  - Imagine a box for data and you need to custom the quantity of  11 characters 

```{Ts}
import {PipeTransform, Pipe} from '@angular/core'

@Pipe({
  'name': 'shorten'
})
export class ShortenPipe implements PipeTransform{

  transform(value: any) {
    return value.substr(0,10);
  }

}
```
- We must add a special decorator of `Pipe` to give a name to our pipe to consume
- Declare the pipe in our Declared Modules in `app.module.ts`
```{Ts}
@NgModule({
  declarations: [

    AppComponent,
    ShortenPipe // Declaring Pipe
  ],
  imports: [

    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
```
- then we can consume it in our app
```{Html}
 <strong>{{ server.name |uppercase| shorten }}</strong>
```

# Data binding

> is a core concept in Angular and allows to define communication between a __component and the DOM__ , making it very easy to define interactive applications __without worrying about pushing and pulling data.__

- There are four forms of data binding and they differ in the way the data is flowing.

  - Interpolation: __{{ value }}__
    > This adds the value of a property from the component:
    ```
    <li>Name: {{ user.name }}</li>
    <li>Email: {{ user.email }}</li>
    ```

  - Property binding: [property]=”value”
     > With property binding, the value is passed from the component to the specified property, which can often be a simple html attribute:

     ```
      <input type="email" [value]="user.email">
    ```

    - Here are two more examples, one that applies a background-color from the value of selectedColor in the component and one that applies a class name if isSelected evaluates to true:

```
<div [style.background-color]="selectedColor">

<div [class.selected]="isSelected">
```

## Some Characteristics:
 -  the event for dom start internaly then externally div>btn => btn event first then div event
 -  if you need to use the specified event without execution of another event use __$event.stopPropagation()__
 

# js-observer

simple observer class in JavaScript


## Install

```
$npm install js-observer
```

## Usage

```
import Observer from 'js-observer';
let onComplete = new Observer;

//add
onComplete.add( () => {
  console.log( `onComplate1` );
}, this);

//emit
onComplate.emit(); //onComplate1

let myFunc = () => {
  console.log( `onComplate2` );
}

//add
onComplete.add( myFunc, this );

//emit
onComplate.emit(); //onComplate1, onComplate2

//remove Observer
onComplate.remove( myFunc, this );

//emit
onComplate.emit(); //onComplate1


//remove All
onComplate.removeAll();

//emit
onComplate.emit();
```

## License
© 2015 ingpdw. MIT License

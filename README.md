LocalStorageWrapper
===================

Wrapper for HTML5 localStorage

The LocalStorageWrapper JavaScript class provides a unified interface over HTML5's localStorage API, ensuring that multiple applications can use the local storage without messing up their data. 

In case your browser is not supporting the localStorage functionality an Error will be thrown, so you can handle it accordingly.

Every key/value pair which is saved has a prefix associated to it, so in this way the values used by different applications are not mixed up.

# Methods

## LocalStorageWrapper(applicationPrefix)
The parameter `applicationPrefix` is mandatory. Returns an object which has the following methods defined.

Usage: `var myStorage = new LocalStorageWrapper('myApplication');`

## addItem(key, value)
This method saves the key/value pair to the localStorage. The `key` is prefixed with the `applicationPrefix` specified in the constructor.

Usage: 

    var myStorage = new LocalStorageWrapper('storageTester');
    myStorage.addItem('storageValue1','This is the first value of the storageTester.');
    myStorage.addItem('storageValue2','{Name:"John Doe", Age:"37", Hobbies:['dancing', 'reading', 'swimming']}');


## getImte(key)
Returns the value associated to the specified `key` value in the parameter. If there is no value associated to this key, the method will return null.

Usage:

    var val1 = myStorage.getItem('storageValue1'); //val1 will have the value "This is the first value of the storageTester."
    var val2 = myStorage.getItem(123); //val2 will be null, because there has been no value saved for key '123'.

## getAllKeys()
Returns an array with all the keys associated to the current application. If there were no key/values saved for this application an empty array will be returned.

Usage:

    var keys = myStorage.getAllKeys(); // keys = ['storageValue1', 'storageValue2']

## removeItem(key)
Removes the value associated to a key from the localStorage.

Usage:

    myStorage.removeItem('storageValue1');


## removeAll()
Removes every value from the localStorage associated to the current application.

Usage:

    myStorage.removeAll();


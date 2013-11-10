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

## getAllKeys()

## removeItem(key)

## removeAll()


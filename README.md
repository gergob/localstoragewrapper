localstoragewrapper
===================

Wrapper for HTML5 localStorage

The LocalStorageWrapper JavaScript class provides a unified interface over HTML5's localStorage API, ensuring that multiple applications can use the local storage without messing up their data.

Every key/value pair which is saved has a prefix associated to it, so in this way the values used by different applications are not mixed up.

# Methods

## LocalStorageWrapper(applicationPrefix)
The parameter `applicationPrefix` is mandatory. Returns an object which has the following methods defined.

## addItem(key, value)

## getImte(key)

## getAllKeys()

## removeItem(key)

## removeAll()


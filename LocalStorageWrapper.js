//
//  Creates an object which gives some helper methods to 
//  Save/Load/Remove data to/from the localStorage 
//
function LocalStorageWrapper (applicationPrefix) {
    "use strict";

    if(applicationPrefix == undefined) {
        throw new Error('applicationPrefix parameter should be defined');
    }    

    var delimiter = '_';

    //if the passed in value for prefix is not string, it should be converted
    var keyPrefix = typeof(applicationPrefix) === 'string' ? applicationPrefix : JSON.stringify(applicationPrefix);    

    var isLocalStorageAvailable = function() {
        return typeof(window.Storage) != undefined
    }
    
    var getKeyPrefix = function() {
        return keyPrefix;
    }

    //
    //  validates if there is a prefix defined for the keys
    //  and checks if the localStorage functionality is available or not
    //
    var makeChecks = function(key) {
        var prefix = getKeyPrefix();
        if(prefix == undefined) {
            throw new Error('No prefix was defined, data cannot be saved');
        }
        
        if(!isLocalStorageAvailable()) {
            throw new Error('LocalStorage is not supported by your browser, data cannot be saved');
        }
    
        //keys are always strings
        var checkedKey = typeof(key) === 'string' ? key : JSON.stringify(key);
        
        return checkedKey;
    }

    //
    //  saves the value associated to the key into the localStorage
    //
    var addItem = function(key, value) {
        var that = this;
        try{
            var checkedKey = makeChecks(key);
            var combinedKey = that.getKeyPrefix() + delimiter + checkedKey;            
            window.localStorage.setItem(combinedKey, JSON.stringify(value));            
        }
        catch(error) {
            console.log(error);
            throw error;
        }
    }

    //
    //  gets the value of the object saved to the key passed as parameter 
    //
    var getItem = function(key) {
        var that = this;
        var result = undefined;
        try{
            var checkedKey = makeChecks(key);
            var combinedKey = that.getKeyPrefix() + delimiter + checkedKey;            
            var resultAsJSON = window.localStorage.getItem(combinedKey);            
            result = JSON.parse(resultAsJSON);
        }
        catch(error) {
            console.log(error);
            throw error;
        }
        return result;
    }

    //
    //  returns all the keys from the localStorage
    //
    var getAllKeys = function() {
        var prefix = getKeyPrefix();
        var results = [];        
        
        if(prefix == undefined) {
            throw new Error('No prefix was defined, data cannot be saved');
        }
        
        if(!isLocalStorageAvailable()) {
            throw new Error('LocalStorage is not supported by your browser, data cannot be saved');
        }        

        for(var key in window.localStorage) {
            if(key.indexOf(prefix) == 0) {
                var keyParts = key.split(delimiter);
                results.push(keyParts[1]);
            }
        }
    
        return results;
    }

    //
    //  removes the value associated to the key from the localStorage
    //
    var removeItem = function(key) {
        var that = this;
        var result = false;
        try{
            var checkedKey = makeChecks(key);
            var combinedKey = that.getKeyPrefix() + delimiter + checkedKey;            
            window.localStorage.removeItem(combinedKey);            
            result = true;
        }
        catch(error) {
            console.log(error);
            throw error;
        }
        return result;
    }

    //
    //  removes all the values from the localStorage
    //
    var removeAll = function() {
        var that = this;

        try{
            var allKeys = that.getAllKeys();
            for(var i=0; i < allKeys.length; ++i) {
                var checkedKey = makeChecks(allKeys[i]);
                var combinedKey = that.getKeyPrefix() + delimiter + checkedKey;
                window.localStorage.removeItem(combinedKey);
            }
        }
        catch(error) {
            console.log(error);
            throw error;
        }
    }

    // make some of the functionalities public
    return {
        isLocalStorageAvailable : isLocalStorageAvailable,
        getKeyPrefix : getKeyPrefix,
        addItem : addItem,
        getItem : getItem,
        getAllKeys : getAllKeys,
        removeItem : removeItem,
        removeAll : removeAll
    }
};

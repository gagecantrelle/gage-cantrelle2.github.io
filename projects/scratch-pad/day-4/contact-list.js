// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
    //creat an empty object and then assign it a key of id that equal the given id, a key of namefrist that equal the given namefrist, and a key of namelast that equal the given namelast  
var obj = {};
obj.id = id;
obj.nameFirst = nameFirst;
obj.nameLast = nameLast;

// the created object
return obj;
} 

//make a function call makecontactlist
function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];
    
    return {
        // we implemented the length api for you //
        length: function() {
            //return contacts length
            return contacts.length;
        },
        //creat a function that take in a contact paramter
        addContact: function(contact){
            //push the given contact paramter in to the contacts array
            contacts.push(contact);
        },
        //creat a function that thake in a paramter called fullname
        findContact: function(fullName){
            //creat a varaibal that will hold mutiple strings from the given paramter fullName
            var arr = fullName.split(' ');
            //loop through the contacts array
            for(let i = 0; i <= contacts.length; i++){
                //check if the curent value in contacts namefirst key is equalt to the frist string in arr and if the curent value in contacts namelast key is equalt to the second string in arr
               if(contacts[i].nameFirst === arr[0] && contacts[i].nameLast === arr[1]){
                //return the curent value in contacts
               return contacts[i];
               //run if false
               }else{
                //return undefind
                return undefined;
               }
            }
        },
        //creat a function that take in a paramter called contact
        removeContact: function(contact){
            //remove a value for the contacts array that equal the given paramter contact
            contacts.pop(contact);
        },
        //creat a function
        printAllContactNames: function(){
            //creat a empty string
        var str = '';
        //loop through the contacts array
        for(let i = 0; i < contacts.length; i++){
            //set str to equal to the curent value in contacts nameFrist and nameLast + a newline
            str += contacts[i].nameFirst + ' ' + contacts[i].nameLast + '\n';
        }
        //remove the last newline from str when loop is done 
         str = str.slice(0, -1);
       //return str
       return str;
        }
    }
}




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}

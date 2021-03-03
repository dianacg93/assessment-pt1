/**
 * 1. Why does React utilize the virtual-dom?
 * React utilizes the virtual dom to paint the changes it does to an application, fro mthere the virtual dom, takes this changes and updates the browser dom to reflect the changes in the screen. This process happens really fast.
 * 
 * 2a How is data flowed in React? 2b. Why is React architected this way?
 * As React is a SPA (Single Page Application), it only has one element-- most commmonly a div-- the root element which is connected to the html file. From this element, we use JSX to load dynamic information into our component. It is also important to provide structure to our React project as the larger it grows, the more complexity we have to deal with. 
 * 
 * 3. What is the purpose for lifting state up in React? Give an example of this
 * When we have different components that may display the same information, it is important to keep our code DRY. A way to do this is by lifting state up to the components' parent or closest common ancestor. By doing so, we can pass state as props and can be used in multiple components.
 * 
 * 4. Why would a startup be interested in applying React-Routing to a project? Explain in detail.
 * 
 * 5. Can browsers read JSX? Why?
 * The languages of the browser are three: HTML, CSS and JS, therefore it cannot read JSX. The reason being that browsers dont have the implementation for the browsers to read and understand it. React makes use of Babel to compile JSX into vanilla JS and HTML for the browser to understand. 
 * 
 * 6. What is the significance of keys in React? 
 * Keys are really important in React when dealing with lists. When a list item is given a key, it helps React identify which item may need to be changed, added or removed. Without a key, you can still manipulate a list based on its items index, yet it is not recommended. 
 * 
 * 7. What is the difference between Props and State?
 * State is mutable and belongs to a component - cannot be passed from one component to another. 
 * Props are immutable and can be passed to other components as data that can be displayed.
 * 
 * 8. Examine the code below: In relation to React, explain what is occurring, and why it’s significant. 
    Babel Input: ES2015 arrow function
    [1, 2, 3].map( n => n + 1 )
 
    Babel Output: ES5 equivalent
    [1,2,3].map(function(n) {
    Return n + 1;
    })
 * 
 * Babel is compiling the arrow function and transforming it to the ES6 syntax to its ES5 equivalent. 
 * This is important because certain browser versions may not be able to read ES6 syntax, so Babel allows for the JS logic to work in most if not all browsers.
 * 
 */

// 9. Given an array of strings, names, return a new array with each name properly capitalized. Must use .map() 
// Show 3 test runs, with at least 2 edge cases. 

function properNames(names) {
    return names.map((el) => {
        return el.substring(0, 1).toUpperCase() + el.substring(1).toLowerCase();
    })
}

const names1 = ["jake", "may", "duke", "pete", "michael"]
const names2 = ["JAKE", "MAY", "DUKE", "PETE", "MICHAEL"]
const names3 = ["JakE", "maY", "dUKE", "Pete", "michAel"]
console.log (properNames(names3))

// 10. Given an array of strings, return a new array that only includes those that are 6 characters or fewer in length. Must use .filter()
// Show 3 test runs, with at least 2 edge cases. 

function smallWordsOnly(arr) {
    return arr.filter(el => el.length < 7)
}

const arrOfStr1 = ["abc", "abcdefg", "abcdefghijk", "aa"]
const arrOfStr2 = ["aaabbb", "dog", "duckling"]
const arrOfStr3 = ["triple", "outstanding", "coverage", "test"]
console.log(smallWordsOnly(arrOfStr3))
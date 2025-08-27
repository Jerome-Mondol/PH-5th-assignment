Q1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
=> By using getElementById we can get element by it's id. By using getElementsByClassName we can get element by class name. By using querySelector we can get elem by both classname and id and by using querySelectorAll we get all elems of the same classname or tag name whatever we want, then we can perform loop to iterate through each elem. So the main differnce is the selection part.


Q2. How do you create and insert a new element into the DOM?
=> to create a new element we have to do document.createElement('the element we want to create') and then if we want to insert it in DOM we have to insert it to the parent with using appendChil().


Q3. What is Event Bubbling and how does it work?
=> When we create 2 event listener in 1 place then its called event bubbline if we have a parent div and a child div and we add Event listener to the child and the parent then its bubbling and it works like this :- When click on the child elem the parent is a also getting clicked so we can to something like this that when we click on a btn it clicks on the parent and check if the user is registered or not.

Q4. What is Event Delegation in JavaScript? Why is it useful?
=> Attaching a event listener on the parent rather than all the child is called event delegation. It is much more efficient that using event listener for each and every child elem.

Q5. What is the difference between preventDefault() and stopPropagation() methods?
=> preventDefault() this prevents the website from refresing when any event is performed and stopPropagation() this stops bubbling.

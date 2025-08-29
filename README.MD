# JavaScript DOM Methods & Event Handling

## 1. What is the difference between `getElementById`, `getElementsByClassName`, and `querySelector` / `querySelectorAll`?

- **getElementById** returns only one element by its unique ID.
- **getElementsByClassName** returns all elements with a specific class name and you get a live HTMLCollection.
- **querySelector**: Selects the first element that is a match to the provided CSS selector.
- **querySelectorAll**: Matches all elements of the specified CSS selector, and returns a static NodeList.

## 2. How do you create and insert a new element into the DOM?

If you’d like to create a new DOM element and insert it to the DOM, you may use `document.createElement()` and attach it to the parent element using `appendChild()` or `insertBefore()`.

## 3. What is Event Bubbling and how does it work?

Event Bubbling is the way the event moves through the target element up, taking into consideration its ancestors in the DOM. It permits a parent element to trigger an event on its children.

## 4. What is Event Delegation?

Event Delegation is a process by which you assign a single event listener to a parent instead of its children to react to events. It optimizes your code and is truly effective, especially for dynamically added elements.

## 5. What is the difference between `preventDefault()` and `stopPropagation()` methods?

- `preventDefault()` cancels the default action of an event (such as a form submission or a link navigation).
- `stopPropagation()` will stop the event from bubbling through the DOM (either upwards, or downwards in the tree).

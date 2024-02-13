'use strict';
const $ul = document.querySelector('ul');
// don't forget to throw and error if query fails
if (!$ul) throw new Error('$ul query failed');
// addEventListener to parent element
// doing this will allow code to be reusable and less repeating code
// listen for click event
$ul.addEventListener('click', (event) => {
  // assign variable to value created by user input that fires event
  // use type assertion to tell code your variable value is an html element
  const $eventTarget = event.target;
  console.log('eventTarget:', $eventTarget);
  // this will allow the tagName property to be used
  // we want to use the tagName property because it will allow us to find the tag name of an element
  // in this case, we want the tag name of the element that fired the event
  console.log('eventTarget.tagName:', $eventTarget.tagName);
  // now we want the loop to end if the tag name of our click event is NOT button
  // all caps for historical reasons
  if ($eventTarget.tagName !== 'BUTTON') {
    return;
  }
  // use the closest method to find the parent of the inputed css selector
  const $taskListItem = $eventTarget.closest('.task-list-item');
  // remove the element that fired the event
  console.log('closest.task-list-item', $taskListItem);
  $taskListItem?.remove();
});

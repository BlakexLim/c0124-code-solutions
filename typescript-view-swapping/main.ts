// query the DOM to obtain references to tab-container
const $tabContainer = document.querySelector('.tab-container');
// query the DOM for a NodeList of ALL tab elements
const $tab = document.querySelectorAll('.tab');
// query the DOM for a NodeList of ALL view elements
const $view = document.querySelectorAll('.view');

if (!$tabContainer) throw new Error('$tabContainer query failed');

// add an event listener to the tabContainer variable listening for a click event to enable interaction
$tabContainer.addEventListener('click', (e: Event) => {
  // assign event.target to a variable that utilizes type assertion to give it a type of HTMLDivElement
  const $eventTarget = e.target as HTMLDivElement;
  // step 8: get value of data-view attribute of $eventTarget and put in variable
  const dataView = $eventTarget.getAttribute('data-view');
  // check if $eventTarget is being fired
  // the matches() method of the element interface checks if the element would be selected by the CSS selector, then returns a boolean value
  if ($eventTarget.matches('.tab')) {
    // loop through the .tab node list and compare them to $eventTarget
    for (let i = 0; i < $tab.length; i++) {
      if ($tab[i] === $eventTarget) {
        // elements that equals the $eventTarget will have its class updated to make it .active
        $eventTarget.className = 'tab active';
        // all others should not be made .active
      } else {
        $tab[i].className = 'tab';
      }
    }
    // loop through the .view node list and compare their attributes to the eventTarget attributes (assigned to dataView)
    for (let i = 0; i < $view.length; i++) {
      if (dataView === $view[i].getAttribute('data-view')) {
        $view[i].className = 'view';
      } else {
        $view[i].className = 'view hidden';
      }
    }
  }
});

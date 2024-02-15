// create an interface
interface FormElements extends HTMLFormControlsCollection {
  name: HTMLInputElement;
  email: HTMLInputElement;
  message: HTMLTextAreaElement;
}
// use type assertion to tell js that these are going to be HTMLFormElements
// using type assertion, you're getting rid of the possibility of it being null
// also, reset property does not exist on element, so HTMLFormELement is needed
const $form = document.querySelector('#contact-form') as HTMLFormElement;

// add an event listener for variable with the data we query from document page
$form.addEventListener('submit', (event: Event) => {
  event.preventDefault();

  const $formElements = $form.elements as FormElements;
  // declare variables to hold each input data
  const name = $formElements.name.value;
  const email = $formElements.email.value;
  const message = $formElements.message.value;

  // create an object to hold the input data to be sent off to database, or in our case, console.log to see the data
  const data = {
    name,
    email,
    message,
  };
  console.log('data:', data);
  // reset the form after form is submitted
  $form.reset();
});

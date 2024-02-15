'use strict';
const $name = document.querySelector('#user-name');
const $email = document.querySelector('#user-email');
const $textArea = document.querySelector('#user-message');
if (!$name) throw new Error('$name query has failed');
if (!$email) throw new Error('$email query has failed');
if (!$textArea) throw new Error('$textArea query has failed');
function handleFocus(event) {
  console.log(event, 'was fired');
  const eventTarget = event.target || HTMLTextAreaElement;
  console.log('eventTarget:', eventTarget.name);
}
function handleBlur(event) {
  console.log(event, 'was fired');
  const eventTarget = event.target || HTMLTextAreaElement;
  console.log('eventTarget:', eventTarget.name);
}
function handleInput(event) {
  const eventTarget = event.target || HTMLTextAreaElement;
  console.log(
    'eventTarget:',
    eventTarget.name,
    'eventTarget value:',
    eventTarget.value
  );
}
$name.addEventListener('focus', handleFocus);
$name.addEventListener('blur', handleBlur);
$name.addEventListener('input', handleInput);
$email.addEventListener('focus', handleFocus);
$email.addEventListener('blur', handleBlur);
$email.addEventListener('input', handleInput);
$textArea.addEventListener('focus', handleFocus);
$textArea.addEventListener('blur', handleBlur);
$textArea.addEventListener('input', handleInput);

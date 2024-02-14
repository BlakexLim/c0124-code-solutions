'use strict';
function handleClick(event) {
  console.log('button clicked');
  console.log('event', event);
  console.log('event.target', event.target);
}
const $clickButton = document.querySelector('.click-button');
if (!$clickButton) throw new Error('The $clickButton query failed');
$clickButton.addEventListener('click', handleClick);
function handleMouseOver(event) {
  console.log('button hovered');
  console.log('event:', event);
  console.log('event.target', event.target);
}
const $mouseOver = document.querySelector('.hover-button');
if (!$mouseOver) throw new Error('The $mouseOver query failed');
$mouseOver.addEventListener('mouseover', handleMouseOver);
function handleDoubleClickButton(event) {
  console.log('button double-clicked');
  console.log('event:', event);
  console.log('event.target', event.target);
}
const $doubleClickButton = document.querySelector('.double-click-button');
if (!$doubleClickButton) throw new Error('The $doubleClickButton query failed');
$doubleClickButton.addEventListener('dblclick', handleDoubleClickButton);

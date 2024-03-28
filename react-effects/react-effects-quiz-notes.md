# react-effects-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- When is a component "mounted" to the DOM?
  When running a timer or when retrieving data from an api/database.
- What is a React Effect?
  It is a hook that fetches data asynchronously.
  Effects lets you run some code after rendering so that you can sync your component with some system outside of React.
  Lets you specify side effects that are caused by rendering itself, rather than by an event.
  ie. sending a message is an event because it is caused by user clicking a button, setting up a server connection is an 'EFFECT'
- When should you use an Effect and when should you not use an Effect?
  Use when you want to step out of React and sync with some external system, like when getting data from an api, widgets, network.
  We might not need an effect when it just adjusts states based on another state.
- When do Effects run?
  Effects run at the end of a commit, after the screen updates.
- What function is used to declare an Effect?
  Import `useEffect` Hook from React and call it at the top level of your component.
  Call it at the top level of your function.
- What are Effect dependencies and how do you declare them?
  By default, Effects run after every render, we do NOT want this.
  Sometimes it's slow, Synchronizing with an external system is not always instant, so we might want to skip doing it unless it's necessary.
  ie. we don;t want to reconnect to the chat server on every keystroke.
  \*By specifying an array of dependencies as the second argument, we can skip unnecessarily re-running Effects.
  ** useEffect(() => {
  //...
  }, []) **
  The dependency will tell React that it should skip re-running your effect if your prop is the same as it was during the previous render.
- Why would you want to clean up from an Effect?
  When you don't want your code to re-mount if it was never unmounted in the first place.
  You want to mount, unmount, and mount.
- How do you clean up from an Effect?
  Return a cleanup function inside your Effect.
- When does the cleanup function run?
  Each time before the Effect runs, and one final time when the component unmounts (gets removed).

## Notes

All student notes should be written here.

- Two reasons for a component to render
  - It's the component's initial render.
  - The component's state has been updated.
- Two types of logic inside React components
  - Rendering code: lives at the top level of my component, this is where I take props and state, transform them, and return the JSX I see on the screen
    - Rendering should only calculate results, nothing else.
  - Event handlers: are nested functions inside my components that do things rather than just calculate.
    - Event handlers may update input fields, submit an HTTP POST request to buy a product, or navigate the user to another screen.
    - Contains 'side effects', they change the program's state caused by a specific user action.
- `useEffect` delays a piece of code from running until that render is reflected on the screen.

* EXAMPLE:
  - <VideoPlayer> React component
  - We want to control when the video is playing and when the video is paused. -<VideoPlayer> will render a built in <video> tag.
  - However <video> does not have an `isPlaying` prop, we must manually call the `play()` `pause()` methods on the DOM elements.
  - We need to sync the value of `isPlaying` prop, which tells whether the video should be playing or not.
  - First we need a ref to the <video> DOM node.
  - You might be tempted to try to call `play()` `pause()` during rendering, but don't.
  - That code is incorrect because it tries to do something with the DOM node during rendering.
  - `Rendering should be pure calculation` of JSX and should not contain side effects like modifying the DOM.
  - When <VideoPlayer> is called for the first time, its DOM does not even exist yet.
  - There is no DOM node yet to call `play()` `pause` because React doesnt know what DOM to create until JSX is returned.
  - The solution is to wrap the side effect with `useEffect` to move it out of rendering calculations.
  * How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```

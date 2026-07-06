# React + TypeScript Learning Mentor

You are my senior frontend engineer, technical mentor, pair programmer, and code reviewer.

## My Goal

I want to become a professional frontend engineer capable of building production-quality React applications using:

- React
- TypeScript
- Vite
- React Router
- TanStack Query
- React Hook Form
- Zod
- Tailwind CSS
- Shadcn UI
- Axios
- Vitest
- Playwright

Eventually I will integrate this frontend with my Go backend services.

My objective is to truly understand frontend engineering, not simply finish projects quickly.

---

# Your Teaching Style

Teach me like a senior software engineer mentoring a junior developer.

Do NOT behave like a code generation assistant.

Your job is to make me think.

When introducing new concepts:

1. Explain the concept.
2. Explain why it exists.
3. Explain where it is used.
4. Explain common mistakes.
5. Explain best practices.
6. Give real-world examples.

Only then should we start coding.

---

# Code Generation Rules

Do NOT generate complete solutions unless I explicitly request them.

Instead:

- give hints
- explain the approach
- ask guiding questions
- help me debug
- review my implementation

If I become stuck after several attempts, you may gradually reveal more information instead of immediately providing the full answer.

---

# Learning Workflow

Every lesson should follow this format.

## Step 1

Explain today's topic.

Include:

- What it is
- Why it exists
- Mental model
- Real-world usage

---

## Step 2

Show a small example.

Keep it simple.

---

## Step 3

Give me a hands-on coding exercise.

Do NOT solve it.

Wait until I finish.

---

## Step 4

Review my code.

Review:

- correctness
- readability
- React practices
- TypeScript usage
- performance
- naming
- maintainability

Do not rewrite everything.

Teach instead.

---

## Step 5

Explain improvements.

---

## Step 6

Give me an extension challenge.

Examples:

- add filtering
- add search
- persist Local Storage
- dark mode
- pagination
- loading state
- error state

---

# Learning Progress

Always remember where we stopped.

Never jump ahead.

Only introduce new topics after I understand the current one.

At the beginning of every lesson:

- briefly recap the previous lesson
- explain today's goal
- explain how today's topic connects to previous knowledge

---

# Difficulty

Start from absolute beginner.

Increase difficulty gradually.

Do not assume prior frontend knowledge.

---

# Best Practices

Teach production-quality code.

Always explain:

- folder structure
- component organization
- naming conventions
- clean code
- accessibility
- responsive design
- performance
- testing

---

# VS Code Workflow

Assume I am coding inside VS Code.

Help me use:

- debugger
- terminal
- browser devtools
- React DevTools
- Git

Teach professional workflows instead of shortcuts.

---

# My Role

I will write the code.

You are my mentor.

Never take over my work unless I explicitly ask.

Your success is measured by how much I learn, not by how quickly the project is finished.

---

# Learning Log

## Day 1 - React Fundamentals

Date: 2026-06-29

### Topics Covered

- What React is
- Why React exists
- How React differs from vanilla JavaScript
- What Vite does in a React project
- How a Vite React application is structured
- How React components are created, exported, imported, and rendered
- How to split a larger component into smaller components

### Key Ideas

React is a JavaScript library for building user interfaces. Its main job is to help describe what the UI should look like based on the current data.

Vanilla JavaScript often focuses on manually changing the DOM:

- find an element
- update its text
- add or remove classes
- create or delete elements

React uses a different mental model:

- write components
- return JSX
- compose components together
- let React update the DOM

The important shift is from asking, "How do I manually change the page?" to asking, "What should the page look like right now?"

Vite is the development tool around the React app. It starts the local dev server, handles JSX and TypeScript transformation, provides fast refresh during development, and builds the app for production.

### Project Structure Learned

The Vite React project uses this basic structure:

```txt
my-first-react-app/
  index.html
  src/
    main.tsx
    App.tsx
    App.css
    components/
      Profile.tsx
      Intro.tsx
      Goal.tsx
```

Important files:

- `index.html` contains the root HTML element.
- `main.tsx` renders the React app into the DOM.
- `App.tsx` is the main application component.
- `components/` contains reusable UI components.

### Exercises Completed

Created a `Profile` component that included:

- a heading
- a paragraph
- a list of goals
- a button

Then split the profile into smaller components:

```txt
App
  Profile
    Intro
    Goal
    button
```

This practiced component composition, which is one of the core ideas in React.

### Issues Fixed

Removed unused `React` imports from component files.

Modern Vite React projects do not require this import just to use JSX:

```tsx
import React from 'react'
```

The TypeScript build failed when the import was unused, so removing it made the project compile successfully.

### Build Verification

Ran:

```bash
npm run build
```

The final build passed after removing unused imports.

### Day 1 Takeaway

React apps are built by composing components.

Each component is a small piece of UI. A larger screen is created by combining smaller components together.

## Day 2 - Props, Reusable Components, and Conditional Rendering

Date: 2026-07-02

### Topics Covered

- What props are
- Why props exist
- How parent components pass data to child components
- How TypeScript describes the shape of component props
- How to reuse one component with different data
- How to pass string, boolean, and number props
- How to render different text based on a boolean value
- How TypeScript catches missing required props

### Key Ideas

Props are values passed from a parent component to a child component.

The mental model is similar to function arguments:

- a function receives arguments
- a component receives props
- the component uses those props to decide what UI to render

Props make components reusable. Instead of creating many hardcoded components, one component can receive different data each time it is rendered.

TypeScript helps by defining the exact props a component expects:

```tsx
type ProfileCardProps = {
  name: string;
  role: string;
  location: string;
  learningGoal: string;
  isAvailable: boolean;
  yearsOfExperience: number;
};
```

If a required prop is missing, TypeScript reports the problem before the app is built.

### Project Structure Learned

Added a reusable card component:

```txt
my-first-react-app/
  src/
    App.tsx
    components/
      Profile.tsx
      Intro.tsx
      Goal.tsx
      ProfileCard.tsx
```

`App.tsx` acted as the parent component. It passed profile data into `ProfileCard`.

`ProfileCard.tsx` acted as the child component. It received props and rendered a profile card.

### Exercises Completed

Created a reusable `ProfileCard` component that received:

- `name`
- `role`
- `location`
- `learningGoal`

Rendered the same `ProfileCard` component three times from `App.tsx` with different values.

Then extended the component with:

- `isAvailable: boolean`
- `yearsOfExperience: number`

Used conditional rendering to show different status text:

```tsx
isAvailable ? "Available for collaboration" : "Currently focused on learning"
```

Used number-based conditional text to render:

```txt
0 years
1 year
5 years
```

### Issues Fixed

Fixed a missing required prop.

`ProfileCard` required `isAvailable`, but one card did not pass it. TypeScript caught this with a build error.

Fixed a spelling issue in the prop name:

```tsx
isAvaliable
```

was corrected to:

```tsx
isAvailable
```

This improved readability and made the prop name clearer.

### Build Verification

Ran:

```bash
npm.cmd run build
```

The final build passed after all required props were provided.

### Day 2 Takeaway

Props let components receive data from their parent.

A reusable component is more powerful than a hardcoded component because the same component can render different UI based on the props it receives.

TypeScript makes props safer by checking that required data is passed correctly.

### Next Topic

Arrays and rendering lists with `.map()`.

This will replace repeated component usage like:

```tsx
<ProfileCard />
<ProfileCard />
<ProfileCard />
```

with data-driven rendering from an array.

## Day 3 - Rendering Lists, Typed Arrays, and Semantic Structure

Date: 2026-07-02

### Topics Covered

- How arrays are used to store repeated UI data
- How `.map()` renders one component for each item in an array
- Why React list items need a stable `key`
- How to replace repeated JSX with data-driven rendering
- How to type an array of objects with TypeScript
- The difference between inferred types and explicit types
- How semantic HTML headings should be structured
- How boolean fields can drive conditional text

### Key Ideas

React applications often render repeated UI from arrays.

Instead of manually writing:

```tsx
<ProfileCard />
<ProfileCard />
<ProfileCard />
```

the app now stores profile data in an array and renders cards with `.map()`:

```tsx
profiles.map((profile) => (
  <ProfileCard key={profile.id} />
))
```

This is called data-driven rendering. The UI is produced from data instead of being manually repeated.

Each rendered item needs a stable `key` so React can track which item is which when the list changes. A real id is better than using the array index.

TypeScript can infer the shape of an array automatically, but an explicit type creates a clearer contract:

```tsx
type Profile = {
  id: number;
  name: string;
  role: string;
  location: string;
  learningGoal: string;
  isAvailable: boolean;
  yearsOfExperience: number;
  favoriteTechnology: string;
  isRemote: boolean;
};

const profiles: Profile[] = [];
```

This means every item in `profiles` must match the `Profile` shape.

### Project Structure Used

Continued working in:

```txt
my-first-react-app/
  src/
    App.tsx
    components/
      ProfileCard.tsx
```

`App.tsx` now owns the `profiles` array and maps over it.

`ProfileCard.tsx` receives one profile's data through props and renders the card UI.

### Exercises Completed

Replaced repeated `ProfileCard` usage with a typed `profiles` array and `.map()`.

Each profile object includes:

- `id`
- `name`
- `role`
- `location`
- `learningGoal`
- `isAvailable`
- `yearsOfExperience`
- `favoriteTechnology`
- `isRemote`

Added `favoriteTechnology` and rendered:

```txt
Favorite Technology: React
```

Added `isRemote` and rendered conditional work style text:

```tsx
isRemote ? "Remote" : "On-site"
```

Added a semantic section around the profile list:

```tsx
<section>
  <h2>Team Profiles</h2>
  ...
</section>
```

Updated each profile card name from `<h2>` to `<h3>` so the heading structure is clearer:

```txt
h2 Team Profiles
  h3 John Doe
  h3 Jane Smith
  h3 Alice Johnson
```

### Improvements Made

Renamed the array from `profile` to `profiles` because it contains multiple profile objects.

Renamed the `.map()` callback variable from `user` to `profile` so the variable matches the data being rendered:

```tsx
profiles.map((profile) => (
```

Added a `Profile` type to describe the profile data in `App.tsx`.

Kept `ProfileCardProps` separate from `Profile` for now:

- `Profile` describes the full data object, including `id`.
- `ProfileCardProps` describes what the component receives.

This distinction is important because not every field used by the parent must be passed into the child component.

### Build Verification

Ran:

```bash
npm.cmd run build
```

The build passed after each completed step.

### Day 3 Takeaway

React list rendering connects data to UI.

Arrays store repeated data, `.map()` turns that data into components, and TypeScript makes the data shape safer.

The current app now renders profile cards from a typed array instead of repeated hardcoded JSX.

### Next Topic

Extracting data into a separate file.

This will move the `profiles` array out of `App.tsx` so `App` can focus more on rendering and less on storing inline data.

## Day 4 - Extracting Data Into a Separate File

Date: 2026-07-03

### Topics Covered

- Why repeated or static data can be moved out of components
- How to create a `src/data/` folder
- How to move the `profiles` array into `src/data/profiles.ts`
- How to export data from one file and import it into another
- The difference between `.ts` and `.tsx` files
- How file names should describe what the file owns

### Key Ideas

Components should focus on rendering UI. Data files should store reusable or static data.

Moving the `profiles` array out of `App.tsx` made `App` cleaner because it no longer needed to store all profile objects inline.

The mental model is:

```txt
App.tsx = decides what appears on the page
data/profiles.ts = stores profile data
components/ProfileCard.tsx = displays one profile
```

A `.tsx` file is used when the file contains JSX. A plain TypeScript data file should use `.ts`.

### Exercises Completed

Created:

```txt
src/
  data/
    profiles.ts
```

Moved the `profiles` array from `App.tsx` into `profiles.ts`.

Exported:

```tsx
export { profiles, goal1, goal2, goal3 };
```

Imported the data back into `App.tsx`:

```tsx
import { profiles, goal1, goal2, goal3 } from "./data/profiles";
```

Added a fourth profile object to practice updating data-driven UI.

### Improvements Made

Removed the unused `type Profile` from `App.tsx` after the profile array was moved.

Renamed the data file from `profiles.tsx` to `profiles.ts` because it contains TypeScript data, not JSX.

Cleaned up the `profiles.ts` formatting so the array objects and export statement are easier to read.

### Build Verification

Ran:

```bash
npm.cmd run build
```

The build passed after the data extraction and extension challenge.

### Day 4 Takeaway

Extracting data into a separate file keeps components smaller and prepares the app for larger project structure.

The UI still renders from the same data, but the code is now better organized.

## Day 5 - Shared Types and `import type`

Date: 2026-07-03

### Topics Covered

- What shared TypeScript types are
- Why types can be moved into a `src/types/` folder
- How to export a type from one file
- How to import a type using `import type`
- The difference between data values and type-only imports
- How to decide whether a type describes data or component props

### Key Ideas

Types describe the shape of data. They are contracts that help TypeScript catch mistakes before the app runs.

The mental model is:

```txt
data = actual values used by the app
type = the contract that describes those values
```

`import type` is used when importing something that only exists for TypeScript checking and is not needed at runtime:

```tsx
import type { ProfileData } from "../types/profile";
```

This makes the intent clear: the import is only a type, not a JavaScript value.

### Project Structure Learned

Added:

```txt
src/
  types/
    profile.ts
```

Current structure:

```txt
src/
  App.tsx
  components/
    Profile.tsx
    ProfileCard.tsx
  data/
    profiles.ts
  types/
    profile.ts
```

### Exercises Completed

Moved `ProfileData` from `profiles.ts` into `types/profile.ts`.

Used `ProfileData` in `profiles.ts`:

```tsx
import type { ProfileData } from "../types/profile";
```

Moved `ProfileProps` from `components/Profile.tsx` into `types/profile.ts`.

Used `ProfileProps` in `Profile.tsx`:

```tsx
import type { ProfileProps } from "../types/profile";
```

### Improvements Made

Separated the profile list data shape from the actual profile data.

Kept the naming distinction clear:

- `ProfileData` describes objects in the profile list.
- `ProfileProps` describes the props received by the `Profile` component.

Discussed two valid export styles:

```tsx
type ProfileData = {};
export type { ProfileData };
```

and:

```tsx
export type ProfileData = {};
```

The inline export style is common when a type is obviously shared, while exporting at the bottom can be useful when a file has both internal and public types.

### Build Verification

Ran:

```bash
npm.cmd run build
```

The build passed after moving the shared types.

### Day 5 Takeaway

Shared types keep data contracts consistent across files.

`import type` helps make TypeScript-only imports explicit.

The app is now prepared for the next major React concept: component state.

### Next Topic

State with `useState`.

This will introduce interactive UI where components can own data that changes over time, such as counters, toggles, search text, and filters.

## Day 6 - Component State with `useState`

Date: 2026-07-03

### Topics Covered

- What React state is
- Why state exists
- How `useState` lets a component remember changing values
- How to create number state
- How event handlers update state
- The difference between direct state values and setter functions
- When to use the callback form of a state update
- How to prevent state from entering an invalid value

### Key Ideas

State is data that belongs to a component and can change over time.

The mental model is:

```txt
props = data passed into a component
state = data owned and updated by a component
```

`useState` returns two things:

```tsx
const [count, setCount] = useState(0);
```

- `count` is the current state value.
- `setCount` is the function used to update the value.
- `0` is the initial value.

When the setter function is called, React stores the new value and renders the component again.

For updates that depend on the previous value, the callback form is preferred:

```tsx
setCount((currentCount) => currentCount + 1);
```

This is safer than relying directly on the current variable when the next state depends on the previous state.

### Project Structure Used

Added a new component:

```txt
src/
  components/
    Counter.tsx
```

Rendered it from:

```txt
src/
  App.tsx
```

### Exercises Completed

Created a `Counter` component with number state:

- displayed the current count
- added an increment button
- added a decrement button
- added a reset button
- prevented the count from going below `0`

The decrement logic used the callback form and conditional logic:

```tsx
setCount((currentCount) => (currentCount > 0 ? currentCount - 1 : 0));
```

### Improvements Made

Changed increment and decrement to use callback-style state updates:

```tsx
setCount((currentCount) => currentCount + 1);
setCount((currentCount) => (currentCount > 0 ? currentCount - 1 : 0));
```

Used a direct value for reset because reset does not depend on the previous value:

```tsx
setCount(0);
```

Discussed that longer inline event handlers can later be extracted into named functions such as `handleIncrement`, `handleDecrement`, and `handleReset` for readability.

### Build Verification

Ran:

```bash
npm.cmd run build
```

The build passed after the counter updates.

### Day 6 Takeaway

`useState` lets a React component own data that changes over time.

State should be updated with the setter function, not by assigning to the state variable directly.

When the next state depends on the previous state, use the callback form.

### Next Topic

Boolean state with `useState`.

This will introduce UI that can switch between two states, such as show/hide details, open/close menus, and toggles.

## Day 7 - Boolean State, Conditional Rendering, and Named Event Handlers

Date: 2026-07-05

### Topics Covered

- How to create boolean state with `useState(false)`
- How boolean state represents UI conditions such as shown/hidden
- How to toggle boolean state with the callback form
- How to conditionally render UI with `&&`
- How to combine boolean conditions with the `||` operator
- How multiple pieces of state can belong to one component
- How named event handlers improve JSX readability
- How related state values can be coordinated together

### Key Ideas

Boolean state stores a `true` or `false` value.

The mental model is:

```txt
false = hidden / off / closed
true = visible / on / open
```

Boolean state is useful for UI patterns such as:

- showing or hiding details
- opening or closing menus
- toggling optional information
- showing controls only when they are useful

When the next boolean value depends on the previous value, the callback form is preferred:

```tsx
setShowDetails((currentShowDetails) => !currentShowDetails);
```

Conditional rendering with `&&` means:

```txt
If the condition is true, render this UI.
If the condition is false, render nothing.
```

The `||` operator was used to show a reset button when at least one optional detail was visible:

```tsx
(showEmail || showLearningFocus) && ...
```

### Project Structure Used

Added and continued working in:

```txt
src/
  components/
    ProfileDetails.tsx
```

Rendered `ProfileDetails` from:

```txt
src/
  App.tsx
```

### Exercises Completed

Created a `ProfileDetails` component with boolean state:

- `showDetails`
- `showEmail`
- `showLearningFocus`

Added buttons to:

- show or hide the main details section
- show or hide the email
- show or hide the learning focus
- hide all optional details at once

Used conditional rendering so optional UI only appears when the matching state is `true`.

### Improvements Made

Changed the outer wrapper from a plain `div` to a semantic `section`.

Moved the email and learning-focus controls inside the details section so the UI relationship is clearer.

Added a named handler for resetting optional details:

```tsx
const handleHideOptionalDetails = () => {
  setShowEmail(false);
  setShowLearningFocus(false);
};
```

Refined the main details toggle so optional details are reset only when the details section is being closed.

Extracted inline event handlers into named functions:

- `handleToggleDetails`
- `handleToggleEmail`
- `handleToggleLearningFocus`
- `handleHideOptionalDetails`

This made the JSX easier to scan because the JSX now describes what happens, while the handler functions describe how it happens.

Added conditional rendering for the reset button so `Hide optional details` only appears when at least one optional detail is visible.

### Verification

Ran:

```bash
npx.cmd tsc -b
```

The TypeScript check passed.

The full Vite build was attempted earlier, but Vite failed with a Windows `EPERM` spawn issue while loading `vite.config.ts`. This did not appear to be caused by the React or TypeScript code written for the lesson.

### Day 7 Takeaway

Boolean state lets a component remember simple UI conditions.

State controls what the user sees, event handlers update that state, and React re-renders the UI from the new state.

Named event handlers are useful when JSX starts becoming difficult to read or when one user action updates multiple pieces of state.

### Next Topic

String state with controlled inputs.

This will introduce text fields, `value`, `onChange`, and the idea that React can control form input values through state.

## Day 8 - String State with Controlled Inputs

Date: 2026-07-06

### Topics Covered

- What string state is
- Why text input values are stored in React state
- How controlled inputs work with `value` and `onChange`
- How to type input change events in TypeScript
- How to create named event handlers for input changes
- How to conditionally render UI based on text state
- How to derive readable booleans from state
- How formatting affects JSX readability

### Key Ideas

String state stores text that can change over time.

The mental model is:

```txt
state value = what React remembers
input value = what React displays
onChange = how React updates state when the user types
```

A controlled input is an input whose displayed value comes from React state:

```tsx
<input value={searchText} onChange={handleSearchChange} />
```

This means React becomes the source of truth for the input value.

The input change event was typed with:

```tsx
React.ChangeEvent<HTMLInputElement>
```

This tells TypeScript that the event comes from an HTML input element, so `event.target.value` is known to be available.

### Project Structure Used

Added a new component:

```txt
src/
  components/
    SearchBox.tsx
```

Rendered it from:

```txt
src/
  App.tsx
```

### Exercises Completed

Created a `SearchBox` component with string state:

- `searchText`

Added:

- a semantic `section`
- a heading
- a connected `label` and `input`
- a controlled input using `value` and `onChange`
- a message showing the current search text
- an empty-state message when no search text exists
- a `Clear` button that only appears when there is text
- feedback when the search text is shorter than 3 characters
- feedback when the search text is ready to search

### Improvements Made

Changed the display message so the whole sentence is conditional instead of only part of the sentence.

Added a named handler for clearing the search:

```tsx
const handleClearSearch = () => {
  setSearchText("");
};
```

Introduced derived booleans to make JSX easier to read:

```tsx
const hasSearchText = searchText.length > 0;
const canSearch = searchText.length >= 3;
```

Used those booleans instead of repeating raw checks like:

```tsx
searchText.length > 2
```

Formatted longer JSX conditionals across multiple lines so the component is easier to scan.

### Verification

Ran:

```bash
npx.cmd tsc -b
```

The TypeScript check passed after each completed step.

### Day 8 Takeaway

Controlled inputs let React manage user-typed text.

The important loop is:

```txt
user types -> onChange runs -> state updates -> React re-renders -> input displays the new state
```

Derived booleans such as `hasSearchText` and `canSearch` make conditional rendering easier to understand.

### Next Topic

Lifting state up.

This will move search state to the component that owns the profile list so the search text can eventually filter rendered profiles.

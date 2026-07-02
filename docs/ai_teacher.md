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

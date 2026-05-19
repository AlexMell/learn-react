# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start        # dev server at http://localhost:3000
npm test         # Jest in watch mode
npm run build    # production build
npm test -- --testPathPattern=<file>  # run a single test file
```

## Architecture

A learning project built with Create React App (React 18.2, no TypeScript). Features a Todo app and standalone React concept exercises.

**State and data flow (Todo):**
- `App.js` owns all todo state (`todos`, `loading`) and fetches initial data from `jsonplaceholder.typicode.com` on mount (with an artificial 2 s delay)
- `toggleTodo` and `addTodo` are passed down as props; `removeTodo` is distributed via React Context (`src/context.js`) so `TodoItem` can call it without prop-drilling through `TodoList`

**Code-splitting:**
- `AddTodo` is loaded with `React.lazy` + `React.Suspense`, using an artificial 3-second delay to demonstrate the pattern. `Loader` is the fallback.

**Component styles:**
- `Modal` is a class component (demonstrates class-based state)
- Everything else uses function components and hooks
- `AddTodo` has a local custom hook `useInputValue` for controlled input management

**`src/Memo/MemoTask.js`** — standalone exercise demonstrating `React.memo`. `UserCard` is intentionally broken (wrong syntax on the `React.memo` call) as the exercise task. The file contains instructions in comments at the top.

**`src/index.js`** uses the React 18 `createRoot` API.

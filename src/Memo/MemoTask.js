import React, { useState } from 'react'

// ─── PROBLEM ────────────────────────────────────────────────────────────────
// Open the browser console and click the "Increment counter" button a few times.
// Notice that "UserCard rendered" appears in the console on EVERY click,
// even though the user prop never changes.
//
// YOUR TASK:
//   Fix UserCard so it only re-renders when its own props change.
//   You are NOT allowed to change anything inside App or the UserCard JSX —
//   only change how UserCard is defined / exported.
//
// BONUS QUESTION (answer in a comment at the bottom of this file):
//   React.memo does a shallow comparison of props by default.
//   What does "shallow" mean, and when would it NOT be enough?
// ────────────────────────────────────────────────────────────────────────────

const user = { name: 'Alex', role: 'Developer' }

const UserCard = React.memo(( { user } ) => {
  console.log('UserCard rendered');

  return (
    <div style={{ border: '1px solid #ccc', padding: '12px', marginBottom: '16px' }}>
      <strong>{user.name}</strong> — {user.role}
    </div>
  )
});

export function MemoTask() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ padding: '24px' }}>
      <UserCard user={user} />
      <p>Counter: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>Increment counter</button>
    </div>
  )
}

// BONUS ANSWER:
// Shallow mean React compares props by reference, not by value, for primitives this is fine for objects and arrays it fails when parent create a new reference on every render

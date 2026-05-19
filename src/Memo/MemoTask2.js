import React, { useCallback, useState } from 'react'

// ─── PROBLEM ────────────────────────────────────────────────────────────────
// UserCard is already wrapped in React.memo — but open the console and click
// "Increment counter". You'll see "UserCard rendered" on EVERY click anyway.
//
// YOUR TASK:
//   Figure out WHY React.memo isn't working here, then fix it.
//   You are allowed to change MemoTask2 and how UserCard is defined.
//   Do NOT change the UserCard JSX.
//
// HINT: look at what props UserCard receives and where they come from.
//
// BONUS QUESTION (answer in a comment at the bottom of this file):
//   You fixed functions with useCallback. What would you use to memoize
//   an expensive computed value (not a function) that's passed as a prop?
// ────────────────────────────────────────────────────────────────────────────

const user = { name: 'Alex', role: 'Developer' }

const UserCard = React.memo(({ user, onRemove }) => {
  console.log('UserCard rendered')
  return (
    <div style={{ border: '1px solid #ccc', padding: '12px', marginBottom: '16px' }}>
      <strong>{user.name}</strong> — {user.role}
      <button onClick={onRemove} style={{ marginLeft: '12px' }}>Remove</button>
    </div>
  )
})

export function MemoTask2() {
  const [count, setCount] = useState(0)

  const handleRemove = useCallback(() => {
    console.log('removed')
  }, [])

  return (
    <div style={{ padding: '24px' }}>
      <UserCard user={user} onRemove={handleRemove} />
      <p>Counter: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>Increment counter</button>
    </div>
  )
}

// BONUS ANSWER:
// we can use use ref or use memo.

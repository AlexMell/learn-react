import React, { useState, useMemo } from 'react'

// ─── PROBLEM ────────────────────────────────────────────────────────────────
// StatsPanel receives a `stats` object computed from the todos list.
// It is wrapped in React.memo — but it still re-renders every time you
// type in the input, even though the todos never change.
//
// YOUR TASK:
//   Fix it so StatsPanel only re-renders when the todos list actually changes.
//   You are NOT allowed to change StatsPanel itself.
//
// HINT: the problem is not the function this time — it's the object.
//
// BONUS QUESTION (answer in a comment at the bottom):
//   useCallback and useMemo look similar. What is the practical difference?
//   When would you use one over the other?
// ────────────────────────────────────────────────────────────────────────────

const initialTodos = [
  { id: 1, title: 'Buy groceries', completed: true },
  { id: 2, title: 'Walk the dog', completed: false },
  { id: 3, title: 'Read a book', completed: true },
]

const StatsPanel = React.memo(({ stats }) => {
  console.log('StatsPanel rendered')
  return (
    <div style={{ border: '1px solid #ccc', padding: '12px', marginBottom: '16px' }}>
      <p>Total: {stats.total}</p>
      <p>Completed: {stats.completed}</p>
      <p>Remaining: {stats.remaining}</p>
    </div>
  )
})

export function MemoTask3() {
  const [todos] = useState(initialTodos)
  const [text, setText] = useState('')

  const stats = useMemo(() => {
    return {
      total: todos.length,
      completed: todos.filter(t => t.completed).length,
      remaining: todos.filter(t => !t.completed).length,
    }
  }, [todos]);

  return (
    <div style={{ padding: '24px' }}>
      <StatsPanel stats={stats} />
      <input
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Type something..."
      />
    </div>
  )
}

// BONUS ANSWER:
// useMemo saved data, useCallback save function to re-renreder

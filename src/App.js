import React, { useState } from 'react'
import { UseState } from './Exercises/UseState'
import { UseEffect } from './Exercises/UseEffect'
import { UseRef } from './Exercises/UseRef'
import { UseMemo } from './Exercises/UseMemo'
import { UseContext } from './Exercises/UseContext'
import { CustomHook } from './Exercises/CustomHook'
import TodoApp from './Exercises/TodoApp'

const exercises = [
  { label: 'useState',         Component: UseState },
  { label: 'useEffect',        Component: UseEffect },
  { label: 'useRef',           Component: UseRef },
  { label: 'useMemo/Callback', Component: UseMemo },
  { label: 'useContext',       Component: UseContext },
  { label: 'Custom Hook',      Component: CustomHook },
  { label: 'Todo App',         Component: TodoApp },
]

const navStyle = {
  display: 'flex',
  gap: 8,
  padding: '16px 24px',
  borderBottom: '1px solid var(--border)',
  flexWrap: 'wrap',
  background: 'var(--surface)',
}

function btnStyle(active) {
  return {
    padding: '6px 14px',
    cursor: 'pointer',
    border: '1px solid var(--border)',
    borderRadius: 4,
    background: active ? 'var(--accent)' : 'transparent',
    color: active ? 'var(--accent-text)' : 'var(--text)',
    fontWeight: active ? 600 : 400,
  }
}

export default function App() {
  const [active, setActive] = useState(0)
  const { Component } = exercises[active]

  return (
    <div>
      <nav style={navStyle}>
        {exercises.map((ex, i) => (
          <button key={ex.label} style={btnStyle(i === active)} onClick={() => setActive(i)}>
            {ex.label}
          </button>
        ))}
      </nav>
      <Component />
    </div>
  )
}

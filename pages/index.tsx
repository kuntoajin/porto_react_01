import { createRoot } from 'react-dom/client';
import React from 'react'

const root = createRoot(document.getElementById('app') as HTMLElement)
root.render(<h1>Hello, world</h1>);
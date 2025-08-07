import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { CarouselDemo } from './fakestoreApi/fakestore.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CarouselDemo />
  </StrictMode>,
)

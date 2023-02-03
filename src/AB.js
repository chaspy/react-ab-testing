import React from 'react'
import { useExperiment, emitter } from '@marvelapp/react-ab-test'

// Hook usage pattern requires registration of experiments
emitter.defineVariants('My Example', ['A', 'B'])

const AB = () => {
  const { selectVariant, emitWin } = useExperiment('My Example')
  const variant = selectVariant({
    A: <div>Section A</div>,
    B: <div>Section B</div>,
  })

  return (
    <div>
      {variant}
      <button onClick={emitWin}>CTA</button>
    </div>
  )
}

export default AB

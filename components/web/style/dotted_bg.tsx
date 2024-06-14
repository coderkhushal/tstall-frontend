import { cn } from '@/lib/utils'
import React, { useId } from 'react'

const DottedBg = () =>{
const id = useId() 
  return (
    <svg
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0 h-full z-0 w-full fill-neutral-400/80",

        )}

      >
        <defs>
          <pattern
            id={id}
            width={10}
            height={10}
            patternUnits="userSpaceOnUse"
            patternContentUnits="userSpaceOnUse"
            x={0}
            y={0}
          >
            <circle id="pattern-circle" cx={1} cy={1} r={1} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
      </svg>
  )
}

export default DottedBg
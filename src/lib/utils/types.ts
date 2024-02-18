import React from 'react'

// react
export type FC<T = {}> = React.FC<
  T & { className?: string; style?: React.CSSProperties; children?: React.ReactNode }
>

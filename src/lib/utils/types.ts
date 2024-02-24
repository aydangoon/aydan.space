import React from 'react'

// react
export type FC<T = {}> = React.FC<
  T & { className?: string; style?: React.CSSProperties; children?: React.ReactNode }
>

// general
export type Optional<T> = T | undefined
export type Nullable<T> = T | null
export type Nullish<T> = T | null | undefined

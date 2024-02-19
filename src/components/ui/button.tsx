'use client'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { motion } from 'framer-motion'
import * as React from 'react'

import { cn } from '@/lib/utils/shadcn'

const buttonVariants = cva(
  `inline-flex items-center justify-center whitespace-nowrap rounded-2xl text-xs 
  transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring 
  disabled:pointer-events-none disabled:opacity-50 uppercase`,
  {
    variants: {
      variant: {
        accent: 'shadow text-primary-foreground',
        primary: 'shadow bg-primary text-primary-foreground hover:bg-primary/90',
        secondary: 'shadow bg-secondary text-secondary-foreground hover:bg-secondary/80',
        outline: `border border-foreground shadow-sm text-foreground hover:text-foreground/70 
        hover:border-foreground/70`,
        ghost: '',
        link: 'text-primary underline-offset-4 hover:underline',
        skeuo: 'text-slate-500',
      },
      size: {
        default: 'px-6 py-2',
        sm: 'px-4 py-1',
        lg: 'px-12 py-2',
        icon: 'w-9 h-9 p-2',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'

    if (variant === 'accent') {
      return (
        <motion.button
          className={cn(buttonVariants({ variant, size, className }))}
          animate={{
            backgroundPosition: ['0%', '100%'],
            transition: { duration: 4, ease: 'linear', repeat: Infinity, repeatType: 'loop' },
          }}
          style={{
            backgroundSize: '400% 100%',
            backgroundImage: `linear-gradient(
                to right, 
                rgb(var(--ts-emerald-400)) 0%,
                rgb(var(--ts-emerald-400)) 25%,
                rgb(var(--primary)) 50%,
                rgb(var(--ts-emerald-400)) 75%,
                rgb(var(--ts-emerald-400)) 100%
              )`,
          }}
          {...props}
        />
      )
    }

    if (variant === 'skeuo') {
      return (
        <motion.button
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          {...props}
          whileTap={{
            boxShadow: `inset 3px 3px 6px 0 rgba(0, 0, 0, 0.1), inset -6px -6px 12px 0 rgba(255, 255, 255, 1)`,
          }}
          style={{
            boxShadow: `3px 3px 4px 0 rgba(158, 164, 172, 0.25), -3px -3px 4px 0 #fff`,
          }}
        />
      )
    }

    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }

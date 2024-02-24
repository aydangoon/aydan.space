import React, { FC, useState } from 'react'

import { useInterval, useTimeout } from '@/lib/utils/hooks'

const roles = ['Web Dev', 'Musician', 'Producer', 'Guitarist']

const randomChar = () => String.fromCharCode(Math.floor(Math.random() * 26) + 97)

const randomSomeIndex = (bools: boolean[], desired: boolean) => {
    const options = bools
        .map((b, i) => [b, i] as [boolean, number])
        .filter(([b, i]) => b === desired)
    if (options.length === 0) return -1
    const optionsIndex = Math.floor(Math.random() * options.length)
    return options[optionsIndex][1]
}

const PAUSE_DURATION = 2_000
const FLIP_DURATION = 100

type State = {
    roleIndex: number
    revealed: boolean[]
    op: 'revealing' | 'unrevealing' | 'pause'
}

const GlitchedText: FC = () => {
    const [state, setState] = useState<State>({
        roleIndex: 0,
        revealed: [...Array(roles[0].length)].fill(false),
        op: 'revealing',
    })
    const { roleIndex, revealed, op } = state
    const text = revealed.map((b, i) => (b ? roles[roleIndex].charAt(i) : randomChar()))

    // reveal interval
    useInterval(
        () => {
            // pick a random index to reveal
            // console.log('running reveal')
            const idx = randomSomeIndex(revealed, false)
            if (idx === -1) {
                // all revealed, pause
                // console.log('pausing')
                setState({ ...state, op: 'pause' })
                return
            }
            const newRevealed = [...revealed]
            newRevealed[idx] = true
            setState({ ...state, revealed: newRevealed })
        },
        op === 'revealing' ? FLIP_DURATION : null,
    )

    // unreveal interval
    useInterval(
        () => {
            // pick a random index to unreveal
            // console.log('running unreveal')
            const idx = randomSomeIndex(revealed, true)
            if (idx === -1) {
                // all unrevealed, cycle role
                // console.log('cycling role')
                const newRoleIndex = (roleIndex + 1) % roles.length
                setState({
                    roleIndex: newRoleIndex,
                    revealed: [...Array(roles[newRoleIndex].length)].fill(false),
                    op: 'revealing',
                })
                return
            }
            const newRevealed = [...revealed]
            newRevealed[idx] = false
            setState({ ...state, revealed: newRevealed })
        },
        op === 'unrevealing' ? FLIP_DURATION : null,
    )

    // on revealed text: pause then trigger unreveal
    useTimeout(
        () => {
            // console.log('running post pause')
            setState({ ...state, op: 'unrevealing' })
        },
        op === 'pause' ? PAUSE_DURATION : null,
    )

    return <span className="break-words font-mono">{text}</span>
}

export default GlitchedText

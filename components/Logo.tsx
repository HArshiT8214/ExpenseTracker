import { PiggyBank } from 'lucide-react'
import React from 'react'

export default function logo() {
    return (
        <a href="/" className='flex item-center gap-2'>
            <PiggyBank className='stroke h-11 w-11 stroke-amber-500 strock-[1.5]'></PiggyBank>
            <p className='bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-3xl font-bold leading-tight tracker-tighter text-transparent'>
                ExpenseTracker
            </p>
        </a>
    )
}

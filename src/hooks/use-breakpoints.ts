import { useState, useEffect } from 'react'

const getBreakpointLabel = (breakpoint : number) => {
    switch (true) {
        case breakpoint < 576:
            return "xs";
        case breakpoint < 768:
            return "sm";
        case breakpoint < 992:
            return "md";
        case breakpoint < 1200:
            return "lg";
        case breakpoint < 1400:
            return "xl";
        default:
            return "xxl";
    }
}

export const useBreakpoints = () => {
    const [breakpoint, setBreakpoint] = useState(1200)
    
    const resize = () => {
        setBreakpoint(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', resize)

        return () => {
            window.removeEventListener('resize', resize)
        }
    }, [])
    
    return getBreakpointLabel(breakpoint)
}
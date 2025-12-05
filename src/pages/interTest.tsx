import React, { useEffect, useRef } from 'react'
import useIntersectionObserver from '../hooks/useIntersection'

const InterTest = () => {

    const [observe, unobserve, isInter] = useIntersectionObserver(() => {
        console.log('inter')
    })

    const target1 = useRef(null)
    const target2 = useRef(null)
    const target3 = useRef(null)
    const target4 = useRef(null)

    useEffect(() => {
        observe(target1.current)
        observe(target2.current)
        observe(target3.current)
        observe(target4.current)
    }, [])

    useEffect(() => {
        console.log('isInter??', isInter)
    }, [isInter])


    return (
        <div>

            <section ref={target1} style={{ "height": "1800px", "borderBottom": "1px solid #ddd" }}>1</section>
            <section ref={target2} style={{ "height": "1800px", "borderBottom": "1px solid #ddd" }}>2</section>
            <section ref={target3} style={{ "height": "1800px", "borderBottom": "1px solid #ddd" }}>3</section>
            <section ref={target4} style={{ "height": "1800px", "borderBottom": "1px solid #ddd" }}>4</section>
        </div>
    )
}

export default InterTest
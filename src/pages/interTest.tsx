import React from 'react'
import useIntersectionObserver from '../hooks/useIntersection'

const InterTest = () => {

    const [observe, unobserve, isInter] = useIntersectionObserver(() => {
        console.log('inter')
    })

    return (
        <div>
            <section>1</section>
            <section>2</section>
            <section>3</section>
            <section>4</section>
        </div>
    )
}

export default InterTest
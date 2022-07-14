import React, { useState, useEffect } from 'react';


export const Clock = ({ run = false }) => {

    const [watch, setWatch] = useState(new Date().toLocaleTimeString())

    useEffect(() => {


        if (run) {

            const interval = setInterval(() => {
                setWatch(new Date().toLocaleTimeString())
            }, 1000)


            return () => {
                clearInterval(interval)
            }
        }

        console.log(run)

    }, [run])


    return (
        <>
            <p>{watch}</p>
        </>
    )
}
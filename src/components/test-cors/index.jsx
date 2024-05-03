import React, { useEffect } from "react"
import axios from "axios"

export default function TestCors(){

    useEffect(() => {
        axios.get("http://localhost:5555/books").then(
            response => console.log(response)
        )
    }, [])

    return (
        <>
        <div>
            <h1>A simple program to test CORS POLICY in Node.js</h1>
        </div>
        </>
    )
}
import React, { useState } from 'react'
import '../pages/styles.css'
export default () => {
    return (
        <form id="test-form">
            <p className="bodyParagraph">
                Contact Us!
            </p>
            <input type="email" label="Email" placeholder="Email" />
            <input type="submit" value="Submit" />
        </form>
    )
}
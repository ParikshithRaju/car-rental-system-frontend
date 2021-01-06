import React from 'react'
import AdminComponent from './AdminComponent';

export default function Home() {
    return (
        <body>
            <div className="container">
                <div className="jumbotron mt-3" style={{
                    background: "none"
                }}>
                <h1 className="display-1 text-center">Herin - E-Commerce App</h1>
                <br />
                <br />
                <p className="lead">Herin - An E-commerce App,We Demonstrate our Product and Services here. </p>
                </div> 
            </div>
            {/* <AdminComponent /> */}
        </body>
    )
}

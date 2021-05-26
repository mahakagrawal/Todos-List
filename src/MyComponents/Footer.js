import React from 'react'

export const Footer = () => {
    let footerStyle={
        marginTop:"60px",
        padding:"20px",
        width:"100%",
        bottom:"0",
        left:"0",
        right:"0",
        marginBottom:"0px"
    }
    return (
        <footer className="bg-dark text-light" style={footerStyle}>
            <p className="text-center">
                Copyright &copy; MyTodosList.com
            </p>
        </footer>
    )
}

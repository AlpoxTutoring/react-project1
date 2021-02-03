import React from 'react'

function Header() {
    return (
        <div style={{ width: '100%', height: '50px', display: 'flex', alignItems: 'center', backgroundColor:'#0C4B33' }}>
            <nav className="header-nav">
                <div>
                    <a href="/">Logo</a>
                </div>
                <div>
                    menu
                    {/* menu component */}
                </div>
                <div>
                    account
                    {/* account component */}
                </div>
            </nav>
        </div>
    )
}

export default Header

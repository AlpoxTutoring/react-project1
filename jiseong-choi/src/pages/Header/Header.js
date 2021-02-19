import React from 'react'
import { Link } from 'react-router-dom'

function Header() {

    const isLogin = localStorage.getItem('accessToken')

    if (isLogin) {
        return (
            <div style={{ width: '100%', height: '50px', display: 'flex', alignItems: 'center', backgroundColor: '#0C4B33' }}>
                <nav className="header-nav" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div>
                        <Link to="/">Logo</Link>
                    </div>
                </nav>
            </div>
        )
    }

    return (
        <div style={{ width: '100%', height: '50px', display: 'flex', alignItems: 'center', backgroundColor:'#0C4B33' }}>
            <nav className="header-nav" style={{ width: '100%',display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                <div>
                    <Link to="/">Logo</Link>
                </div>
                <div>
                    menu
                    {/* menu component */}
                    account
                    {/* account component */}
                </div>
            </nav>
        </div>
    )
}

export default Header

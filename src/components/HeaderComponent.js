import React from 'react';
import { Link } from 'react-router-dom';
export default function Header() {
    return (
        <>
            <nav>
                <div className="nav-wrapper #aa00ff purple accent-4">
                    <Link to='/home' className="brand-logo">Assignment</Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/user'>User</Link></li>
                        <li><Link to='/compnay'>Compnay</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>

                    </ul>
                </div>
            </nav>
        </>
    )

}
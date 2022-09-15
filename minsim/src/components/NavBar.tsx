import React from "react";
import Link from 'next/link';

function NavBar() {

    return (
        <nav>
            <ul>
                <li> Logo </li>
                <li>
                    <Link href="/trend">트렌드</Link> 
                </li>
            </ul>
        </nav>
    )
}

export default NavBar
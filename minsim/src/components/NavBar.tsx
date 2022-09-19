import React from "react";
import Link from 'next/link';
import Image from 'next/image';
import Logo from '/public/images/yousimlogo.png'
import { useRouter } from 'next/router';


function NavBar() {
    const router = useRouter()
    const routerpush = () => {router.push("/")}
    return (
        <nav>
            <ul>
                <li>
                    <Image src={Logo} alt="" width={100} height={50} onClick={routerpush}></Image>
                </li>
                <li>
                    <Link href="/trend">트렌드</Link> 
                </li>
            </ul>
        </nav>
    )
}

export default NavBar
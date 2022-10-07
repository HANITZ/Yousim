// import {useEffect} from 'react'
// import {RecoilRoot, useRecoilState, atom} from 'recoil'

// // User data

// const user1 = {username: 'joe', bio: "You will never see me, unless of course this example is totally broken."}
// const user2 = {username: 'bob', bio: "I am the one true user."}
// const user3 = {username: 'fred', bio: "Just kidding, make way for the new guy."}

// // Recoil atom to store user. The default user is user1, but it will be
// // replaced when the root state is initialized

// const userState = atom({
//     key: 'user',
//     default: user1
// })

// // Keep a reference to all atoms by key for initializeRecoilState

// const all_atoms = {
//     user: userState
// }
// // Where the magic happens: Used by RecoilRoot to update atoms by key given an
// // initial state object of the form {key: initial_value}

// const initializeRecoilState = (initialRecoilState: any) => 
//   {return ({ set }: any) => {
//     for (const [key, value] of Object.entries(initialRecoilState)) {
//       const state = all_atoms[key];
//       if (state) {
//         set(state, value);
//       }
//     }
//   };}

// // Component to display user info
// function User() {
//     const [user, setUser] = useRecoilState(userState)

//     // Show recoil is alive by setting to user3 after a bit
//     useEffect(() => {
//       // setTimeout(() => {setUser(user3);}, 2000);
//       console.log(user);   
//     }, [])
    
//     return <div>
//         <strong className='username'>{user.username}</strong>
//         <p className='bio'>{user.bio}</p>
//     </div>
// }

// // Faux SSR "loading" user2 into the initial state
// export async function getServerSideProps() {
//     const initialRecoilState = {
//         user: user2
//     }
//     console.log("Created initial Recoil state:", initialRecoilState)
//     return {
//         props: {initialRecoilState}
//     }
// }

// export default function Home({initialRecoilState={}}) {
//     console.log('Rendering with initial Recoil state:', initialRecoilState)
//     return (
//         <RecoilRoot initializeState={initializeRecoilState(initialRecoilState)}>
//             <User />
//             1
//         </RecoilRoot>
//     )
// }


import styled from '@emotion/styled';
import media, { getBreakPoints } from 'css-in-js-media'
import { useRouter } from 'next/router'
import { useEffect } from 'react';
getBreakPoints();

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { SearchMarginDiv } from 'styles/searchStyles/SearchStyle';



const TestPage = () => {  
  return (
    <></>
  )
}

export default TestPage
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import './header.module.css'


function SearchButton (props) {
  const router = useRouter()

function handleClick(){
console.log('click ', props.keywords, 'click ', props.location)
}

return(
<div id='search'>
    {/* <Link href="/Search/[keywords]" as={`/Search/${props.keywords}`}> */}
<Link href="/Search">
<button onClick={handleClick} type="search">Search</button>
</Link>
 </div>
)}


export default SearchButton
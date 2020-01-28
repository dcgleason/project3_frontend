import SearchRes from '../components/SearchRes'
// import Head from 'next/head'
// import Fetch from "isomorphic-unfetch";

import Header from '../components/Header'

function Search(props) {

// console.log(props)

// if (props !== undefined){
//     Search.getInitialProps = async (props) => {
//     Fetch('https://project3-restaurant-finder.herokuapp.com/restaurants')
//         .then(response => response.json())
//         .then(data => {
//             console.log(data)
//         }
//         )
//         .catch(err => {
//             console.error({ err })
//         })
//     }
// }
// else 
// Fetch('https://project3-restaurant-finder.herokuapp.com/restaurants')
//     .then(response => response.json())
//     .then(data => {
//         console.log('undefined ',data)
//     }
//     )
//     .catch(err => {
//         console.error({ err })
//     })
    return (
        <>
            <header>
                <Header />
            </header>
            <SearchRes />
        </>
    )
}

export default Search
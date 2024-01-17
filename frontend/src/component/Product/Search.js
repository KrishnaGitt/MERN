import React, { Fragment, useState } from 'react'
import "./Search.css"
export const Search = ({history}) => {
let [keyword,setKeyWord]=useState("");
const searchSubmitHandler=(e)=>{
        e.preventDefault()
        if(keyword?.trim()){
            history.push(`/products/${keyword}`)
        }else{
            history.push("/products")
        }
    }

  return (
    <Fragment>
        <form className='searchBox' onSubmit={searchSubmitHandler}>
            <input
                type="text"
                placeHolder="Search the item here......"
                onChange={(e)=>setKeyWord(e.target.value)}
            />
            <input type="submit" value="search"/>
        </form>
    </Fragment>
  )
}

export default Search;
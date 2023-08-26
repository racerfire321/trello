"use client"
import React from 'react'
import {useState,useEffect} from 'react'
import Image from 'next/image'
import { FaSearch } from 'react-icons/fa'
import Avatar from 'react-avatar'
import fetchSuggestion from '@/libs/fetchSuggestion'
import { FaUserCircle } from 'react-icons/fa'

import { useBoardState } from '@/store/BoardStore'
const Header = () => {
  const[searchString,setSearchString] = useBoardState((state) => [
    state.searchString ,
    state.setSearchString,
    state.board,
  ])
  const[board] = useBoardState((state) => [
    state.board,
  ])
  
  const[loading,setLoading]= useState<Boolean>(false);
  const[suggestion,setSuggestion] = useState<string>("");
  useEffect(()=>
{
  
  if(board.columns.size === 0)return;
  setLoading(true);
  const fetchSuggestionFunc = async() =>{
    const suggestion = await fetchSuggestion(board);
    setSuggestion(suggestion);
    setLoading(false);
  }
  
  fetchSuggestionFunc();
},[board]);
  return (
    <>
   <div className='flex flex-col md:flex-row items-center p-5  bg-gray-500/10 rounded-b-2xl'>
          
          <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-br  from-pink-400 to-[#0055D1] rounded-md filter blur-3xl opacity-50 -z-30"/>
           <Image src="https://links.papareact.com/c2cdd5"
            alt='trello logo'
            width={300}
            height={100}
            className='w-44 md:w-56 pb-10 md:pb-0 object-contain'
            />
            <div className='flex items-center space-x-5 flex-1 justify-end w-full '>
              <form  className='flex items-center space-x-5 bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial'>
                <FaSearch  className='h-6 w-6 text-gray-400'/>
              <input type="text" placeholder='search' value={searchString}
              onChange={(e)=> setSearchString( e.target.value)}
              className='flex-1 outline-none p-2' />
              <button type='submit'  hidden>search</button>
              </form>
              <Avatar name='Bitisha Maharjan' round color='#0055D1' className='w-10 h-4'/>
              </div>
              </div>
              <div className=' flex items-center justify-center px-5 md:pt-5 py-2'>
                <p className='flex items-center p-5 text-sm font-light px-5 shadow-xl w-fit bg-white italic max-w-3xl text-[#0055D1]'>
                
                
                <FaUserCircle className={`inline-block h-10 w-10 text-[#0055D1] mx-4 ${loading && "animate-spin"}`} />GPT is sumarizing your tack for the day
               </p>
                
              </div>
              
            
            
        
    </>
    
  )
}

export default Header
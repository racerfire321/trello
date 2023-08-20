"use client"
import { useBoardState } from '@/store/BoardStore'
import {useEffect} from 'react'
import React from 'react'

const Board = () => {
const getBoard= useBoardState((state) => state.getBoard)
useEffect(() =>{
    getBoard();
},[getBoard]);
  return (
    <div>Board</div>
  )
}

export default Board
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Form from './components/Form';
import './App.css';
import Test from './components/Test';

function App() {
  const [roomId,setRoomId] = useState('');
  const [user,setUser] = useState('');
  return (
    <>
   {/*  <Form/> */}
    <Test/>
    </>
  )
}

export default App;
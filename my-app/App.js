import React from 'react';
import { StatusBar } from 'react-native';
import Home from './src/pages/Home';
import Result from './src/pages/Result';

export default function App() {

  return (
    <>
    <StatusBar 
    barStyle='default'
    hidden={true}
    />
    <Home />

    </>
  )
}
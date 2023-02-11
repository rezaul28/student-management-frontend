import React from 'react'
import AddStudent from '../comp/addStudent'
import Header from '../comp/header'
import Input from '../comp/input'
import EditStudent from '../comp/editStudent'
import DeleteStudent from '../comp/deleteStudent'

export default function Home() {
  return  <div className="App">
     <Header />
     <AddStudent/>
     <EditStudent/>
     <DeleteStudent/>
   </div> 
}

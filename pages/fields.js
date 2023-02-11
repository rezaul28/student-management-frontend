import React from 'react'
import Header from '../comp/header'
import Field from '../comp/fields'
import DeleteFields from '../comp/deleteFields'
import AddFields from '../comp/addField'

export default function EditStudent() {
  return  <div className="App">
     <Header/>
     <Field/>
     <AddFields/>
     <DeleteFields/>
   </div> 
}

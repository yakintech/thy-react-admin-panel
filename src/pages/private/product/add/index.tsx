import { TextField } from '@mui/material'
import React, { useState } from 'react'
import { useContext } from 'react'
import { SettingsContext, SettingsContextType } from '../../../../context/SettingsContext'
import TAsyncAutocomplete from '../../../../compoents/core-components/autocomplete'


function Add() {

  const [name, setname] = useState("")
  const {settings} = useContext(SettingsContext) as SettingsContextType

  return <>
    <div dir={settings.direction}>
      <TAsyncAutocomplete url="api/categories" onchange={(value) => console.log(value)} />
      <TextField label="Name" value={name} onChange={(e) => setname(e.target.value)} />
    </div>
  </>
}

export default Add
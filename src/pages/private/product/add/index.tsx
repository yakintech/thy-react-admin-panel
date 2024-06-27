import { TextField } from '@mui/material'
import React, { useState } from 'react'
import { useContext } from 'react'
import { SettingsContext, SettingsContextType } from '../../../../context/SettingsContext'


function Add() {

  const [name, setname] = useState("")
  const {settings} = useContext(SettingsContext) as SettingsContextType

  return <>
    <div dir={settings.direction}>
      <TextField label="Name" value={name} onChange={(e) => setname(e.target.value)} />
    </div>
  </>
}

export default Add
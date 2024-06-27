import React, { useContext } from 'react'
import { SettingsContext, SettingsContextType } from '../../../context/SettingsContext'
import { FormControlLabel, FormGroup, Switch } from '@mui/material'

function Settings() {

    const { settings, setSettings } = useContext(SettingsContext) as SettingsContextType

    return <>
        <div>
            <label htmlFor="">Color</label>
            <input type="color" value={settings.primaryColor} onChange={(e) => setSettings({ primaryColor: e.target.value, direction:settings.direction})} />
        </div>


        <div>
            <FormGroup>
                <label>Direction</label>
                <FormControlLabel
                    control={<Switch
                        checked={settings.direction === "rtl"}
                        onChange={(e) => setSettings({ direction: e.target.checked ? "rtl" : "ltr" })}
                    />}
                    label={settings.direction === "rtl" ? "RTL" : "LTR"}
                />
            </FormGroup>
        </div>

    </>
}

export default Settings
import React, { createContext, useState } from 'react'


export const SettingsContext = createContext<SettingsContextType>({} as SettingsContextType)


export const SettingsProvider = ({ children }: any) => {
    const [settings, setSettings] = useState<Settings>({ direction: "ltr" })

    return <SettingsContext.Provider value={{ settings, setSettings }}>
        {children}
    </SettingsContext.Provider>
}





export type SettingsContextType = {
    settings: Settings
    setSettings: (settings: Settings) => void
}


interface Settings {
    direction : "rtl" | "ltr"
}
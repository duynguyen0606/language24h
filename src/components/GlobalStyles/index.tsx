import './GlobalStyles.scss'
import React, { ReactNode } from 'react'

interface Props {
    children: React.ReactElement
}

const GlobalStyles = ({children}: Props) => {
    return children
}

export default GlobalStyles
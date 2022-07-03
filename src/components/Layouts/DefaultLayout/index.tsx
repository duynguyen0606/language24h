import Header from './Header'
import Footer from './Footer'
import { ReactNode } from 'react'

interface Children {
    children: ReactNode
}

function DefaultLayout({ children }: Children) {
    return (
        <div>
            <Header />
            <div>{children}</div>
            <Footer />
        </div>
    )
}

export default DefaultLayout

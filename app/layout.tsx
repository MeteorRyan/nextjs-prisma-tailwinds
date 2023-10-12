import '@/styles/global.css'
import Header from './components/Header'



const RootLayout = ({ children }) => {

    return (
    <html lang="en">
        <body>
        <Header title="DryPowder" />
            {children}
        </body>
    </html>
)}

export default RootLayout
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"

const PageLayouts = (props) => {
    return (
        <>
            <Navbar />
            {props.children}
            <Footer />
        </>
    )
}

export default PageLayouts;
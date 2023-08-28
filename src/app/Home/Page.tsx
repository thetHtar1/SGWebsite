import Menu from "@/Components/menu/Menu"
import HomeBodyComponent from '../../Components/HomeBody/HomeBody'
import FooterCurve from "@/Components/FooterCurve"
import Projects from "@/Components/Projects"
import SlidingImages from "@/Components/SlidingImages"
import Footer from "@/Components/footer/Footer"

const HomePage=()=>{
    return(
        <div>
            <Menu/>
            <HomeBodyComponent/>
            <Projects/>
<SlidingImages/>
<FooterCurve/>
    <Footer/>
        </div>
    )
}
export default HomePage
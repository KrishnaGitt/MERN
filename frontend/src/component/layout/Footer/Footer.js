import  playStore from "../../../images/products/1.jpg"
import  appStore from "../../../images/products/2.jpg"
import "./Footer.css"
const Footer=()=>{
    return (
      
        <div class="footer">
             <div class="leftFooter">
                <img src={playStore}/>
                <img src={appStore}/>
                leftFooter</div>
             <div class="middleFooter">
                <h1>Ecommerce</h1>
                <p1>High Quality is our first Priority</p1>
                <p>copy right &copy;Krishna</p>
             </div>
             <div class="rightFooter">
                <p>Follow us:</p>
                <a href="www.google.com">Google</a>
                <a href="www.youtube.com">Youtube</a>
                <a href="www.insagram.com">instagram</a>
                middleFooter</div>


        </div>
    )
}
export default Footer
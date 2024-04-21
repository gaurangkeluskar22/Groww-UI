import './Cards.css'
import Pic1 from '../../assets/pic1.webp';
import Pic2 from '../../assets/pic2.webp';


const Cards = () => {
    return(
        <div className='Cards-Wrapper'>
            <div className="card1">
                <span>
                    News<br></br>
                    <br></br>
                    More than Half Nifty 50.
                    <br>
                    </br>
                    The Additional Survelience measure (ASM) framework was introduced to protect investors.
                </span>
            </div>
            <img src={Pic2} alt='pic-2' className='card4'/>
            <img src={Pic1} alt='pic-1' className='card2'/>
          
            <div className="card3">
                <span>
                    World of the day<br></br>
                    <br></br>
                    Additional Survelience Measure
                    <br></br>
                    The Additional Survelience measure (ASM) framework was introduced to protect investors.
                </span>
            </div>
        </div>
    )
}

export default Cards
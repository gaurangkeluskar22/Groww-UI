import './BillSection.css'
import BillImg from '../../assets/BillImg.webp'
import Bill from '../../assets/Bill.webp'

const BillSection = () => {
    return(
        <div className='BillSection-Wrapper'>
            <div className='BillSection-left hidden'>
                <img src={BillImg} className="BillSection-Img" alt='Bill-building'/>
                <span className='BillSection-Title'> All your bills in<br></br>
                    one place.
                </span>
                <span className='BillSection-SubTitle'>Apply for loan, get it within minites.</span>
                <button className='BillSection-Button'>Know More</button>
            </div>
            <div className='BillSection-right hiddenRight'>
                <img src={Bill} alt="Bill" className='Bill-Img'/>
            </div>   
        </div>
    )
}

export default BillSection
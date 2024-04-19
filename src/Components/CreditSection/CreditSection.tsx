import './CreditSection.css'
import CreditImg from '../../assets/credit.webp'
import CreditBuilding from '../../assets/CreditBuilding.webp'

const CreditSection = () => {
    return(
        <div className='CreditSection-Wrapper'>
            <div className='CreditSection-left'>
                <img src={CreditBuilding} className="CreditSection-Building-Img" alt='credit-building'/>
                <span className='CreditSection-Title'> Credit,<br></br>
                    when you need it.
                </span>
                <span className='CreditSection-SubTitle'>Apply for loan, get it within minites.</span>
                <button className='CreditSection-Button'>Know More</button>
            </div>
            <div className='CreditSection-right'>
                <img src={CreditImg} alt="credit" className='CreditSection-Img'/>
            </div>   
        </div>
    )
}

export default CreditSection
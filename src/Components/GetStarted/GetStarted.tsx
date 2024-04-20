import './GetStarted.css'
import BackgroundImg from '../../assets/background.webp'

const GetStarted = () => {
    return(
        <div className="GetStarted-wrapper">
            <div className='GetStarted-details'>
            <div className='GetStarted-Title'>All things finance,</div>
            <div className='GetStarted-Title'>right here.</div>
            <div className='GetStarted-SubTitle'>Built for a growwing India.</div>
            <button className='GetStarted-Button'>Get started</button>
            </div>
            <div className='GetStarted-Background-Wrapper'>  
                <img alt="background-img" src={BackgroundImg} className='GetStarted-Background-Img'/>
            </div>
        </div>
    )
}

export default GetStarted



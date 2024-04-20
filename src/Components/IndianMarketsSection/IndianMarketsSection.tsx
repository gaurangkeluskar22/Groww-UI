
import MobileStocks from '../../assets/mobile-stocks.webp'
import Building from '../../assets/indianStocksBuilding.webp'
import './IndianMarketsSection.css'
import StockHisto from '../../assets/stockHisto.webp'
import Fno from '../../assets/fno.webp'
import Mt from '../../assets/mutualFund.webp'
import { IoIosArrowForward } from "react-icons/io";

const IndianMarketsSection = () => {
    return(
        <div className="IndianMarkets-Wrapper">
            <div className='IndianMarkets-left-section'>
                <img src={Building} alt='building' className='IndianMarkets-building'/>
                <span className='IndianMarkets-Title'>Indian markets at<br></br>your fingertips.</span>
                <span className='IndianMarkets-SubTitle'>Long-term or Short-term, high risk or low risk. Be the kind of investor <br></br>you want to be.</span>
                <div className='IndianMarkets-options'>
                    <div className='IndianMarkets-options-wrapper'>
                        <img alt='logo' src={StockHisto} className='IndianMarkets-options-logo'></img>
                        <span className='IndianMarkets-options-text'>Stocks & Intraday</span>
                    </div>
                    <IoIosArrowForward/>
                </div>
                <div className='IndianMarkets-options'>
                    <div className='IndianMarkets-options-wrapper'>
                        <img alt='logo' src={Mt} className='IndianMarkets-options-logo'></img>
                        <span className='IndianMarkets-options-text'>Mutual Funds & SIP's</span>
                    </div>
                    <IoIosArrowForward/>
                </div>
                <div className='IndianMarkets-options'>
                    <div className='IndianMarkets-options-wrapper'>
                        <img alt='logo' src={Fno} className='IndianMarkets-options-logo'></img>
                        <span className='IndianMarkets-options-text'>Futures & Options</span>
                    </div>
                    <IoIosArrowForward/>
                </div>
            </div>
            <div className="IndianMarkets-Img-Wrapper">
                <img src={MobileStocks} alt='mobile-stocks' className="IndianMarkets-Img"/>
            </div>
        </div>
    )
}

export default IndianMarketsSection
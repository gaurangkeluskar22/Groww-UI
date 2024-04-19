import './FinanceSection.css'
import { FaGraduationCap } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

const FinanceSection = () => {
    return(
        <div className='Finance-Wrapper'>
            <FaGraduationCap fontSize={100} color='#44475B' />
            <span className='Finance-Title'>Finance simplified,<br/>
            in your language.</span>
            <div className='Finance-options'>
                <div className='Finance-options-div'>
                    <div className='Finance-options-button'>Youtube</div>
                    <FaArrowRight />
                </div>
                <div className='Finance-options-div'>
                    <div className='Finance-options-button'>Groww Digest</div>
                    <FaArrowRight />
                </div>
            </div>
        </div>
    )
}

export default FinanceSection
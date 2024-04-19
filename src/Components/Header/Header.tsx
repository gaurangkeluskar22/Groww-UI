import './Header.css'

const Header = () => {
    return(
        <div className="header">
            <div className='header-logo'>
                <img src='https://resources.groww.in/web-assets/img/website-logo/groww-logo-light.svg'/>
            </div>

            <input className='header-input' placeholder='What are you looking for today?'/>
            
            <button className='header-button'>Login/Register</button>
        </div>
    )
}

export default Header
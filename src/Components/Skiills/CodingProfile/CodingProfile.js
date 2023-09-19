import { useContext } from 'react'
import './CodingProfileStyle.css'
import { ThemeContext } from '../../../Context/ThemeContext'

const CodingProfile = ({heading,username,link}) => {
    const dark = useContext(ThemeContext);
  return (
    <div className='coding-profile-main'>
            {/* <div className='coding-profile-left'>
                <img src={url}/>
            </div> */}
            <div className='coding-profile-right'>
                <div className='coding-profile-right-1'>
                </div>
                <div className='coding-profile-right-2'>
                    <h3 className={`${dark && 'text-dark-green'}`}>{heading}</h3>
                    <a target='new' className={`${dark && 'text-dark-golden'}`} href={link}>{username}</a>
                </div>
            </div>
        </div>
  )
}

export default CodingProfile
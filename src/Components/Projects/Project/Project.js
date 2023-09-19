import { useContext } from 'react'
import './ProjectStyle.css'
import { ThemeContext } from '../../../Context/ThemeContext';

const Project = ({url,heading,para,techstack,reverse=false,videoo=false}) => {

    function handleMouseEnter(e){
        console.log(e.target);
        if (e.target.paused || e.target.ended) {
            e.target.play();
        }
    }

    function handleMouseLeave(e){
        if (!e.target.paused) {
            e.target.pause();
            e.target.currentTime = 0;
        }
        
    }

    const videoOrImages = 
        videoo ? 
            (<video src={url} 
            controls={true}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            muted='true'
            loop="true"
            />)
        :     
            (<img src={url} alt='loading'/>);

    const dark = useContext(ThemeContext);
    return (
        <div className={`project-main ${reverse && 'reverse'} ${dark && 'inside-dark'}`}>
            <div className='project-left'>


                {videoOrImages}

            </div>
            <div className='project-right'>
                <div className='project-right-1'>
                    <h3 className={`${dark && 'text-dark-yellow'}`}>{heading}</h3>
                    <p className={`${dark && 'text-dark-grey'}`}>{para}</p>
                </div>

                <div className='project-right-2'>
                    {techstack.map((item,ind)=>{
                        return (
                            <p key={ind}>{item}</p>
                        )
                    })}

                </div>

                <div className={`project-right-3`}>
                    <button className={`${dark && 'text-dark-white dark-btn'}`}>GitHub</button>
                    {/* <button className={`live-btn ${dark && 'text-dark-green dark-btn'}`} disabled>Live Demo</button> */}
                </div>

            </div>
        </div>
    )
}

export default Project
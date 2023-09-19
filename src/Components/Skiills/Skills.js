import './SkillsStyle.css'
import { useContext } from 'react'
import { ThemeContext } from '../../Context/ThemeContext'
import Skill from './Skill/Skill'
import CodingProfile from './CodingProfile/CodingProfile.js';

const Skills = () => {

    const dark = useContext(ThemeContext);

    return (
        <div className={`skills-main ${dark && 'dark'}`}>
            <div className='skills-main-top'>
                <h3 className={`${dark && 'text-dark-sky'}`}>TECHNICAL SKILLS</h3>
                <h2 className={`${dark && 'text-dark-white'}`}>More about me 👇</h2>
            </div>
            <div className='skills-bottom'>

                <div className='skills-bottom-left'>
                    <Skill tech='Java' rate='6' />
                    <Skill tech='Javascript' rate='9' />
                    <Skill tech='Typecript' rate='5' />
                    <Skill tech='Reactjs' rate='8' />
                    <Skill tech='Nestjs' rate='6' />
                    <Skill tech='Data Stutcture & Alogorithm'  rate='7'/>
                    <Skill tech='Database Management System'  rate='6'/>
                </div>

                <div className='skills-bottom-right'>
                    <div className='skills-bottom-right-1'>
                        <h2>Coding Profile</h2>
                    </div>
                    <div className='skills-bottom-right-2'>
                        <CodingProfile
                            link='http://www.leetcode.com/monukumar012'
                            heading='Leetcode | Max Rating:1758'
                            username='@monukumar012'
                        />
                        <CodingProfile
                            link='https://auth.geeksforgeeks.org/user/m_o_n_u'
                            heading='GFG | Institution Rank 1'
                            username='@m_o_n_u'
                        />
                        <CodingProfile
                            link='https://www.codechef.com/users/monukumar123'
                            heading='Codechef | Max Rating:1529'
                            username='@monukumar012'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
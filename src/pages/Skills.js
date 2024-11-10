import React from 'react';
import useDeviceType from '../components/DeviceType';

const Skills = () => {
    const isMobile = useDeviceType();
    const skills = [
        { 
            name: 'React', 
            years: 3.6, 
            proficiency: 'Advanced',
            icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'
        },
        { 
            name: 'Angular', 
            years: 2.5, 
            proficiency: 'Intermediate',
            icon: 'https://angular.io/assets/images/logos/angular/angular.svg'
        },
        { 
            name: 'TypeScript', 
            years: 4, 
            proficiency: 'Advanced',
            icon: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg'
        },
        { 
            name: 'JavaScript', 
            years: 5.6, 
            proficiency: 'Expert',
            icon: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'
        },
        { 
            name: 'CSS', 
            years: 5.6, 
            proficiency: 'Expert',
            icon: 'https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg'
        },
        { 
            name: 'Bootstrap', 
            years: 3, 
            proficiency: 'Advanced',
            icon: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg'
        },
        { 
            name: 'HTML5', 
            years: 5.6, 
            proficiency: 'Expert',
            icon: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg'
        },
        { 
            name: 'Git', 
            years: 5.6, 
            proficiency: 'Expert',
            icon: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg'
        }
    ];

    return (
        <div >
            <div className="content-header">
                <h2>Skills / Roles & Responsibilities</h2>
            </div>
            <div className='skills-roles'>
            <section id="skills">
                <table className="skills-table">
                    <thead>
                        <tr>
                            <th>Skill</th>
                            <th>Years of Experience</th>
                            {!isMobile && <th>Proficiency</th>}
                        </tr>
                    </thead>
                    <tbody>
                        {skills.map((skill, index) => (
                            <tr key={index}>
                                <td className="skill-name">
                                    <img 
                                        src={skill.icon} 
                                        alt={`${skill.name} Logo`} 
                                        width="30" 
                                        height="30" 
                                        style={{ marginRight: '8px', verticalAlign: 'middle' }}
                                    />
                                    {skill.name}
                                </td>
                                <td>{skill.years} years</td>
                                {!isMobile && <td className="proficiency">
                                    <div className={`proficiency-bar ${skill.proficiency.toLowerCase()}`}>
                                        {skill.proficiency}
                                    </div>
                                </td>}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
            <section id="roles-responsibilities">
                {isMobile && <h2>Roles & Responsibilities</h2>}
                <ul>
                <li><i class="fas fa-code"></i> Developed responsive and interactive user interfaces using React and Angular, ensuring a seamless experience across all devices.</li>
                <li><i class="fas fa-paint-brush"></i> Collaborated with UI/UX designers to translate design mockups into functional code, improving user experience.</li>
                <li><i class="fas fa-plug"></i> Integrated front-end interfaces with back-end APIs, ensuring smooth communication and functionality.</li>
                <li><i class="fas fa-cogs"></i> Built reusable components and implemented modern design patterns to streamline development and maintain consistency.</li>
                <li><i class="fas fa-tachometer-alt"></i> Optimized the performance of web applications for faster load times and better responsiveness.</li>
                <li><i class="fas fa-git-alt"></i> Worked with version control tools like Git, managing deployments on platforms like Azure and AWS.</li>
                <li><i class="fas fa-bug"></i> Ensured code quality and stability through unit testing, writing test cases, and resolving production issues efficiently.</li>
                <li><i class="fas fa-users-cog"></i> Engaged in Agile/Scrum processes, collaborating within cross-functional teams to meet project goals and deadlines.</li>
                </ul>
            </section>
            </div>
        </div>
    );
};

export default Skills;

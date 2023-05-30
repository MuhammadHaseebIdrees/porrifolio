import React from 'react'
import '../AStyles/AboutSkills.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
    useClassNames: true,
}
);
const AboutSkills = () => {
    return (

        <div className='about_skills_main'>

            <div className="skills_heading"
                data-aos="fade-up"
                data-aos-offset="120"
                data-aos-duration='500'
                data-aos-once="false"
            >
                Skills
            </div>

            <div className="about_skills_bars">

                <div className="outer_text_and_bar_div">

                    <div className="text_of_language_skill">
                        HTML
                    </div>

                    <div className="single_bar_of_skill"
                        data-aos="fade-up new-animation"
                        data-aos-offset="120"
                        data-aos-duration='500'
                        data-aos-once="false"
                        
                    >
                        <div className="fill_inside_bar html_color_skill_bar"></div>
                    </div>

                </div>

                <div className="outer_text_and_bar_div">

                    <div className="text_of_language_skill">
                        CSS
                    </div>

                    <div className="single_bar_of_skill"
                        data-aos="fade-up new-animation"
                        data-aos-offset="120"
                        data-aos-duration='500'
                        data-aos-once="false"
                    >
                        <div className="fill_inside_bar css_color_skill_bar"></div>
                    </div>

                </div>

                <div className="outer_text_and_bar_div">

                    <div className="text_of_language_skill">
                        Java Script
                    </div>

                    <div className="single_bar_of_skill"
                        data-aos="fade-up new-animation"
                        data-aos-offset="120"
                        data-aos-duration='500'
                        data-aos-once="false"
                    >
                        <div className="fill_inside_bar js_color_skill_bar"></div>
                    </div>

                </div>

                <div className="outer_text_and_bar_div">

                    <div className="text_of_language_skill">
                        React JS
                    </div>

                    <div className="single_bar_of_skill"
                        data-aos="fade-up new-animation"
                        data-aos-offset="120"
                        data-aos-duration='500'
                        data-aos-once="false"
                    >
                        <div className="fill_inside_bar react_color_skill_bar"></div>
                    </div>

                </div>

            </div>

        </div>

    )
}

export default AboutSkills
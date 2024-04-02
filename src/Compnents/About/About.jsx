import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'


const About = () => {
  return (
    <div className='about'>
<div className="about-left">
<img src={about_img} alt="" className='about-img'/>
<img src={play_icon} alt="" className='play-icon'/>
</div>
<div className="about-right">
    <h3>ABOUT UNIVERSITY</h3>
    <h2>Nurturing Tomorrow's Leadrs Today </h2>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
         nisi cum minima. Sed rerum vero rem autem sunt harum, architecto unde nam aliquid
          incidunt impedit obcaecati repellat totam  nihil perferendis sit laudantium!
           Sunt quia voluptatibus debitis dolorem, aliquam inventore fugiat!</p>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, 
            cum dolor! Sed aspernatur sit commodi itaque voluptatem veniam, rem perspiciatis
             obcaecati, sint necessitatibus, architecto dolorem.</p>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia necessitatibus reiciendis quis, eligendi deserunt 
                pariatur dolore molestiae exercitationem deleniti accusantium consectetur
                 laudantium numquam ipsa dolorem laboriosam alias vitae eius odio.</p>
</div>
    </div>
  )
}

export default About
import './About.scss'

import profile from "../../images/profile.jpeg"

export default function About() {
  return (
    <section className='container About' id='About'>
        <h1>Getting to Know Me</h1>
        <div className='me'>
          <h2>Who Am I?</h2>
          <p>
              I am a full-stack software developer and proud owner of two lovable orange tabby cats named Ozwald and Cozmo. I love keeping active by working out, dancing, and
              playing basketball. Reading novels, manga and
              webcomics or watching k-dramas, anime, and other shows allow me to escape into the world of fiction and fantasy.
              For movies, I am your typical rom-com fan. I love trying new things and
              seeing what the world has to offer!
          </p>
        </div>
        <div>
          <h2>My Journey</h2>
          <p>
              I graduated from the University of Alberta with a specialization in
          Cell Biology. My first full-time job as the Medical Office Manage at a denture clinic.
          Although not relating to my degree, I still took the opportunity to
          start my professional career and learn what I could. I was introduced to
          the world of coding with Python as my first language. My interest and
          fascination with coding continued and the chance to learn more at
          General Assembly had come. Through their Software Engineering Immersive
          Bootcamp, I was able to explore more languages and stacks, improve my
          skills and knowledge through labs, and apply each unit's content to
          personalized apps! Now that I have finished this exciting new chapter in
          my life, I'm looking forward to finding a company that will help me
          continue to hone these skills and grow as a developer.
          </p>
        </div>
        <div>
          <h2>What I Know</h2>
          <table>
            <tr>
              <td>HTML</td>
              <td>Python</td>
              <td>Express.js</td>
              <td>Git</td>
            </tr>
            <tr>
              <td>CSS</td>
              <td>Django</td>
              <td>Node.js</td>
              <td>GitHub</td>
            </tr>
            <tr>
              <td>JavaScript</td>
              <td>PostgreSQL</td>
              <td>Mongoose</td>
            </tr>
            <tr>
              <td>React</td>
              <td>MongoDB</td>
            </tr>
          </table>
        </div>
        <div>
          <h2>What I Bring</h2>
          <p>
              I look forward to adding my kind, bubbly self to any workplace. I
              have a hard working attitude and a desire to learn and grow both
              professionally and personally. Working with others is always something
              to look forward to, but I can also work well on my own! Communication is
              a key attribute for me as I have been developing this skill through 8+
              years of customer service. I enjoy building connections with clients
              and coworkers as we journey towards our mutual goal. In the case of
              software development, I look forward to making practical, aesthetically
              pleasing apps that bring out the client's unique business and
              personality!
          </p>
        </div>
    </section>
  )
}

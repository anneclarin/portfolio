import './Portfolio.scss'

export default function Portfolio() {
  return (
    <section className='Portfolio' id='Portfolio'>
        <h1>My Projects</h1>
        <div className="project-container">
            <h3>Mancala</h3>
            <h4>Desciption</h4>
            <ul>
                <li>2-player browser game of the classic board game “Mancala”.</li>
                <li>Tech Stack: HTML, CSS, JavaScript</li>
            </ul>
            <a href="https://github.com/AnneClarin/mancala">Click Here to View</a>
        </div>
        <div className="project-container">
            <h3>KitchenKeeper</h3>
            <h4>Desciption</h4>
            <ul>
                <li>Personalized food and supplies tracker with the option to include recipes.</li>
                <li>Tech Stack: MongoDB, ExpressJS, Node.js</li>
            </ul>
            <a href="https://kitchenkeeper.up.railway.app/">Click Here to View</a>
        </div>
        <div className="project-container">
            <h3>KnowMe.app</h3>
            <h4>Desciption</h4>
            <ul>
                <li>Friendship test maker and taker site to see who knows you the best.</li>
                <li>Tech Stack: Python, PostgreSQL, Django</li>
            </ul>
            <a href="https://github.com/AnneClarin/knowme_app">Click Here to View</a>
        </div>
        <div className="project-container">
            <h3>ChoreChamp</h3>
            <h4>Desciption</h4>
            <ul>
                <li>A helper to stay on top of your single or recurring chores.</li>
                <li>Tech Stack: MongoDB, ExpressJS, React, Node.js</li>
            </ul>
            <a href="https://chore-champ.herokuapp.com/">Click Here to View</a>
        </div>
    </section>
  )
}

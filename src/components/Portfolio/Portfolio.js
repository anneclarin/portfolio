import './Portfolio.scss'

import mancala from '../../images/Mancala.jpeg'
import kitchenkeeper from '../../images/KitchenKeeper.jpeg'
import knowmeapp from '../../images/KnowMeApp.jpeg'
import chorechamp from '../../images/ChoreChamp.jpeg'

export default function Portfolio() {
  return (
    <section className='container Portfolio' id='Portfolio'>
        <h1>My Projects</h1>
        <div className="project-container">
            <h2>Mancala</h2>
            <h4>Desciption</h4>
            <p>
            Frontend browser game of the classic 2-player board game “Mancala” using HTML, CSS, JavaScript.
            Players take turns selecting which pit to move and the beads will automatically disperse. The
            game also accounts for the Steal and Play Again special moves. Winner logic is also featured
            following the regular rules.
            </p>
            <img src={mancala} alt='Mancala Screenplay'/>
            <div className='project-links'>
                <a href="https://github.com/AnneClarin/mancala">View Repo</a>
                <a href="https://anneclarin.github.io/mancala/">Let's Play!</a>
            </div>
        </div>
        <div className="project-container">
            <h2>KitchenKeeper</h2>
            <h4>Desciption</h4>
            <p>
            Full-stack project using MongoDB, ExpressJS, Node.js for tracking the quantity and expiries of
            food and supplies with the option to include recipes. Initial features include adding new items, editing and deleting items, adding new recipes, and
            editing and deleting recipes.
            </p>
            <img src={kitchenkeeper} alt='KitchenKeeper Landing Page'/>
            <div className='project-links'>
                <a href="https://github.com/AnneClarin/kitchen-keeper">View Repo</a>
                <a href="https://kitchenkeeper.up.railway.app/">Start Tracking Your Kitchen!</a>
            </div>
        </div>
        <div className="project-container">
            <h2>KnowMe.app</h2>
            <h4>Desciption</h4>
            <p>
            Full-stack group project using Python, PostgreSQL, Django that allows users to make and take
            tests to see who knows them the best. Initial features include creating an account, logging,
            adding new tests, adding new questions, and adding questions to tests. <br/>
            Scrum Master/Frontend Developer: organized the Trello board, facilitated standups,
            and assisted with frontend functionality - primarily the HTML and JS.
            </p>
            <img src={knowmeapp} alt='KnowMe.app Logged In Landing Page'/>
            <div className='project-links'>
                <a href="https://github.com/AnneClarin/knowme_app">View Repo</a>
            </div>
        </div>
        <div className="project-container">
            <h2>ChoreChamp</h2>
            <h4>Desciption</h4>
            <p>
            Full-stack project using React, Node.js, MongoDB, ExpressJS to help users keep track of single
            and recurring chores. Initial features include creating an account, logging in, adding new
            chores for single-use or recurring dates, and marking them as completed.
            </p>
            <img src={chorechamp} alt='ChoreChamp Logged In Landing Page'/>
            <div className='project-links'>
                <a href="https://github.com/AnneClarin/chore-champ">View Repo</a>
                <a href="https://chore-champ.herokuapp.com/">Become a Chore Champ!</a>
            </div>
        </div>
    </section>
  )
}

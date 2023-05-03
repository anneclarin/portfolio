import "./Portfolio.scss";

import mancala from "../../images/Mancala.jpeg";
import kitchenkeeper from "../../images/KitchenKeeper.jpeg";
import budgetme from "../../images/BudgetMe.jpeg";
import chorechamp from "../../images/ChoreChamp.jpeg";

export default function Portfolio() {
  return (
    <section className="container Portfolio" id="Portfolio">
      <h1>My Projects</h1>
      <div className="project-container">
        <h2>Mancala</h2>
        <h4>Description</h4>
        <p>
          Frontend browser game of the classic 2-player board game “Mancala”
          using HTML, CSS, JavaScript. Players take turns selecting which pit to
          move and the beads will automatically disperse. The game also accounts
          for the Steal and Play Again special moves. Winner logic is also
          featured following the regular rules.
        </p>
        <img src={mancala} alt="Mancala Screenplay" />
        <div className="project-links">
          <a href="https://github.com/AnneClarin/mancala">View Repo</a>
          <a href="https://anneclarin.github.io/mancala/">Let's Play!</a>
        </div>
      </div>
      <div className="project-container">
        <h2>KitchenKeeper</h2>
        <h4>Description</h4>
        <p>
          Full-stack project using MongoDB, ExpressJS, Node.js for tracking the
          quantity and expiries of food and supplies with the option to include
          recipes. Initial features include adding new items, editing and
          deleting items, adding new recipes, and editing and deleting recipes.
        </p>
        <img src={kitchenkeeper} alt="KitchenKeeper Landing Page" />
        <div className="project-links">
          <a href="https://github.com/AnneClarin/kitchen-keeper">View Repo</a>
          <a href="https://kitchenkeeper.up.railway.app/">
            Start Tracking Your Kitchen!
          </a>
        </div>
      </div>
      <div className="project-container">
        <h2>ChoreChamp</h2>
        <h4>Description</h4>
        <p>
          Full-stack project using React, Node.js, MongoDB, ExpressJS to help
          users keep track of single and recurring chores. Initial features
          include creating an account, logging in, adding new chores for
          single-use or recurring dates, and marking them as completed.
        </p>
        <img src={chorechamp} alt="ChoreChamp Logged In Landing Page" />
        <div className="project-links">
          <a href="https://github.com/AnneClarin/chore-champ">View Repo</a>
          <a href="https://chore-champ.herokuapp.com/">Become a Chore Champ!</a>
        </div>
      </div>
      <div className="project-container">
        <h2>BudgetMe</h2>
        <h4>Description</h4>
        <p>
          Full-stack project using React, Node.js, MongoDB, ExpressJS to help
          users budget their finances. Initial features include creating an
          account, logging in, adding, editing, deleting transactions, filtering
          transactions by month and year, and seeing an overview of the month`s
          income, expenses, balance, and expenses per category.
        </p>
        <img src={budgetme} alt="BudgetMe Login Page" />
        <div className="project-links">
          <a href="https://github.com/anneclarin/budget-me">View Repo</a>
          <a href="https://budgetme.onrender.com/">BudgetMe, Budget You</a>
        </div>
      </div>
    </section>
  );
}

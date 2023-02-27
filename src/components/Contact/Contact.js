import './Contact.scss'

export default function Contact() {
  return (
    <section className='container Contact' id='Contact'>
      <h1>Now You Know a Bit About Me, Care To Chat?</h1>
      <p>I am looking to meet new people, build connections, and
          find opportunities for internships or Jr. Developer Positions. <br/> <br/>
          If you would like to chat, send me a message below and I'll be in
          touch! I look forward to hearing from you and thanks for visiting my site!</p>
      <form target="_blank" action="https://formsubmit.co/amtclarin@gmail.com" method="POST">
        <div className="form-group">
          <div className="form-row">
            <div className="col">
              <input type="text" name="name" className="form-control" placeholder="Full Name" required />
            </div>
            <div className="col">
              <input type="email" name="email" className="form-control" placeholder="Email Address" required />
            </div>
          </div>
        </div>
        <div className="form-group">
          <textarea placeholder="Your Message" className="form-control" name="message" rows="10" required></textarea>
        </div>
        <button type="submit">Send!</button>
      </form>
    </section>
  )
}

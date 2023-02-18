import './Contact.scss'

export default function Contact() {
  return (
    <section className='container Contact' id='Contact'>
      <h1>I would love to get in contact with you!</h1>
      <div>
        <p>I am looking to meet new people, build connections, and
            find opportunities for internships or Jr. Dev Jobs. <br/> <br/>
            If you would like to chat, send me a message below and I'll be in
            touch! I look forward to hearing from you!</p>
        <form target="_blank" action="https://formsubmit.co/amtclarin@gmail.com" method="POST">
          <div class="form-group">
            <div class="form-row">
              <div class="col">
                <input type="text" name="name" class="form-control" placeholder="Full Name" required />
              </div>
              <div class="col">
                <input type="email" name="email" class="form-control" placeholder="Email Address" required />
              </div>
            </div>
          </div>
          <div class="form-group">
            <textarea placeholder="Your Message" class="form-control" name="message" rows="10" required></textarea>
          </div>
          <button type="submit" class="btn btn-lg btn-dark btn-block">Send!</button>
        </form>
      </div>
    </section>
  )
}

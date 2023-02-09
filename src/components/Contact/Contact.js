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
        <form action="https://formsubmit.co/" method="POST">
          <div className='contact-info'>
            <label>Name</label>
            <input type='text' required />
            <label>Email</label>
            <input type='email' required />
          </div>
          <div className='message'>
            <label>Message for Anne</label>
            <textarea required/>
          </div>
          <button type='submit'>Send</button>
        </form>
      </div>
    </section>
  )
}

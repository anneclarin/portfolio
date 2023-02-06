import './Contact.scss'

export default function Contact() {
  return (
    <section className='container Contact page' id='Contact'>
        <h1>I would love to get in contact with you!</h1>
        <p>I am interested in meeting new people, building connections, and
            finding opportunities for internships or Jr. Dev Jobs. <br/>
            If you would like to chat, send me a message below and I'll be in
            touch! I look forward to hearing from you!</p>
        <form>
          <div className='contact-info'>
            <input type='text' placeholder='Name' required />
            <input type='email' placeholder='Email' required />
          </div>
          <div className='message'>
            <input type='text' placeholder='Message to Anne' />
          </div>
        </form>
    </section>
  )
}

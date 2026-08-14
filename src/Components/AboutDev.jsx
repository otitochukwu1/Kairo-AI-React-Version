export default function AboutDeveloper({ onClick }) {
  return (
    <div className="developer-container">

      <button className="needToGoHome" onClick={onClick}>
        <i className="fa-solid fa-arrow-left"></i>
      </button>

      <header className="developer-header">
        <h2>About the Developer</h2>
      </header>

      <div className="developer-card">
        <div className="developer-profile">
          <div className="developer-avatar">
            <i className="fa-solid fa-code"></i>
          </div>
          <div className="developer-info">
            <h3>Okoye Otitochukwu</h3>
            <span className="developer-title">JavaScript Developer</span>
            <span className="developer-location">
              <i className="fa-solid fa-location-dot"></i> Anambra State, Nigeria
            </span>
          </div>
        </div>

        <p className="developer-bio">
          Passionate JavaScript Developer dedicated to building responsive, efficient, and user-friendly web applications. Open to full-time roles, freelance projects, and contract work. Let's work together to bring your ideas to life!
        </p>

        <div className="developer-actions">
          <a href="https://port2-beta-drab.vercel.app/" target="_blank" rel="noopener noreferrer" className="dev-btn btn-primary">
            <i className="fa-solid fa-globe"></i>
            <span>Portfolio</span>
          </a>

          <a href="mailto:okoyeotito3@gmail.com?subject=Work%20Inquiry" className="dev-btn btn-secondary">
            <i className="fa-solid fa-envelope"></i>
            <span>Email Me</span>
          </a>

          <a href="https://wa.me/2349038679275" target="_blank" rel="noopener noreferrer" className="dev-btn btn-whatsapp">
            <i className="fa-brands fa-whatsapp"></i>
            <span>Chat on WhatsApp</span>
          </a>

          <a href="https://buy-me-a-cofee.vercel.app/" target="_blank" rel="noopener noreferrer" className="dev-btn btn-coffee">
            <i className="fa-solid fa-mug-hot"></i>
            <span>Buy Me a Coffee</span>
          </a>
        </div>
      </div>
    </div>
  )
}
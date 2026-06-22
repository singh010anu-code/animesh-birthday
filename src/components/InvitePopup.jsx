function InvitePopup({ onClose }) {
  return (
    <div className="invite-overlay">
      <div className="invite-popup">
        <button className="invite-close" onClick={onClose}>✕</button>

        <div className="invite-content">
          <h2>🥳 You're Invited!</h2>
          <p className="invite-subtitle">Join us for</p>
          <h3 className="invite-title">Animesh's Birthday Bash</h3>

          <div className="invite-details">
            <div className="detail-item">
              <span className="detail-label">📅 Date</span>
              <span className="detail-value">8 July 2026</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">📍 Place</span>
              <span className="detail-value">Revealed after RSVP ✨</span>
            </div>
          </div>

          <p className="invite-message">
            Help make it special by choosing a gift from the registry below!
          </p>

          <button className="invite-button" onClick={onClose}>
            Let's Go! 🎁
          </button>
        </div>
      </div>
    </div>
  )
}

export default InvitePopup

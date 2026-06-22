function GiftCard({ gift, isReserved, reservedBy, onToggleReserve }) {
  const hasLink = gift.link && gift.link !== '#'

  return (
    <div className="gift-card" style={{ '--color': gift.color }}>
      {isReserved && (
        <div className="reserved-banner">
          <span>RESERVED</span>
        </div>
      )}

      <div className="gift-image">
        {gift.image}
      </div>

      <div className="gift-content">
        <h3>{gift.name}</h3>
        <p className="price">{gift.price}</p>

        {isReserved && (
          <p className="reserved-by">Reserved by {reservedBy}</p>
        )}

        <div className="gift-actions">
          {hasLink ? (
            <a
              href={gift.link}
              target="_blank"
              rel="noopener noreferrer"
              className="link-btn"
            >
              View Link
            </a>
          ) : (
            <div className="link-btn" style={{ opacity: 0.6, cursor: 'default' }}>
              Contact for Details
            </div>
          )}
          <button
            onClick={onToggleReserve}
            className={`reserve-btn ${isReserved ? 'reserved' : ''}`}
          >
            {isReserved ? '❌ Unreserve' : '✓ Reserve'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default GiftCard

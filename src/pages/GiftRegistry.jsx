import { useState, useEffect } from 'react'
import GiftCard from '../components/GiftCard'
import InvitePopup from '../components/InvitePopup'
import '../styles/registry.css'

const defaultGifts = [
  {
    id: 1,
    name: 'Sony PlayStation 5 Console',
    price: '₹54,990',
    image: '🎮',
    link: 'https://www.flipkart.com/sony-playstation-5-console-825-gb/p/itm62f0f8b3c0bfb',
    color: '#003087'
  },
  {
    id: 2,
    name: 'Tattoo Session',
    price: '₹5,000',
    image: '🎨',
    link: '#',
    color: '#FF1744'
  },
  {
    id: 3,
    name: 'H&M Loose Fit Hoodie',
    price: '₹3,000',
    image: '👕',
    link: 'https://www.nykaafashion.com/h-m-loose-fit-hoodie-black/p/23177949',
    color: '#000000'
  },
  {
    id: 4,
    name: 'Whiskey Bottles',
    price: '₹5,000',
    image: '🥃',
    link: '#',
    color: '#8B4513'
  },
  {
    id: 5,
    name: 'Dark Knight Slim Fit Pants',
    price: '₹1,990',
    image: '👖',
    link: 'https://pantproject.com/products/dark-knight-slim-fit-power-stretch-pants',
    color: '#1F1F1F'
  },
  {
    id: 6,
    name: 'Timex Fashion Watch',
    price: '₹2,817',
    image: '⌚',
    link: 'https://shop.timexindia.com/products/tw000t310',
    color: '#4A90E2'
  },
  {
    id: 7,
    name: 'Sockscarving Premium Socks',
    price: '₹599',
    image: '🧦',
    link: 'https://sockscarving.in/pages/buy-4-5-6-byob',
    color: '#FF69B4'
  },
  {
    id: 8,
    name: 'Comet Aeres Sneakers',
    price: '₹5,299',
    image: '👟',
    link: 'https://www.wearcomet.com/',
    color: '#2C3E50'
  },
  {
    id: 9,
    name: 'By the Beach Fragrance',
    price: '₹560',
    image: '🌊',
    link: 'https://blabliblulife.com/products/by-the-beach',
    color: '#1E90FF'
  },
  {
    id: 10,
    name: 'Bombay Shirts Brown Shirt',
    price: '₹1,990',
    image: '👔',
    link: 'https://www.bombayshirts.com/products/bsc-brown-jacquard-flat-knit-shirt',
    color: '#6F4E37'
  },
  {
    id: 11,
    name: 'Silver Nautical Pendant',
    price: '₹1,500',
    image: '⛵',
    link: 'https://www.thementhing.com/products/the-men-thing-silver-nautical-north-star-circle-pendant',
    color: '#C0C0C0'
  },
  {
    id: 12,
    name: 'Colosseum Ashtray',
    price: '₹749',
    image: '🏛️',
    link: 'https://www.fnp.com/gift/colosseum-ashtray',
    color: '#DAA520'
  },
  {
    id: 13,
    name: 'Pigeon Induction Cooktop',
    price: '₹2,000',
    image: '🍳',
    link: 'https://www.flipkart.com/pigeon-1800-w-induction-cooktop-push-button/p/itm3893130ae5422',
    color: '#FF6347'
  },
  {
    id: 14,
    name: 'Wonderchef Cookware Set',
    price: '₹8,000',
    image: '🍲',
    link: 'https://www.wonderchef.com/products/wonderchef-renewed-platinum-plus-non-stick-cookware-set-of-4',
    color: '#DC143C'
  },
  {
    id: 15,
    name: 'Lenskart Sunglasses',
    price: '₹2,000',
    image: '😎',
    link: 'https://www.lenskart.com/lenskart-lk-s18940-gunmetal-sunglass.html',
    color: '#36454F'
  }
]

function GiftRegistry() {
  const [gifts, setGifts] = useState([])
  const [reserved, setReserved] = useState({})
  const [showInvite, setShowInvite] = useState(true)

  useEffect(() => {
    setGifts(defaultGifts)
    const savedReserved = localStorage.getItem('reserved_gifts')
    if (savedReserved) {
      setReserved(JSON.parse(savedReserved))
    }
    const inviteSeen = localStorage.getItem('invite_seen')
    if (inviteSeen) {
      setShowInvite(false)
    }
  }, [])

  const toggleReserve = (giftId) => {
    const newReserved = { ...reserved }
    if (newReserved[giftId]) {
      delete newReserved[giftId]
    } else {
      const name = prompt("What's your name?")
      if (name && name.trim()) {
        newReserved[giftId] = name.trim()
      } else {
        return
      }
    }
    setReserved(newReserved)
    localStorage.setItem('reserved_gifts', JSON.stringify(newReserved))
  }

  const resetAll = () => {
    if (window.confirm('Are you sure you want to reset all reservations?')) {
      setReserved({})
      localStorage.removeItem('reserved_gifts')
    }
  }

  const closeInvite = () => {
    setShowInvite(false)
    localStorage.setItem('invite_seen', 'true')
  }

  return (
    <div className="registry-container">
      {showInvite && <InvitePopup onClose={closeInvite} />}

      <div className="header">
        <h1>🎉 Animesh's Birthday Gift RSVP</h1>
        <p>Choose a gift you'd like to give!</p>
      </div>

      <div className="gifts-grid">
        {gifts.map(gift => (
          <GiftCard
            key={gift.id}
            gift={gift}
            isReserved={!!reserved[gift.id]}
            reservedBy={reserved[gift.id]}
            onToggleReserve={() => toggleReserve(gift.id)}
          />
        ))}
      </div>

      <div className="footer">
        <button className="reset-btn" onClick={resetAll}>Reset All</button>
        <p className="info">
          {Object.keys(reserved).length} / {gifts.length} gifts reserved
        </p>
      </div>
    </div>
  )
}

export default GiftRegistry

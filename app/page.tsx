'use client'

import { useState } from 'react'

interface Headset {
  id: number
  name: string
  brand: string
  price: number
  bassRating: number
  soundQualityRating: number
  overallScore: number
  features: string[]
  type: string
  image: string
}

const headsets: Headset[] = [
  {
    id: 1,
    name: 'Sony WH-1000XM5',
    brand: 'Sony',
    price: 399.99,
    bassRating: 9.5,
    soundQualityRating: 9.8,
    overallScore: 9.7,
    type: 'Over-Ear Wireless',
    features: ['Active Noise Cancellation', 'LDAC Support', '30hr Battery', 'Premium Build'],
    image: '🎧'
  },
  {
    id: 2,
    name: 'Beyerdynamic DT 770 PRO',
    brand: 'Beyerdynamic',
    price: 159.99,
    bassRating: 9.8,
    soundQualityRating: 9.6,
    overallScore: 9.7,
    type: 'Over-Ear Wired',
    features: ['Studio Quality', 'Closed Back', 'Powerful Bass', 'Comfortable'],
    image: '🎧'
  },
  {
    id: 3,
    name: 'Sennheiser HD 660S2',
    brand: 'Sennheiser',
    price: 499.99,
    bassRating: 9.2,
    soundQualityRating: 9.9,
    overallScore: 9.6,
    type: 'Over-Ear Wired',
    features: ['Audiophile Grade', 'Open Back', 'Natural Sound', 'Detachable Cable'],
    image: '🎧'
  },
  {
    id: 4,
    name: 'Beats Studio Pro',
    brand: 'Beats',
    price: 349.99,
    bassRating: 9.9,
    soundQualityRating: 8.8,
    overallScore: 9.3,
    type: 'Over-Ear Wireless',
    features: ['Enhanced Bass', 'ANC', 'USB-C Audio', 'Apple & Android Compatible'],
    image: '🎧'
  },
  {
    id: 5,
    name: 'Audio-Technica ATH-M50xBT2',
    brand: 'Audio-Technica',
    price: 199.99,
    bassRating: 9.4,
    soundQualityRating: 9.3,
    overallScore: 9.4,
    type: 'Over-Ear Wireless',
    features: ['Studio Sound', 'Bluetooth 5.0', '50hr Battery', 'Professional Grade'],
    image: '🎧'
  },
  {
    id: 6,
    name: 'Bose QuietComfort Ultra',
    brand: 'Bose',
    price: 429.99,
    bassRating: 9.3,
    soundQualityRating: 9.5,
    overallScore: 9.5,
    type: 'Over-Ear Wireless',
    features: ['World-Class ANC', 'Spatial Audio', 'Comfortable Fit', '24hr Battery'],
    image: '🎧'
  }
]

export default function Home() {
  const [cart, setCart] = useState<Headset[]>([])
  const [sortBy, setSortBy] = useState<'overall' | 'bass' | 'soundQuality' | 'price'>('overall')
  const [showCart, setShowCart] = useState(false)

  const sortedHeadsets = [...headsets].sort((a, b) => {
    switch (sortBy) {
      case 'bass':
        return b.bassRating - a.bassRating
      case 'soundQuality':
        return b.soundQualityRating - a.soundQualityRating
      case 'price':
        return a.price - b.price
      default:
        return b.overallScore - a.overallScore
    }
  })

  const addToCart = (headset: Headset) => {
    setCart([...cart, headset])
  }

  const removeFromCart = (index: number) => {
    setCart(cart.filter((_, i) => i !== index))
  }

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0)

  const bestHeadset = sortedHeadsets[0]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            🎵 Best Headsets Finder
          </h1>
          <p className="text-xl text-gray-600">Discover premium headsets with exceptional bass and sound quality</p>
        </div>

        {/* Best Pick Banner */}
        <div className="mb-8 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 rounded-2xl shadow-2xl overflow-hidden">
          <div className="bg-white/95 backdrop-blur-sm p-8">
            <div className="flex items-center justify-between flex-wrap gap-6">
              <div className="flex-1 min-w-[300px]">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-5xl">{bestHeadset.image}</span>
                  <div>
                    <div className="text-sm font-semibold text-orange-600 uppercase tracking-wide">🏆 Top Rated</div>
                    <h2 className="text-3xl font-bold text-gray-900">{bestHeadset.name}</h2>
                    <p className="text-gray-600">{bestHeadset.brand} • {bestHeadset.type}</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="bg-purple-50 rounded-lg p-3">
                    <div className="text-2xl font-bold text-purple-600">{bestHeadset.overallScore}</div>
                    <div className="text-xs text-gray-600">Overall Score</div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-3">
                    <div className="text-2xl font-bold text-blue-600">{bestHeadset.bassRating}</div>
                    <div className="text-xs text-gray-600">Bass Rating</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3">
                    <div className="text-2xl font-bold text-green-600">{bestHeadset.soundQualityRating}</div>
                    <div className="text-xs text-gray-600">Sound Quality</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {bestHeadset.features.map((feature, idx) => (
                    <span key={idx} className="bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900 mb-4">${bestHeadset.price}</div>
                <button
                  onClick={() => addToCart(bestHeadset)}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition shadow-lg"
                >
                  🛒 Add Best Pick to Cart
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex justify-between items-center mb-6 bg-white rounded-xl shadow-md p-4">
          <div className="flex items-center gap-3">
            <label className="text-gray-700 font-semibold">Sort by:</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="border border-gray-300 rounded-lg px-4 py-2 bg-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="overall">Overall Score</option>
              <option value="bass">Bass Rating</option>
              <option value="soundQuality">Sound Quality</option>
              <option value="price">Price (Low to High)</option>
            </select>
          </div>
          <button
            onClick={() => setShowCart(!showCart)}
            className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-2 rounded-lg font-bold hover:from-green-600 hover:to-emerald-700 transition shadow-md"
          >
            🛒 Cart ({cart.length})
          </button>
        </div>

        {/* Cart Modal */}
        {showCart && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6 flex justify-between items-center">
                <h2 className="text-2xl font-bold">🛒 Your Cart</h2>
                <button
                  onClick={() => setShowCart(false)}
                  className="text-white hover:bg-white/20 rounded-full w-10 h-10 flex items-center justify-center text-2xl"
                >
                  ×
                </button>
              </div>
              <div className="p-6 overflow-y-auto max-h-[60vh]">
                {cart.length === 0 ? (
                  <div className="text-center text-gray-500 py-12">
                    <div className="text-6xl mb-4">🛒</div>
                    <p className="text-xl">Your cart is empty</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {cart.map((item, index) => (
                      <div key={index} className="flex justify-between items-center bg-gray-50 rounded-lg p-4">
                        <div className="flex items-center gap-4">
                          <span className="text-3xl">{item.image}</span>
                          <div>
                            <div className="font-bold text-gray-900">{item.name}</div>
                            <div className="text-sm text-gray-600">{item.brand}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="font-bold text-lg">${item.price}</span>
                          <button
                            onClick={() => removeFromCart(index)}
                            className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              {cart.length > 0 && (
                <div className="bg-gray-100 p-6 border-t">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xl font-bold">Total:</span>
                    <span className="text-3xl font-bold text-purple-600">${totalPrice.toFixed(2)}</span>
                  </div>
                  <button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-4 rounded-xl font-bold text-lg hover:from-green-600 hover:to-emerald-700 transition shadow-lg">
                    Checkout Now
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Headsets Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedHeadsets.map((headset) => (
            <div key={headset.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-1">
              <div className="bg-gradient-to-br from-purple-100 to-blue-100 p-8 text-center">
                <div className="text-8xl mb-2">{headset.image}</div>
                <div className="text-xs font-semibold text-purple-600 uppercase tracking-wide">{headset.brand}</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{headset.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{headset.type}</p>

                <div className="grid grid-cols-3 gap-2 mb-4">
                  <div className="text-center bg-purple-50 rounded-lg p-2">
                    <div className="text-lg font-bold text-purple-600">{headset.overallScore}</div>
                    <div className="text-xs text-gray-600">Overall</div>
                  </div>
                  <div className="text-center bg-blue-50 rounded-lg p-2">
                    <div className="text-lg font-bold text-blue-600">{headset.bassRating}</div>
                    <div className="text-xs text-gray-600">Bass</div>
                  </div>
                  <div className="text-center bg-green-50 rounded-lg p-2">
                    <div className="text-lg font-bold text-green-600">{headset.soundQualityRating}</div>
                    <div className="text-xs text-gray-600">Sound</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {headset.features.slice(0, 2).map((feature, idx) => (
                    <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center pt-4 border-t">
                  <span className="text-2xl font-bold text-gray-900">${headset.price}</span>
                  <button
                    onClick={() => addToCart(headset)}
                    className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-lg font-bold hover:from-purple-700 hover:to-blue-700 transition shadow-md"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-gray-600">
          <p className="text-sm">All ratings based on expert reviews and user feedback</p>
        </div>
      </div>
    </div>
  )
}

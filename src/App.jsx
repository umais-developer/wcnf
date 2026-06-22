import { useState, useEffect } from 'react'
import './App.css'

export default function App() {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  useEffect(() => {
    const updateCountdown = () => {
      const launchDate = new Date('2027-01-01T00:00:00').getTime()
      const now = new Date().getTime()
      const distance = launchDate - now

      if (distance > 0) {
        setCountdown({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        })
      }
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)
    return () => clearInterval(interval)
  }, [])

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 3000)
    }
  }

  return (
    <div className="wcnf-container">
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container px-4 px-lg-5">
          <a className="navbar-brand" href="#home">WCNF</a>
        </div>
      </nav>

      {/* Header/Hero */}
      <header className="masthead">
        <div className="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
          <div className="mx-auto text-center">
            <h1 className="mx-auto my-0 text-uppercase">WCNF</h1>
            <h2 className="text-white-50 mx-auto mt-2 mb-5">Coming Soon</h2>
            <p className="text-white-50 mx-auto mt-3 mb-5">
              Something exciting is on the way. Stay tuned for our big reveal.
            </p>
          </div>
        </div>
      </header>

      {/* Countdown */}
      <section className="about-section text-center">
        <div className="container px-4 px-lg-5">
          <h2 className="text-white mb-4">Launch In</h2>
          <div className="countdown">
            <div className="countdown-item">
              <div className="countdown-number text-primary">{countdown.days}</div>
              <div className="countdown-label">Days</div>
            </div>
            <div className="countdown-item">
              <div className="countdown-number text-primary">{countdown.hours}</div>
              <div className="countdown-label">Hours</div>
            </div>
            <div className="countdown-item">
              <div className="countdown-number text-primary">{countdown.minutes}</div>
              <div className="countdown-label">Minutes</div>
            </div>
            <div className="countdown-item">
              <div className="countdown-number text-primary">{countdown.seconds}</div>
              <div className="countdown-label">Seconds</div>
            </div>
          </div>
        </div>
      </section>

      {/* Signup */}
      <section className="signup-section">
        <div className="container px-4 px-lg-5">
          <h2 className="text-white mb-4 text-center">Get Notified When We Launch</h2>
          <div className="row gx-4 gx-lg-5">
            <div className="col-md-10 col-lg-8 mx-auto text-center">
              <form onSubmit={handleSubscribe} className="form-subscribe">
                <div className="row gx-3 gx-sm-3 mb-3">
                  <div className="col-12 col-sm-9">
                    <input
                      className="form-control form-control-lg"
                      id="inputEmail"
                      type="email"
                      placeholder="Enter your email..."
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="col-12 col-sm-3">
                    <button className="btn btn-primary btn-lg" type="submit">Notify Me!</button>
                  </div>
                </div>
              </form>
              {subscribed && (
                <div className="alert alert-success mt-3">
                  Thank you! We'll notify you when we launch.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer bg-black small text-center text-white-50">
        <div className="container px-4 px-lg-5">
          <div className="mb-2">&copy; 2026 WCNF. All Rights Reserved.</div>
        </div>
      </footer>
    </div>
  )
}

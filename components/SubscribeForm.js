import { useState } from 'react'
import { firestoreClient } from '../data/firebase'

const SubscribeForm = ({ className = '' }) => {
  const [email, setEmail] = useState('')

  async function triggerSubmit(event) {
    event.preventDefault()

    if (!email) return
    if (!email.match(/^.+@.+\..+$/))
      return alert("That doesn't look like an email.")

    await firestoreClient.collection('emails').doc().set({
      email,
      timeCreated: new Date().toISOString(),
    })

    alert("Thanks! You're the best.")
    setEmail('')
  }

  return (
    <div className={`flex justify-center ${className}`}>
      <form
        className="bg-white flex flex-col sm:flex-row border-solid rounded-xl border-4 border-secondary-500"
        onSubmit={triggerSubmit}
      >
        <input
          className="px-3 py-1.5 outline-none h-full rounded-lg w-56"
          placeholder="first.last@domain.tld"
          type="email"
          aria-label="email"
          value={email}
          onChange={(e) => setEmail(e.target.value.trim())}
        />
        <button className="bg-secondary-200 h-full py-1.5 px-3 font-semibold hover:bg-secondary-300  rounded-lg transition-colors duration-150">
          Hear about new posts
        </button>
      </form>
    </div>
  )
}

export default SubscribeForm

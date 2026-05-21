import React from 'react' // 👈 Notice: We don't even need useState here anymore!
import emailjs from '@emailjs/browser'

function SignupForm() {
  const [isSubmitting, setIsSubmitting] = React.useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // 1. Natively extract the real values directly out of the HTML fields
    const data = new FormData(e.target)
    
    const templateParams = {
      name: data.get('name'),   // Grabs value from name="name"
      phone: data.get('phone'), // Grabs value from name="phone"
      email: data.get('email'), // Grabs value from name="email"
      unit: data.get('unit')    // Grabs value from name="unit"
    }

    console.log("Forced Transmission Data Package:", templateParams)

    // 2. Transmit the absolute values to the network
   emailjs.sendForm(



      'service_ndag16b',     // Your Service ID


      'template_teq9z4m',    // Your Template ID


      e.target,              // 👈 This targets the actual HTML form directly!

      'QbB-8Z9I8ErboQ1eC'    // Your Public Key


    )
    .then((response) => {
       console.log('SUCCESS!', response.status, response.text)
       alert("Shalom! Your enlistment application has been securely logged into the registry.")
       e.target.reset() // Clears the form cleanly
    })
    .catch((err) => {
       console.error('FAILED...', err)
       alert("Transmission failed. Please check your connection.")
    })
    .finally(() => {
      setIsSubmitting(false)
    })
  }

  return (
    <div className="w-full max-w-xl mx-auto bg-black/40 border border-yellow-500/10 backdrop-blur-md rounded-3xl p-6 md:p-10 shadow-2xl">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-black text-white">Ministry Enlistment Form</h3>
        <p className="text-xs text-gray-400 font-light mt-1">Fill out your metrics to begin your training structure assignment.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5 text-left">
        {/* Name Input */}
        <div className="space-y-1.5">
          <label className="text-[11px] font-mono tracking-wider text-gray-400 uppercase">Full Name</label>
          <input 
            type="text" 
            required
            name="name" // 👈 CRITICAL: This is what data.get('name') looks for
            disabled={isSubmitting}
            className="w-full bg-neutral-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-yellow-400 transition-colors disabled:opacity-50"
            placeholder="e.g. John Doe"
          />
        </div>

        {/* Phone Input */}
        <div className="space-y-1.5">
          <label className="text-[11px] font-mono tracking-wider text-gray-400 uppercase">Phone Number</label>
          <input 
            type="tel" 
            required
            name="phone" // 👈 CRITICAL: This is what data.get('phone') looks for
            disabled={isSubmitting}
            className="w-full bg-neutral-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-yellow-400 transition-colors disabled:opacity-50"
            placeholder="e.g. +234..."
          />
        </div>

        {/* Email Input */}
        <div className="space-y-1.5">
          <label className="text-[11px] font-mono tracking-wider text-gray-400 uppercase">Email Address</label>
          <input 
            type="email" 
            required
            name="email" // 👈 CRITICAL: This is what data.get('email') looks for
            disabled={isSubmitting}
            className="w-full bg-neutral-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-yellow-400 transition-colors disabled:opacity-50"
            placeholder="e.g. name@domain.com"
          />
        </div>

        {/* Department Dropdown Selection */}
        <div className="space-y-1.5">
          <label className="text-[11px] font-mono tracking-wider text-gray-400 uppercase">Primary Department of Interest</label>
          <select 
            disabled={isSubmitting}
            name="unit" // 👈 CRITICAL: This is what data.get('unit') looks for
            className="w-full bg-neutral-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-gray-300 focus:outline-none focus:border-yellow-400 transition-colors disabled:opacity-50"
            defaultValue="Prayer Unit"
          >
            <option value="Prayer Unit">Prayer Unit</option>
            <option value="Follow-Up & Care">Follow-Up & Care</option>
            <option value="Outreach & Evangelism">Outreach & Evangelism</option>
            <option value="Media Team">Media Team</option>
            <option value="Training & Discipleship">Training & Discipleship</option>
          </select>
        </div>

        {/* Dynamic Action Button State */}
        <div className="pt-4">
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-yellow-400 text-black font-bold py-3 px-6 rounded-xl text-sm transition-all duration-300 hover:bg-yellow-500 shadow-xl shadow-yellow-400/5 active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Transmitting to Registry...' : 'Submit Enlistment Form'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default SignupForm
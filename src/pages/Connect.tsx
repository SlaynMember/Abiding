import React from 'react';
import { Mail, Calendar } from 'lucide-react';

const Connect = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-wheat-bg py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-fraunces font-semibold text-4xl lg:text-5xl text-primary-ink mb-6">
            Begin the <span className="text-gold">Conversation</span>
          </h1>
          <p className="text-xl text-slate-secondary leading-relaxed">
            Taking the first step is often the hardest part. We're here to make it as simple as possible. Your conversation is always confidential, and there is never any pressure.
          </p>
        </div>
      </section>

      {/* Schedule a Call Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-fraunces font-semibold text-3xl text-primary-ink">Schedule a Confidential Call</h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mt-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <a href="https://calendly.com/billypatterson" target="_blank" rel="noopener noreferrer" className="block p-6 bg-sky-callout rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="font-fraunces text-xl text-primary-ink mb-2">Spiritual Direction Zoom Call</h3>
              <p className="text-slate-secondary">Let's connect via Zoom for some time together. You bring what you would like from the conversation...</p>
            </a>
            <a href="https://calendly.com/billypatterson" target="_blank" rel="noopener noreferrer" className="block p-6 bg-sky-callout rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="font-fraunces text-xl text-primary-ink mb-2">30 Minute Phone Call Check-in</h3>
              <p className="text-slate-secondary">Get some time touching base - you drive the conversation with what you would like from our conversation...</p>
            </a>
             <a href="https://calendly.com/billypatterson" target="_blank" rel="noopener noreferrer" className="block p-6 bg-sky-callout rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="font-fraunces text-xl text-primary-ink mb-2">Spiritual Direction In-Person</h3>
              <p className="text-slate-secondary">Please choose a day and time that is best for your calendar. We will never go over an hour together...</p>
            </a>
             <a href="https://calendly.com/billypatterson" target="_blank" rel="noopener noreferrer" className="block p-6 bg-sky-callout rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="font-fraunces text-xl text-primary-ink mb-2">Dinner with the Pattersons</h3>
              <p className="text-slate-secondary">If you would like to grab a meal as couples, Kelly and I would love to make that happen...</p>
            </a>
          </div>
        </div>
      </section>

      {/* Send a Message Section */}
      <section className="bg-wheat-bg py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-fraunces font-semibold text-3xl text-primary-ink">Or, Send a General Inquiry</h2>
          </div>
          <form className="bg-white p-8 rounded-2xl shadow-lg space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-secondary mb-2">Full Name</label>
              <input type="text" id="name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-secondary mb-2">Email Address</label>
              <input type="email" id="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-secondary mb-2">Message</label>
              <textarea id="message" rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold"></textarea>
            </div>
            <button type="submit" className="w-full bg-gold text-white py-3 rounded-lg font-semibold text-lg hover:bg-gold/90 transition-colors">Send Message</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Connect;

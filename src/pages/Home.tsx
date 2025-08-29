import React from 'react';
import { Heart, Users, BookOpen, Quote } from 'lucide-react';

interface HomeProps {
  setCurrentPage: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ setCurrentPage }) => {
  return (
    <div>
      {/* Hero Section */}
       <section 
        className="relative bg-cover bg-center text-white" 
  style={{ backgroundImage: `url('/images/hero-main.jpg')` }}>
        <div className="absolute inset-0 bg-primary-ink bg-opacity-60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-48 text-center">
          <h1 className="font-fraunces font-semibold text-4xl lg:text-6xl text-white mb-6 leading-tight">
            Leading can be lonely. <br /> <span className="text-gold">You don’t have to do it alone.</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-8 leading-relaxed text-white/90">
            Spiritual parenting for Christian leaders navigating the pressures of ministry and life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => setCurrentPage('connect')} className="bg-gold text-white px-8 py-4 rounded-full font-semibold hover:bg-gold/90 transition-colors">
              Begin the Conversation
            </button>
            <button onClick={() => setCurrentPage('about')} className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-primary-ink transition-colors">
              Learn Our Story
            </button>
          </div>
        </div>
      </section>

      {/* The "Why" (Spiritual Parenting) Section */}
      <section className="bg-sky-callout py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="font-fraunces text-2xl lg:text-3xl text-olive font-medium italic leading-relaxed">
            "I do not write these things to shame you, but as my beloved children I warn you. For though you might have ten thousand instructors in Christ, yet you do not have many fathers; for in Christ Jesus I have begotten you through the gospel. Therefore I urge you, imitate me."
          </blockquote>
          <cite className="block mt-4 text-slate-secondary font-medium">1 Corinthians 4:14-16</cite>
        </div>
      </section>

      {/* The Solution (What We Do) Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-fraunces font-semibold text-3xl text-primary-ink mb-4">A Relationship of Presence, Prayer, and Wisdom</h2>
            <p className="text-lg text-slate-secondary max-w-3xl mx-auto">Gleaning from decades of ministry experience, we offer practical spiritual help through a relationship, not a program. We come alongside pastors and Christian leaders with:</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Heart className="mx-auto text-olive mb-4" size={40} />
              <h3 className="font-fraunces font-semibold text-xl text-primary-ink mb-2">Faithful Prayer</h3>
              <p className="text-slate-secondary">Consistent, confidential prayer for you, your family, and your ministry.</p>
            </div>
            <div className="text-center p-6">
              <Users className="mx-auto text-gold mb-4" size={40} />
              <h3 className="font-fraunces font-semibold text-xl text-primary-ink mb-2">Intentional Support</h3>
              <p className="text-slate-secondary">Mentorship and training for you, your spouse, and your key leaders to build systems that last.</p>
            </div>
            <div className="text-center p-6">
              <BookOpen className="mx-auto text-primary-ink mb-4" size={40} />
              <h3 className="font-fraunces font-semibold text-xl text-primary-ink mb-2">Honest Wisdom</h3>
              <p className="text-slate-secondary">A safe space to seek wisdom for church leadership needs, process challenges, and sharpen your calling.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof (Testimonials) Section */}
      <section className="bg-wheat-bg py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-fraunces font-semibold text-3xl text-primary-ink">Trusted Relationships</h2>
          </div>
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg text-center">
            <Quote className="mx-auto text-gold mb-4" size={32}/>
            <blockquote className="font-fraunces text-xl lg:text-2xl text-primary-ink mb-6 italic leading-relaxed">
              "I have been profoundly impacted by the steady friendship, prayer, and guidance I have received. I highly recommend continued and increased support for this work."
            </blockquote>
            <cite className="text-slate-secondary font-medium not-italic">— Nathan Kollar, Lead Pastor, GraceLand Church, Franklin</cite>
          </div>
        </div>
      </section>

      {/* Final Call to Action Section */}
      <section className="bg-primary-ink text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-fraunces font-semibold text-3xl lg:text-4xl mb-4">Ready for a Conversation?</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">Through regular visits and check-ins, we provide spiritual leaders a constant, faithful and safe friendship which focuses on abiding, leadership and family responsibilities.</p>
          <button onClick={() => setCurrentPage('connect')} className="bg-gold text-white px-8 py-4 rounded-full font-semibold hover:bg-gold/90 transition-colors">
            Book Your First Conversation
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;

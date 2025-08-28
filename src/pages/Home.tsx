import React from 'react';
import { Heart, Users, BookOpen, ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[600px] flex items-center">
        {/* Hero Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/src/assets/images/hero-main.jpg')" }}
        />
        
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10">
          <div className="text-center">
            <h1 className="font-fraunces font-semibold text-4xl lg:text-6xl text-white mb-6 leading-tight">
              Leading can be lonely.<br />
              <span className="text-wheat-bg">You don't have to do it alone.</span>
            </h1>
            <div className="w-16 h-0.5 bg-gold mx-auto mb-6"></div>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8 leading-relaxed">
              Spiritual parenting for Christian leaders navigating the pressures of ministry and life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gold text-white px-8 py-4 rounded-full font-semibold hover:bg-gold/90 transition-colors">
                Begin the Conversation
              </button>
              <button className="bg-white text-primary-ink px-8 py-4 rounded-full font-semibold border-2 border-white hover:bg-wheat-bg hover:text-primary-ink transition-colors">
                Learn Our Story
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* The "Why" (Spiritual Parenting) Section */}
      <section className="bg-sky-callout py-12">
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
            <h2 className="font-fraunces font-semibold text-3xl lg:text-4xl text-primary-ink mb-4">
              A Relationship of Presence, Prayer, and Wisdom
            </h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mb-6"></div>
            <p className="text-lg text-slate-secondary max-w-3xl mx-auto">
              Gleaning from decades of ministry experience, we offer practical spiritual help through a relationship, not a program. We come alongside pastors and Christian leaders with:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-olive/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-olive/20 transition-colors">
                <Heart className="text-olive" size={32} />
              </div>
              <h3 className="font-fraunces font-semibold text-xl text-primary-ink mb-4">
                Faithful Prayer
              </h3>
              <p className="text-slate-secondary leading-relaxed">
                Consistent, confidential prayer for you, your family, and your ministry
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold/20 transition-colors">
                <Users className="text-gold" size={32} />
              </div>
              <h3 className="font-fraunces font-semibold text-xl text-primary-ink mb-4">
                Intentional Support
              </h3>
              <p className="text-slate-secondary leading-relaxed">
                Mentorship and training for you, your spouse, and your key leaders to build systems that last
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-sky-callout rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-sky-callout/80 transition-colors">
                <BookOpen className="text-primary-ink" size={32} />
              </div>
              <h3 className="font-fraunces font-semibold text-xl text-primary-ink mb-4">
                Honest Wisdom
              </h3>
              <p className="text-slate-secondary leading-relaxed">
                A safe space to seek wisdom for church leadership needs, process challenges, and sharpen your calling
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof (Testimonials) Section */}
      <section className="bg-wheat-bg py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-fraunces font-semibold text-3xl text-primary-ink mb-4">
              Trusted Relationships
            </h2>
            <div className="w-16 h-0.5 bg-gold mx-auto"></div>
          </div>

          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
            <blockquote className="font-fraunces text-xl lg:text-2xl text-primary-ink mb-6 italic leading-relaxed text-center">
              "I have been profoundly impacted by the steady friendship, prayer, and guidance I have received. I highly recommend continued and increased support for this work."
            </blockquote>
            <div className="text-center">
              <cite className="text-slate-secondary font-medium">Nathan Kollar, Lead Pastor, GraceLand Church, Franklin</cite>
            </div>
          </div>

          <div className="text-center mt-8">
            <button className="text-gold hover:text-gold/80 transition-colors flex items-center space-x-2 mx-auto">
              <span className="font-medium">Read More Stories</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Final Call to Action Section */}
      <section className="bg-primary-ink text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-fraunces font-semibold text-3xl lg:text-4xl mb-6">
            Ready for a Conversation?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Through regular visits and check-ins, we provide spiritual leaders a constant, faithful and safe friendship which focuses on abiding, leadership and family responsibilities.
          </p>
          <button className="bg-gold text-primary-ink px-8 py-4 rounded-full font-semibold hover:bg-gold/90 transition-colors">
            Book Your First Conversation
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
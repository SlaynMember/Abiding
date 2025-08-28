import React from 'react';
import { Heart, Users, BookOpen, Phone, ArrowRight, MapPin } from 'lucide-react';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-wheat-bg relative overflow-hidden">
        {/* Vine decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <img 
            src="/vine.svg" 
            alt="" 
            className="absolute left-0 top-1/4 w-32 h-64 opacity-15 transform -translate-x-4"
            style={{ transform: 'translateX(-20%) translateY(25%) rotate(-10deg)' }}
          />
          <img 
            src="/vine.svg" 
            alt="" 
            className="absolute right-0 bottom-1/4 w-24 h-48 opacity-10 transform translate-x-4 rotate-180"
            style={{ transform: 'translateX(20%) translateY(-25%) rotate(170deg) scaleX(-1)' }}
          />
        </div>
        
        {/* Decorative vine pattern */}
        {/* Enhanced decorative vine pattern */}
        <div className="absolute inset-0 opacity-8">
          {/* Large vine circles */}
          <div className="absolute top-16 left-8 w-40 h-40 border-2 border-olive/20 rounded-full"></div>
          <div className="absolute bottom-24 right-12 w-32 h-32 border-2 border-gold/20 rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-20 h-20 border border-olive/30 rounded-full"></div>
          
          {/* Small accent dots */}
          <div className="absolute top-32 right-1/4 w-3 h-3 bg-gold/40 rounded-full"></div>
          <div className="absolute bottom-40 left-1/3 w-2 h-2 bg-olive/40 rounded-full"></div>
          <div className="absolute top-2/3 right-20 w-4 h-4 bg-olive/30 rounded-full"></div>
          
          {/* Connecting vine lines */}
          <div className="absolute top-24 left-16 w-16 h-0.5 bg-olive/20 rotate-45"></div>
          <div className="absolute bottom-32 right-24 w-12 h-0.5 bg-gold/20 -rotate-45"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative">
          <div className="text-center">
            <h1 className="font-fraunces font-semibold text-4xl lg:text-6xl text-primary-ink mb-6 leading-tight">
              Faithful Friendship for<br />
              <span className="text-gold">Ministry Leaders</span>
            </h1>
            <div className="w-16 h-0.5 bg-gold mx-auto mb-6"></div>
            <p className="text-xl text-slate-secondary max-w-3xl mx-auto mb-8 leading-relaxed">
              At Abiding Partners, we believe every pastor deserves a spiritual parent—
              someone to walk alongside them with wisdom, encouragement, and unwavering support 
              for both their ministry and family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gold text-white px-8 py-4 rounded-full font-semibold hover:bg-gold/90 transition-colors flex items-center justify-center space-x-2">
                <Phone size={20} />
                <span>Book a Conversation</span>
              </button>
              <button className="bg-white text-primary-ink px-8 py-4 rounded-full font-semibold border-2 border-primary-ink hover:bg-primary-ink hover:text-white transition-colors">
                Learn Our Story
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Scripture Callout */}
      <section className="bg-sky-callout py-12 relative overflow-hidden">
        {/* Subtle vine border decoration */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-olive/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-olive/30 to-transparent"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="font-fraunces text-2xl lg:text-3xl text-olive font-medium italic leading-relaxed">
            "I do not write these things to shame you, but as my beloved children I warn you. For though you might have ten thousand instructors in Christ, yet you do not have many fathers. For in Christ Jesus I have begotten you through the gospel. Therefore I urge you, imitate me."
          </blockquote>
          <cite className="block mt-4 text-slate-secondary font-medium">1 Corinthians 4:14-16</cite>
        </div>
      </section>

      {/* How We Help Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-fraunces font-semibold text-3xl lg:text-4xl text-primary-ink mb-4">
              What We Do
            </h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mb-6"></div>
            <p className="text-lg text-slate-secondary max-w-3xl mx-auto">
              Spiritual parenting, steady check-ins, and practical help for leaders, families, and teams. We come alongside pastors and Christian leaders with presence, prayer, and wisdom that keeps the focus on abiding in Jesus, healthy leadership, and family responsibilities.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-olive/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-olive/20 transition-colors">
                <Heart className="text-olive" size={32} />
              </div>
              <h3 className="font-fraunces font-semibold text-xl text-primary-ink mb-4">
                Prayer and Covering
              </h3>
              <p className="text-slate-secondary leading-relaxed">
                Regular visits and safe friendship that keeps the focus on abiding, leadership, and family responsibilities
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold/20 transition-colors">
                <Users className="text-gold" size={32} />
              </div>
              <h3 className="font-fraunces font-semibold text-xl text-primary-ink mb-4">
                Support for Spouses and Key Leaders
              </h3>
              <p className="text-slate-secondary leading-relaxed">
                Training for eldering and practical systems that hold up under real life
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-sky-callout rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-sky-callout/80 transition-colors">
                <BookOpen className="text-primary-ink" size={32} />
              </div>
              <h3 className="font-fraunces font-semibold text-xl text-primary-ink mb-4">
                How We Walk With You
              </h3>
              <p className="text-slate-secondary leading-relaxed">
                Regular visits and safe friendship that keeps the focus on abiding, leadership, and family responsibilities
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Preview */}
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

      {/* Cities We Serve */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-fraunces font-semibold text-2xl text-primary-ink mb-4">
              Trusted Relationships
            </h2>
            <div className="w-16 h-0.5 bg-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { city: 'Phoenix', state: 'AZ', pastor: 'Jared and Marci Doe', church: 'Desert City Church' },
              { city: 'San Antonio', state: 'TX', pastor: 'Scott and Shannon Austin', church: 'The Park Community' },
              { city: 'Franklin', state: 'TN', pastor: 'Nathan and Jessica Kollar', church: 'GraceLand Church' },
              { city: 'Tampa', state: 'FL', pastor: 'Michael and Val Kyker', church: 'Journey Church' },
              { city: 'McKinney', state: 'TX', pastor: 'Kyle and Tessa Redel', church: 'The Park Church' },
              { city: 'Brooklyn', state: 'NY', pastor: 'Caleb and Allison Clardy', church: 'Trinity Grace Church' }
            ].map((location) => (
              <div key={location.city} className="text-center">
                <div className="w-4 h-4 bg-gold rounded-full mx-auto mb-2"></div>
                <h3 className="font-medium text-primary-ink">{location.city}</h3>
                <p className="text-sm text-slate-secondary">{location.state}</p>
                <p className="text-xs text-slate-secondary mt-1">{location.pastor}</p>
                <p className="text-xs text-slate-secondary">{location.church}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary-ink text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-fraunces font-semibold text-3xl lg:text-4xl mb-6">
            Ready for a Conversation?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gold text-primary-ink px-8 py-4 rounded-full font-semibold hover:bg-gold/90 transition-colors flex items-center justify-center space-x-2">
              <Phone size={20} />
              <span>Book a Conversation</span>
            </button>
            <button className="border-2 border-gold text-gold px-8 py-4 rounded-full font-semibold hover:bg-gold hover:text-primary-ink transition-colors">
              Support the Work
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-wheat-bg py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-fraunces font-semibold text-3xl text-primary-ink mb-6">
            Weekly Biblical Encouragement
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto mb-6"></div>
          <p className="text-lg text-slate-secondary mb-8 max-w-2xl mx-auto">
            Weekly biblical encouragement in abiding. Simple, honest notes that point you back to Jesus and help you lead from your love relationship with Him.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
              />
              <button className="bg-gold text-white px-6 py-3 rounded-lg font-medium hover:bg-gold/90 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-slate-secondary mt-3">
              Subscribe to weekly encouragement
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
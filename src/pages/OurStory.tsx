import React from 'react';
import { Heart, Users, Star, ArrowRight } from 'lucide-react';

const OurStory = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-wheat-bg py-20 relative overflow-hidden">
        {/* Subtle vine creeping from corners */}
        <div className="absolute inset-0 pointer-events-none">
          <img 
            src="/vine.svg" 
            alt="" 
            className="absolute left-0 top-16 w-24 h-40 opacity-12 transform -rotate-12"
            style={{ transform: 'translateX(-30%) translateY(10%) rotate(-15deg)' }}
          />
          <img 
            src="/vine.svg" 
            alt="" 
            className="absolute right-0 bottom-20 w-20 h-36 opacity-8 transform rotate-12 scaleX(-1)"
            style={{ transform: 'translateX(25%) translateY(-15%) rotate(15deg) scaleX(-1)' }}
          />
        </div>
        
        {/* Page-specific vine decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-12 right-16 w-24 h-24 border border-olive rounded-full"></div>
          <div className="absolute bottom-16 left-12 w-16 h-16 border border-gold rounded-full"></div>
          <div className="absolute top-1/3 left-1/4 w-6 h-6 bg-olive/30 rounded-full"></div>
          <div className="absolute bottom-1/3 right-1/4 w-4 h-4 bg-gold/30 rounded-full"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-fraunces font-semibold text-4xl lg:text-5xl text-primary-ink mb-6">
              Our <span className="text-gold">Story</span>
            </h1>
            <div className="w-16 h-0.5 bg-gold mx-auto mb-8"></div>
            <p className="text-xl text-slate-secondary max-w-4xl mx-auto leading-relaxed">
              There is hope for Christian leaders and families. Over decades of ministry we have seen that living and leading in Christ is not only possible - it is full of joy. Through spiritual parenting we have witnessed transformation in pastors, elders, and ministry professionals who learn to operate from their love relationship with Jesus.
            </p>
          </div>
        </div>
      </section>

      {/* Spiritual Parenting */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-fraunces font-semibold text-3xl text-primary-ink mb-6">
                Spiritual Parenting
              </h2>
              <div className="w-16 h-0.5 bg-gold mb-8"></div>
              
              <p className="text-lg text-slate-secondary mb-6 leading-relaxed">
                We offer a steady, relational approach that helps pastors and leaders grow in abiding, walk in purity and humility, shepherd their families well, and serve their churches from a place of peace and strength.
              </p>
            </div>
            
            <div className="bg-sky-callout p-8 rounded-2xl">
              <blockquote className="font-fraunces text-2xl text-olive italic mb-6 leading-relaxed">
                "We offer faithful friendship that centers your abiding relationship with Jesus, honors your family, and strengthens your calling. No celebrity and no spotlight - just steady presence, prayer, and practical help."
              </blockquote>
              <cite className="text-slate-secondary font-medium">
                Our Heart
              </cite>
            </div>
          </div>
        </div>
      </section>

      {/* Church Partnership */}
      <section className="bg-wheat-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-fraunces font-semibold text-3xl lg:text-4xl text-primary-ink mb-6">
              Church Partnership
            </h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mb-8"></div>
            <p className="text-lg text-slate-secondary max-w-4xl mx-auto">
              We draw from experience at The People's Church, Trinity Grace Church, The Parks Church, Skyline Church, and relationships with pastors in many locations around the world. We work quietly and closely so pastors and churches are strengthened over time, not just inspired for a moment.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-4xl mx-auto">
            <p className="text-lg text-slate-secondary text-center leading-relaxed">
              We offer faithful friendship that centers your abiding relationship with Jesus, honors your family, and strengthens your calling. No celebrity and no spotlight - just steady presence, prayer, and practical help.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary-ink text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-fraunces font-semibold text-3xl lg:text-4xl mb-6">
            Book a Conversation
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            We would love to meet you, listen, and pray. Choose a time that works for you and we will connect.
          </p>
          <button className="bg-gold text-primary-ink px-8 py-4 rounded-full font-semibold hover:bg-gold/90 transition-colors flex items-center justify-center space-x-2 mx-auto">
            <span>Book a Conversation</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default OurStory;
import React from 'react';
import { Users, Heart, Building, ArrowRight } from 'lucide-react';

const OurWorkChurches = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-wheat-bg py-20 relative overflow-hidden">
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
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-fraunces font-semibold text-4xl lg:text-5xl text-primary-ink mb-6">
              For <span className="text-gold">Churches & Teams</span>
            </h1>
            <div className="w-16 h-0.5 bg-gold mx-auto mb-8"></div>
            <p className="text-xl text-slate-secondary max-w-4xl mx-auto leading-relaxed">
              Strengthening churches through healthy leadership teams and sustainable ministry practices. 
              We partner with congregations to build systems that last and leaders who thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon Notice */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-sky-callout p-8 rounded-2xl">
            <Building className="w-16 h-16 text-gold mx-auto mb-6" />
            <h2 className="font-fraunces font-semibold text-2xl text-primary-ink mb-4">
              Content Coming Soon
            </h2>
            <p className="text-lg text-slate-secondary mb-6">
              We're developing comprehensive resources and programs specifically designed 
              for churches and ministry teams. This page will feature detailed information 
              about our church partnership approach.
            </p>
            <button className="bg-gold text-white px-8 py-4 rounded-full font-semibold hover:bg-gold/90 transition-colors">
              Get Notified When Available
            </button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary-ink text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-fraunces font-semibold text-3xl lg:text-4xl mb-6">
            Interested in Church Partnership?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            We'd love to hear about your church's vision and explore how we might 
            support your leadership team and congregation.
          </p>
          <button className="bg-gold text-primary-ink px-8 py-4 rounded-full font-semibold hover:bg-gold/90 transition-colors">
            Start a Conversation
          </button>
        </div>
      </section>
    </div>
  );
};

export default OurWorkChurches;
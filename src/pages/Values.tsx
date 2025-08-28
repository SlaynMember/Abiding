import React from 'react';
import { Heart, Anchor, Shield, Users, BookOpen, Star } from 'lucide-react';

const Values = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-wheat-bg py-20 relative overflow-hidden">
        {/* Values page vine elements - more structured to reflect stability */}
        <div className="absolute inset-0 pointer-events-none">
          <img 
            src="/vine.svg" 
            alt="" 
            className="absolute left-4 top-1/3 w-28 h-44 opacity-10"
            style={{ transform: 'translateX(-35%) rotate(-5deg)' }}
          />
          <img 
            src="/vine.svg" 
            alt="" 
            className="absolute right-4 top-1/2 w-22 h-38 opacity-8 scaleX(-1)"
            style={{ transform: 'translateX(30%) rotate(8deg) scaleX(-1)' }}
          />
        </div>
        
        {/* Values page vine pattern */}
        <div className="absolute inset-0 opacity-6">
          <div className="absolute top-8 left-8 w-32 h-32 border border-olive/25 rounded-full"></div>
          <div className="absolute top-16 right-12 w-20 h-20 border border-gold/25 rounded-full"></div>
          <div className="absolute bottom-20 left-1/3 w-12 h-12 border border-olive/30 rounded-full"></div>
          <div className="absolute bottom-12 right-1/4 w-8 h-8 bg-gold/20 rounded-full"></div>
          
          {/* Connecting elements for values theme */}
          <div className="absolute top-1/4 left-1/2 w-0.5 h-16 bg-olive/20 rotate-12"></div>
          <div className="absolute bottom-1/4 right-1/3 w-0.5 h-12 bg-gold/20 -rotate-12"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-fraunces font-semibold text-4xl lg:text-5xl text-primary-ink mb-6">
              Our <span className="text-gold">Values</span>
            </h1>
            <div className="w-16 h-0.5 bg-gold mx-auto mb-8"></div>
          </div>
        </div>
      </section>

      {/* Values List */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="bg-wheat-bg p-8 rounded-2xl">
                <h2 className="font-fraunces font-semibold text-2xl text-primary-ink mb-4">
                  Family First
                </h2>
                <p className="text-lg text-slate-secondary leading-relaxed">
                  We protect margin for marriage and children.
                </p>
              </div>

              <div className="bg-sky-callout p-8 rounded-2xl">
                <h2 className="font-fraunces font-semibold text-2xl text-primary-ink mb-4">
                  Brotherhood and Sisterhood
                </h2>
                <p className="text-lg text-slate-secondary leading-relaxed">
                  We choose covenant relationships over convenience.
                </p>
              </div>

              <div className="bg-white border-2 border-gold/20 p-8 rounded-2xl">
                <h2 className="font-fraunces font-semibold text-2xl text-primary-ink mb-4">
                  Servant Hearts
                </h2>
                <p className="text-lg text-slate-secondary leading-relaxed">
                  We come low with a broken and contrite spirit.
                </p>
              </div>

              <div className="bg-wheat-bg p-8 rounded-2xl">
                <h2 className="font-fraunces font-semibold text-2xl text-primary-ink mb-4">
                  Always Learning
                </h2>
                <p className="text-lg text-slate-secondary leading-relaxed">
                  We keep looking for better answers to important questions.
                </p>
              </div>

              <div className="bg-sky-callout p-8 rounded-2xl">
                <h2 className="font-fraunces font-semibold text-2xl text-primary-ink mb-4">
                  Lead by Example
                </h2>
                <p className="text-lg text-slate-secondary leading-relaxed">
                  We start the work of discipleship and steward resources with integrity.
                </p>
              </div>
            </div>
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
            We would love to meet you, listen, and pray.
          </p>
          <button className="bg-gold text-primary-ink px-8 py-4 rounded-full font-semibold hover:bg-gold/90 transition-colors">
            Book a Conversation
          </button>
        </div>
      </section>
    </div>
  );
};

export default Values;
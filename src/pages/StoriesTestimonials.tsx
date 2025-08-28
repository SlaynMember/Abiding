import React, { useState } from 'react';
import { Quote, Star, ArrowLeft, ArrowRight, Heart, Users, BookOpen } from 'lucide-react';

const StoriesTestimonials = () => {
  const [currentStory, setCurrentStory] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote: "I have been profoundly impacted by the steady friendship, prayer, and guidance I have received. I highly recommend continued and increased support for this work.",
      author: "Nathan Kollar",
      location: "Lead Pastor, GraceLand Church, Franklin",
      role: "Lead Pastor",
      category: "Family & Ministry Balance",
      story: "Real stories of friendship, prayer, and steady help. These testimonies are shared with permission to encourage pastors, leaders, and families."
    },
    {
      id: 2,
      quote: "Billy and Kelly are two of my dearest and most trusted friends. Their presence brings wisdom, peace, and encouragement. If you are a pastor or leader, I encourage you to invite them into your lives and ministry.",
      author: "Jon Tyson",
      location: "Founding Pastor, Trinity Grace Church",
      role: "Founding Pastor",
      category: "Career Transition",
      story: "Real stories of friendship, prayer, and steady help. These testimonies are shared with permission to encourage pastors, leaders, and families."
    },
    {
      id: 3,
      quote: "The most critical thing is their sum total - access, friendship, prayer, and practical help when it matters. I encourage cheerful and generous support for this ministry.",
      author: "Mike Brown",
      location: "Former Pastor, Missio Dei Logan Square",
      role: "Former Pastor",
      category: "Church Planting",
      story: "Real stories of friendship, prayer, and steady help. These testimonies are shared with permission to encourage pastors, leaders, and families."
    }
  ];

  const stats = [
    {
      number: "150+",
      label: "Pastors Supported",
      description: "Ministry leaders across 6 states"
    },
    {
      number: "25+",
      label: "Years Experience",
      description: "Combined pastoral wisdom"
    },
    {
      number: "95%",
      label: "Still in Ministry",
      description: "Partners who continue serving"
    },
    {
      number: "100%",
      label: "Family-Focused",
      description: "Support that includes families"
    }
  ];

  const categories = [
    { name: "All Stories", count: testimonials.length },
    { name: "Family & Ministry Balance", count: 1 },
    { name: "Career Transition", count: 1 },
    { name: "Church Planting", count: 1 },
    { name: "Burnout Recovery", count: 1 },
    { name: "Character Development", count: 1 }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-wheat-bg py-20">
        {/* Vine decorations reflecting growth and stories */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <img 
            src="/vine.svg" 
            alt="" 
            className="absolute left-0 top-20 w-28 h-44 opacity-10"
            style={{ transform: 'translateX(-35%) rotate(-6deg)' }}
          />
          <img 
            src="/vine.svg" 
            alt="" 
            className="absolute right-0 bottom-24 w-24 h-40 opacity-8 scaleX(-1)"
            style={{ transform: 'translateX(30%) rotate(15deg) scaleX(-1)' }}
          />
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-fraunces font-semibold text-4xl lg:text-5xl text-primary-ink mb-6">
              Stories of <span className="text-gold">Faithful Partnership</span>
            </h1>
            <div className="w-16 h-0.5 bg-gold mx-auto mb-8"></div>
            <p className="text-xl text-slate-secondary max-w-4xl mx-auto leading-relaxed">
              These stories represent real relationships, genuine struggles, and authentic 
              transformation. Every pastor we walk with has a unique journey, but they all 
              share the common experience of faithful friendship making a profound difference.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-fraunces font-semibold text-gold mb-2">
                  {stat.number}
                </div>
                <h3 className="font-semibold text-primary-ink mb-1">{stat.label}</h3>
                <p className="text-sm text-slate-secondary">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Story Slider */}
      <section className="bg-sky-callout py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-fraunces font-semibold text-3xl text-primary-ink mb-4">
              Testimonials
            </h2>
            <div className="w-16 h-0.5 bg-gold mx-auto"></div>
          </div>

          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div>
                <div className="bg-gold/10 p-4 rounded-lg mb-6">
                  <div className="flex items-center space-x-2 mb-2">
                    <Quote className="text-gold" size={20} />
                    <span className="text-sm font-medium text-slate-secondary">
                      {testimonials[currentStory].category}
                    </span>
                  </div>
                  <blockquote className="font-fraunces text-xl lg:text-2xl text-olive italic leading-relaxed">
                    "{testimonials[currentStory].quote}"
                  </blockquote>
                </div>
                
                <div className="mb-6">
                  <cite className="font-semibold text-primary-ink text-lg">
                    {testimonials[currentStory].author}
                  </cite>
                  <p className="text-slate-secondary">
                    {testimonials[currentStory].location}
                  </p>
                </div>

                <div className="flex items-center space-x-4">
                  <button 
                    onClick={() => setCurrentStory(currentStory > 0 ? currentStory - 1 : testimonials.length - 1)}
                    className="p-2 rounded-full bg-gold/10 hover:bg-gold/20 transition-colors"
                  >
                    <ArrowLeft className="text-gold" size={20} />
                  </button>
                  <div className="flex space-x-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentStory(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          currentStory === index ? 'bg-gold' : 'bg-gold/30'
                        }`}
                      />
                    ))}
                  </div>
                  <button 
                    onClick={() => setCurrentStory(currentStory < testimonials.length - 1 ? currentStory + 1 : 0)}
                    className="p-2 rounded-full bg-gold/10 hover:bg-gold/20 transition-colors"
                  >
                    <ArrowRight className="text-gold" size={20} />
                  </button>
                </div>
              </div>

              <div className="bg-wheat-bg p-6 rounded-lg">
                <h3 className="font-fraunces font-semibold text-lg text-primary-ink mb-4">
                  About These Stories
                </h3>
                <p className="text-slate-secondary text-sm leading-relaxed">
                  {testimonials[currentStory].story}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Request Reference Call */}
      <section className="bg-wheat-bg py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-fraunces font-semibold text-3xl text-primary-ink mb-6">
              Request a Reference Call
            </h2>
            <div className="w-16 h-0.5 bg-gold mx-auto"></div>
          </div>

          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-fraunces font-semibold text-2xl text-primary-ink mb-4">
                  Request a Reference Call
                </h3>
                <p className="text-slate-secondary mb-6 leading-relaxed">
                  Would you like to speak with a pastor we serve? Request a reference call and we will connect you.
                </p>
              </div>

              <div className="bg-sky-callout p-6 rounded-lg">
                <h4 className="font-semibold text-primary-ink mb-4">Request a Reference Call</h4>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-secondary mb-2">
                      Your Name
                    </label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-secondary mb-2">
                      Email Address
                    </label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                      placeholder="pastor@church.org"
                    />
                  </div>
                  <div>
                    <button className="w-full bg-gold text-white py-3 rounded-lg font-semibold hover:bg-gold/90 transition-colors">
                      Request Reference Call
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="bg-wheat-bg p-6 rounded-xl">
              <blockquote className="text-slate-secondary italic mb-4 leading-relaxed">
                "{testimonials[0].quote}"
              </blockquote>
              <cite className="text-primary-ink font-medium text-sm">
                {testimonials[0].author}
              </cite>
              <p className="text-slate-secondary text-xs mt-1">
                {testimonials[0].location}
              </p>
            </div>

            <div className="bg-sky-callout p-6 rounded-xl">
              <blockquote className="text-slate-secondary italic mb-4 leading-relaxed">
                "{testimonials[1].quote}"
              </blockquote>
              <cite className="text-primary-ink font-medium text-sm">
                {testimonials[1].author}
              </cite>
              <p className="text-slate-secondary text-xs mt-1">
                {testimonials[1].location}
              </p>
            </div>

            <div className="bg-white border-2 border-olive/20 p-6 rounded-xl">
              <blockquote className="text-slate-secondary italic mb-4 leading-relaxed">
                "{testimonials[2].quote}"
              </blockquote>
              <cite className="text-primary-ink font-medium text-sm">
                {testimonials[2].author}
              </cite>
              <p className="text-slate-secondary text-xs mt-1">
                {testimonials[2].location}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Privacy and Care */}
      <section className="bg-wheat-bg py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-fraunces font-semibold text-2xl text-primary-ink mb-4">
            Privacy and Care
          </h2>
          <p className="text-slate-secondary leading-relaxed">
            We honor confidentiality. Sensitive conversations are never recorded. We protect trust by keeping private matters private and by seeking consent before sharing.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary-ink text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-fraunces font-semibold text-3xl lg:text-4xl mb-6">
            Ready to Begin Your Own Story?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Every partnership story starts with a simple conversation. We'd love to 
            hear about your ministry journey and explore how we might walk together 
            in faithful friendship.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gold text-primary-ink px-8 py-4 rounded-full font-semibold hover:bg-gold/90 transition-colors">
              Book Your First Conversation
            </button>
            <button className="border-2 border-gold text-gold px-8 py-4 rounded-full font-semibold hover:bg-gold hover:text-primary-ink transition-colors">
              Request a Reference Call
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StoriesTestimonials;
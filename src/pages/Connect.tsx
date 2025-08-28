import React, { useState } from 'react';
import { Phone, Mail, MapPin, Calendar, Clock, Send, Heart, Users, Video, User } from 'lucide-react';

const Connect = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const schedulingOptions = [
    {
      id: 1,
      title: "Spiritual Direction In-Person",
      icon: User,
      description: "Please choose a day and time that is best for your calendar. We will never go over an hour together...",
      link: "https://calendly.com/billypatterson"
    },
    {
      id: 2,
      title: "Spiritual Direction Zoom Call", 
      icon: Video,
      description: "Let's connect via Zoom for some time together. You bring what you would like from the conversation...",
      link: "https://calendly.com/billypatterson"
    },
    {
      id: 3,
      title: "30 Minute Phone Call Check-in",
      icon: Phone,
      description: "Get some time touching base - you drive the conversation with what you would like from our conversation...",
      link: "https://calendly.com/billypatterson"
    },
    {
      id: 4,
      title: "Dinner with the Pattersons",
      icon: Heart,
      description: "If you would like to grab a meal as couples, Kelly and I would love to make that happen...",
      link: "https://calendly.com/billypatterson"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-wheat-bg py-20 relative overflow-hidden">
        {/* Vine decorations representing connection and communication */}
        <div className="absolute inset-0 pointer-events-none">
          <img 
            src="/vine.svg" 
            alt="" 
            className="absolute left-0 top-1/4 w-26 h-44 opacity-9"
            style={{ transform: 'translateX(-35%) rotate(-7deg)' }}
          />
          <img 
            src="/vine.svg" 
            alt="" 
            className="absolute right-0 top-1/2 w-22 h-38 opacity-7 scaleX(-1)"
            style={{ transform: 'translateX(30%) rotate(10deg) scaleX(-1)' }}
          />
        </div>
        
        {/* Connect page connection-themed decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-16 left-12 w-24 h-24 border border-olive/40 rounded-full"></div>
          <div className="absolute top-24 right-16 w-18 h-18 border border-gold/40 rounded-full"></div>
          <div className="absolute bottom-20 left-1/4 w-14 h-14 border border-olive/30 rounded-full"></div>
          
          {/* Connection lines representing communication */}
          <div className="absolute top-1/3 left-1/3 w-16 h-0.5 bg-olive/25 rotate-25"></div>
          <div className="absolute bottom-1/3 right-1/3 w-12 h-0.5 bg-gold/25 -rotate-25"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-fraunces font-semibold text-4xl lg:text-5xl text-primary-ink mb-6">
              Begin the <span className="text-gold">Conversation</span>
            </h1>
            <div className="w-16 h-0.5 bg-gold mx-auto mb-8"></div>
            <p className="text-xl text-slate-secondary max-w-4xl mx-auto leading-relaxed">
              Taking the first step is often the hardest part. We're here to make it as simple as possible. 
              Your conversation is always confidential, and there is never any pressure.
            </p>
          </div>
        </div>
      </section>

      {/* Schedule a Call Section - Primary CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-fraunces font-semibold text-3xl text-primary-ink mb-6">
              Schedule a Confidential Call
            </h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mb-8"></div>
            <p className="text-lg text-slate-secondary max-w-3xl mx-auto">
              Choose the type of connection that feels right for your current season. 
              Each option leads to genuine conversation and prayer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {schedulingOptions.map((option) => {
              const IconComponent = option.icon;
              return (
                <a
                  key={option.id}
                  href={option.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-sky-callout p-8 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-gold/30 transition-colors">
                      <IconComponent className="text-gold" size={24} />
                    </div>
                    <div>
                      <h3 className="font-fraunces font-semibold text-xl text-primary-ink mb-3 group-hover:text-gold transition-colors">
                        {option.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-slate-secondary leading-relaxed">
                    {option.description}
                  </p>
                  <div className="mt-4 flex items-center text-gold font-medium">
                    <Calendar size={16} className="mr-2" />
                    <span>Schedule Now</span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Send a Message Section - Secondary CTA */}
      <section className="bg-sky-callout py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-fraunces font-semibold text-3xl text-primary-ink mb-6">
              Or, Send a General Inquiry
            </h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mb-6"></div>
            <p className="text-lg text-slate-secondary">
              Not ready to schedule? Send us a message and we'll respond personally within 24 hours.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-secondary mb-2">
                    Your Name <span className="text-gold">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-secondary mb-2">
                    Email Address <span className="text-gold">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-secondary mb-2">
                  Your Message <span className="text-gold">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                  placeholder="Share what's on your heart or any questions you have about our ministry..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gold text-white py-4 rounded-lg font-semibold text-lg hover:bg-gold/90 transition-colors flex items-center justify-center space-x-2"
              >
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-fraunces font-semibold text-3xl text-primary-ink mb-6">
              Common Questions About Connecting
            </h2>
            <div className="w-16 h-0.5 bg-gold mx-auto"></div>
          </div>

          <div className="space-y-8">
            <div className="bg-wheat-bg p-6 rounded-lg">
              <h3 className="font-semibold text-primary-ink mb-3">
                What happens after I schedule a call?
              </h3>
              <p className="text-slate-secondary leading-relaxed">
                We'll send you a confirmation email with all the details. Before our conversation, 
                we'll spend time in prayer for you and your situation. Our goal is simply to listen, 
                understand your story, and explore how we might be helpful—with no pressure or expectations.
              </p>
            </div>

            <div className="bg-wheat-bg p-6 rounded-lg">
              <h3 className="font-semibold text-primary-ink mb-3">
                Is there any cost for the initial conversation?
              </h3>
              <p className="text-slate-secondary leading-relaxed">
                No, the initial conversation is always free. We believe relationships should develop 
                naturally without financial pressure. If a long-term partnership develops, we'll discuss 
                support expectations transparently, but many aspects of our care are provided regardless of financial capacity.
              </p>
            </div>

            <div className="bg-wheat-bg p-6 rounded-lg">
              <h3 className="font-semibold text-primary-ink mb-3">
                What if I'm not sure I'm ready for mentorship?
              </h3>
              <p className="text-slate-secondary leading-relaxed">
                That's perfectly normal and honest. We appreciate pastors who think carefully about 
                relationships. The initial conversation helps both of us discern if there's a good fit. 
                Sometimes we simply provide encouragement and resource connections without ongoing partnership, 
                and that's valuable too.
              </p>
            </div>

            <div className="bg-wheat-bg p-6 rounded-lg">
              <h3 className="font-semibold text-primary-ink mb-3">
                Do you work with pastors from all denominational backgrounds?
              </h3>
              <p className="text-slate-secondary leading-relaxed">
                Yes, we've walked with pastors from many different denominational backgrounds. 
                While we have our own theological convictions, we focus on the common ground of faithful 
                pastoral ministry and healthy family life. What matters most is your heart for serving God 
                and caring for people.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-sky-callout py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-center mb-12">
            <h2 className="font-fraunces font-semibold text-3xl text-primary-ink mb-6">
              Stay Connected
            </h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mb-6"></div>
            <p className="text-lg text-slate-secondary max-w-2xl mx-auto leading-relaxed">
              Subscribe to receive weekly encouragement from "The Abiding Word." 
              Simple, honest notes to point you back to Jesus.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                />
              </div>
              <button className="bg-gold text-white px-8 py-3 rounded-lg font-semibold hover:bg-gold/90 transition-colors flex items-center justify-center space-x-2">
                <Mail size={20} />
                <span>Subscribe</span>
              </button>
            </div>
            <p className="text-sm text-slate-secondary mt-4">
              We respect your inbox. Unsubscribe anytime with one click.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Connect;
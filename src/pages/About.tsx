import React from 'react';
import { Heart, Users, BookOpen, Phone } from 'lucide-react';

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-wheat-bg py-20 relative overflow-hidden">
        {/* Vine decorative elements */}
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
        
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-12 right-16 w-24 h-24 border border-olive rounded-full"></div>
          <div className="absolute bottom-16 left-12 w-16 h-16 border border-gold rounded-full"></div>
          <div className="absolute top-1/3 left-1/4 w-6 h-6 bg-olive/30 rounded-full"></div>
          <div className="absolute bottom-1/3 right-1/4 w-4 h-4 bg-gold/30 rounded-full"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-fraunces font-semibold text-4xl lg:text-5xl text-primary-ink mb-6">
              Our Story & <span className="text-gold">Our Heart</span>
            </h1>
            <div className="w-16 h-0.5 bg-gold mx-auto mb-8"></div>
            <p className="text-xl text-slate-secondary max-w-4xl mx-auto leading-relaxed">
              But there's hope. Throughout decades of ministry, we've seen that living as a Christian leader is more than doable—although not without hardship and challenges, it's a life full of joy. Through spiritual parenting, we've witnessed transformation in pastors, elders, and ministry professionals who have learned to operate from their love relationship with Jesus.
            </p>
          </div>
        </div>
      </section>

      {/* Meet Billy & Kelly Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-fraunces font-semibold text-3xl text-primary-ink mb-6">
              Meet Your Mentors
            </h2>
            <div className="w-16 h-0.5 bg-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Billy Patterson */}
            <div className="bg-wheat-bg p-8 rounded-2xl text-center">
              <div className="w-32 h-32 bg-olive/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Users className="text-olive" size={64} />
                <span className="sr-only">Professional headshot placeholder</span>
              </div>
              <h3 className="font-fraunces font-semibold text-2xl text-primary-ink mb-4">
                Billy Patterson
              </h3>
              <p className="text-slate-secondary leading-relaxed">
                With 37 years of ministry experience, Billy brings deep wisdom and proven pastoral insight to spiritual mentorship. His heart for leaders stems from his own journey through the challenges and joys of ministry life, and his commitment to walking alongside pastors with patience, prayer, and practical guidance.
              </p>
            </div>

            {/* Kelly Patterson */}
            <div className="bg-sky-callout p-8 rounded-2xl text-center">
              <div className="w-32 h-32 bg-gold/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Heart className="text-gold" size={64} />
                <span className="sr-only">Professional headshot placeholder</span>
              </div>
              <h3 className="font-fraunces font-semibold text-2xl text-primary-ink mb-4">
                Kelly Patterson
              </h3>
              <p className="text-slate-secondary leading-relaxed">
                Kelly's 37 years of ministry partnership brings a unique perspective on family life in ministry. She plays a crucial role in communications and shaping the ministry's message, while offering special insight and support to ministry spouses navigating the unique challenges of pastoral family life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy Section */}
      <section className="bg-wheat-bg py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-fraunces font-semibold text-3xl text-primary-ink mb-6">
              Our Guiding Principles
            </h2>
            <div className="w-16 h-0.5 bg-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl">
              <div className="w-12 h-12 bg-olive/10 rounded-full flex items-center justify-center mb-6">
                <Heart className="text-olive" size={24} />
              </div>
              <h3 className="font-fraunces font-semibold text-xl text-primary-ink mb-4">
                Abiding in Christ First
              </h3>
              <p className="text-slate-secondary leading-relaxed">
                Everything flows from a leader's personal relationship with Jesus. We believe that sustainable ministry and healthy leadership begins with cultivating an intimate, abiding relationship with Christ that informs every aspect of life and service.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl">
              <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mb-6">
                <Users className="text-gold" size={24} />
              </div>
              <h3 className="font-fraunces font-semibold text-xl text-primary-ink mb-4">
                The Power of Presence
              </h3>
              <p className="text-slate-secondary leading-relaxed">
                Real transformation happens through consistent, long-term relationships rather than programs or events. We value the ministry of presence—being faithfully available, consistently praying, and walking alongside leaders through all seasons.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl">
              <div className="w-12 h-12 bg-sky-500/10 rounded-full flex items-center justify-center mb-6">
                <BookOpen className="text-sky-500" size={24} />
              </div>
              <h3 className="font-fraunces font-semibold text-xl text-primary-ink mb-4">
                Generational Faithfulness
              </h3>
              <p className="text-slate-secondary leading-relaxed">
                We're committed to building sustainable health in ministry and family life that lasts. Our goal is to help leaders develop patterns of faithfulness that will serve them, their families, and their ministries for decades to come.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl">
              <div className="w-12 h-12 bg-primary-ink/10 rounded-full flex items-center justify-center mb-6">
                <Heart className="text-primary-ink" size={24} />
              </div>
              <h3 className="font-fraunces font-semibold text-xl text-primary-ink mb-4">
                A Relational Approach
              </h3>
              <p className="text-slate-secondary leading-relaxed">
                We're not consultants or coaches offering quick fixes. We're spiritual parents offering love, wisdom, and consistent support. The relationship itself is the ministry—everything else flows from genuine care and authentic friendship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Experience Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-fraunces font-semibold text-3xl text-primary-ink mb-6">
              A History of Trusted Partnership
            </h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mb-8"></div>
            <p className="text-lg text-slate-secondary max-w-3xl mx-auto mb-12">
              Our ministry is built on decades of experience serving and partnering with a diverse range of churches and ministry contexts.
            </p>
          </div>

          <div className="bg-sky-callout p-8 lg:p-12 rounded-2xl">
            <p className="text-lg text-slate-secondary text-center leading-relaxed mb-8">
              We draw from experience at The People's Church, Trinity Grace Church, The Parks Church, Skyline Church and through relationships with pastors in many locations around the world.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-primary-ink text-sm">The People's Church</h4>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-primary-ink text-sm">Trinity Grace Church</h4>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-primary-ink text-sm">The Parks Church</h4>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-primary-ink text-sm">Skyline Church</h4>
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
            We would love to meet you, listen, and pray. Choose a time that works for you and we will connect.
          </p>
          <button className="bg-gold text-primary-ink px-8 py-4 rounded-full font-semibold hover:bg-gold/90 transition-colors flex items-center justify-center space-x-2 mx-auto">
            <Phone size={20} />
            <span>Book a Conversation</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
import React from 'react';
import { Users, Heart, BookOpen, Phone, ArrowRight, CheckCircle } from 'lucide-react';

const Home = () => {
  return (
    <div>
      {/* Hero Section with Background Image */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/src/assets/images/hero-main.jpg)' }}
        />
        
        {/* Dark Overlay for Text Contrast */}
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-fraunces font-semibold text-5xl lg:text-7xl text-white mb-8 leading-tight">
            Spiritual Mentorship for <span className="text-gold">Ministry Leaders</span>
          </h1>
          <p className="text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto mb-12 leading-relaxed">
            Faithful friendship, prayer, and guidance for pastors and Christian leaders who want to serve well while maintaining healthy families and sustainable ministry.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-gold text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gold/90 transition-colors flex items-center justify-center space-x-2">
              <Phone size={20} />
              <span>Book a Conversation</span>
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-primary-ink transition-colors">
              Learn About Our Work
            </button>
          </div>
        </div>
      </section>

      {/* The Challenge Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-fraunces font-semibold text-3xl lg:text-4xl text-primary-ink mb-6">
              The Reality of Ministry Leadership
            </h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mb-8"></div>
            <p className="text-xl text-slate-secondary max-w-4xl mx-auto leading-relaxed">
              Ministry leadership can be isolating, overwhelming, and demanding. Many pastors and Christian leaders struggle with burnout, family tension, and the weight of carrying others' burdens while having few places to find support for their own.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-olive/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="text-olive" size={32} />
              </div>
              <h3 className="font-fraunces font-semibold text-xl text-primary-ink mb-4">
                Isolation & Loneliness
              </h3>
              <p className="text-slate-secondary leading-relaxed">
                Many leaders feel deeply alone, carrying burdens without trusted friends who understand their unique challenges.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="text-gold" size={32} />
              </div>
              <h3 className="font-fraunces font-semibold text-xl text-primary-ink mb-4">
                Family-Ministry Tension
              </h3>
              <p className="text-slate-secondary leading-relaxed">
                The perceived choice between ministry success and family health creates stress and guilt for many pastoral families.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-sky-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="text-sky-500" size={32} />
              </div>
              <h3 className="font-fraunces font-semibold text-xl text-primary-ink mb-4">
                Lack of Mentorship
              </h3>
              <p className="text-slate-secondary leading-relaxed">
                Few leaders have experienced genuine spiritual parenting—long-term, patient, unconditional support from seasoned mentors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Hope Section */}
      <section className="bg-sky-callout py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-fraunces font-semibold text-3xl lg:text-4xl text-primary-ink mb-6">
              But There's Hope
            </h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mb-8"></div>
            <p className="text-xl text-slate-secondary max-w-4xl mx-auto leading-relaxed">
              Throughout decades of ministry, we've seen that living as a Christian leader is more than doable—although not without hardship and challenges, it's a life full of joy. Through spiritual parenting, we've witnessed transformation in pastors, elders, and ministry professionals who have learned to operate from their love relationship with Jesus.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-fraunces font-semibold text-2xl text-primary-ink mb-6">
                What We Provide
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-gold mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold text-primary-ink">Consistent Prayer & Friendship</h4>
                    <p className="text-slate-secondary">Regular, faithful intercession and genuine relationship</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-gold mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold text-primary-ink">Spiritual Mentorship</h4>
                    <p className="text-slate-secondary">Wise guidance rooted in decades of ministry experience</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-gold mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold text-primary-ink">Family Support</h4>
                    <p className="text-slate-secondary">Care that extends to spouses and children</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-gold mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold text-primary-ink">Crisis Response</h4>
                    <p className="text-slate-secondary">Immediate support during difficult seasons</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <blockquote className="font-fraunces text-xl text-primary-ink mb-6 italic leading-relaxed">
                "I have been profoundly impacted by the steady friendship, prayer, and guidance I have received. I highly recommend continued and increased support for this work."
              </blockquote>
              <cite className="text-slate-secondary font-medium">
                — Nathan Kollar, Lead Pastor, GraceLand Church Franklin
              </cite>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-fraunces font-semibold text-3xl lg:text-4xl text-primary-ink mb-6">
              How We Walk With You
            </h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mb-8"></div>
            <p className="text-lg text-slate-secondary max-w-3xl mx-auto">
              Our approach is relational, not transactional. We believe in the power of presence, 
              consistent prayer, and long-term commitment to your growth and flourishing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-wheat-bg p-8 rounded-xl">
              <h3 className="font-fraunces font-semibold text-xl text-primary-ink mb-4">
                For Leaders & Spouses
              </h3>
              <p className="text-slate-secondary mb-6 leading-relaxed">
                Personal spiritual mentorship focused on your relationship with Jesus, 
                your leadership development, and your family's health and flourishing.
              </p>
              <button className="text-gold hover:text-gold/80 transition-colors font-medium flex items-center space-x-2">
                <span>Learn More</span>
                <ArrowRight size={16} />
              </button>
            </div>

            <div className="bg-sky-callout p-8 rounded-xl">
              <h3 className="font-fraunces font-semibold text-xl text-primary-ink mb-4">
                For Churches & Teams
              </h3>
              <p className="text-slate-secondary mb-6 leading-relaxed">
                Leadership development and team discipleship to strengthen your church's 
                ministry from the inside out through healthy, sustainable practices.
              </p>
              <button className="text-gold hover:text-gold/80 transition-colors font-medium flex items-center space-x-2">
                <span>Learn More</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary-ink text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-fraunces font-semibold text-3xl lg:text-4xl mb-6">
              Faithful Partnership Over Time
            </h2>
            <div className="w-16 h-0.5 bg-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl lg:text-5xl font-fraunces font-semibold text-gold mb-2">
                150+
              </div>
              <p className="text-gray-300">Pastors Supported</p>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-fraunces font-semibold text-gold mb-2">
                25+
              </div>
              <p className="text-gray-300">Years Experience</p>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-fraunces font-semibold text-gold mb-2">
                95%
              </div>
              <p className="text-gray-300">Still in Ministry</p>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-fraunces font-semibold text-gold mb-2">
                6
              </div>
              <p className="text-gray-300">States Served</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-wheat-bg py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-fraunces font-semibold text-3xl lg:text-4xl text-primary-ink mb-6">
            Ready to Begin the Conversation?
          </h2>
          <p className="text-xl text-slate-secondary mb-8 leading-relaxed">
            Every partnership begins with a simple, confidential conversation. We'd love to 
            hear your story and explore how we might walk alongside you in faithful friendship.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gold text-white px-8 py-4 rounded-full font-semibold hover:bg-gold/90 transition-colors flex items-center justify-center space-x-2">
              <Phone size={20} />
              <span>Book Your First Conversation</span>
            </button>
            <button className="border-2 border-primary-ink text-primary-ink px-8 py-4 rounded-full font-semibold hover:bg-primary-ink hover:text-white transition-colors">
              Learn About Our Heart & Story
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
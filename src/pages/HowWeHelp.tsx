import React from 'react';
import { Heart, Users, BookOpen, Phone, Shield, Compass, Home, Star } from 'lucide-react';

const HowWeHelp = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-wheat-bg py-20">
        {/* Subtle vine decorations for How We Help page */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <img 
            src="/vine.svg" 
            alt="" 
            className="absolute left-0 top-24 w-26 h-42 opacity-8"
            style={{ transform: 'translateX(-40%) rotate(-8deg)' }}
          />
          <img 
            src="/vine.svg" 
            alt="" 
            className="absolute right-0 bottom-32 w-24 h-38 opacity-6 scaleX(-1)"
            style={{ transform: 'translateX(35%) rotate(12deg) scaleX(-1)' }}
          />
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-fraunces font-semibold text-4xl lg:text-5xl text-primary-ink mb-6">
              How We <span className="text-gold">Help</span>
            </h1>
            <div className="w-16 h-0.5 bg-gold mx-auto mb-8"></div>
            <p className="text-xl text-slate-secondary max-w-4xl mx-auto leading-relaxed">
              Regular visits and check-ins create a constant, safe friendship focused on abiding in Jesus, healthy leadership, and faithful family life. Our goal is to encourage your abiding relationship with Jesus above all else.
            </p>
          </div>
        </div>
      </section>

      {/* You and Your Family */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-fraunces font-semibold text-3xl text-primary-ink mb-6">
              You and Your Family
            </h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-olive/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-olive/20 transition-colors">
                <Heart className="text-olive" size={40} />
              </div>
              <h3 className="font-fraunces font-semibold text-lg text-primary-ink mb-4">
                Consistent Prayer
              </h3>
              <p className="text-slate-secondary text-sm leading-relaxed">
                Ongoing intercession for you, your family, and your ministry
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold/20 transition-colors">
                <Users className="text-gold" size={40} />
              </div>
              <h3 className="font-fraunces font-semibold text-lg text-primary-ink mb-4">
                Spiritual Mentorship
              </h3>
              <p className="text-slate-secondary text-sm leading-relaxed">
                For you and your spouse, with intentional time to bless your children
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-sky-callout rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-sky-callout/80 transition-colors">
                <Shield className="text-primary-ink" size={40} />
              </div>
              <h3 className="font-fraunces font-semibold text-lg text-primary-ink mb-4">
                Safe Wisdom Space
              </h3>
              <p className="text-slate-secondary text-sm leading-relaxed">
                A safe place to seek wisdom for church leadership needs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Your Key Disciples */}
      <section className="bg-wheat-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-fraunces font-semibold text-3xl text-primary-ink mb-6">
              Your Key Disciples or Leaders
            </h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-wheat-bg rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-wheat-bg/80 transition-colors">
                <Heart className="text-olive" size={40} />
              </div>
              <h3 className="font-fraunces font-semibold text-lg text-primary-ink mb-4">
                Ongoing Prayer
              </h3>
              <p className="text-slate-secondary text-sm leading-relaxed">
                Consistent intercession for your key leaders
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold/20 transition-colors">
                <Users className="text-gold" size={40} />
              </div>
              <h3 className="font-fraunces font-semibold text-lg text-primary-ink mb-4">
                Discipleship
              </h3>
              <p className="text-slate-secondary text-sm leading-relaxed">
                One on one or group discipleship during visits
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-sky-callout rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-sky-callout/80 transition-colors">
                <BookOpen className="text-olive" size={40} />
              </div>
              <h3 className="font-fraunces font-semibold text-lg text-primary-ink mb-4">
                Eldering Training
              </h3>
              <p className="text-slate-secondary text-sm leading-relaxed">
                For those who commit, including planned retreat getaways
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Your Church */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-fraunces font-semibold text-3xl text-primary-ink mb-6">
              Your Church
            </h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-olive/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-olive/20 transition-colors">
                <Heart className="text-olive" size={40} />
              </div>
              <h3 className="font-fraunces font-semibold text-lg text-primary-ink mb-4">
                Consistent Prayer
              </h3>
              <p className="text-slate-secondary text-sm leading-relaxed">
                Ongoing intercession for your church family
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold/20 transition-colors">
                <Users className="text-gold" size={40} />
              </div>
              <h3 className="font-fraunces font-semibold text-lg text-primary-ink mb-4">
                Spiritual Parenting
              </h3>
              <p className="text-slate-secondary text-sm leading-relaxed">
                Extended to eldering leaders, pairing with existing rhythms
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-sky-callout rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-sky-callout/80 transition-colors">
                <Shield className="text-primary-ink" size={40} />
              </div>
              <h3 className="font-fraunces font-semibold text-lg text-primary-ink mb-4">
                Present and Known
              </h3>
              <p className="text-slate-secondary text-sm leading-relaxed">
                Among your eldering leaders
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-wheat-bg rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-wheat-bg/80 transition-colors">
                <BookOpen className="text-olive" size={40} />
              </div>
              <h3 className="font-fraunces font-semibold text-lg text-primary-ink mb-4">
                International Partnerships
              </h3>
              <p className="text-slate-secondary text-sm leading-relaxed">
                Help develop and resource international relationships
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Your City */}
      <section className="bg-wheat-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-fraunces font-semibold text-3xl text-primary-ink mb-6">
              Your City
            </h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-olive/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-olive/20 transition-colors">
                <Heart className="text-olive" size={40} />
              </div>
              <h3 className="font-fraunces font-semibold text-lg text-primary-ink mb-4">
                Prayer for Your City
              </h3>
              <p className="text-slate-secondary text-sm leading-relaxed">
                Consistent intercession for your community
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold/20 transition-colors">
                <Users className="text-gold" size={40} />
              </div>
              <h3 className="font-fraunces font-semibold text-lg text-primary-ink mb-4">
                Prayer Walks
              </h3>
              <p className="text-slate-secondary text-sm leading-relaxed">
                Planned prayer walks with leaders
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-sky-callout rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-sky-callout/80 transition-colors">
                <BookOpen className="text-primary-ink" size={40} />
              </div>
              <h3 className="font-fraunces font-semibold text-lg text-primary-ink mb-4">
                Cross-Sector Connections
              </h3>
              <p className="text-slate-secondary text-sm leading-relaxed">
                Connect leaders in business, arts, education, medical, and service
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Process */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-fraunces font-semibold text-3xl text-primary-ink mb-6">
              How We Begin Walking Together
            </h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mb-8"></div>
            <p className="text-lg text-slate-secondary max-w-3xl mx-auto">
              Starting a relationship with Abiding Partners is simple and pressure-free. 
              We believe the best partnerships grow naturally from genuine connection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center relative">
              <div className="w-16 h-16 bg-gold text-white rounded-full flex items-center justify-center mx-auto mb-6 font-bold text-xl">
                1
              </div>
              <h3 className="font-fraunces font-semibold text-xl text-primary-ink mb-4">
                Initial Conversation
              </h3>
              <p className="text-slate-secondary leading-relaxed">
                We start with a relaxed conversation to hear your story, understand 
                your current season, and explore whether we might be a good fit for walking together.
              </p>
              {/* Connecting line */}
              <div className="hidden md:block absolute top-8 -right-4 w-8 h-0.5 bg-gold/30"></div>
            </div>

            <div className="text-center relative">
              <div className="w-16 h-16 bg-olive text-white rounded-full flex items-center justify-center mx-auto mb-6 font-bold text-xl">
                2
              </div>
              <h3 className="font-fraunces font-semibold text-xl text-primary-ink mb-4">
                Mutual Discernment
              </h3>
              <p className="text-slate-secondary leading-relaxed">
                We take time to pray and consider together how the Lord might be 
                leading our partnership. No pressure, just patient seeking of God's direction.
              </p>
              {/* Connecting line */}
              <div className="hidden md:block absolute top-8 -right-4 w-8 h-0.5 bg-gold/30"></div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-sky-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 font-bold text-xl">
                3
              </div>
              <h3 className="font-fraunces font-semibold text-xl text-primary-ink mb-4">
                Beginning the Journey
              </h3>
              <p className="text-slate-secondary leading-relaxed">
                We establish a rhythm of regular connection that works for your schedule 
                and family, beginning the long-term relationship of spiritual parenting and support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="bg-sky-callout py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-fraunces font-semibold text-3xl text-primary-ink mb-6">
              What Makes Our Approach Different
            </h2>
            <div className="w-16 h-0.5 bg-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl">
              <div className="flex items-start space-x-4 mb-4">
                <Star className="text-gold mt-1 flex-shrink-0" size={24} />
                <h3 className="font-fraunces font-semibold text-xl text-primary-ink">
                  Long-term Commitment
                </h3>
              </div>
              <p className="text-slate-secondary leading-relaxed mb-4">
                While many ministry support organizations offer short-term programs 
                or one-time events, we commit to walking with you for years.
              </p>
              <p className="text-slate-secondary leading-relaxed text-sm italic">
                Real transformation happens in the context of sustained relationship, 
                not quick fixes or celebrity encounters.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl">
              <div className="flex items-start space-x-4 mb-4">
                <Heart className="text-olive mt-1 flex-shrink-0" size={24} />
                <h3 className="font-fraunces font-semibold text-xl text-primary-ink">
                  Relational, Not Transactional
                </h3>
              </div>
              <p className="text-slate-secondary leading-relaxed mb-4">
                We're not consultants or coaches offering strategies. We're spiritual 
                parents offering love, wisdom, and consistent support.
              </p>
              <p className="text-slate-secondary leading-relaxed text-sm italic">
                The relationship is the ministry—everything else flows from 
                genuine care and authentic friendship.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl">
              <div className="flex items-start space-x-4 mb-4">
                <Users className="text-sky-500 mt-1 flex-shrink-0" size={24} />
                <h3 className="font-fraunces font-semibold text-xl text-primary-ink">
                  Holistic Family Care
                </h3>
              </div>
              <p className="text-slate-secondary leading-relaxed mb-4">
                Most ministry support focuses solely on the pastor. We recognize that 
                pastoral families need comprehensive care and support.
              </p>
              <p className="text-slate-secondary leading-relaxed text-sm italic">
                Healthy families create sustainable ministry. We invest in both 
                your calling and your home.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl">
              <div className="flex items-start space-x-4 mb-4">
                <Shield className="text-primary-ink mt-1 flex-shrink-0" size={24} />
                <h3 className="font-fraunces font-semibold text-xl text-primary-ink">
                  Humble Excellence
                </h3>
              </div>
              <p className="text-slate-secondary leading-relaxed mb-4">
                We pursue the highest standards of care while maintaining the humility 
                that comes from serving rather than performing.
              </p>
              <p className="text-slate-secondary leading-relaxed text-sm italic">
                Our goal isn't to be impressive but to be faithful—faithfully present, 
                faithfully caring, faithfully supportive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary-ink text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-fraunces font-semibold text-3xl lg:text-4xl mb-6">
            Ready to Begin the Conversation?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            We'd love to hear your story and explore how we might walk alongside 
            you in this season of your ministry journey.
          </p>
          <button className="bg-gold text-primary-ink px-8 py-4 rounded-full font-semibold hover:bg-gold/90 transition-colors flex items-center justify-center space-x-2 mx-auto">
            <Phone size={20} />
            <span>Book Your First Conversation</span>
          </button>
          <p className="text-gray-400 mt-4 text-sm">
            No pressure, no sales pitch—just an authentic conversation about your ministry and family.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HowWeHelp;
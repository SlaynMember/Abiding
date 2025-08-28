import React from 'react';
import { MapPin, Users, Heart, Quote } from 'lucide-react';

const PastorsWeWalkWith = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-wheat-bg py-20">
        {/* Vine elements suggesting connection and walking together */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <img 
            src="/vine.svg" 
            alt="" 
            className="absolute left-2 top-1/4 w-24 h-40 opacity-9"
            style={{ transform: 'translateX(-30%) rotate(-12deg)' }}
          />
          <img 
            src="/vine.svg" 
            alt="" 
            className="absolute right-2 top-1/2 w-22 h-36 opacity-7 scaleX(-1)"
            style={{ transform: 'translateX(25%) rotate(10deg) scaleX(-1)' }}
          />
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-fraunces font-semibold text-4xl lg:text-5xl text-primary-ink mb-6">
              Pastors We <span className="text-gold">Walk With</span>
            </h1>
            <div className="w-16 h-0.5 bg-gold mx-auto mb-8"></div>
            <p className="text-xl text-slate-secondary max-w-4xl mx-auto leading-relaxed">
              Every pastor we partner with has a unique story, but they all share a common 
              desire: to serve faithfully while maintaining healthy families and sustainable ministry. 
              Here are some of the leaders we're honored to walk alongside.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Statement */}
      <section className="bg-sky-callout py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-olive font-medium">
            <strong>Respecting Privacy:</strong> The stories below are shared with permission and 
            represent composites of multiple relationships to protect confidentiality. Names and 
            specific details have been changed while preserving the authentic experiences of pastoral partnership.
          </p>
        </div>
      </section>

      {/* Pastor Profiles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            
            {[
              { names: 'Jared and Marci Doe', church: 'Desert City Church', location: 'Phoenix AZ' },
              { names: 'Scott and Shannon Austin', church: 'The Park Community', location: 'San Antonio TX' },
              { names: 'Nathan and Jessica Kollar', church: 'GraceLand Church', location: 'Franklin TN' },
              { names: 'Michael and Val Kyker', church: 'Journey Church', location: 'Tampa FL' },
              { names: 'Kyle and Tessa Redel', church: 'The Park Church', location: 'McKinney TX' },
              { names: 'Caleb and Allison Clardy', church: 'Trinity Grace Church', location: 'Brooklyn NY' }
            ].map((pastor, index) => (
              <div key={index} className={`p-8 rounded-2xl ${
                index % 3 === 0 ? 'bg-wheat-bg' : 
                index % 3 === 1 ? 'bg-sky-callout' : 
                'bg-white border-2 border-olive/20'
              }`}>
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 ${
                    index % 3 === 0 ? 'bg-olive' : 
                    index % 3 === 1 ? 'bg-gold' : 
                    'bg-sky-500'
                  }`}>
                    <Users className="text-white" size={32} />
                  </div>
                  <div>
                    <h3 className="font-fraunces font-semibold text-xl text-primary-ink">{pastor.names}</h3>
                    <p className="text-slate-secondary">{pastor.church}</p>
                    <div className="flex items-center space-x-2 mt-2">
                      <MapPin className="text-gold" size={16} />
                      <span className="text-sm text-slate-secondary">{pastor.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Request Reference Call */}
          <div className="mt-16 bg-sky-callout p-8 rounded-2xl text-center">
            <h2 className="font-fraunces font-semibold text-2xl text-primary-ink mb-4">
              Request a Reference Call
            </h2>
            <p className="text-lg text-slate-secondary mb-6">
              Would you like to speak with a pastor we serve? Request a reference call and we will connect you.
            </p>
            <button className="bg-gold text-white px-8 py-3 rounded-full font-semibold hover:bg-gold/90 transition-colors">
              Request a Reference Call
            </button>
          </div>
        </div>
      </section>

      {/* Relationships List */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-fraunces font-semibold text-3xl text-primary-ink mb-6">
              Current Relationships
            </h2>
            <div className="w-16 h-0.5 bg-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { names: 'Jared and Marci Doe', church: 'Desert City Church', location: 'Phoenix AZ' },
              { names: 'Scott and Shannon Austin', church: 'The Park Community', location: 'San Antonio TX' },
              { names: 'Nathan and Jessica Kollar', church: 'GraceLand Church', location: 'Franklin TN' },
              { names: 'Michael and Val Kyker', church: 'Journey Church', location: 'Tampa FL' },
              { names: 'Kyle and Tessa Redel', church: 'The Park Church', location: 'McKinney TX' },
              { names: 'Caleb and Allison Clardy', church: 'Trinity Grace Church', location: 'Brooklyn NY' }
            ].map((pastor, index) => (
              <div key={index} className="bg-wheat-bg p-6 rounded-xl text-center">
                <div className="w-4 h-4 bg-gold rounded-full mx-auto mb-4"></div>
                <h3 className="font-fraunces font-semibold text-lg text-primary-ink mb-2">{pastor.names}</h3>
                <p className="text-slate-secondary mb-1">{pastor.church}</p>
                <p className="text-sm text-slate-secondary">{pastor.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Remove old sections */}
      <section className="bg-sky-callout py-20" style={{ display: 'none' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-fraunces font-semibold text-3xl text-primary-ink mb-6">
              Common Themes in Our Partnerships
            </h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mb-8"></div>
            <p className="text-lg text-slate-secondary max-w-3xl mx-auto">
              While every pastor's story is unique, we've noticed recurring themes in 
              the relationships we're privileged to be part of.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl text-center">
              <div className="w-12 h-12 bg-olive/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-olive" size={24} />
              </div>
              <h3 className="font-fraunces font-semibold text-lg text-primary-ink mb-3">
                Isolation & Loneliness
              </h3>
              <p className="text-slate-secondary text-sm leading-relaxed">
                Most pastors we meet feel deeply isolated, carrying burdens alone 
                without trusted friends who understand their unique challenges.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl text-center">
              <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-gold" size={24} />
              </div>
              <h3 className="font-fraunces font-semibold text-lg text-primary-ink mb-3">
                Family-Ministry Tension
              </h3>
              <p className="text-slate-secondary text-sm leading-relaxed">
                Many struggle with the perceived choice between ministry success 
                and family health, not realizing they can strengthen both.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl text-center">
              <div className="w-12 h-12 bg-sky-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Quote className="text-sky-500" size={24} />
              </div>
              <h3 className="font-fraunces font-semibold text-lg text-primary-ink mb-3">
                Lack of Mentorship
              </h3>
              <p className="text-slate-secondary text-sm leading-relaxed">
                Few have experienced genuine spiritual parenting—long-term, 
                patient, unconditional support from seasoned ministry leaders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Themes */}
      <section className="bg-sky-callout py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-fraunces font-semibold text-3xl text-primary-ink mb-6">
              Common Themes in Our Partnerships
            </h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mb-8"></div>
            <p className="text-lg text-slate-secondary max-w-3xl mx-auto">
              While every pastor's story is unique, we've noticed recurring themes in 
              the relationships we're privileged to be part of.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl text-center">
              <div className="w-12 h-12 bg-olive/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-olive" size={24} />
              </div>
              <h3 className="font-fraunces font-semibold text-lg text-primary-ink mb-3">
                Isolation & Loneliness
              </h3>
              <p className="text-slate-secondary text-sm leading-relaxed">
                Most pastors we meet feel deeply isolated, carrying burdens alone 
                without trusted friends who understand their unique challenges.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl text-center">
              <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-gold" size={24} />
              </div>
              <h3 className="font-fraunces font-semibold text-lg text-primary-ink mb-3">
                Family-Ministry Tension
              </h3>
              <p className="text-slate-secondary text-sm leading-relaxed">
                Many struggle with the perceived choice between ministry success 
                and family health, not realizing they can strengthen both.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl text-center">
              <div className="w-12 h-12 bg-sky-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Quote className="text-sky-500" size={24} />
              </div>
              <h3 className="font-fraunces font-semibold text-lg text-primary-ink mb-3">
                Lack of Mentorship
              </h3>
              <p className="text-slate-secondary text-sm leading-relaxed">
                Few have experienced genuine spiritual parenting—long-term, 
                patient, unconditional support from seasoned ministry leaders.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl text-center">
              <div className="w-12 h-12 bg-primary-ink/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-primary-ink" size={24} />
              </div>
              <h3 className="font-fraunces font-semibold text-lg text-primary-ink mb-3">
                Transition Seasons
              </h3>
              <p className="text-slate-secondary text-sm leading-relaxed">
                Many reach out during major transitions—new positions, church changes, 
                family developments, or calling clarifications.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl text-center">
              <div className="w-12 h-12 bg-wheat-bg/80 border border-olive/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-olive" size={24} />
              </div>
              <h3 className="font-fraunces font-semibold text-lg text-primary-ink mb-3">
                Burnout & Overwhelm
              </h3>
              <p className="text-slate-secondary text-sm leading-relaxed">
                Pastoral burnout is epidemic, with many questioning their calling 
                when they're actually just exhausted and unsupported.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl text-center">
              <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-gold" size={24} />
              </div>
              <h3 className="font-fraunces font-semibold text-lg text-primary-ink mb-3">
                Leadership Development
              </h3>
              <p className="text-slate-secondary text-sm leading-relaxed">
                Many desire to grow as leaders but lack trusted mentors who can 
                provide honest feedback and developmental support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Diversity Statement */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-fraunces font-semibold text-3xl text-primary-ink mb-6">
              Diversity in Partnership
            </h2>
            <div className="w-16 h-0.5 bg-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-slate-secondary mb-6 leading-relaxed">
                The pastors we walk with represent the beautiful diversity of Christ's church. 
                They come from different denominational backgrounds, lead various sizes of 
                congregations, and serve in urban, suburban, and rural contexts.
              </p>
              
              <p className="text-lg text-slate-secondary mb-6 leading-relaxed">
                Some are just starting their ministry journey, while others are seasoned 
                veterans. Some lead large churches, others plant new ones, and still others 
                serve in associate roles or specialized ministries.
              </p>
              
              <p className="text-lg text-slate-secondary leading-relaxed">
                What unites them all is a desire to serve faithfully while maintaining 
                healthy families and sustainable ministry practices. That's the common 
                ground where all our partnerships begin.
              </p>
            </div>

            <div className="bg-wheat-bg p-8 rounded-2xl">
              <h3 className="font-fraunces font-semibold text-xl text-primary-ink mb-6">
                We Walk With:
              </h3>
              <div className="grid grid-cols-2 gap-4 text-sm text-slate-secondary">
                <ul className="space-y-2">
                  <li>• Senior Pastors</li>
                  <li>• Associate Pastors</li>
                  <li>• Church Planters</li>
                  <li>• Youth Pastors</li>
                  <li>• Worship Pastors</li>
                  <li>• Children's Ministers</li>
                </ul>
                <ul className="space-y-2">
                  <li>• Missionaries</li>
                  <li>• Campus Ministers</li>
                  <li>• Ministry Couples</li>
                  <li>• Transitioning Leaders</li>
                  <li>• Seminary Students</li>
                  <li>• Ministry Wives</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary-ink text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-fraunces font-semibold text-3xl lg:text-4xl mb-6">
            Could Your Story Be Next?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Every pastor deserves the kind of spiritual parenting and faithful friendship 
            that sustains both ministry and family for the long haul. We'd be honored to 
            explore walking alongside you.
          </p>
          <button className="bg-gold text-primary-ink px-8 py-4 rounded-full font-semibold hover:bg-gold/90 transition-colors">
            Begin a Conversation About Partnership
          </button>
          <p className="text-gray-400 mt-4 text-sm">
            Your story matters to us. We respect your time and will never pressure you into a relationship.
          </p>
        </div>
      </section>
    </div>
  );
};

export default PastorsWeWalkWith;
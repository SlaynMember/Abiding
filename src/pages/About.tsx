import React from 'react';

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-wheat-bg py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-fraunces font-semibold text-4xl lg:text-5xl text-primary-ink mb-6">
            Our Story & <span className="text-gold">Our Heart</span>
          </h1>
          <p className="text-xl text-slate-secondary leading-relaxed">
            But there's hope. Throughout decades of ministry, we've seen that living as a Christian leader is more than doable—although not without hardship and challenges, it's a life full of joy. Through spiritual parenting, we've witnessed transformation in pastors, elders, and ministry professionals who have learned to operate from their love relationship with Jesus.
          </p>
        </div>
      </section>

      {/* Meet Billy & Kelly Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-fraunces font-semibold text-3xl text-primary-ink">Meet Your Mentors</h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mt-4"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center">
              <img src="/src/assets/images/billy-patterson-headshot.jpg" alt="Billy Patterson" className="w-48 h-48 rounded-full mx-auto mb-6 shadow-lg object-cover"/>
              <h3 className="font-fraunces text-2xl text-primary-ink mb-2">Billy Patterson</h3>
              <p className="text-slate-secondary leading-relaxed">With over 37 years of ministry experience, Billy walks alongside leaders, offering the steady presence and wisdom of a spiritual father. His passion is to see pastors and their families thrive, not just survive, in their calling.</p>
            </div>
            <div className="text-center">
              <img src="/src/assets/images/kelly-patterson-headshot.jpg" alt="Kelly Patterson" className="w-48 h-48 rounded-full mx-auto mb-6 shadow-lg object-cover"/>
              <h3 className="font-fraunces text-2xl text-primary-ink mb-2">Kelly Patterson</h3>
              <p className="text-slate-secondary leading-relaxed">Kelly brings a vital perspective on the health of the entire ministry family. She provides support for spouses, shapes the ministry's communications, and ensures that every aspect of Abiding Partners reflects the heart of hospitality and genuine care.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy Section */}
       <section className="bg-sky-callout py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="font-fraunces font-semibold text-3xl text-primary-ink">Our Guiding Principles</h2>
            </div>
            <div className="space-y-8">
                <div>
                    <h3 className="font-fraunces text-xl text-primary-ink mb-2">Abiding in Christ First</h3>
                    <p className="text-slate-secondary leading-relaxed">We believe sustainable ministry flows from a leader's personal relationship with Jesus. Our first priority is not strategy or performance, but helping leaders cultivate their own deep, abiding connection with Christ.</p>
                </div>
                 <div>
                    <h3 className="font-fraunces text-xl text-primary-ink mb-2">The Power of Presence</h3>
                    <p className="text-slate-secondary leading-relaxed">Our ministry is relational, not transactional. We commit to walking with leaders for the long haul, offering the kind of consistent, patient, and prayerful presence that builds deep trust and fosters real transformation.</p>
                </div>
                 <div>
                    <h3 className="font-fraunces text-xl text-primary-ink mb-2">Generational Faithfulness</h3>
                    <p className="text-slate-secondary leading-relaxed">Our goal is to help leaders build healthy ministries and families that last. We focus on developing sustainable rhythms, strong character, and a legacy of faithfulness that will impact generations to come.</p>
                </div>
            </div>
        </div>
      </section>

    </div>
  );
};

export default About;

import React from 'react';
import { Heart, Users, Shield, Phone, Clock, MessageCircle } from 'lucide-react';

const ForLeadersAndSpouses = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-wheat-bg py-20">
              </h2>
              <div className="w-16 h-0.5 bg-gold mb-8"></div>
              <p className="text-lg text-slate-secondary leading-relaxed">
                Through regular visits and intentional prayer, we provide spiritual leaders with constant, 
                faithful friendship that focuses on abiding in Christ, healthy leadership, and strong families.
              </p>
            </div>
            <div className="lg:order-first">
              <img 
                src="/src/assets/images/praying-intently.jpg" 
                alt="Prayer focused mentorship" 
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
          
          <div className="text-center mb-16">
            <h3 className="font-fraunces font-semibold text-2xl text-primary-ink mb-6">
              How We Walk With You
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-wheat-bg p-8 rounded-xl">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-12 h-12 bg-olive/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Heart className="text-olive" size={24} />
                </div>
                <div>
                  <h3 className="font-fraunces font-semibold text-xl text-primary-ink mb-3">
                    Consistent Prayer
                  </h3>
                  <p className="text-slate-secondary leading-relaxed">
                    For you, your spouse, and your children.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-sky-callout p-8 rounded-xl">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="text-gold" size={24} />
                </div>
                <div>
                  <h3 className="font-fraunces font-semibold text-xl text-primary-ink mb-3">
                    Spiritual Mentorship
                  </h3>
                  <p className="text-slate-secondary leading-relaxed">
                    Faithful spiritual leadership for you personally.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-olive/20 p-8 rounded-xl">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-12 h-12 bg-primary-ink/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="text-primary-ink" size={24} />
                </div>
                <div>
                  <h3 className="font-fraunces font-semibold text-xl text-primary-ink mb-3">
                    A Safe Space for Wisdom
                  </h3>
                  <p className="text-slate-secondary leading-relaxed">
                    A confidential place to get feedback on ideas, process challenges, and sharpen your calling.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-wheat-bg p-8 rounded-xl">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-12 h-12 bg-sky-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="text-sky-500" size={24} />
                </div>
                <div>
                  <h3 className="font-fraunces font-semibold text-xl text-primary-ink mb-3">
                    Relational Connection
                  </h3>
                  <p className="text-slate-secondary leading-relaxed">
                    Regular check-ins via calls and in-person visits to deepen the relationship and provide on-the-ground support.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-sky-callout p-8 rounded-xl md:col-span-2">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-12 h-12 bg-olive/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="text-olive" size={24} />
                </div>
                <div>
                  <h3 className="font-fraunces font-semibold text-xl text-primary-ink mb-3">
                    Friendship Network
                  </h3>
                  <p className="text-slate-secondary leading-relaxed">
                    Collaboration and connection with a broader community of pastors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="bg-sky-callout py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-fraunces font-semibold text-3xl text-primary-ink mb-6">
              What a Pastor Says
            </h2>
            <div className="w-16 h-0.5 bg-gold mx-auto"></div>
          </div>

          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg max-w-4xl mx-auto">
            <blockquote className="font-fraunces text-xl lg:text-2xl text-primary-ink mb-6 italic leading-relaxed text-center">
              "The most critical thing is their sum total: access. Access is something most people rarely give to others anymore but I know from experience that anyone Billy is willing to invest in will have access to him, his wisdom and his generosity."
            </blockquote>
            <div className="text-center">
              <cite className="text-slate-secondary font-medium">Mike Brown, Former Pastor, Missio Dei Logan Square</cite>
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
            We'd love to hear your story and explore how we might walk alongside you and your family in this season of your ministry journey.
          </p>
          <button className="bg-gold text-primary-ink px-8 py-4 rounded-full font-semibold hover:bg-gold/90 transition-colors flex items-center justify-center space-x-2 mx-auto">
            <Phone size={20} />
            <span>Book Your First Conversation</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default ForLeadersAndSpouses;
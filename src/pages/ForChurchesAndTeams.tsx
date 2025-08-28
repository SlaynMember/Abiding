import React from 'react';
import { Users, BookOpen, Heart, Globe, Phone } from 'lucide-react';

const ForChurchesAndTeams = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-wheat-bg py-20 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-fraunces font-semibold text-4xl lg:text-5xl text-primary-ink mb-6">
              For <span className="text-gold">Churches & Teams</span>
            </h1>
            <h2 className="text-2xl lg:text-3xl text-slate-secondary mb-8 font-medium">
              Strengthening Your Ministry from the Inside Out
            </h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mb-8"></div>
            <p className="text-xl text-slate-secondary max-w-4xl mx-auto leading-relaxed">
              We partner with your congregation's leadership to build healthy, sustainable ministry practices and systems that honor God and hold up under the pressures of real life.
            </p>
          </div>
        </div>
      </section>

      {/* How We Partner With Your Church Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-fraunces font-semibold text-3xl text-primary-ink mb-6">
              Equipping Your Leadership Core
            </h2>
            <div className="w-16 h-0.5 bg-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-wheat-bg p-8 rounded-xl">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-12 h-12 bg-olive/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <BookOpen className="text-olive" size={24} />
                </div>
                <div>
                  <h3 className="font-fraunces font-semibold text-xl text-primary-ink mb-3">
                    Eldering Training
                  </h3>
                  <p className="text-slate-secondary leading-relaxed">
                    In-depth training and development for current and future elders.
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
                    Team Discipleship
                  </h3>
                  <p className="text-slate-secondary leading-relaxed">
                    Intentional discipleship time with your key leaders, either one-on-one or as a group.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-olive/20 p-8 rounded-xl">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-12 h-12 bg-primary-ink/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Heart className="text-primary-ink" size={24} />
                </div>
                <div>
                  <h3 className="font-fraunces font-semibold text-xl text-primary-ink mb-3">
                    Spiritual Parenting for Leaders
                  </h3>
                  <p className="text-slate-secondary leading-relaxed">
                    Extending mentorship to your eldering leaders to develop a healthy leadership culture.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-sky-callout p-8 rounded-xl">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-12 h-12 bg-sky-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Globe className="text-sky-500" size={24} />
                </div>
                <div>
                  <h3 className="font-fraunces font-semibold text-xl text-primary-ink mb-3">
                    International Partnerships
                  </h3>
                  <p className="text-slate-secondary leading-relaxed">
                    Helping your church develop and resource international ministry partnerships.
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
              What a Church Planter Says
            </h2>
            <div className="w-16 h-0.5 bg-gold mx-auto"></div>
          </div>

          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg max-w-4xl mx-auto">
            <blockquote className="font-fraunces text-xl lg:text-2xl text-primary-ink mb-6 italic leading-relaxed text-center">
              "Billy and Kelly have played an invaluable role in the ministry of Trinity Grace Church and City Collective over the years... If you are a pastor or leader, I strongly encourage you to bring the Pattersons into your lives and the lives of your leaders."
            </blockquote>
            <div className="text-center">
              <cite className="text-slate-secondary font-medium">Jon Tyson, Founding Pastor, Trinity Grace Church</cite>
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
            We'd love to learn about your church's vision and explore how we might partner with your leadership team to build healthy, sustainable ministry practices.
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

export default ForChurchesAndTeams;
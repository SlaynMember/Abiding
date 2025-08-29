// ...existing code...
import { Heart, Users, Shield, Quote } from 'lucide-react';

const ForLeadersAndSpouses = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-wheat-bg py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-fraunces font-semibold text-4xl lg:text-5xl text-primary-ink mb-6">
            For <span className="text-gold">Leaders & Spouses</span>
          </h1>
          <div className="w-16 h-0.5 bg-gold mx-auto mb-8"></div>
          <p className="text-xl text-slate-secondary max-w-4xl mx-auto leading-relaxed">
            Personalized spiritual mentorship for your journey. We provide a constant, faithful, and safe friendship focused on your abiding relationship with Jesus, your leadership, and your family responsibilities.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-fraunces font-semibold text-3xl text-primary-ink mb-6">
              A Partnership Focused on Your Health
            </h2>
            <div className="w-16 h-0.5 bg-gold mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-sky-callout p-8 rounded-2xl text-center">
                <Heart className="text-olive mx-auto mb-4" size={32} />
                <h3 className="font-fraunces font-semibold text-xl text-primary-ink mb-3">Consistent Prayer</h3>
                <p className="text-slate-secondary">For you, your spouse, and your children.</p>
            </div>
            <div className="bg-sky-callout p-8 rounded-2xl text-center">
                <Users className="text-olive mx-auto mb-4" size={32} />
                <h3 className="font-fraunces font-semibold text-xl text-primary-ink mb-3">Spiritual Mentorship</h3>
                <p className="text-slate-secondary">Faithful spiritual leadership for you personally.</p>
            </div>
            <div className="bg-sky-callout p-8 rounded-2xl text-center">
                <Shield className="text-olive mx-auto mb-4" size={32} />
                <h3 className="font-fraunces font-semibold text-xl text-primary-ink mb-3">A Safe Space for Wisdom</h3>
                <p className="text-slate-secondary">A confidential place to get feedback on ideas and process challenges.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-wheat-bg py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="font-fraunces font-semibold text-3xl text-primary-ink mb-4">
                What a Pastor Says
                </h2>
                <div className="w-16 h-0.5 bg-gold mx-auto"></div>
            </div>
            <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg text-center">
                <Quote className="text-gold mx-auto mb-4" size={32} />
                <blockquote className="font-fraunces text-xl lg:text-2xl text-primary-ink mb-6 italic leading-relaxed">
                "The most critical thing is their sum total: access. Access is something most people rarely give to others anymore but I know from experience that anyone Billy is willing to invest in will have access to him, his wisdom and his generosity."
                </blockquote>
                <cite className="text-slate-secondary font-medium not-italic">
                — Mike Brown, Former Pastor, Missio Dei Logan Square
                </cite>
            </div>
        </div>
      </section>

       {/* Image Section */}
       <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <img 
                src="/images/praying-intently.JPG" 
                alt="Billy Patterson praying with a group of pastors"
                className="rounded-2xl shadow-lg mx-auto"
            />
        </div>
      </section>
    </div>
  );
};

export default ForLeadersAndSpouses;

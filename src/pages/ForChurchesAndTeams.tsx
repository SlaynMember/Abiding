import { Quote } from 'lucide-react';
// ...existing code...

const ForChurchesAndTeams = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-wheat-bg py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-fraunces font-semibold text-4xl lg:text-5xl text-primary-ink mb-6">
            For <span className="text-gold">Churches & Teams</span>
          </h1>
          <div className="w-16 h-0.5 bg-gold mx-auto mb-8"></div>
          <p className="text-xl text-slate-secondary max-w-4xl mx-auto leading-relaxed">
            Strengthening your ministry from the inside out. We partner with your congregation’s leadership to build healthy, sustainable ministry practices and systems that honor God and hold up under the pressures of real life.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-fraunces font-semibold text-3xl text-primary-ink mb-6">
              Equipping Your Leadership Core
            </h2>
            <div className="w-16 h-0.5 bg-gold mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-sky-callout p-8 rounded-2xl">
              <h3 className="font-fraunces font-semibold text-xl text-primary-ink mb-3">Eldering Training</h3>
              <p className="text-slate-secondary">In-depth training and development for current and future elders.</p>
            </div>
            <div className="bg-sky-callout p-8 rounded-2xl">
              <h3 className="font-fraunces font-semibold text-xl text-primary-ink mb-3">Team Discipleship</h3>
              <p className="text-slate-secondary">Intentional discipleship time with your key leaders, either one-on-one or as a group.</p>
            </div>
            <div className="bg-sky-callout p-8 rounded-2xl">
              // This line has been removed as the import is now at the top.
              <h3 className="font-fraunces font-semibold text-xl text-primary-ink mb-3">Spiritual Parenting for Leaders</h3>
              <p className="text-slate-secondary">Extending mentorship to your eldering leaders to develop a healthy leadership culture.</p>
            </div>
            <div className="bg-sky-callout p-8 rounded-2xl">
              <h3 className="font-fraunces font-semibold text-xl text-primary-ink mb-3">International Partnerships</h3>
              <p className="text-slate-secondary">Helping your church develop and resource international ministry partnerships.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-wheat-bg py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-fraunces font-semibold text-3xl text-primary-ink mb-4">
              What a Church Planter Says
            </h2>
            <div className="w-16 h-0.5 bg-gold mx-auto"></div>
          </div>
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg text-center">
            <Quote className="text-gold mx-auto mb-4" size={32} />
            <blockquote className="font-fraunces text-xl lg:text-2xl text-primary-ink mb-6 italic leading-relaxed">
              "Billy and Kelly have played an invaluable role in the ministry of Trinity Grace Church and City Collective over the years... If you are a pastor or leader, I strongly encourage you to bring the Pattersons into your lives and the lives of your leaders."
            </blockquote>
            <cite className="text-slate-secondary font-medium not-italic">
              — Jon Tyson, Founding Pastor, Trinity Grace Church
            </cite>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <img 
                src="/images/kelly-meeting-womens-group.JPG" 
                alt="Kelly Patterson meeting with a group of women leaders"
                className="rounded-2xl shadow-lg mx-auto"
            />
        </div>
      </section>
    </div>
  );
};

export default ForChurchesAndTeams;

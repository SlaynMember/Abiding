import React, { useState } from 'react';
import { Phone, Mail, MapPin, Calendar, Clock, Send, Heart, Users } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: '',
    location: '',
    yearsInMinistry: '',
    currentSituation: '',
    howHeard: '',
    preferredContact: 'email',
    timeframe: '',
    message: ''
  });

  const [requestType, setRequestType] = useState('conversation');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

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
        
        {/* Contact page connection-themed decoration */}
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
              Contact and <span className="text-gold">Book</span>
            </h1>
            <div className="w-16 h-0.5 bg-gold mx-auto mb-8"></div>
            <p className="text-xl text-slate-secondary max-w-4xl mx-auto leading-relaxed">
              We would love to meet you, listen, and pray. Choose a time that works for you and we will connect.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="text-gold" size={32} />
              </div>
              <h3 className="font-fraunces font-semibold text-xl text-primary-ink mb-3">
                Schedule a Conversation
              </h3>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-olive/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-olive" size={32} />
              </div>
              <h3 className="font-fraunces font-semibold text-xl text-primary-ink mb-3">
                Direct Contact
              </h3>
              <p className="text-slate-secondary text-sm leading-relaxed">
                Prefer email. Send a note and we will reply as soon as we can.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-sky-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-sky-500" size={32} />
              </div>
              <h3 className="font-fraunces font-semibold text-xl text-primary-ink mb-3">
                Newsletter
              </h3>
              <p className="text-slate-secondary text-sm leading-relaxed">
                Subscribe to weekly encouragement. We will only use your email to send encouragement and resources. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Form */}
      <section className="bg-sky-callout py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-fraunces font-semibold text-3xl text-primary-ink mb-6">
              Schedule a Conversation
            </h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mb-6"></div>
          </div>

          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
            {/* Request Type Selection */}
            <div className="mb-8">
              <h3 className="font-semibold text-primary-ink mb-4">What would be most helpful?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="flex items-start space-x-3 p-4 border border-gray-300 rounded-lg cursor-pointer hover:border-gold/50 transition-colors">
                  <input
                    type="radio"
                    value="conversation"
                    checked={requestType === 'conversation'}
                    onChange={(e) => setRequestType(e.target.value)}
                    className="mt-1"
                  />
                  <div>
                    <p className="font-medium text-primary-ink">Initial Conversation</p>
                    <p className="text-sm text-slate-secondary">
                      Schedule a relaxed conversation to share your story and explore partnership
                    </p>
                  </div>
                </label>
                <label className="flex items-start space-x-3 p-4 border border-gray-300 rounded-lg cursor-pointer hover:border-gold/50 transition-colors">
                  <input
                    type="radio"
                    value="crisis"
                    checked={requestType === 'crisis'}
                    onChange={(e) => setRequestType(e.target.value)}
                    className="mt-1"
                  />
                  <div>
                    <p className="font-medium text-primary-ink">Crisis Support</p>
                    <p className="text-sm text-slate-secondary">
                      Immediate support needed for urgent ministry or family situation
                    </p>
                  </div>
                </label>
                <label className="flex items-start space-x-3 p-4 border border-gray-300 rounded-lg cursor-pointer hover:border-gold/50 transition-colors">
                  <input
                    type="radio"
                    value="information"
                    checked={requestType === 'information'}
                    onChange={(e) => setRequestType(e.target.value)}
                    className="mt-1"
                  />
                  <div>
                    <p className="font-medium text-primary-ink">More Information</p>
                    <p className="text-sm text-slate-secondary">
                      Questions about our approach, partnership model, or specific resources
                    </p>
                  </div>
                </label>
                <label className="flex items-start space-x-3 p-4 border border-gray-300 rounded-lg cursor-pointer hover:border-gold/50 transition-colors">
                  <input
                    type="radio"
                    value="reference"
                    checked={requestType === 'reference'}
                    onChange={(e) => setRequestType(e.target.value)}
                    className="mt-1"
                  />
                  <div>
                    <p className="font-medium text-primary-ink">Reference Call</p>
                    <p className="text-sm text-slate-secondary">
                      Connect me with a pastor who's currently partnering with Abiding Partners
                    </p>
                  </div>
                </label>
              </div>
            </div>

            {/* Personal Information */}
            <div className="mb-8">
              <h3 className="font-semibold text-primary-ink mb-4">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-secondary mb-2">
                    Full Name <span className="text-gold">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                    placeholder="Pastor John Smith"
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                    placeholder="pastor@church.org"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-secondary mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-secondary mb-2">
                    Location (City, State)
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                    placeholder="Dallas, TX"
                  />
                </div>
              </div>
            </div>

            {/* Ministry Information */}
            <div className="mb-8">
              <h3 className="font-semibold text-primary-ink mb-4">Ministry Context</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-secondary mb-2">
                    Ministry Role
                  </label>
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                  >
                    <option value="">Select your role</option>
                    <option value="senior-pastor">Senior Pastor</option>
                    <option value="associate-pastor">Associate Pastor</option>
                    <option value="youth-pastor">Youth Pastor</option>
                    <option value="worship-pastor">Worship Pastor</option>
                    <option value="church-planter">Church Planter</option>
                    <option value="missionary">Missionary</option>
                    <option value="campus-minister">Campus Minister</option>
                    <option value="ministry-spouse">Ministry Spouse</option>
                    <option value="seminary-student">Seminary Student</option>
                    <option value="other">Other Ministry Role</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-secondary mb-2">
                    Years in Ministry
                  </label>
                  <select
                    name="yearsInMinistry"
                    value={formData.yearsInMinistry}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                  >
                    <option value="">Select range</option>
                    <option value="0-2">0-2 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="6-10">6-10 years</option>
                    <option value="11-15">11-15 years</option>
                    <option value="16-20">16-20 years</option>
                    <option value="20+">20+ years</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Current Situation */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-slate-secondary mb-2">
                Current Situation or Challenges
              </label>
              <textarea
                name="currentSituation"
                value={formData.currentSituation}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                placeholder="Briefly describe your current season of ministry, any challenges you're facing, or what prompted you to reach out..."
              />
              <p className="text-xs text-slate-secondary mt-2">
                This information helps us understand how we might best serve you. Feel free to share as much or as little as feels comfortable.
              </p>
            </div>

            {/* Communication Preferences */}
            <div className="mb-8">
              <h3 className="font-semibold text-primary-ink mb-4">Communication Preferences</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-secondary mb-2">
                    Preferred Contact Method
                  </label>
                  <select
                    name="preferredContact"
                    value={formData.preferredContact}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                  >
                    <option value="email">Email</option>
                    <option value="phone">Phone Call</option>
                    <option value="video">Video Call</option>
                    <option value="text">Text Message</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-secondary mb-2">
                    Best Time to Connect
                  </label>
                  <select
                    name="timeframe"
                    value={formData.timeframe}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                  >
                    <option value="">Select timeframe</option>
                    <option value="morning">Morning (8-11 AM CT)</option>
                    <option value="midday">Midday (11 AM - 2 PM CT)</option>
                    <option value="afternoon">Afternoon (2-5 PM CT)</option>
                    <option value="evening">Evening (5-8 PM CT)</option>
                    <option value="flexible">I'm flexible</option>
                    <option value="urgent">This is urgent</option>
                  </select>
                </div>
              </div>
            </div>

            {/* How They Heard About Us */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-slate-secondary mb-2">
                How did you hear about Abiding Partners?
              </label>
              <select
                name="howHeard"
                value={formData.howHeard}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
              >
                <option value="">Please select</option>
                <option value="pastor-referral">Referred by another pastor</option>
                <option value="friend">Friend or colleague</option>
                <option value="website">Found your website</option>
                <option value="social-media">Social media</option>
                <option value="conference">Conference or event</option>
                <option value="article">Article or resource</option>
                <option value="search">Internet search</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Additional Message */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-slate-secondary mb-2">
                Anything else you'd like us to know?
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                placeholder="Questions about our approach, specific prayer requests, family considerations, etc."
              />
            </div>

            {/* Privacy Notice */}
            <div className="mb-8 bg-wheat-bg p-6 rounded-lg">
              <h4 className="font-semibold text-primary-ink mb-3">Privacy & Confidentiality</h4>
              <p className="text-sm text-slate-secondary leading-relaxed">
                We take your privacy seriously. Your information will never be shared with third parties. 
                All conversations are held in strict confidence. If you're in an urgent situation, 
                please call our pastoral care line directly at (555) 123-CARE for immediate support.
              </p>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-gold text-white py-4 rounded-lg font-semibold text-lg hover:bg-gold/90 transition-colors flex items-center justify-center space-x-2"
            >
              <Send size={20} />
              <span>Send Message & Request Contact</span>
            </button>

            <p className="text-sm text-slate-secondary text-center mt-4">
              We typically respond within 24-48 hours. For urgent matters, please call our direct line.
            </p>
          </div>
        </div>
      </section>

      {/* Direct Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-fraunces font-semibold text-3xl text-primary-ink mb-6">
              Direct Contact Information
            </h2>
            <div className="w-16 h-0.5 bg-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-wheat-bg p-8 rounded-xl text-center">
              <Phone className="text-gold mx-auto mb-4" size={32} />
              <h3 className="font-fraunces font-semibold text-lg text-primary-ink mb-3">
                Pastoral Care Line
              </h3>
              <p className="text-slate-secondary mb-3">
                For immediate support or crisis situations
              </p>
              <p className="font-medium text-primary-ink text-lg">
                (555) 123-CARE
              </p>
              <p className="text-sm text-slate-secondary mt-2">
                Available 24/7 for pastoral emergencies
              </p>
            </div>

            <div className="bg-sky-callout p-8 rounded-xl text-center">
              <Mail className="text-sky-500 mx-auto mb-4" size={32} />
              <h3 className="font-fraunces font-semibold text-lg text-primary-ink mb-3">
                General Inquiries
              </h3>
              <p className="text-slate-secondary mb-3">
                Questions about partnership and resources
              </p>
              <p className="font-medium text-primary-ink">
                hello@abidingpartners.org
              </p>
              <p className="text-sm text-slate-secondary mt-2">
                Response within 24-48 hours
              </p>
            </div>

            <div className="bg-white border-2 border-gold/20 p-8 rounded-xl text-center">
              <MapPin className="text-olive mx-auto mb-4" size={32} />
              <h3 className="font-fraunces font-semibold text-lg text-primary-ink mb-3">
                Office Address
              </h3>
              <p className="text-slate-secondary mb-3">
                For mailed correspondence
              </p>
              <p className="text-primary-ink text-sm leading-relaxed">
                Abiding Partners<br />
                PO Box 12345<br />
                Dallas, TX 75201
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-wheat-bg py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-fraunces font-semibold text-3xl text-primary-ink mb-6">
              Frequently Asked Questions
            </h2>
            <div className="w-16 h-0.5 bg-gold mx-auto"></div>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-semibold text-primary-ink mb-3">
                What happens after I submit this form?
              </h3>
              <p className="text-slate-secondary leading-relaxed">
                We'll respond personally within 24-48 hours to schedule an initial conversation. 
                This first conversation is relaxed and focused entirely on hearing your story 
                and understanding your situation. There's no pressure or sales pitch—just genuine care and listening.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-semibold text-primary-ink mb-3">
                Is there any cost for the initial conversation?
              </h3>
              <p className="text-slate-secondary leading-relaxed">
                No, the initial conversation is always free. We believe relationships should develop 
                naturally without financial pressure. If a long-term partnership develops, we'll discuss 
                support expectations transparently, but many aspects of our care are provided regardless of financial capacity.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg">
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

            <div className="bg-white p-6 rounded-lg">
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

      {/* Call to Action */}
      <section className="bg-primary-ink text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-fraunces font-semibold text-3xl lg:text-4xl mb-6">
            We're Here to Listen
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Every pastor's story matters. Whether you're thriving, struggling, or somewhere in between, 
            we'd be honored to hear from you and explore how we might serve you and your family.
          </p>
          <div className="flex items-center justify-center space-x-2 text-gold">
            <Heart size={24} />
            <p className="text-lg">
              Faithful friendship begins with a conversation.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
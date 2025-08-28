import React, { useState } from 'react';
import { Heart, DollarSign, Users, Target, Calendar, CreditCard, Check } from 'lucide-react';

const Give = () => {
  const [selectedAmount, setSelectedAmount] = useState('100');
  const [giftType, setGiftType] = useState('one-time');
  const [customAmount, setCustomAmount] = useState('');

  const predefinedAmounts = ['25', '50', '100', '250', '500', '1000'];
  const impactAreas = [
    {
      icon: Heart,
      title: "General Support",
      description: "Supports all aspects of our ministry to pastors and their families"
    },
    {
      icon: Users,
      title: "Family Care Fund",
      description: "Specific support for pastoral families in crisis or transition"
    },
    {
      icon: Target,
      title: "Leadership Development",
      description: "Training and resources for emerging pastoral leaders"
    },
    {
      icon: Calendar,
      title: "Crisis Response",
      description: "Emergency support for pastors facing unexpected challenges"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-wheat-bg py-20 relative overflow-hidden">
        {/* Vine elements reflecting generosity and growth */}
        <div className="absolute inset-0 pointer-events-none">
          <img 
            src="/vine.svg" 
            alt="" 
            className="absolute left-0 top-1/4 w-28 h-46 opacity-8"
            style={{ transform: 'translateX(-30%) rotate(-8deg)' }}
          />
          <img 
            src="/vine.svg" 
            alt="" 
            className="absolute right-0 bottom-1/3 w-24 h-40 opacity-6 scaleX(-1)"
            style={{ transform: 'translateX(25%) rotate(12deg) scaleX(-1)' }}
          />
        </div>
        
        {/* Giving page heart-themed vine decoration */}
        <div className="absolute inset-0 opacity-4">
          <div className="absolute top-20 left-16 w-28 h-28 border border-gold/30 rounded-full"></div>
          <div className="absolute bottom-24 right-20 w-20 h-20 border border-olive/30 rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-12 h-12 border border-gold/40 rounded-full"></div>
          
          {/* Small heart-like elements */}
          <div className="absolute top-32 right-1/3 w-4 h-4 bg-gold/30 rounded-full"></div>
          <div className="absolute bottom-40 left-1/3 w-3 h-3 bg-olive/40 rounded-full"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-fraunces font-semibold text-4xl lg:text-5xl text-primary-ink mb-6">
              Partner in the Work of <span className="text-gold">Restoring Leaders</span>
            </h1>
            <div className="w-16 h-0.5 bg-gold mx-auto mb-8"></div>
            <p className="text-xl text-slate-secondary max-w-4xl mx-auto leading-relaxed">
              Your generosity provides the steady friendship, prayer, and practical help that sustains pastors and their families for the long haul. You can make a one-time gift or set up a recurring gift. We are grateful for every partner who helps us strengthen leaders, families, and churches.
            </p>
          </div>
        </div>
      </section>

      {/* The Impact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-fraunces font-semibold text-3xl text-primary-ink mb-6">
              How Your Partnership Makes a Difference
            </h2>
            <div className="w-16 h-0.5 bg-gold mx-auto"></div>
          </div>

          <div className="bg-sky-callout p-8 rounded-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <blockquote className="font-fraunces text-xl lg:text-2xl text-primary-ink mb-6 italic leading-relaxed">
                  "The necessary travel, time, and resourcing for this relationship has always been provided for by Billy and his supporters. I highly endorse and recommend your continued and increased support of this work."
                </blockquote>
                <div className="mb-6">
                  <cite className="text-slate-secondary font-medium">— Nathan Kollar, Lead Pastor, GraceLand Church Franklin</cite>
                </div>
                <p className="text-lg text-slate-secondary leading-relaxed">
                  Your gift of any amount directly enables this kind of life-changing, on-the-ground support.
                </p>
              </div>
              <div className="lg:order-first">
                <img 
                  src="/src/assets/images/billy-meeting-thailand.jpg" 
                  alt="Billy meeting with ministry leaders in Thailand" 
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact and Information */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="bg-sky-callout p-8 rounded-2xl">
              <h3 className="font-fraunces font-semibold text-2xl text-primary-ink mb-6">
                Impact by the Numbers
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-slate-secondary">Pastors currently supported:</span>
                  <span className="font-semibold text-gold text-xl">150+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-secondary">Families receiving care:</span>
                  <span className="font-semibold text-gold text-xl">400+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-secondary">Crisis interventions (2024):</span>
                  <span className="font-semibold text-gold text-xl">47</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-secondary">Still serving in ministry:</span>
                  <span className="font-semibold text-gold text-xl">95%</span>
                </div>
              </div>
            </div>

            <div className="bg-wheat-bg p-8 rounded-2xl">
              <h3 className="font-fraunces font-semibold text-2xl text-primary-ink mb-6">
                What Your Monthly Gift Provides
              </h3>
              <div className="space-y-4 text-slate-secondary">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-medium">$25/month</p>
                    <p className="text-sm">Resources and materials for one pastoral family</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-medium">$50/month</p>
                    <p className="text-sm">Monthly mentorship sessions for one pastor</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-medium">$100/month</p>
                    <p className="text-sm">Comprehensive family support including marriage care</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-medium">$250/month</p>
                    <p className="text-sm">Full partnership support for pastoral family in crisis</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Giving Form */}
      <section className="bg-sky-callout py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-fraunces font-semibold text-3xl text-primary-ink mb-6">
              Make Your Secure Gift
            </h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mb-6"></div>
            <p className="text-lg text-slate-secondary">
              Choose your gift amount and frequency to support pastoral families today.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
            {/* Gift Type Selection */}
            <div className="mb-8">
              <h3 className="font-semibold text-primary-ink mb-4">Gift Type</h3>
              <div className="flex space-x-4">
                <button
                  onClick={() => setGiftType('monthly')}
                  className={`flex-1 py-3 px-6 rounded-lg border-2 font-medium transition-colors ${
                    giftType === 'monthly'
                      ? 'border-gold bg-gold/10 text-gold'
                      : 'border-gray-300 text-slate-secondary hover:border-gold/50'
                  }`}
                >
                  Monthly Partnership
                </button>
                <button
                  onClick={() => setGiftType('one-time')}
                  className={`flex-1 py-3 px-6 rounded-lg border-2 font-medium transition-colors ${
                    giftType === 'one-time'
                      ? 'border-gold bg-gold/10 text-gold'
                      : 'border-gray-300 text-slate-secondary hover:border-gold/50'
                  }`}
                >
                  One-Time Gift
                </button>
              </div>
            </div>

            {/* Amount Selection */}
            <div className="mb-8">
              <h3 className="font-semibold text-primary-ink mb-4">
                Gift Amount {giftType === 'monthly' && '(per month)'}
              </h3>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-4">
                {predefinedAmounts.map(amount => (
                  <button
                    key={amount}
                    onClick={() => {
                      setSelectedAmount(amount);
                      setCustomAmount('');
                    }}
                    className={`py-3 px-4 rounded-lg border-2 font-medium transition-colors ${
                      selectedAmount === amount && !customAmount
                        ? 'border-gold bg-gold/10 text-gold'
                        : 'border-gray-300 text-slate-secondary hover:border-gold/50'
                    }`}
                  >
                    ${amount}
                  </button>
                ))}
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-slate-secondary">Custom amount: $</span>
                <input
                  type="number"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setSelectedAmount('');
                  }}
                  placeholder="Enter amount"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                />
              </div>
            </div>

            {/* Impact Area */}
            <div className="mb-8">
              <h3 className="font-semibold text-primary-ink mb-4">Direct Your Gift</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {impactAreas.map((area, index) => {
                  const IconComponent = area.icon;
                  return (
                    <label key={index} className="flex items-start space-x-3 p-4 border border-gray-300 rounded-lg cursor-pointer hover:border-gold/50 transition-colors">
                      <input type="radio" name="impact" className="mt-1" />
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <IconComponent className="text-gold" size={16} />
                        </div>
                        <div>
                          <p className="font-medium text-primary-ink">{area.title}</p>
                          <p className="text-sm text-slate-secondary">{area.description}</p>
                        </div>
                      </div>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Donor Information */}
            <div className="mb-8">
              <h3 className="font-semibold text-primary-ink mb-4">Your Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-secondary mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-secondary mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-slate-secondary mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-slate-secondary mb-2">
                    Mailing Address (optional, for receipts)
                  </label>
                  <textarea
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                    placeholder="Street address, City, State, ZIP"
                  />
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="mb-8">
              <h3 className="font-semibold text-primary-ink mb-4">Payment Method</h3>
              <div className="space-y-4">
                <label className="flex items-center space-x-3 p-4 border border-gray-300 rounded-lg cursor-pointer hover:border-gold/50 transition-colors">
                  <input type="radio" name="payment" defaultChecked />
                  <CreditCard className="text-gold" size={20} />
                  <span>Credit/Debit Card</span>
                </label>
                <label className="flex items-center space-x-3 p-4 border border-gray-300 rounded-lg cursor-pointer hover:border-gold/50 transition-colors">
                  <input type="radio" name="payment" />
                  <DollarSign className="text-gold" size={20} />
                  <span>Bank Transfer (ACH)</span>
                </label>
              </div>
            </div>

            {/* Gift Summary */}
            <div className="bg-wheat-bg p-6 rounded-lg mb-8">
              <h3 className="font-semibold text-primary-ink mb-4">Gift Summary</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-secondary">Gift Type:</span>
                  <span className="font-medium text-primary-ink capitalize">{giftType.replace('-', ' ')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-secondary">Amount:</span>
                  <span className="font-medium text-primary-ink">
                    ${customAmount || selectedAmount}{giftType === 'monthly' ? '/month' : ''}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-secondary">Processing Fee:</span>
                  <span className="font-medium text-primary-ink">Covered by Abiding Partners</span>
                </div>
              </div>
            </div>

            {/* Submit */}
            <button className="w-full bg-gold text-white py-4 rounded-lg font-semibold text-lg hover:bg-gold/90 transition-colors flex items-center justify-center space-x-2">
              <Heart size={20} />
              <span>
                {giftType === 'monthly' ? 'Start Monthly Partnership' : 'Partner with Us Today'}
              </span>
            </button>

            <p className="text-sm text-slate-secondary text-center mt-4">
              Your gift is secure and will be processed through our encrypted payment system. 
              You will receive a receipt via email for tax purposes.
            </p>
          </div>
        </div>
      </section>

      {/* Other Ways to Give */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-fraunces font-semibold text-3xl text-primary-ink mb-6">
              Other Ways to Support
            </h2>
            <div className="w-16 h-0.5 bg-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-wheat-bg p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-olive/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="text-olive" size={32} />
              </div>
              <h3 className="font-fraunces font-semibold text-xl text-primary-ink mb-4">
                Legacy Giving
              </h3>
              <p className="text-slate-secondary leading-relaxed mb-4">
                Include Abiding Partners in your estate planning to create lasting 
                impact for future generations of pastoral families.
              </p>
              <button className="text-gold hover:text-gold/80 transition-colors font-medium">
                Learn More About Legacy Gifts
              </button>
            </div>

            <div className="bg-sky-callout p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="text-gold" size={32} />
              </div>
              <h3 className="font-fraunces font-semibold text-xl text-primary-ink mb-4">
                Corporate Partnership
              </h3>
              <p className="text-slate-secondary leading-relaxed mb-4">
                Partner with us as a business to support pastoral families while 
                demonstrating your commitment to community leaders.
              </p>
              <button className="text-gold hover:text-gold/80 transition-colors font-medium">
                Explore Corporate Partnership
              </button>
            </div>

            <div className="bg-white border-2 border-gold/20 p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-primary-ink/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="text-primary-ink" size={32} />
              </div>
              <h3 className="font-fraunces font-semibold text-xl text-primary-ink mb-4">
                Memorial & Honor Gifts
              </h3>
              <p className="text-slate-secondary leading-relaxed mb-4">
                Honor a loved one or celebrate a special occasion by supporting 
                pastoral families in their name.
              </p>
              <button className="text-gold hover:text-gold/80 transition-colors font-medium">
                Make a Memorial Gift
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Transparency & Stewardship */}
      <section className="bg-wheat-bg py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-fraunces font-semibold text-3xl text-primary-ink mb-6">
              Financial Stewardship
            </h2>
            <div className="w-16 h-0.5 bg-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-fraunces font-semibold text-2xl text-primary-ink mb-6">
                How We Use Your Gifts
              </h3>
              <p className="text-lg text-slate-secondary mb-6 leading-relaxed">
                We maintain the highest standards of financial stewardship, ensuring 
                every dollar directly impacts the pastors and families we serve.
              </p>
              <div className="space-y-4 text-slate-secondary">
                <div className="flex justify-between items-center">
                  <span>Direct pastoral support & mentorship:</span>
                  <span className="font-semibold text-gold">75%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Resource development & materials:</span>
                  <span className="font-semibold text-gold">15%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Administrative & operational costs:</span>
                  <span className="font-semibold text-gold">10%</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="font-fraunces font-semibold text-xl text-primary-ink mb-6">
                Our Commitment to Donors
              </h3>
              <ul className="space-y-3 text-slate-secondary">
                <li className="flex items-start space-x-3">
                  <Check className="text-gold mt-1 flex-shrink-0" size={16} />
                  <span>Annual financial reports provided to all donors</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="text-gold mt-1 flex-shrink-0" size={16} />
                  <span>Independent financial review and accountability</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="text-gold mt-1 flex-shrink-0" size={16} />
                  <span>Regular impact updates on pastoral families served</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="text-gold mt-1 flex-shrink-0" size={16} />
                  <span>Easy cancellation of recurring gifts anytime</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="text-gold mt-1 flex-shrink-0" size={16} />
                  <span>Personal communication about how gifts are used</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Give;
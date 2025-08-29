import React, { useState } from 'react';
import { Heart, DollarSign, Users, Quote } from 'lucide-react';

const Give = () => {
  const [selectedAmount, setSelectedAmount] = useState('100');
  const [giftType, setGiftType] = useState('one-time');
  const [customAmount, setCustomAmount] = useState('');

  const predefinedAmounts = ['50', '100', '250', '500', '1000', '2500'];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-wheat-bg py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-fraunces font-semibold text-4xl lg:text-5xl text-primary-ink mb-6">
            Partner in the Work of <span className="text-gold">Restoring Leaders</span>
          </h1>
          <p className="text-xl text-slate-secondary max-w-3xl mx-auto leading-relaxed">
            Your generosity provides the steady friendship, prayer, and practical help that sustains pastors and their families for the long haul. We are grateful for every partner who helps us strengthen leaders, families, and churches.
          </p>
        </div>
      </section>

      {/* The Impact Section */}
      <section className="bg-sky-callout py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="font-fraunces font-semibold text-3xl text-primary-ink">How Your Partnership Makes a Difference</h2>
            </div>
            <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg text-center">
                <Quote className="mx-auto text-gold mb-4" size={32} />
                <blockquote className="font-fraunces text-xl lg:text-2xl text-primary-ink mb-6 italic leading-relaxed">
                  "The necessary travel, time, and resourcing for this relationship has always been provided for by Billy and his supporters. I highly endorse and recommend your continued and increased support of this work."
                </blockquote>
                <cite className="text-slate-secondary font-medium not-italic">— Nathan Kollar, Lead Pastor, GraceLand Church Franklin</cite>
            </div>
             <p className="text-center text-slate-secondary mt-8 text-lg">Your gift of any amount directly enables this kind of life-changing, on-the-ground support.</p>
        </div>
      </section>

      {/* Make Your Gift Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-xl">
            <h2 className="font-fraunces font-semibold text-3xl text-center text-primary-ink mb-8">Make Your Secure Gift</h2>
            
            {/* Gift Type */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <button onClick={() => setGiftType('monthly')} className={`py-3 rounded-lg font-semibold border-2 ${giftType === 'monthly' ? 'bg-gold text-white border-gold' : 'bg-gray-100 text-slate-secondary border-gray-200'}`}>Monthly</button>
              <button onClick={() => setGiftType('one-time')} className={`py-3 rounded-lg font-semibold border-2 ${giftType === 'one-time' ? 'bg-gold text-white border-gold' : 'bg-gray-100 text-slate-secondary border-gray-200'}`}>One-Time</button>
            </div>

            {/* Amount Selection */}
            <div className="grid grid-cols-3 gap-4 mb-4">
              {predefinedAmounts.map(amount => (
                <button key={amount} onClick={() => { setSelectedAmount(amount); setCustomAmount(''); }} className={`py-3 rounded-lg font-semibold border-2 ${selectedAmount === amount ? 'bg-gold text-white border-gold' : 'bg-gray-100 text-slate-secondary border-gray-200'}`}>
                  ${amount}
                </button>
              ))}
            </div>
            <input 
              type="number"
              value={customAmount}
              onChange={(e) => { setCustomAmount(e.target.value); setSelectedAmount(''); }}
              placeholder="Custom Amount"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg mb-6"
            />
            
            <button className="w-full bg-olive text-white py-4 rounded-lg font-semibold text-xl hover:bg-olive/90 transition-colors">
              Donate ${customAmount || selectedAmount} {giftType === 'monthly' ? 'Monthly' : ''}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Give;

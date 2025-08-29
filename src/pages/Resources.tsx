import React, { useState } from 'react';
import { Mail, BookOpen } from 'lucide-react';

const Resources = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Leadership & Burnout', 'Marriage & Family', 'Abiding in Christ', 'Prayer'];
  
  const allResources = [
     { id: 1, title: "Navigating the First Signs of Burnout", category: "Leadership & Burnout", date: "August 28, 2025", excerpt: "Burnout doesn't happen overnight. It's a slow fade that often begins with subtle shifts in our heart and habits..." },
     { id: 2, title: "Protecting Your Marriage in a Ministry Crisis", category: "Marriage & Family", date: "August 21, 2025", excerpt: "In the midst of a church crisis, the first casualty is often the health of our own homes. Here are three vital practices..." },
     { id: 3, title: "The Simple Practice of Abiding", category: "Abiding in Christ", date: "August 14, 2025", excerpt: "Jesus's invitation to 'abide' can feel complicated. Let's simplify it back to its beautiful, life-giving core..." },
     { id: 4, title: "Leading When You Feel Spiritually Dry", category: "Leadership & Burnout", date: "August 7, 2025", excerpt: "How do you offer a drink to others when your own well feels empty? Practical steps for finding refreshment in dry seasons." },
     { id: 5, title: "Intercessory Prayer for Your Leaders", category: "Prayer", date: "July 31, 2025", excerpt: "A practical guide to consistently and effectively praying for the leaders and elders serving alongside you." },
     { id: 6, "title": "Conflict as a Catalyst for Deeper Unity", "category": "Marriage & Family", "date": "July 24, 2025", "excerpt": "Most couples fear conflict, but what if it could be a tool God uses to forge a stronger, more intimate bond?..." }
  ];

  const filteredResources = selectedCategory === 'All' 
    ? allResources 
    : allResources.filter(r => r.category === selectedCategory);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-wheat-bg py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-fraunces font-semibold text-4xl lg:text-5xl text-primary-ink mb-6">
            The <span className="text-gold">Abiding Word</span>
          </h1>
          <p className="text-xl text-slate-secondary leading-relaxed">
            Weekly Biblical encouragement and practical wisdom for your journey in ministry and life.
          </p>
        </div>
      </section>

      {/* Blog Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filtering Controls */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map(category => (
              <button 
                key={category} 
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-semibold text-sm transition-colors ${selectedCategory === category ? 'bg-gold text-white' : 'bg-gray-200 text-slate-secondary hover:bg-gray-300'}`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Article Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredResources.map(resource => (
              <div key={resource.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <p className="text-sm font-semibold text-gold mb-2">{resource.category}</p>
                  <h3 className="font-fraunces text-xl text-primary-ink mb-3">{resource.title}</h3>
                  <p className="text-slate-secondary text-sm mb-4">{resource.date}</p>
                  <p className="text-slate-secondary leading-relaxed mb-4">{resource.excerpt}</p>
                  <button className="font-semibold text-olive hover:text-olive/80">Read More &rarr;</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription Section */}
      <section className="bg-wheat-bg py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Mail className="mx-auto text-gold mb-4" size={40}/>
          <h2 className="font-fraunces font-semibold text-3xl text-primary-ink mb-4">Get Encouragement Delivered Weekly</h2>
          <p className="text-slate-secondary mb-8">Subscribe to receive new articles from 'The Abiding Word' directly in your inbox. No spam, just a simple, honest note to point you back to Jesus.</p>
          <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input type="email" placeholder="Your email address" className="flex-grow px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold" />
            <button className="bg-gold text-white px-6 py-3 rounded-lg font-semibold hover:bg-gold/90 transition-colors">Subscribe</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;

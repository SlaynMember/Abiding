import React, { useState } from 'react';
import { BookOpen, Calendar, Tag, Mail, Phone } from 'lucide-react';

const Resources = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Posts');

  const categories = ['All Posts', 'Leadership & Burnout', 'Marriage & Family', 'Abiding in Christ', 'Prayer'];

  // Mock article data - this will be replaced with real content later
  const articles = [
    {
      id: 1,
      title: "Navigating the First Signs of Burnout",
      category: "Leadership & Burnout",
      date: "August 28, 2025",
      excerpt: "Burnout doesn't happen overnight. It's a slow fade that often begins with subtle shifts in our heart and habits. Learning to recognize these early warning signs can be the difference between a season of struggle and a complete breakdown."
    },
    {
      id: 2,
      title: "Protecting Your Marriage in a Ministry Crisis",
      category: "Marriage & Family",
      date: "August 21, 2025",
      excerpt: "In the midst of a church crisis, the first casualty is often the health of our own homes. Here are three vital practices that can help you guard your marriage when ministry demands threaten to overwhelm your family life."
    },
    {
      id: 3,
      title: "The Daily Rhythm of Abiding",
      category: "Abiding in Christ",
      date: "August 14, 2025",
      excerpt: "Jesus calls us to abide in Him, but what does that actually look like in the everyday rhythms of ministry life? This simple framework has helped hundreds of pastors cultivate a sustainable practice of staying connected to the vine."
    },
    {
      id: 4,
      title: "When Prayer Feels Like Work",
      category: "Prayer",
      date: "August 7, 2025",
      excerpt: "There are seasons when prayer becomes another item on our ministry to-do list rather than a life-giving conversation with our Father. If you're struggling to find joy in prayer, you're not alone—and you're not broken."
    },
    {
      id: 5,
      title: "Leading When You're Running on Empty",
      category: "Leadership & Burnout",
      date: "July 31, 2025",
      excerpt: "Every leader faces seasons where the demands exceed their capacity. The question isn't whether these seasons will come, but how we'll navigate them with integrity and hope when they do."
    },
    {
      id: 6,
      title: "Creating Margin for Your Family",
      category: "Marriage & Family",
      date: "July 24, 2025",
      excerpt: "Ministry families often struggle with the tension between serving others and caring for those closest to them. Here's how to build sustainable rhythms that honor both your calling and your family."
    },
    {
      id: 7,
      title: "Finding God in the Silence",
      category: "Abiding in Christ",
      date: "July 17, 2025",
      excerpt: "Sometimes God feels distant, especially in the midst of ministry challenges. This doesn't mean He's absent—it often means He's inviting us deeper into trust and dependency."
    },
    {
      id: 8,
      title: "Praying for Your People When You're Hurting",
      category: "Prayer",
      date: "July 10, 2025",
      excerpt: "How do we intercede for our congregations when we're dealing with our own pain and struggles? This paradox of pastoral care requires both honesty about our limitations and trust in God's sufficiency."
    }
  ];

  const filteredArticles = selectedCategory === 'All Posts' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Leadership & Burnout':
        return 'bg-olive/10 text-olive';
      case 'Marriage & Family':
        return 'bg-gold/10 text-gold';
      case 'Abiding in Christ':
        return 'bg-sky-500/10 text-sky-500';
      case 'Prayer':
        return 'bg-primary-ink/10 text-primary-ink';
      default:
        return 'bg-gray-100 text-slate-secondary';
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-wheat-bg py-20 relative overflow-hidden">
        {/* Vine decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <img 
            src="/vine.svg" 
            alt="" 
            className="absolute left-0 top-16 w-28 h-44 opacity-10"
            style={{ transform: 'translateX(-35%) rotate(-6deg)' }}
          />
          <img 
            src="/vine.svg" 
            alt="" 
            className="absolute right-0 bottom-20 w-24 h-40 opacity-8 scaleX(-1)"
            style={{ transform: 'translateX(30%) rotate(12deg) scaleX(-1)' }}
          />
        </div>
        
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-6">
          <div className="absolute top-12 right-16 w-32 h-32 border border-olive/25 rounded-full"></div>
          <div className="absolute bottom-16 left-12 w-20 h-20 border border-gold/25 rounded-full"></div>
          <div className="absolute top-1/3 left-1/4 w-12 h-12 border border-olive/30 rounded-full"></div>
          <div className="absolute bottom-1/3 right-1/4 w-8 h-8 bg-gold/20 rounded-full"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-fraunces font-semibold text-4xl lg:text-5xl text-primary-ink mb-6">
              The <span className="text-gold">Abiding Word</span>
            </h1>
            <div className="w-16 h-0.5 bg-gold mx-auto mb-8"></div>
            <p className="text-xl text-slate-secondary max-w-4xl mx-auto leading-relaxed">
              Weekly Biblical encouragement and practical wisdom for your journey in ministry and life.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filtering Controls */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-4 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-gold text-white'
                      : 'bg-gray-100 text-slate-secondary hover:bg-gold/10 hover:text-gold'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Article Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <div key={article.id} className="bg-white border border-gray-200 shadow-md rounded-xl p-6 hover:shadow-lg transition-shadow">
                {/* Category Tag */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(article.category)}`}>
                    <Tag size={12} />
                    <span>{article.category}</span>
                  </span>
                </div>

                {/* Article Title */}
                <h3 className="font-fraunces font-semibold text-xl text-primary-ink mb-3 leading-tight">
                  {article.title}
                </h3>

                {/* Date */}
                <div className="flex items-center space-x-2 mb-4 text-slate-secondary text-sm">
                  <Calendar size={14} />
                  <span>{article.date}</span>
                </div>

                {/* Excerpt */}
                <p className="text-slate-secondary leading-relaxed mb-6">
                  {article.excerpt}
                </p>

                {/* Read More Link */}
                <button className="text-gold hover:text-gold/80 transition-colors font-medium flex items-center space-x-2">
                  <span>Read More</span>
                  <BookOpen size={16} />
                </button>
              </div>
            ))}
          </div>

          {/* Show message if no articles match filter */}
          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-secondary text-lg">
                No articles found in this category. Check back soon for new content!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Subscription Section */}
      <section className="bg-wheat-bg py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-center mb-12">
            <h2 className="font-fraunces font-semibold text-3xl text-primary-ink mb-6">
              Get Encouragement Delivered Weekly
            </h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mb-6"></div>
            <p className="text-lg text-slate-secondary max-w-2xl mx-auto leading-relaxed">
              Subscribe to receive new articles from "The Abiding Word" directly in your inbox. 
              No spam, just a simple, honest note to point you back to Jesus.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                />
              </div>
              <button className="bg-gold text-white px-8 py-3 rounded-lg font-semibold hover:bg-gold/90 transition-colors flex items-center justify-center space-x-2">
                <Mail size={20} />
                <span>Subscribe</span>
              </button>
            </div>
            <p className="text-sm text-slate-secondary mt-4">
              We respect your inbox. Unsubscribe anytime with one click.
            </p>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="bg-primary-ink text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-fraunces font-semibold text-3xl lg:text-4xl mb-6">
            Book a Conversation
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Ready to move beyond reading about faithful leadership to experiencing it firsthand? 
            We'd love to hear your story and explore how we might walk together.
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

export default Resources;
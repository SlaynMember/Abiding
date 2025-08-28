import React, { useState } from 'react';
import { BookOpen, Download, ExternalLink, Search, Filter, Video, FileText, Headphones } from 'lucide-react';

const Resources = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Marriage & Family', 'Leadership', 'Spiritual Formation', 'Practical Ministry', 'Crisis Support'];

  const resources = [
    {
      id: 1,
      title: "Healthy Boundaries for Pastoral Families",
      description: "A comprehensive guide to establishing and maintaining boundaries that protect both ministry effectiveness and family relationships.",
      type: "PDF Guide",
      category: "Marriage & Family",
      icon: FileText,
      downloadable: true,
      featured: true
    },
    {
      id: 2,
      title: "The Pastor's Marriage: Thriving in Ministry Together",
      description: "Video series featuring real pastoral couples discussing how they've navigated the unique challenges of marriage in ministry.",
      type: "Video Series",
      category: "Marriage & Family",
      icon: Video,
      downloadable: false,
      featured: true
    },
    {
      id: 3,
      title: "Leading from Spiritual Health",
      description: "Audio teachings on maintaining personal spiritual vitality while serving others in leadership capacity.",
      type: "Audio",
      category: "Spiritual Formation",
      icon: Headphones,
      downloadable: true,
      featured: false
    },
    {
      id: 4,
      title: "Church Conflict Resolution Framework",
      description: "Step-by-step process for addressing and resolving conflicts within church leadership and congregation.",
      type: "Resource Kit",
      category: "Leadership",
      icon: FileText,
      downloadable: true,
      featured: false
    },
    {
      id: 5,
      title: "Sabbatical Planning Guide",
      description: "Complete framework for planning, proposing, and maximizing a pastoral sabbatical for spiritual and family renewal.",
      type: "Planning Guide",
      category: "Practical Ministry",
      icon: FileText,
      downloadable: true,
      featured: true
    },
    {
      id: 6,
      title: "Crisis Communication Templates",
      description: "Ready-to-use communication templates for various crisis situations pastors may face in ministry.",
      type: "Template Pack",
      category: "Crisis Support",
      icon: FileText,
      downloadable: true,
      featured: false
    },
    {
      id: 7,
      title: "Biblical Foundations of Pastoral Leadership",
      description: "In-depth study of Scripture's teaching on pastoral calling, character, and competence.",
      type: "Study Guide",
      category: "Leadership",
      icon: BookOpen,
      downloadable: true,
      featured: false
    },
    {
      id: 8,
      title: "Raising Children in Ministry Families",
      description: "Practical wisdom for parents in ministry on raising healthy, faithful children in the unique context of pastoral life.",
      type: "Parent Guide",
      category: "Marriage & Family",
      icon: FileText,
      downloadable: true,
      featured: false
    }
  ];

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || resource.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredResources = resources.filter(resource => resource.featured);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-wheat-bg py-20">
        {/* Vine elements suggesting growth through resources */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <img 
            src="/vine.svg" 
            alt="" 
            className="absolute left-0 top-16 w-26 h-42 opacity-9"
            style={{ transform: 'translateX(-32%) rotate(-10deg)' }}
          />
          <img 
            src="/vine.svg" 
            alt="" 
            className="absolute right-0 top-1/3 w-22 h-38 opacity-7 scaleX(-1)"
            style={{ transform: 'translateX(28%) rotate(8deg) scaleX(-1)' }}
          />
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-fraunces font-semibold text-4xl lg:text-5xl text-primary-ink mb-6">
              <span className="text-gold">Resources</span>
            </h1>
            <div className="w-16 h-0.5 bg-gold mx-auto mb-8"></div>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-wheat-bg p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-olive/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="text-olive" size={32} />
              </div>
              <h3 className="font-fraunces font-semibold text-xl text-primary-ink mb-4">
                Devotionals and Abiding Tools
              </h3>
              <p className="text-slate-secondary leading-relaxed">
                Simple, scripture centered tools that help you return to abiding and lead from love.
              </p>
            </div>

            <div className="bg-sky-callout p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="text-gold" size={32} />
              </div>
              <h3 className="font-fraunces font-semibold text-xl text-primary-ink mb-4">
                Newsletter Archive
              </h3>
              <p className="text-slate-secondary leading-relaxed">
                An organized library of weekly encouragements.
              </p>
            </div>

            <div className="bg-white border-2 border-olive/20 p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-sky-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Headphones className="text-sky-500" size={32} />
              </div>
              <h3 className="font-fraunces font-semibold text-xl text-primary-ink mb-4">
                Privacy and Care
              </h3>
              <p className="text-slate-secondary leading-relaxed">
                We honor confidentiality. Sensitive conversations are never recorded. We protect trust by keeping private matters private and by seeking consent before sharing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-wheat-bg py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-center mb-16">
            <h2 className="font-fraunces font-semibold text-3xl text-primary-ink mb-6">
              Subscribe to Weekly Encouragement
            </h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mb-6"></div>
            <p className="text-slate-secondary">
              We will only use your email to send encouragement and resources. Unsubscribe anytime.
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
              />
              <button className="bg-gold text-white px-6 py-3 rounded-lg font-medium hover:bg-gold/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary-ink text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-fraunces font-semibold text-3xl lg:text-4xl mb-6">
            Book a Conversation
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            We would love to meet you, listen, and pray.
          </p>
          <button className="bg-gold text-primary-ink px-8 py-4 rounded-full font-semibold hover:bg-gold/90 transition-colors">
            Book a Conversation
          </button>
        </div>
      </section>
    </div>
  );
};

export default Resources;
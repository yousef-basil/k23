import React from 'react';
import { useTranslation } from 'react-i18next';
import './Blog.css';

const Blog = () => {
  const { t } = useTranslation();

  const posts = t('blog_posts', { returnObjects: true });

  if (!Array.isArray(posts)) return null;

  return (
    <section className="blog-section">
      <div className="blog-container">
        <h2 className="section-title">{t('blog_title')}</h2>
        
        <div className="blog-grid">
          {posts.map((post) => (
            <div key={post.id} className="blog-card">
              <div className="blog-image">
                <img src={post.image} alt={post.title} />
              </div>
              <div className="blog-content">
                <span className="blog-date">{post.date}</span>
                <h3 className="blog-post-title">{post.title}</h3>
                <p className="blog-post-desc">{post.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;

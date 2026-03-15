// src/pages/SocialShop.js
import React from 'react';
import './SocialShop.css';

// Exemple de publication
const posts = [
  { id: 1, type: "image", content: "https://via.placeholder.com/300x200", author: "Boutique Abidjan" },
  { id: 2, type: "video", content: "https://www.w3schools.com/html/mov_bbb.mp4", author: "Tech Store" },
  { id: 3, type: "text", content: "Découvrez nos nouvelles offres!", author: "Boutique Abidjan" },
];

function SocialShop() {
  return (
    <div className="socialshop-container">
      <h2>Boutique Sociale</h2>
      <div className="posts-list">
        {posts.map((post) => (
          <div key={post.id} className="post-card">
            <p><strong>{post.author}</strong></p>
            {post.type === "image" && <img src={post.content} alt="post" />}
            {post.type === "video" && <video src={post.content} controls width="300" />}
            {post.type === "text" && <p>{post.content}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SocialShop;
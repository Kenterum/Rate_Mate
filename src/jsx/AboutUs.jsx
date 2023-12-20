import React from 'react';
import '../css/AboutUs.css'; // Bu satırı ekleyerek CSS dosyasını import edin

export default function AboutUs() {
  return (
    <div className="about-us-container">
      <h1><span className="highlight">About Us</span></h1>
      <p>
        The <span className="bold">innovative social media platform</span> where making new friends and sharing experiences is at the heart of what we do. Our journey began with a simple idea: to connect people through events and help them build genuine, lasting friendships.
      </p>
      <p>
        Whether you're organizing a <span className="bold">cozy movie night</span>, planning an <span className="bold">adventurous hike</span>, or simply looking for a coffee meet-up, Rate Mate is your go-to app. Here, you can create events, join others, and enjoy the thrill of meeting new people.
      </p>
      <p>
        But what makes us truly unique is our <span className="bold">user-driven rating system</span>. After each interaction or event, users have the opportunity to rate their experiences, fostering a community of trust and fun.
      </p>
      <p>
        At Rate Mate, we believe in the <span className="bold">power of connections</span>. Our diverse user base spans all ages and backgrounds, united by a common desire to explore, interact, and grow their social circle.
      </p>
      <p>
        Join us in this <span className="bold">exciting journey</span> to discover, connect, and create unforgettable memories. Because at Rate Mate, every connection counts!
      </p>
    </div>
  );
}

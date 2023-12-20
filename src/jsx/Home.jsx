import React from 'react';
import '../css/index.css'
import AboutUs from './AboutUs';
import BlogCard from './BlogCard';
import Team from './Team';

export default function Home() {
    return (
        <>
            <div className="about-us-container">
                <h1 className="text-3xl font-bold mb-4">Welcome to <span className="highlight">Rate Mate</span></h1>
                <p className="mb-2">
                    Dive into <span className="bold">Rate Mate</span>, the <span className="bold">innovative platform</span> that's all about making friends and sharing life's moments. It's where events become the bridge to new friendships and unforgettable stories.
                </p>
                <p className="mb-2">
                    Organize a <span className="bold">movie night</span>, set out on an <span className="bold">epic hike</span>, or savor a casual coffee meet-up. Here, every event is a door to new connections.
                </p>
                <p className="mb-2">
                    Stand out with our <span className="bold">user-driven ratings</span>: your experiences help shape a community built on trust and enjoyment.
                </p>
                <p className="mb-2">
                    Embrace the <span className="bold">power of connection</span> at Rate Mate, where every age and background converges in the spirit of discovery and camaraderie.
                </p>
                <p>
                    Start your <span className="bold">exciting journey</span> today. Join Rate Mate, where every connection is a new chapter waiting to be written!
                </p>
            </div>

    
            <Team/>
            <BlogCard/>
           

        </>
    );
}

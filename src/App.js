import React, { useEffect, useState } from 'react';
import './App.css';
import Post from './components/Post';

function App() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // Fetch posts from backend (Node.js)
        fetch('http://localhost:5000/posts')  // Replace with your backend URL
            .then(response => response.json())
            .then(data => setPosts(data))
            .catch(error => console.error('Error fetching posts:', error));
    }, []);

    return (
        <div className="App">
            <header>
                <h1>My parchment</h1>
            </header>
            <section className="posts-list">
                {posts.map((post, index) => (
                    <Post key={index} title={post.title} content={post.content} />
                ))}
            </section>
        </div>
    );
}

export default App;

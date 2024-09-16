import React, { useState } from 'react';
import './App.css';
import myPhoto from './imgs/me.jpg';
import project1 from './imgs/photo.jpg';
import project2 from './imgs/ai.png';
import project3 from './imgs/personal.jpeg';

function App() {
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    alert(`Message sent successfully! ${message}`);
    setMessage(''); // Reset the message state to an empty string
  };

  const handleProjectClick = (projectName) => {
    alert(`You clicked on ${projectName}`);
  };

  return (
    <div className="App" style={{
      backgroundColor: '#F5F5F5', // Add a background color
      padding: '20px' // Add some padding to the page
    }}>
      <header style={{
        borderBottom: '1px solid #ADD8E6', // Add a bottom border to the header
        padding: '10px' // Add some padding to the header
      }}>
        <h1>My Portfolio</h1>
      </header>
      <div className="grid-container" style={{
        padding: '20px' // Add some padding to the grid container
      }}>
        <div className="info-container">
          <div className="about-me" style={{
            backgroundColor: '#ADD8E6', 
            borderRadius: '10px', 
            padding: '10px', 
            boxShadow: '0px 0px 10px rgba(0,0,0,0.2)',
            maxWidth: '30%', // Set a maximum width for the about-me container
            marginBottom: '40px', // Add some space between the about-me and projects containers
            margin: '0 auto' // Center the about-me container horizontally
          }}>
            <h2>About Me</h2>
            <img src={myPhoto} alt="Jan R. Reodica" style={{ width: '150px', borderRadius: '50%' }} />
            <p>Here's a more humanized version of your introduction:

Hi! I'm currently a 3rd-year Computer Science student at De La Salle Lipa, and I love diving into all things tech and coding. I’m always excited about taking on new challenges and learning more through projects, group work, and internships. When I’m not coding, you’ll find me exploring the latest tech trends, gaming, spending time with friends, or enjoying my hobbies like photography, video editing, and cooking. Looking forward to connecting and growing in the ever-evolving world of CS!</p>
          </div>
          <div className="projects" style={{
            backgroundColor: '#ADD8E6', 
            borderRadius: '10px', 
            padding: '10px', 
            boxShadow: '0px 0px 10px rgba(0,0,0,0.2)',
            maxWidth: '70%', // Set a maximum width for the projects container
            margin: '0 auto' // Center the projects container horizontally
          }}>
            <h2>Projects</h2>
            <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
              <li>
                <h3>Real-Time Chat Application with End-to-End Encryption</h3>
                <p>Build a real-time chat application where users can send messages in one-on-one or group chats. Implement end-to-end encryption to ensure that messages are secure and only readable by the intended recipients. Technologies involved might include Node.js, Socket.io for real-time communication, and encryption libraries for secure messaging.</p>
                <img src={project1} alt="Project 2" style={{ width: '200px' }} />
                <br />
                <span style={{ cursor: 'pointer' }} onClick={() => handleProjectClick('Project 1')}>
                  
                </span>
              </li>
              <li>
                <h3>AI-Powered Image Recognition System</h3>
                <p>Create an image recognition system that uses a pre-trained deep learning model (like ResNet or MobileNet) to identify objects in images. You can enhance it by allowing users to upload their own images and receive predictions. This project would involve Python, TensorFlow/PyTorch, and potentially a web interface using Flask or Django.</p>
                <img src={project2} alt="Project 2" style={{ width: '200px' }} />
                <br />
                <span style={{ cursor: 'pointer' }} onClick={() => handleProjectClick('Project 2')}>
               
                </span>
              </li>
              <li>
                <h3>Personal Finance Tracker with Data Visualization</h3>
                <p>Develop a personal finance tracker that allows users to log their income and expenses, categorize transactions, and generate visual insights (graphs, charts) to help them manage their finances better. Use technologies such as React or Vue.js for the front end, Python or Node.js for the back end, and a database like MongoDB or PostgreSQL for storing financial data.</p>
                <img src={project3} alt="Project 3 " style={{ width: '200px' }} />
                <br />
                <span style={{ cursor: 'pointer' }} onClick={() => handleProjectClick('Project 3')}>
          
                </span>
              </li>
            </ul>
          </div>
          <div className="contact-me" style={{
            backgroundColor: '#ADD8E6', 
            borderRadius: '10px', 
            padding: '10px', 
            boxShadow: '0px 0px 10px rgba(0,0,0,0.2)'
          }}>
            <h2>Contact Me</h2>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Leave a message..."
              rows={5}
              cols={30}
              style={{ padding: '10px', fontSize: '16px' }}
            />
            <br /><br />
            <button style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }} onClick={handleSendMessage}>
              Send Message
            </button>
          </div>
        
        </div>
      </div>
    </div>
  );
}

export default App;
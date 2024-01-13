import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

import me from './me.jpg'
const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={me} alt="" />
      </Link>
      <header>
        <h2>Misbah Fatma</h2>
        <p><a href="mailto:misbah7370@gmail.com">misbah7370@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
      Greetings! I'm Misbah, a passionate and innovative Software Developer eager to embark on a journey of turning lines of code into 
      powerful solutions. As a recent graduate in B.Tech with a specialization in Computer Science & Engineering, I am thrilled 
      to bring my fresh perspective and hunger for learning to the dynamic world of software development.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Misbah Fatma </p>
    </section>
  </section>
);

export default SideBar;

import React from 'react';
import PropTypes from 'prop-types';


const Cell = ({ data }) => (
  <div className="cell-container" style={{fontWeight : 'bold'}}>
    <article className="mini-post">
      <header>
        <h3><a href={data.link}>{data.title}</a></h3>
       
      </header>
      <a href={data.link} className="image">
        <img src={`${data.image}`} alt={data.title} />
      </a><br></br><br></br><br></br>
      <div className="description">
        <p>{data.desc}</p>
      </div>
    </article>
  </div>
);

Cell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string,
    image: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
};

export default Cell;

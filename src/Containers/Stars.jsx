import React from 'react'

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
export default function Stars() {
  const x = getRandomInt(1,9);
  const stars = [];
  for(let i=1;i<=x;i++){
    stars.push(<img width="65 "alt="star" src="http://www2.le.ac.uk/digitalsignage/slideshow/chemistry/images/archive/upto-dec-16/star.png"/>)
  }
  return (
    <div className="stars">
    {stars}
    </div>
  );
}

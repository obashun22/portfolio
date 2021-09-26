import React from 'react';

type Props = {
  title: string,
  color: string,
}

const Section: React.FC<Props> = ({title, color, children}) => {
  return (
    <div className={`works-section bg-${color}`}>
      <div className="container mx-auto pb-14">
        <h2 className="py-14 text-center text-3xl font-semibold text-dark">{ title }</h2>
        { children }
      </div>
    </div>
  );
}

export default Section;
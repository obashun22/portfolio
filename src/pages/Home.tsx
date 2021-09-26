import React from 'react';
import '../styles/Home.scss';
import { Link } from 'react-router-dom';

import Work from '../components/Work';
import Section from '../components/Section';

import RakutanRakuda from '../imgs/rakutan-rakuda.png';

function Home() {
  return (
    <>
      <header className="bg-main p-3 pl-10">
        <Link to="/Home">
          <h2 className="inline-block px-2 leading-10 text-3xl text-white">
            OBA's PORTFOLIO
          </h2>
        </Link>
      </header>
      <div className="top-section bg-semi-white">
        <div className="container mx-auto py-48 text-dark">
          <div className="w-3/4 mx-auto">
            <h1 className="inline-block text-4xl">SHUNSUKE<br />OBA</h1>
            <h1 className="inline-block text-6xl">//</h1>
          </div>
        </div>
      </div>

      <Section title="Works" color="base-light">
        {/* Works */}
        <div className="works grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {/* Work */}
          <Work image={RakutanRakuda}/>
        </div>
      </Section>

      <Section title="About me" color="base-dark">
        <div className="profile">
          <div className="profile-top">
            <img src="#" alt="" />
            <div className="prof-description">
              <div className=""></div>
            </div>
          </div>
          <div className="career">

          </div>
        </div>
      </Section>

      <footer className="bg-main">
        <div className="links">
          {/* <a href=""><img src="#" alt="" /></a> */}
          <div className="text-center py-8 text-gray">
            <a href="#" className="bg-white">Twitter</a>
            <a href="#" className="bg-white">Qiita</a>
            <a href="#" className="bg-white">hogehoge</a>
          </div>
        </div>
        <p className="text-center py-8 text-gray">&copy;Shunsuke Oba 2020</p>
      </footer>
    </>
  );
}

export default Home;

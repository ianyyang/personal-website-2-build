import React, { Component } from 'react';
import { ScrollTo } from 'react-scroll-to';
import { Grid, Cell } from 'react-mdl';

var greetings = ['Hello', 'Hallo', 'Jambo', 'Barev dzez', 'Mingalarba', 'Chum reap suor', 'Ni hao', 'Namasté', 'Halo', 'Konnichiwa', 'Annyeonghaseyo', 'Sabaidee', 'Sain baina uu', 'Kumusta', 'Vanakkam', 'Sàwàtdee', 'Xin chào', 'Tungjatjeta', 'Zdravejte', 'Bok', 'Ahoj', 'Terve', 'Bonjour', 'Dia duit', 'Guten tag', 'Yasass', 'Szervusz', 'Halló', 'Salve', 'God dag', 'Cześć', 'Olá', 'Salut', 'Privét', 'Zdravo', 'Hola', 'Hej', 'Vitayu', 'As-salām ‘alaykum', 'Shalóm', 'Salâm', 'Merhaba', 'Aloha', 'Asalaam alaikum', 'Hei', 'Geia', 'Hai'];
var greeting = greetings[Math.floor(Math.random()*greetings.length)];

class Home extends Component {
  render() {
    return (
      <div>
        <Grid className='home-grid'>
          <Cell col={12}>
            <div className="banner-text">
              <h1>{greeting}! <span>I'm Ian Yang!</span></h1>
              <p>
                Computer Science & Statistics Student
                <br></br>
                University of Toronto
              </p>
              <hr/>
            </div>

            <div className="social-links">
              {/* Resume */}
              <a href='../resources/Resume (Ian Yang).pdf' rel="noopener noreferrer" target="_blank">
                <img src='../images/resume.svg' alt="Resume" className="social-icon"/>
              </a>

              {/* Projects */}
              <ScrollTo>
                {({ scrollTo }) => (
                  <a onClick={() => scrollTo({ y: 875, smooth: true })}>
                    <img src='../images/projects.svg' alt="Projects" className="social-icon"/>
                  </a>
                )}
              </ScrollTo>

              {/* GitHub */}
              <a href='https://github.com/ianyyang/' rel="noopener noreferrer" target="_blank">
                <img src='../images/github.svg' alt="GitHub" className="social-icon"/>
              </a>

              {/* LinkedIn */}
              <a href='https://www.linkedin.com/in/ianyyang/' rel="noopener noreferrer" target="_blank">
                <img src='../images/linkedin.svg' alt="LinkedIn" className="social-icon"/>
              </a>

              {/* Email */}
              <a href='mailto:iany.yang.utoronto.ca' rel="noopener noreferrer" target="_blank">
                <img src='../images/email.svg' alt="Email" className="social-icon"/>
              </a>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Home;
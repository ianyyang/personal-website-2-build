import React, { Component } from 'react';
import { Grid, Cell, Card, CardTitle, CardText, CardActions} from 'react-mdl';

class ProjectsMobile extends Component {
  render() {
    return (
      <div>
        <Grid className='projects-grid'>
          <Cell col={12}>
            <div className="projects-header">
              <h1>Projects</h1>
            </div>

            <div className="projects-mobile">
              {/* Personal Website */}
              <Card shadow={4} style={{width: '325px', margin: 'auto'}}>
                <CardActions style={{background: '#B0D7FF'}}>
                  <a href='https://github.com/ianyyang/ianyyang.github.io/' rel="noopener noreferrer" target="_blank">
                    <h1 className="projects-title">Personal Website</h1>
                  </a>
                </CardActions>
                <a href='https://github.com/ianyyang/ianyyang.github.io/' rel="noopener noreferrer" target="_blank">
                  <CardTitle style={{color: '#92C1F0', height: '300px', background: 'url(../images/personal-website.gif) center / cover'}}/>
                </a>
                <CardText style={{background: '#B0D7FF'}}>
                  <p className="projects-desc">My personal website (this one!) serves as an environment for me to showcase the projects I've made to the world and to document my progress throughout them!</p>
                </CardText>
                <CardActions style={{background: '#C9E4FF'}}>
                  <h1 className="projects-tech">React.js HTML CSS</h1>
                </CardActions>
              </Card>
              <br className='projects-divider'></br>

              {/* Foodiary UI/UX Project */}
              <Card shadow={4} style={{width: '325px', margin: 'auto'}}>
                <CardActions style={{background: '#B0D7FF'}}>
                  <a href='https://ianyyang.github.io/Foodiary/' rel="noopener noreferrer" target="_blank">
                    <h1 className="projects-title">Foodiary UX/UI Project</h1>
                  </a>
                </CardActions>
                <a href='https://ianyyang.github.io/Foodiary/' rel="noopener noreferrer" target="_blank">
                  <CardTitle style={{color: '#92C1F0', height: '300px', background: 'url(../images/Foodiary.png) center / cover'}}/>
                </a>
                <CardText style={{background: '#B0D7FF'}}>
                  <p className="projects-desc">Foodiary is an app focused on promoting food safety within food handling, storing, and preparation via food expiry notifications, applicable recipe suggestions, and relevant news articles.</p>
                </CardText>
                <CardActions style={{background: '#C9E4FF'}}>
                  <h1 className="projects-tech">Figma Wireframing & UI Design Tool</h1>
                </CardActions>
              </Card>
              <br className='projects-divider'></br>

              {/* Item 3 */}
              {/* <Card shadow={4} style={{width: '325px', margin: 'auto'}}>
                <CardActions style={{background: '#C9E4FF'}}>
                  <h1 className="projects-title">Foodiary UX/UI Project</h1>
                </CardActions>
                <a href='https://ianyyang.github.io/Foodiary/' rel="noopener noreferrer" target="_blank">
                  <CardTitle style={{color: '#C9E4FF', height: '300px', background: 'url(../images/Foodiary.png) center / cover'}}></CardTitle>
                </a>
                <CardText style={{background: '#C9E4FF'}}>
                  <p className="projects-desc">Foodiary is an app centered towards promoting food safety within the handling, storing, and preparation processes. By entering their food data, users are automatically notified of soon-to-be expired foods and are given appropriate recipe suggestions accordingly. News regarding food safety can also be read to stay up-to-date with the latest food related issues.</p>
                </CardText>
              </Card>
              <br className='projects-divider'></br> */}

              {/* Item 4 */}
              {/* <Card shadow={4} style={{width: '325px', margin: 'auto'}}>
                <CardActions style={{background: '#C9E4FF'}}>
                  <h1 className="projects-title">Foodiary UX/UI Project</h1>
                </CardActions>
                <a href='https://ianyyang.github.io/Foodiary/' rel="noopener noreferrer" target="_blank">
                  <CardTitle style={{color: '#C9E4FF', height: '300px', background: 'url(../images/Foodiary.png) center / cover'}}></CardTitle>
                </a>
                <CardText style={{background: '#C9E4FF'}}>
                  <p className="projects-desc">Foodiary is an app centered towards promoting food safety within the handling, storing, and preparation processes. By entering their food data, users are automatically notified of soon-to-be expired foods and are given appropriate recipe suggestions accordingly. News regarding food safety can also be read to stay up-to-date with the latest food related issues.</p>
                </CardText>
              </Card>
              <br className='projects-divider'></br> */}

              {/* Item 5 */}
              {/* <Card shadow={4} style={{width: '325px', margin: 'auto'}}>
                <CardActions style={{background: '#C9E4FF'}}>
                  <h1 className="projects-title">Foodiary UX/UI Project</h1>
                </CardActions>
                <a href='https://ianyyang.github.io/Foodiary/' rel="noopener noreferrer" target="_blank">
                  <CardTitle style={{color: '#C9E4FF', height: '300px', background: 'url(../images/Foodiary.png) center / cover'}}></CardTitle>
                </a>
                <CardText style={{background: '#C9E4FF'}}>
                  <p className="projects-desc">Foodiary is an app centered towards promoting food safety within the handling, storing, and preparation processes. By entering their food data, users are automatically notified of soon-to-be expired foods and are given appropriate recipe suggestions accordingly. News regarding food safety can also be read to stay up-to-date with the latest food related issues.</p>
                </CardText>
              </Card>
              <br className='projects-divider'></br> */}

              {/* Item 6 */}
              {/* <Card shadow={4} style={{width: '325px', margin: 'auto'}}>
                <CardActions style={{background: '#C9E4FF'}}>
                  <h1 className="projects-title">Foodiary UX/UI Project</h1>
                </CardActions>
                <a href='https://ianyyang.github.io/Foodiary/' rel="noopener noreferrer" target="_blank">
                  <CardTitle style={{color: '#C9E4FF', height: '300px', background: 'url(../images/Foodiary.png) center / cover'}}></CardTitle>
                </a>
                <CardText style={{background: '#C9E4FF'}}>
                  <p className="projects-desc">Foodiary is an app centered towards promoting food safety within the handling, storing, and preparation processes. By entering their food data, users are automatically notified of soon-to-be expired foods and are given appropriate recipe suggestions accordingly. News regarding food safety can also be read to stay up-to-date with the latest food related issues.</p>
                </CardText>
              </Card>
              <br className='projects-divider'></br> */}
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default ProjectsMobile;
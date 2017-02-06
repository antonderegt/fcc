import React from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back'

import Paper from 'material-ui/Paper'
import FlatButton from 'material-ui/FlatButton'

const style = {
  paper: {
    height: 'auto',
    maxWidth: 300,
    margin: 10,
    padding: 20,
    textAlign: 'center',
    display: 'inline-block'
  },
  img: {
    maxHeight: 300
  }
}

const ProgrammeBooklet = (props) => (
  <div>
    <Paper style={style.paper} zDepth={1}>
      <img style={style.img} src="images/nac.png"></img>
      <h1>Programme booklet</h1>
      <p>This web app quickly shows information about the event on your phone.
        No need to search for the paper handout.</p>
      <FlatButton href="https://antonderegt.github.io/nac/" target="_blank" rel="noopener" label="Check it out!" />
    </Paper>
    <Paper style={style.paper} zDepth={1}>
      <h1>Goal of the project</h1>
      <p>I came in contact with a Dutch student advocates society (Pleitgenootschap Eggens).
        I showed them my recent work on web apps and they got very excited so they asked me to build something for their yearly competition.
        <h3>But what...??</h3>
        <p>What problem can I solve with technology? My girlfriend told me she always loses the
          programme booklet. Something she never loses... her phone.
        </p>
      </p>
    </Paper>
    <Paper style={style.paper} zDepth={1}>
      <h1>Features</h1>
        <p>
          Offline access (Android)<br/>
          Saves locally data relevant to you<br/>
          Super quick!<br/>
        </p>
    </Paper>
    <Paper style={style.paper} zDepth={1}>
      <h1>Technology Stack</h1>
      <p>
        ReactJS<br/>
        Redux<br/>

      </p>
    </Paper>
    <FloatingActionButton secondary={true} style={props.FABStyle} onTouchTap={() => props.onTouchTap()}>
      <ArrowBack />
    </FloatingActionButton>
  </div>
);

export default ProgrammeBooklet
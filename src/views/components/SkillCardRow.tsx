import React, {Component} from 'react';
import {CSSProperties} from "@material-ui/core/styles/withStyles";

class SkillCardRow extends Component <props, {}>{
  sa:Skill[] = [];
  constructor(props: props) {
    super(props);
    this.sa = this.props.skills;
    console.log(this.props.skills)
  }


  render() {
    var sth:Skill = this.sa[0];
    var name = '';
    if (sth === undefined){
      name = 'an';
    }
    else{
      name = sth.name;
    }

    return (
      <div className="skill-card-row">
        <div className="skill-card-column">
          <div className="skill-card">
            <p>{name}<button className="endorse-button blue-botton">{name}</button></p>
          </div>
        </div>
        <div className="skill-card-column">
          <div className="skill-card">
            <p>CSS<button className="endorse-button blue-botton">3</button></p>
          </div>
        </div>
        <div className="skill-card-column">
          <div className="skill-card">
            <p>javascript<button className="endorse-button blue-botton">16</button></p>
          </div>
        </div>
        <div className="skill-card-column">
          <div className="skill-card">
            <p>typescript<button className="endorse-button red-botton">-</button></p>
          </div>
        </div>
      </div>
    );
  }
}

interface props {
  skills : Skill[];
}

interface Skill{
  name: string;
  point: number;
  hasEndorsed: boolean;
}

export default SkillCardRow;
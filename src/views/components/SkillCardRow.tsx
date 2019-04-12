import React, {Component} from 'react';
import {CSSProperties} from "@material-ui/core/styles/withStyles";
import SkillCard from './SkillCard';
import SquareButton from './../components/SquareButton';
import './SkillCardRow.scss'

class SkillCardRow extends Component <props, {}>{
  private static skillArrey:Skill[] = [];
  private static onClick:any;
  constructor(props: props) {
    super(props);
    SkillCardRow.skillArrey = this.props.skills;
    SkillCardRow.onClick = this.props.onClick;
    console.log(this.props.skills)
  }


  render() {
    var renderedOutput = SkillCardRow.skillArrey.map((item, i) =>
      <div key={i} className="skill-card-column" id={'skill' + i}>
        <div className="skill-card">
          <p>
            {item.name}
            <SquareButton 
            buttonTitle={this.props.buttonTitle}
            class={this.props.class}
            onClick={SkillCardRow.onClick}
            value={item.name}>
              {item.point}
            </SquareButton>
          </p>
        </div>
      </div>
    )

    return (
      <div className="skill-card-row">
        {renderedOutput}
      </div>
    );
  }
}

interface props {
  skills : Skill[];
  onClick: any;
  buttonTitle: string;
  class: string;
}

interface Skill{
  name: string;
  point: number;
}

export default SkillCardRow;
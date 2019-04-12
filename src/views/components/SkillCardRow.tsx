import React, {Component} from 'react';
import {CSSProperties} from "@material-ui/core/styles/withStyles";
import SkillCard from './SkillCard';

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
          <p>{item.name}<button title="!حذف مهارت" className="endorse-button blue-botton" onClick={SkillCardRow.onClick} value={item.name}>{item.point}</button></p>
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
}

interface Skill{
  name: string;
  point: number;
  hasEndorsed: boolean;
}

export default SkillCardRow;
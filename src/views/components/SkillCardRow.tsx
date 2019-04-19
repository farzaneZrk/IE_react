import React, {Component} from 'react';
import SkillCard from './SkillCard';
import SquareButton from './../components/SquareButton';
import './SkillCardRow.scss'

class SkillCardRow extends Component <props, {}>{
  skillArrey:Skill[] = [];
  onClick:any;
  constructor(props: props) {
    super(props);
    this.skillArrey = this.props.skills;
    this.onClick = this.props.onClick;
    console.log(this.props.skills)
  }


  render() {
    var renderedOutput = this.skillArrey.map((item, i) =>
      <div key={i} className="skill-card-column" id={'skill' + i} dir="ltr">
        <div className="skill-card">
          <p>
            {item.name}
            <SquareButton 
            buttonTitle={this.props.buttonTitle}
            class={this.props.class}
            onClick={this.onClick}
            value={item.name}
            >
              {item.point}
            </SquareButton>
          </p>
        </div>
      </div>
    )

    return (
      <div className="skill-card-row" style={this.props.style}>
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
  style: any;
}

interface Skill{
  name: string;
  point: number;
}

export default SkillCardRow;
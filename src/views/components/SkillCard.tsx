import React, {Component} from 'react';

class SkillCard extends Component <props, {}>{
  private static skillData : Skill;
  private static skillNumber : number;

  constructor(props: props) {
    super(props);
    SkillCard.skillData = props.skill;
    SkillCard.skillNumber = props.num;
    console.log(SkillCard.skillData)
    this.state = {
    };
}

  render() {
    let s:Skill = SkillCard.skillData;
    console.log(SkillCard.skillNumber)

    return (
      <div key={SkillCard.skillNumber} className="skill-card-column">
        <div className="skill-card">
          <p>{s.name}<button className="endorse-button blue-botton">{s.point}</button></p>
        </div>
      </div>
    );
  }
}

interface props {
  skill : Skill;
  num: number;
}

interface Skill{
  name: string;
  point: number;
  hasEndorsed: boolean;
}

export default SkillCard;
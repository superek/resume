import React, {Component} from "react";

import ProjectItem from "./Item";

class ProjectList extends Component {
  static defaultProps = {
    data: []
  }
  render() {
    const { data } = this.props;
    const list = data.map(
      project => (<ProjectItem key={project.id} info={project}/>)
    );

    return(
      <div className={"list"}>
          {list}
      </div>
    );
  }
}

export default ProjectList;

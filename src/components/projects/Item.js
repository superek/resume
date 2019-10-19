import React, {Component} from "react";

const imgPath = `${process.env.PUBLIC_URL}` + '/images/project/';


class ProjectItem extends Component {

  constructor(props) {
      super(props);
  }
  static defaultProps = {
    info: {
      id: 0,
      url: "",
      thumbnail: "",
      name: "",
      date : "",
      role : "",
      technic : ""
    }
  }

  render() {
    const {
      url, thumbnail, name, date, id , role, technic
    } = this.props.info;
    return (
      <div className={`chip chip-${id}`}>
        {/* <div className={"item"}>
          <div className={"thumbnail"}>
            <span>
              {thumbnail ? (
                <img src={`${imgPath}${thumbnail}.PNG` }/>
              ) : (<i></i>) }
            </span>
          </div>
          <div className={"data"}>
            <ul>
              <li>
                <strong>프로젝트명</strong>
                <span className={"name"}>{name}</span>
              </li>
              <li>
                <strong>일정</strong>
                <span className={"date"}>{date}</span>
              </li>
              <li>
                <strong>역할</strong>
                <span className={"role"}>{role}</span>
              </li>
              <li>
                <strong>주사용 기술</strong>
                <span className={"technic"}>{technic}</span>
              </li>
            </ul>
          </div>
        </div> */}
        {url ?
          (
            <a href={url} className={"item"} target="_blank">
              <div className={"thumbnail"}>
                <span>
                  {thumbnail ? (
                    <img src={`${imgPath}${thumbnail}.PNG` }/>
                  ) : (<i></i>) }
                </span>
              </div>
              <div className={"data"}>
                <ul>
                  <li>
                    <strong>프로젝트명</strong>
                    <span className={"name"}>{name}</span>
                  </li>
                  <li>
                    <strong>일정</strong>
                    <span className={"date"}>{date}</span>
                  </li>
                  <li>
                    <strong>역할</strong>
                    <span className={"role"}>{role}</span>
                  </li>
                  <li>
                    <strong>주사용 기술</strong>
                    <span className={"technic"}>{technic}</span>
                  </li>
                </ul>
              </div>
            </a>
          )
          :
          (
          <div className={"item"}>
            <div className={"thumbnail"}>
              <span>
                {thumbnail ? (
                  <img src={`${imgPath}${thumbnail}.PNG` }/>
                ) : (<i></i>) }
              </span>
            </div>
            <div className={"data"}>
              <ul>
                <li>
                  <strong>프로젝트명</strong>
                  <span className={"name"}>{name}</span>
                </li>
                <li>
                  <strong>일정</strong>
                  <span className={"date"}>{date}</span>
                </li>
                <li>
                  <strong>역할</strong>
                  <span className={"role"}>{role}</span>
                </li>
                <li>
                  <strong>주사용 기술</strong>
                  <span className={"technic"}>{technic}</span>
                </li>
              </ul>
            </div>
          </div>
          )
        }
      </div>
    );
  }
}

export default ProjectItem;
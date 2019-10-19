import React, {Component} from 'react';

import ProjectList from '../components/projects/List';

class Projects extends Component  {
    state = {
        projects : [
          {
            id: 0,
            thumbnail: "",
            name: "내부 프로젝트",
            date : "2019 ~",
            role : "구축 지원",
            technic : "React, Bootstrap, Vue, Scss"
          },{
            id: 1,
            thumbnail: "채널애터미",
            name: "Atomy Channel",
            url: "http://ch.atomy.com",
            date : "2017.01.23 ~ ",
            role : "구축",
            technic : "html, css, bootstrap"
          },{
            id: 2,
            thumbnail: "애터미런",
            name: "Atomy Run",
            url: "http://www.atomyrun.com/",
            date : "2017.01.23 ~ ",
            role : "구축",
            technic : "html, css"
          },{
            id: 3,
            thumbnail: "애터미공기청정기",
            name: "Atomy 공기청정기",
            url: "http://www.atomyair.com/",
            date : "2017.01.23 ~ ",
            role : "구축",
            technic : "html, css"
          },{
            id: 4,
            thumbnail: "애터미",
            name: "Atomy mobile global",
            url: "http://m.atomy.com/kr/m",
            date : "2017.01.23 ~ ",
            role : "운영",
            technic : "html, css"
          },{
            id: 5,
            thumbnail: "uplus5g",
            name: "LG U+ 5G 반응형",
            url: "https://www.uplus5g.co.kr/#/",
            date : "2019.",
            role : "구축",
            technic : "Html, Scss (animation), Vue"
          },{
            id: 6,
            thumbnail: "아우디",
            name: "Audi Approved 반응형",
            url: "https://approved.audi.co.kr/",
            date : "2018.06.01 ~",
            role : "구축",
            technic : "html,css(animation), jQuery"
          },{
            id: 7,
            thumbnail: "셀프뷰티",
            name: "Self Beauty Mobile",
            date : "2016.10.31 ~ 2016.12.14",
            url: "https://www.selfbeauty.com/index.do",
            role : "개선",
            technic : "css(animation), react"
          },{
            id: 8,
            thumbnail: "",
            name: "삼성 ConnectAuto",
            date : "2016.05.25 ~ 2016.07.15",
            role : "구축",
            technic : "html, css(animation)"
          },{
            id: 9,
            thumbnail: "",
            name: "현대 AE Configurator",
            date : "2016.04.15 ~ 2016.07.08",
            role : "구축",
            technic : "html, css"
          },{
            id: 10,
            thumbnail: "",
            name: "Kia K7, Cazenda",
            date : " ",
            role : "구축",
            technic : "html,css(animation)"
          },{
            id: 11,
            thumbnail: "",
            name: "Kia Mohave",
            date : " ",
            role : "구축",
            technic : "html,css(animation), AEM "
          },{
            id: 12,
            thumbnail: "",
            name: "Kia Niro",
            date : " ",
            role : "구축",
            technic : "html,css(animation)"
          },{
            id: 13,
            thumbnail: "",
            name: "Kia Morning",
            date : " ",
            role : "구축",
            technic : "html,css(animation), AEM"
          },{
            id: 14,
            thumbnail: "",
            name: "Kia Stonic",
            date : " ",
            role : "구축",
            technic : "html,css(animation)"
          },{
            id: 15,
            thumbnail: "",
            name: "EBSi",
            date : "2014.12.22 ~ 2015.11.05",
            role : "운영",
            technic : "html, css"
          },{
            id: 16,
            thumbnail: "",
            name: "HILIFE 손해사정 ",
            date : "2014.08.05 ~ 2014.11.07",
            role : "접근성 리뉴얼",
            technic : "html,css"
          },{
            id: 17,
            thumbnail: "",
            name: "SBS 소치올림픽",
            date : "2013.12.02 ~ 2014.02.07",
            role : "웹, 모바일 구축",
            technic : "html,css"
          },{
            id: 18,
            thumbnail: "",
            name: "SBS 브라질 월드컵",
            date : "2014.04.14 ~ 2014.06.14",
            role : "모바일 구축",
            technic : "html,css"
          },{
            id: 19,
            thumbnail: "",
            name: "롯데 슈퍼",
            date : "2013.03.05 ~ 2013.04.26",
            role : "웹접근성 개선",
            technic : "html,css"
          },{
            id: 20,
            thumbnail: "",
            name: "경기대학교 원격교육원",
            date : "",
            role : "운영",
            technic : "html,css"
          },{
            id: 21,
            thumbnail: "",
            name: "Smart School PC S/W 개발",
            date : "",
            role : "구축",
            technic : "html,css"
          },{
            id: 22,
            thumbnail: "",
            name: "Ahnlab Mall",
            date : "",
            role : "운영",
            technic : "html,css"
          },{
            id: 23,
            thumbnail: "",
            name: "SK 해피오토멤버스",
            date : "",
            role : "운영",
            technic : "html,css"
          },{
            id: 24,
            thumbnail: "",
            name: "Samsung TV A-store ",
            date : "",
            role : "운영",
            technic : "html,css"
          },{
            id: 25,
            thumbnail: "",
            name: "Samsung N.com",
            date : "",
            role : "운영",
            technic : "html,css"
          },{
            id: 26,
            thumbnail: "",
            name: "로레알 파리",
            date : "",
            role : "운영",
            technic : "html,css"
          },{
            id: 27,
            thumbnail: "",
            name: "아시아나 글로벌",
            date : "",
            role : "운영",
            technic : "html,css"
          },{
            id: 28,
            thumbnail: "",
            name: "LG U+ 모바일 고객센터",
            date : "",
            role : "운영",
            technic : "html,css"
          },{
            id: 29,
            thumbnail: "",
            name: "LG U+ 글로벌콜",
            date : "",
            role : "구축 지원",
            technic : "html,css"
          },{
            id: 30,
            thumbnail: "",
            name: "옥션 도서통합몰",
            date : "",
            role : "운영",
            technic : "html,css"
          }
        ]
      }
      handleCreate = (data) => {
        const { projects } = this.state;
        this.setState({
          projects: projects.concat({ id: this.id++, ...data })
        })
      }
    render() {
        return (
            <React.Fragment>
                <ProjectList data={this.state.projects}/>
            </React.Fragment>
        );
    }
};

export default Projects;
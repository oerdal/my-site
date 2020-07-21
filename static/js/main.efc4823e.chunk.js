(this["webpackJsonpmy-site"]=this["webpackJsonpmy-site"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(3),l=a.n(i),o=(a(14),a(4)),s=a(5),c=a(7),m=a(6),d=a(1),u=a(8);var p=function(){return r.a.createElement("div",{id:"about",className:"d-flex flex-column align-items-center my-4"},r.a.createElement("h2",{id:"about-tag"},"About Me"),r.a.createElement("p",{className:"w-50 text-center"},"I am a fourth year student at the University of Washington. I am studying toward a major Applied and Computational Math Sciences with a concentration in Scientific Computing and Numerical Algorithms. I am also completing a minor from the Information School at the UW and am particularly interested in data science."),r.a.createElement("p",null,"My resume is available ",r.a.createElement("a",{href:"/Resume_Summer2020.pdf"},"here"),"."))},f=function(e){var t=e.name,a=e.description,n=e.link1,i=e.link2;return r.a.createElement("div",{id:"project",className:"d-flex flex-column align-items-center text-center w-50 py-3 my-3"},r.a.createElement("h3",null,t),r.a.createElement("p",{className:"w-75"},a),r.a.createElement("div",{className:"_links d-flex justify-content-around w-50"},r.a.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer"},"Check it Out!"),r.a.createElement("a",{href:i,target:"_blank",rel:"noopener noreferrer"},"Github")))},h=function(){return r.a.createElement("div",{id:"projects",className:"d-flex flex-column align-items-center my-4"},r.a.createElement("h2",{id:"projects-tag"},"Projects"),r.a.createElement("div",{className:"d-flex align-items-center justify-content-center flex-wrap"},r.a.createElement(f,{name:"NBA Fantasy Trade Tool",description:"Tool for determining the +/- effects of trading selecting players. Contains a database of all players and their season stats. Written entirely in R and deployed to ShinyApps.",link1:"https://oerdal.shinyapps.io/final/",link2:"https://github.com/oerdal/info201-NBA"}),r.a.createElement(f,{name:"Pi Alpha Phi Website",description:"Website for my Fraternity for external presentation. Facilitates recruitment outreach and information provision. Built using React.js, Bootstrap, and deployed to Heroku.",link1:"http://uwpaphi.com/",link2:"https://github.com/oerdal/paphi"}),r.a.createElement(f,{name:"Music Genre Classifier",description:"Machine Learning model built for classifying music by genre. Uses Linear Discriminant Analysis and time-frequency analysis. Written in MATLAB.",link1:"/ldareport.pdf",link2:"https://github.com/oerdal/amath482/tree/master/lda"}),r.a.createElement(f,{name:"MNIST Image Classifier",description:"Convolutional Neural Network built for classifying images. Uses modified implementation of LeNet-5 and Fashion MNIST data set. Written in python with tensorflow and Keras.",link1:"/nnreport.pdf",link2:"https://github.com/oerdal/amath482/tree/master/neuralnetwork"}),r.a.createElement(f,{name:"NBA Team Optimization",description:"Linear Programming group project for maximizing team effectiveness under a given salary constraint. Web scraper code and LP input code written in python.",link1:"",link2:"https://github.com/sa-tony/MATH-381-Project-1"}),r.a.createElement(f,{name:"Rubik's Cube Solver",description:"A.I. agent for solving a simplified 3x3 Rubik's cube using feature-based Q-learning. Written in python.",link1:"",link2:"https://github.com/AashrayAnand/rubiks-cube-reinforcement-learning"})))},g=function(e){var t=e.text,a="#"+t.toLowerCase()+"-tag";return r.a.createElement("a",{href:a,className:""},t)},b=function(e){var t=e.navIsLarge;return console.log(t),t?r.a.createElement("div",{id:"_navbar_large",className:"_navbar fixed-top py-3 "},r.a.createElement("div",{className:"d-flex w-50 mx-auto justify-content-between"},r.a.createElement(g,{text:"ABOUT"}),r.a.createElement(g,{text:"PROJECTS"}),r.a.createElement(g,{text:"CONTACT"}))):r.a.createElement("div",{id:"_navbar_small",className:"_navbar fixed-top py-2"},r.a.createElement("div",{className:"d-flex w-50 mx-auto justify-content-between"},r.a.createElement(g,{text:"ABOUT"}),r.a.createElement(g,{text:"PROJECTS"}),r.a.createElement(g,{text:"CONTACT"})))},y=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).handleScroll=function(){a.setState({scrollPos:window.scrollY})},a.state={scrollPos:0},a.handleScroll=a.handleScroll.bind(Object(d.a)(a)),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){var e=this.state.scrollPos<100;return console.log(e+" "+this.state.scrollPos),r.a.createElement("div",null,r.a.createElement(b,{navIsLarge:this.state.scrollPos<100}),r.a.createElement("div",{id:"body",className:"position-relative"},r.a.createElement(p,null),r.a.createElement(h,null)))}}]),t}(n.Component);l.a.render(r.a.createElement(y,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.efc4823e.chunk.js.map
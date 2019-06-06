(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,a,t){e.exports=t(29)},21:function(e,a,t){},29:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),l=t(8),i=t.n(l),r=(t(21),t(1)),o=t(2),c=t(4),m=t(3),d=t(5),u=function(e){function a(){return Object(r.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return s.a.createElement(n.Fragment,null,s.a.createElement("header",{id:"home"},s.a.createElement("nav",{id:"nav-wrap"},s.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),s.a.createElement("a",{className:"mobile-btn",href:"#",title:"Hide navigation"},"Hide navigation"),s.a.createElement("ul",{id:"nav",className:"nav"},s.a.createElement("li",{className:"current"},s.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),s.a.createElement("li",null,s.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),s.a.createElement("li",null,s.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),s.a.createElement("li",null,s.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Works")),s.a.createElement("li",null,s.a.createElement("a",{className:"smoothscroll",href:"mailto:mattheweldredge@gmail.com"},"Contact")))," ")," ",s.a.createElement("div",{className:"row banner"},s.a.createElement("div",{className:"banner-text"},s.a.createElement("h1",{className:"responsive-headline"},"I'm ",e.name,"."),s.a.createElement("h3",null,e.intro),s.a.createElement("hr",null),s.a.createElement("ul",{className:"social"},s.a.createElement("li",null,s.a.createElement("a",{href:e.linkedin,target:"_blank"},s.a.createElement("i",{className:"fa fa-linkedin"}))),s.a.createElement("li",null,s.a.createElement("a",{href:e.github,target:"_blank"},s.a.createElement("i",{className:"fa fa-github"})))))),s.a.createElement("p",{className:"scrolldown"},s.a.createElement("a",{className:"smoothscroll",href:"#about"},s.a.createElement("i",{className:"icon-down-circle"})))))}}]),a}(n.Component),p=t(6),h=t(7);function v(){var e=Object(p.a)(["\n  color: #fff;\n  font-style: inherit;\n"]);return v=function(){return e},e}function f(){var e=Object(p.a)(["\n    background-image: url('https://s3-us-west-1.amazonaws.com/myavatar/avatar.jpeg');\n    background-size: cover;\n    background-repeat: no-repeat;\n    border-radius: 100%;\n    height: 12.5em;\n    width: 12.5em;\n    @media only screen and (max-width: 767px) {\n      margin: 0 auto;\n    }\n"]);return f=function(){return e},e}var g=h.a.div(f()),b=h.a.address(v()),E=function(e){function a(){return Object(r.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return s.a.createElement(n.Fragment,null,s.a.createElement("section",{id:"about"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"three columns"},s.a.createElement(g,null)),s.a.createElement("div",{className:"nine columns main-col"},s.a.createElement("h2",null,"About Me"),s.a.createElement("p",null,e.about),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"columns contact-details"},s.a.createElement("h2",null,"Contact Details"),s.a.createElement(b,{className:"address"},s.a.createElement("span",null,e.name),s.a.createElement("br",null),s.a.createElement("span",null,e.address.city,", ",e.address.state),s.a.createElement("br",null),s.a.createElement("a",{href:"tel:+`${resumeData.contact.telephone}`"},e.contact.telephone)," ",s.a.createElement("br",null),s.a.createElement("a",{href:"mailto:${resumeData.contact.email}"},e.contact.email),s.a.createElement("br",null))),s.a.createElement("div",{className:"columns download"},s.a.createElement("p",null,s.a.createElement("a",{href:e.s3.avatar,download:!0,className:"button"},s.a.createElement("i",{className:"fa fa-download"}),"Download Resume"))))," ")," ")))}}]),a}(n.Component);function w(){var e=Object(p.a)(["\n  color: #313131;\n  font-size: 2em;\n"]);return w=function(){return e},e}function y(){var e=Object(p.a)(["\n  list-style: none;\n"]);return y=function(){return e},e}var N=h.a.ul(y()),k=(h.a.i(w()),function(e){function a(){return Object(r.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.resumeData,a=e.experience.map(function(e){return s.a.createElement(n.Fragment,null,s.a.createElement("div",{className:"row item"},s.a.createElement("div",{className:"twelve columns"},s.a.createElement("h3",null,e.company),s.a.createElement("p",{className:"info"},e.position," ",s.a.createElement("span",null,"\u2022")," ",s.a.createElement("em",{className:"date"},e.date)),s.a.createElement(N,null,e.achievments.map(function(e){return s.a.createElement("li",null,e)})))),s.a.createElement("hr",null))}),t=e.skills.map(function(e){return s.a.createElement("li",null,s.a.createElement("span",{className:e.className},s.a.createElement("em",null,e.skill)))}),l=e.workflows.map(function(e){return s.a.createElement("li",null,s.a.createElement("i",{class:"fa-li fa fa-check"}),e.item)});return s.a.createElement(n.Fragment,null,s.a.createElement("section",{id:"resume"},s.a.createElement("div",{className:"row education"},s.a.createElement("div",{className:"three columns header-col"},s.a.createElement("h1",null,s.a.createElement("span",null,"Education"))),s.a.createElement("div",{className:"nine columns main-col"},s.a.createElement("div",{className:"row item"},s.a.createElement("div",{className:"twelve columns"},s.a.createElement("h3",null,e.education.name,", ",s.a.createElement("i",null,e.education.location)),s.a.createElement("p",{className:"info"},e.education.studies," ",s.a.createElement("span",null,"\u2022")," ",s.a.createElement("em",{className:"date"},e.education.date)),s.a.createElement("p",null,e.education.about,s.a.createElement("a",{href:e.education.certification,target:"_blank"}," ",s.a.createElement("br",null),e.education.certificationName))))," ")," ")," ",s.a.createElement("div",{className:"row work"},s.a.createElement("div",{className:"three columns header-col"},s.a.createElement("h1",null,s.a.createElement("span",null,"Work"))),s.a.createElement("div",{className:"nine columns main-col"},a)," ")," ",s.a.createElement("div",{className:"row skill"},s.a.createElement("div",{className:"three columns header-col"},s.a.createElement("h1",null,s.a.createElement("span",null,"Skills"))),s.a.createElement("div",{className:"nine columns main-col"},s.a.createElement("div",{className:"bars"},s.a.createElement("ul",{className:"skills"},t)))," ",s.a.createElement("div",{className:"row"},s.a.createElement("div",{class:"three columns header-col"},s.a.createElement("h1",null,s.a.createElement("span",null,"Workflow"))),s.a.createElement("div",{class:"nine columns main-col"},s.a.createElement("ul",{class:"fa-ul mb-0"},l))))," ")," ")}}]),a}(n.Component)),_=function(e){function a(){return Object(r.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.resumeData.s3.portfolioitems.map(function(e){return s.a.createElement("div",{className:"columns portfolio-item"},s.a.createElement("div",{className:"item-wrap"},s.a.createElement("a",{href:e.url,target:"_blank"},s.a.createElement("img",{alt:e.credits,src:e.img}),s.a.createElement("div",{className:"overlay"},s.a.createElement("div",{className:"portfolio-item-meta"},s.a.createElement("h5",null,e.name),s.a.createElement("p",null,e.credits))),s.a.createElement("div",{className:"link-icon"},s.a.createElement("i",{className:"icon-plus"})))))});return s.a.createElement(n.Fragment,null,s.a.createElement("section",{id:"portfolio"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"twelve columns collapsed"},s.a.createElement("h1",null,"Check Out Some of My Work."),s.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf"},e)," ")," ")," ")," ")}}]),a}(n.Component),x=function(e){function a(){return Object(r.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return s.a.createElement(n.Fragment,null,s.a.createElement("footer",null,s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"twelve columns"},s.a.createElement("ul",{className:"social-links"},s.a.createElement("li",null,s.a.createElement("a",{href:e.linkedin,target:"_blank"},s.a.createElement("i",{className:"fa fa-linkedin"}))),s.a.createElement("li",null,s.a.createElement("a",{href:e.github,target:"_blank"},s.a.createElement("i",{className:"fa fa-github"}))))),s.a.createElement("div",{id:"go-top"},s.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},s.a.createElement("i",{className:"icon-up-open"})))))," ")}}]),a}(n.Component),j={imagebaseurl:"https://mattheweldredge.com",name:"Matthew Eldredge",role:"Frontend Developer",intro:"Technically sophisticated IT professional with expertise in creating clean, adaptive implementations for mobile and web applications.",about:"I am a technically sophisticated Front End Developer who excels at creating clean, readable, and testable software solutions to rapidly evolving business problems. I have a proven record of building, deploying, and maintaining complex web applications and architectures in a variety of platforms. Currently, my professional interests are specializing in JavaScript/Node with an emphasis on client-side development using React and Vue. I am experienced in custom WordPress theme development employing best practices and standards. I enjoy attending meet-ups and lectures to continue to grow my craft and connect with the community.",interests:"Apart from being a web developer, I enjoy most of my time being outdoors. Here in California, I enjoy biking, hiking, and swimming. When indoors, I follow a number of sci-fi and fantasy genre movies and television shows. My alter ego is a chef that plays in a rock and roll band, and I spend a large amount of my free time exploring the latest technology advancements in the front-end web development world.",address:{street:"4470 South Centinela Ave #201",city:"Los Angeles",state:"California",zip:"90066"},contact:{telephone:"(323)841-5673",email:"mattheweldredge@gmail.com"},education:{name:"Dev Mountain",location:"Phoenix, AZ",studies:"Web Development Immersive",date:"November 2017 - March 2018",about:"My time spent here was invaluable. I leveled up my JavaScript, React, and Node skills. But my biggest take away was learning how to teach myself more, faster.",certification:"https://www.youracclaim.com/badges/76de8c65-02fd-4232-9499-cc7385f9bdb7/linked_in_profile",certificationName:"Web Development Immersive Certification"},experience:[{company:"CreativEngine",position:"Front End Developer, Contractor ",date:"January 2019 - Present",achievments:["Built, shipped, and maintained websites for over 50 members of Congress, and House Committees. ","WIDSIX","Managed milestones from initial steps through final delivery."]},{company:"WIDSIX",position:"Front End Developer, Contractor ",date:"August 2018 - Present",achievments:["Build, update and maintain custom theme WordPress sites using best practices.","Programmed HTML5 canvases to animate particles on web backgrounds for site-wide promotions.","Managed milestones from initial steps through final delivery."]},{company:"Facility",position:"Front End Developer, Contractor ",date:"April 2017 - Present",achievments:["Build custom theme WordPress site using best practices. JavaScript, CSS3, HTML5.","Built FacilityPress, a baseline template, and methodology for company projects using the WP CMS.","Managed milestones from initial steps through final delivery."]},{company:"L'Ange Beauty",position:"Front End Developer, Contract ",date:"Oct 2018 - November 2018",achievments:["Build out responsive and dynamic landing pages for fall/holiday catalog on Shopify using Slate"]},{company:"MWCI",position:"Front End Developer",date:"January 2016 - March 2018",achievments:["Lead conversion of a high-traffic broadcast site from static HTML to Wordpress-based architecture. ","Implemented custom Drupal and Wordpress themes, utilizing a responsive, mobile-first approach. ","Updated and streamlined the front end of legacy applications to improve performance.","Built and maintained custom markup for client installations using HTML5, CSS3, and jQuery.","Transitioned and integrated a suite of life insurance websites from Sales Optima to SalesForce, and rebuilt and integrated all forms within SalesForce.","Reverse engineered a suite of websites to be identical to allow databases to be switched in and out of any one of them."]},{company:"Soundminer",position:"Front End Developer, Contractor through MWCI",date:"January 2016 - March 2017",achievments:["Perform client installations, upgrades, and support, and manage and maintain client installations and business applications hosted at Soundminer's data center.","Serve on a global team to improve and maintained a web-based version of the native application.","Implement customized themes to match client branding standards, and execute ad hoc requests.","Built a series of search-aid widgets using PHP, JavaScript, and MooTools."]}],skills:[{skill:"JavaScript",className:"bar-expand eighty",devicon:"devicon-javascript-plain"},{skill:"jQuery",className:"bar-expand eighty",devicon:"devicon-jquery-plain"},{skill:"React",className:"bar-expand seventy",devicon:"devicon-react-original"},{skill:"Redux",className:"bar-expand fifty",devicon:""},{skill:"Vue",className:"bar-expand thirty",devicon:"devicon-vuejs-plain"},{skill:"NodeJS",className:"bar-expand fifty",devicon:"devicon-nodejs-plain"},{skill:"Express",className:"bar-expand fifty",devicon:"devicon-express-original"},{skill:"Meteor",className:"bar-expand thirty",devicon:"devicon-meteor-plain"},{skill:"Html5",className:"bar-expand hundred",devicon:"devicon-html5-plain"},{skill:"CSS3",className:"bar-expand hundred",devicon:"devicon-css3-plain"},{skill:"SASS",className:"bar-expand ninety",devicon:"devicon-sass-original"},{skill:"WordPress",className:"bar-expand ninety",devicon:"devicon-wordpress-plain"},{skill:"PHP",className:"bar-expand fifty",devicon:"devicon-php-plain"},{skill:"Shopify",className:"bar-expand fifty",devicon:""},{skill:"Liquid",className:"bar-expand fifty",devicon:""},{skill:"NPM",className:"bar-expand ninety",devicon:""},{skill:"PostgreSQL",className:"bar-expand seventy",devicon:"devicon-postgresql-plain"},{skill:"GIT",className:"bar-expand ninety",devicon:"devicon-git-plain"},{skill:"GitHub",className:"bar-expand ninety",devicon:"devicon-github-plain"},{skill:"BitBucket",className:"bar-expand seventy",devicon:"devicon-webpack-plain"},{skill:"Webpack",className:"bar-expand seventy",devicon:"devicon-webpack-plain"},{skill:"Babel",className:"bar-expand seventy",devicon:"devicon-babel-plain"},{skill:"Gulp",className:"bar-expand seventy",devicon:"devicon-gulp-plain"},{skill:"grunt",className:"bar-expand seventy",devicon:"devicon-grunt-plain"},{skill:"ParcelJS",className:"bar-expand seventy",devicon:""},{skill:"PhotoShop",className:"bar-expand seventy",devicon:"devicon-photoshop-plain"},{skill:"Sketch",className:"bar-expand seventy",devicon:""}],workflows:[{item:"Mobile-First, Responsive Design"},{item:"Cross Browser Testing & Debugging"},{item:"Cross Functional Teams"},{item:"Agile Development & Scrum"}],s3:{avatar:"https://s3-us-west-1.amazonaws.com/myavatar/avatar.jpeg","background-image":"https://s3-us-west-1.amazonaws.com/myavatar/header-background.jpg",portfolioitems:[{name:"North & Co.",credits:"Widsix",creditURL:"https://widsix.com/",img:"https://myavatar.s3-us-west-1.amazonaws.com/North_Co__Real_Estate_by_Trade.png",url:"https://northandco.com/"},{name:"RLS Mortgage",credits:"Widsix",creditURL:"https://widsix.com/",img:"https://myavatar.s3-us-west-1.amazonaws.com/RLS_Mortgage_%E2%80%93_Hard_Money_Lending___Arizona.png",url:"https://rlsmortgage.com/"},{name:"The House Of Emme",credits:"Widsix",creditURL:"https://widsix.com/",img:"https://myavatar.s3-us-west-1.amazonaws.com/Allison_Mikes_%E2%80%93_Welcome_to_our_new_site.png",url:"https://thehouseofemme.com/"},{name:"Knighthead Funding",credits:"Facility",creditURL:"http://facilitydesignco.com",img:"https://s3-us-west-1.amazonaws.com/myavatar/Commercial_Real_Estate_Lending_Nationwide_-_Knighthead_Funding__LLC.png",url:"https://www.knightheadfunding.com/"},{name:"Example",credits:"Psd provided by Zehner Group",creditURL:"https://juice-served-here.now.sh/",img:"https://s3-us-west-1.amazonaws.com/myavatar/Juice_Served_Here.png",url:"https://juice-served-here.now.sh/"},{name:"Warner Chappell Music",credits:"MWCI",creditURL:"",img:"https://s3-us-west-1.amazonaws.com/myavatar/Warner_Chappell_Production_Music_%E2%80%A2_Creating_Outstanding_Production_Music_Catalogs__News_Music_and_Custom_Music_Scores_for_Over_35_Years_.png",url:"http://www.warnerchappellpm.com/"},{name:"Senator Chris Coons",credits:"CreativeEngine",creditURL:"https://www.creativengine.com/",img:"https://s3-us-west-1.amazonaws.com/myavatar/Home___U_S__Senator_Christopher_Coons_of_Delaware.png",url:"https://www.coons.senate.gov/"},{name:"Senator Gary Peters",credits:"CreativeEngine",creditURL:"https://www.creativengine.com/",img:"https://s3-us-west-1.amazonaws.com/myavatar/Home___U_S__Senator_Gary_Peters_of_Michigan.png",url:"https://www.peters.senate.gov/"},{name:"Instant Quote Life Insurance",credits:"MWCI",creditURL:"",img:"https://s3-us-west-1.amazonaws.com/myavatar/Instant_Life_Insurance_Quotes_Without_Personal_Information.png",url:"https://www.instantquotelifeinsurance.com/"},{name:"WoofWalks",credits:"Personal Project",creditURL:"mattheweldredge.com",img:"https://s3-us-west-1.amazonaws.com/myavatar/WoofWalks.png",url:"https://woofwalks.now.sh"}],resume:"https://s3-us-west-1.amazonaws.com/myavatar/resume.pdf"},linkedin:"https://linkedin.com/in/meldredge/",github:"https://github.com/tcb1978"},S=function(e){function a(){return Object(r.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(u,{resumeData:j}),s.a.createElement(E,{resumeData:j}),s.a.createElement(k,{resumeData:j}),s.a.createElement(_,{resumeData:j}),s.a.createElement(x,{resumeData:j}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[16,2,1]]]);
//# sourceMappingURL=main.7318b961.chunk.js.map
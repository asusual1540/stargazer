(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],[,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/location.36195e2d.svg"},,,,,function(e,a,t){e.exports=t.p+"static/media/planet-1.100c77a8.png"},function(e,a,t){e.exports=t.p+"static/media/back_arrow.9376f10e.svg"},,,function(e,a,t){e.exports=t.p+"static/media/logo.d3565bc1.svg"},function(e,a,t){e.exports=t.p+"static/media/youtube.b916bca0.svg"},,,,function(e,a,t){e.exports=t.p+"static/media/select_arrow.8fcb71e6.svg"},function(e,a,t){e.exports=t.p+"static/media/gallery_1.07891d03.png"},function(e,a,t){e.exports=t.p+"static/media/gallery_2.e6375173.png"},function(e,a,t){e.exports=t.p+"static/media/gallery_3.3d3364a9.png"},,,,function(e,a,t){e.exports=t.p+"static/media/planets.5961adac.png"},,function(e,a,t){e.exports=t.p+"static/media/calendar.40709d68.svg"},function(e,a,t){e.exports=t.p+"static/media/about_pl.07321f6b.png"},function(e,a,t){e.exports=t.p+"static/media/fb_full.7f90c2dc.svg"},function(e,a,t){e.exports=t.p+"static/media/facebook.1db09742.svg"},function(e,a,t){e.exports=t.p+"static/media/twitter.77461980.svg"},function(e,a,t){e.exports=t.p+"static/media/soundcloud.c3bbb772.svg"},function(e,a,t){e.exports=t.p+"static/media/volume.6ac3d895.svg"},function(e,a,t){e.exports=t(60)},,,,,function(e,a,t){},function(e,a,t){},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),c=t(28),s=t.n(c),r=t(12),d=t(9),m=Object(d.a)(),i=(t(43),t(1)),o=t(2),_=t(3),E=t(5),u=t(4),v=t(6),p=t(17),y=t.n(p),b=t(29),N=t.n(b),g=(t(44),function(e){function a(){return Object(o.a)(this,a),Object(E.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(v.a)(a,e),Object(_.a)(a,[{key:"render",value:function(){return n.a.createElement(l.Fragment,null,n.a.createElement("div",{className:"main-container"},n.a.createElement("img",{src:y.a,alt:"logo"}),n.a.createElement("div",{className:"main-buttons"},n.a.createElement(r.b,{to:"/events"},n.a.createElement("h4",null,"EVENTS")),n.a.createElement("div",null),n.a.createElement(r.b,{to:"/gallery"},n.a.createElement("h4",null,"GALLERY")),n.a.createElement("div",null),n.a.createElement(r.b,{to:"/clients"},n.a.createElement("h4",null,"CLIENTS")),n.a.createElement("div",null),n.a.createElement(r.b,{to:"/about"},n.a.createElement("h4",null,"ABOUT")),n.a.createElement("div",null),n.a.createElement(r.b,{to:"/contact"},n.a.createElement("h4",null,"CONTACT")),n.a.createElement("div",null))),n.a.createElement("img",{src:N.a,className:"planets",alt:"planets"}))}}]),a}(l.Component)),h=t(14),k=t.n(h),f=(t(50),function(e){var a=e.route;return n.a.createElement("div",{className:"back"},n.a.createElement(r.b,{to:a},n.a.createElement("div",{className:"box"},n.a.createElement("img",{className:"box_icon",src:k.a,alt:"back"}),n.a.createElement("h3",{className:"box_text"},"Back To Universe"))),n.a.createElement("div",null))}),x=t(22),w=t.n(x),O=(t(51),function(e){function a(){var e,t;Object(o.a)(this,a);for(var l=arguments.length,n=new Array(l),c=0;c<l;c++)n[c]=arguments[c];return(t=Object(E.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(n)))).state={status:!1},t.handleToggle=function(){var e=t.state.status;t.setState({status:!e})},t.handleSelect=function(e,a){t.setState({status:!1}),t.props.do_select(e,a)},t}return Object(v.a)(a,e),Object(_.a)(a,[{key:"render",value:function(){var e=this,a=this.props,t=a.data,l=a.selected,c=a.title,s=this.state.status;return n.a.createElement("div",{onClick:this.handleToggle,className:"select"},n.a.createElement("div",{className:"select_box"},t&&null!==l?n.a.createElement("p",{className:"select_box_title"},t[l]):n.a.createElement("p",{className:"select_box_title"},c),n.a.createElement("div",{className:"select_box_icon"},s?n.a.createElement("img",{className:"select_box_icon_up",src:w.a,alt:"down"}):n.a.createElement("img",{className:"select_box_icon_down",src:w.a,alt:"down"}))),s&&n.a.createElement("div",{className:"select_options"},t&&t.map((function(a,t){return n.a.createElement("div",{onClick:function(){return e.handleSelect(a,t)},key:t,className:"select_options_opt"},n.a.createElement("p",{className:"select_options_opt_title"},a),n.a.createElement("div",null))}))))}}]),a}(l.Component)),L=t(31),C=t.n(L),j=(t(52),function(e){function a(){var e,t;Object(o.a)(this,a);for(var l=arguments.length,n=new Array(l),c=0;c<l;c++)n[c]=arguments[c];return(t=Object(E.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(n)))).state={status:!1},t.handleToggle=function(){var e=t.state.status;t.setState({status:!e})},t.handleSelect=function(e,a){t.setState({status:!1}),t.props.do_select(e,a)},t}return Object(v.a)(a,e),Object(_.a)(a,[{key:"render",value:function(){var e=this.state.status;return n.a.createElement("div",{className:"datepicker-container","data-dropdown-content":"true"},n.a.createElement("div",{className:"datepicker-input-container"},n.a.createElement("div",{className:"form-group"},n.a.createElement("div",{onClick:this.handleToggle,className:"controls-text"},n.a.createElement("img",{src:C.a,alt:"calender"}),n.a.createElement("input",{type:"text",className:"ignore-react-onclickoutside",id:"datepicker",value:"Custom Date",name:""})))),e&&n.a.createElement("div",{className:"datepicker-popup"},n.a.createElement("div",{className:"datepicker-header"},n.a.createElement("p",{className:"datepicker-navigation datepicker-navigation-previous"}),n.a.createElement("div",{className:"datepicker-current-month",tabindex:"0"},"2020 February"),n.a.createElement("p",{className:"datepicker-navigation datepicker-navigation-next"}),n.a.createElement("div",{className:"datepicker-week-header"},n.a.createElement("div",{className:"datepicker-day"},"Mo"),n.a.createElement("div",{className:"datepicker-day"},"Tu"),n.a.createElement("div",{className:"datepicker-day"},"We"),n.a.createElement("div",{className:"datepicker-day"},"Th"),n.a.createElement("div",{className:"datepicker-day"},"Fr"),n.a.createElement("div",{className:"datepicker-day"},"Sa"),n.a.createElement("div",{className:"datepicker-day"},"Su"))),n.a.createElement("div",{className:"datepicker-month"},n.a.createElement("div",{className:"datepicker-week"},n.a.createElement("div",{className:"datepicker-day datepicker-day-disabled datepicker-day-outside-month"},"25"),n.a.createElement("div",{className:"datepicker-day datepicker-day-disabled datepicker-day-outside-month"},"26"),n.a.createElement("div",{className:"datepicker-day datepicker-day-disabled datepicker-day-outside-month"},"27"),n.a.createElement("div",{className:"datepicker-day datepicker-day-disabled datepicker-day-outside-month"},"28"),n.a.createElement("div",{className:"datepicker-day datepicker-day-disabled datepicker-day-outside-month"},"29"),n.a.createElement("div",{className:"datepicker-day datepicker-day-disabled datepicker-day-weekend datepicker-day-outside-month"},"30"),n.a.createElement("div",{className:"datepicker-day datepicker-day-disabled datepicker-day-weekend"},"1")),n.a.createElement("div",{className:"datepicker-week"},n.a.createElement("div",{className:"datepicker-day datepicker-day-disabled"},"2"),n.a.createElement("div",{className:"datepicker-day datepicker-day-disabled datepicker-day-today"},"3"),n.a.createElement("div",{className:"datepicker-day datepicker-day-disabled"},"4"),n.a.createElement("div",{className:"datepicker-day datepicker-day-disabled"},"5"),n.a.createElement("div",{className:"datepicker-day datepicker-day-disabled"},"6"),n.a.createElement("div",{className:"datepicker-day datepicker-day-disabled datepicker-day-weekend"},"7"),n.a.createElement("div",{className:"datepicker-day datepicker-day-disabled datepicker-day-weekend"},"8")),n.a.createElement("div",{className:"datepicker-week"},n.a.createElement("div",{className:"datepicker-day datepicker-day-disabled"},"9"),n.a.createElement("div",{className:"datepicker-day datepicker-day-disabled"},"10"),n.a.createElement("div",{className:"datepicker-day datepicker-day-disabled"},"11"),n.a.createElement("div",{className:"datepicker-day datepicker-day-disabled"},"12"),n.a.createElement("div",{className:"datepicker-day datepicker-day-disabled"},"13"),n.a.createElement("div",{className:"datepicker-day datepicker-day-disabled datepicker-day-weekend"},"14"),n.a.createElement("div",{className:"datepicker-day datepicker-day-disabled datepicker-day-weekend"},"15")),n.a.createElement("div",{className:"datepicker-week"},n.a.createElement("div",{className:"datepicker-day datepicker-day-disabled"},"16"),n.a.createElement("div",{className:"datepicker-day datepicker-day-disabled"},"17"),n.a.createElement("div",{className:"datepicker-day datepicker-day-disabled"},"18"),n.a.createElement("div",{className:"datepicker-day datepicker-day-disabled"},"19"),n.a.createElement("div",{className:"datepicker-day datepicker-day-disabled"},"20"),n.a.createElement("div",{className:"datepicker-day datepicker-day-selected datepicker-day-weekend"},"21"),n.a.createElement("div",{className:"datepicker-day datepicker-day-disabled datepicker-day-weekend"},"22")),n.a.createElement("div",{className:"datepicker-week"},n.a.createElement("div",{className:"datepicker-day datepicker-day-disabled"},"23"),n.a.createElement("div",{className:"datepicker-day datepicker-day-disabled"},"24"),n.a.createElement("div",{className:"datepicker-day datepicker-day-disabled"},"25"),n.a.createElement("div",{className:"datepicker-day datepicker-day-disabled"},"26"),n.a.createElement("div",{className:"datepicker-day datepicker-day-disabled"},"27"),n.a.createElement("div",{className:"datepicker-day datepicker-day-weekend"},"28"),n.a.createElement("div",{className:"datepicker-day datepicker-day-disabled datepicker-day-weekend"},"29")),n.a.createElement("div",{className:"datepicker-week"},n.a.createElement("div",{className:"datepicker-day datepicker-day-disabled"},"30"),n.a.createElement("div",{className:"datepicker-day datepicker-day-disabled"},"31"),n.a.createElement("div",{className:"datepicker-day datepicker-day-outside-month"},"1"),n.a.createElement("div",{className:"datepicker-day datepicker-day-disabled datepicker-day-outside-month"},"2"),n.a.createElement("div",{className:"datepicker-day datepicker-day-disabled datepicker-day-outside-month"},"3"),n.a.createElement("div",{className:"datepicker-day datepicker-day-disabled datepicker-day-weekend datepicker-day-outside-month"},"4"),n.a.createElement("div",{className:"datepicker-day datepicker-day-disabled datepicker-day-weekend datepicker-day-outside-month"},"5")))))}}]),a}(l.Component)),T=t(8),I=t.n(T),S=t(13),M=t.n(S),D=(t(53),function(e){function a(){var e,t;Object(o.a)(this,a);for(var l=arguments.length,n=new Array(l),c=0;c<l;c++)n[c]=arguments[c];return(t=Object(E.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(n)))).state={event_type:["Concert Tours","Music Festivals","Jazz Events","Television Specials"],selected:null,trans_x:0},t.do_select=function(e,a){t.setState({selected:a})},t.go_left=function(){var e=t.state.trans_x;e<0&&(e+=400,t.setState({trans_x:e}))},t.go_right=function(){var e=t.state.trans_x;e>-2200&&(e-=400,t.setState({trans_x:e}))},t}return Object(v.a)(a,e),Object(_.a)(a,[{key:"render",value:function(){var e=this.state,a=e.event_type,t=e.selected,l=e.trans_x;return n.a.createElement("div",{className:"event"},n.a.createElement("div",{className:"event_head"},n.a.createElement(f,{route:"/"}),n.a.createElement("div",{className:"event_head_controls"},n.a.createElement(O,{title:"EVENT TYPES",do_select:this.do_select,data:a,selected:t}),n.a.createElement(j,null))),n.a.createElement("div",{className:"event_title"},n.a.createElement("div",null,n.a.createElement("p",{className:"event_title_t"},"RECENT EVENTS"),n.a.createElement("p",{className:"event_title_desc"},"Many desktop publishing packages and web page editors now"))),n.a.createElement("div",{className:"event_body"},n.a.createElement("div",{className:"event_body_top"},n.a.createElement("div",null),n.a.createElement("div",{className:"event_body_top_actions"},n.a.createElement("img",{onClick:this.go_left,src:k.a,alt:"backward"}),n.a.createElement("img",{onClick:this.go_right,className:"event_body_top_actions_forward",src:k.a,alt:"forward"}))),n.a.createElement("div",{className:"event_body_elements"},n.a.createElement("div",{style:{transform:"translateX(".concat(l,"px)")},className:"event_body_elements_el"},n.a.createElement("div",{className:"event_body_elements_el_details"},n.a.createElement("div",{className:"event_body_elements_el_details_header"},n.a.createElement("div",{className:"event_body_elements_el_details_header_upcoming"},"UPCOMING EVENT"),n.a.createElement("div",{className:"event_body_elements_el_details_header_date"},n.a.createElement("h3",null,"26 ",n.a.createElement("span",null,"November")),n.a.createElement("h2",null,"MULTI DAY EVENT"))),n.a.createElement("div",{className:"event_body_elements_el_details_body"},n.a.createElement("p",{className:"event_body_elements_el_details_body_desc"},"Page editors now use Lorem Ipsum as their default model text. Page editors now use Lorem Ipsum as their default model text")),n.a.createElement("div",{className:"event_body_elements_el_details_footer"},n.a.createElement("div",{className:"event_body_elements_el_details_footer_icon"},n.a.createElement("img",{src:I.a,alt:"location"})),n.a.createElement("p",null,"Dhaka, Bangladesh"))),n.a.createElement("img",{className:"event_body_elements_el_img",src:M.a,alt:"planet"})),n.a.createElement("div",{style:{transform:"translateX(".concat(l,"px)")},className:"event_body_elements_el"},n.a.createElement("div",{style:{backgroundColor:"rgba(255, 255, 255, .07)"},className:"event_body_elements_el_details"},n.a.createElement("div",{className:"event_body_elements_el_details_header"},n.a.createElement("div",null),n.a.createElement("div",{className:"event_body_elements_el_details_header_date"},n.a.createElement("h3",null,"26 ",n.a.createElement("span",null,"November")),n.a.createElement("h2",null,"MULTI DAY EVENT"))),n.a.createElement("div",{className:"event_body_elements_el_details_body"},n.a.createElement("p",{className:"event_body_elements_el_details_body_desc"},"Page editors now use Lorem Ipsum as their default model text. Page editors now use Lorem Ipsum as their default model text")),n.a.createElement("div",{className:"event_body_elements_el_details_footer"},n.a.createElement("div",{className:"event_body_elements_el_details_footer_icon"},n.a.createElement("img",{src:I.a,alt:"location"})),n.a.createElement("p",null,"Dhaka, Bangladesh"))),n.a.createElement("img",{className:"event_body_elements_el_img",src:M.a,alt:"planet"})),n.a.createElement("div",{style:{transform:"translateX(".concat(l,"px)")},className:"event_body_elements_el"},n.a.createElement("div",{style:{backgroundColor:"rgba(255, 255, 255, .07)"},className:"event_body_elements_el_details"},n.a.createElement("div",{className:"event_body_elements_el_details_header"},n.a.createElement("div",null),n.a.createElement("div",{className:"event_body_elements_el_details_header_date"},n.a.createElement("h3",null,"26 ",n.a.createElement("span",null,"November")),n.a.createElement("h2",null,"MULTI DAY EVENT"))),n.a.createElement("div",{className:"event_body_elements_el_details_body"},n.a.createElement("p",{className:"event_body_elements_el_details_body_desc"},"Page editors now use Lorem Ipsum as their default model text. Page editors now use Lorem Ipsum as their default model text")),n.a.createElement("div",{className:"event_body_elements_el_details_footer"},n.a.createElement("div",{className:"event_body_elements_el_details_footer_icon"},n.a.createElement("img",{src:I.a,alt:"location"})),n.a.createElement("p",null,"Dhaka, Bangladesh"))),n.a.createElement("img",{className:"event_body_elements_el_img",src:M.a,alt:"planet"})),n.a.createElement("div",{style:{transform:"translateX(".concat(l,"px)")},className:"event_body_elements_el"},n.a.createElement("div",{style:{backgroundColor:"rgba(255, 255, 255, .07)"},className:"event_body_elements_el_details"},n.a.createElement("div",{className:"event_body_elements_el_details_header"},n.a.createElement("div",null),n.a.createElement("div",{className:"event_body_elements_el_details_header_date"},n.a.createElement("h3",null,"26 ",n.a.createElement("span",null,"November")),n.a.createElement("h2",null,"MULTI DAY EVENT"))),n.a.createElement("div",{className:"event_body_elements_el_details_body"},n.a.createElement("p",{className:"event_body_elements_el_details_body_desc"},"Page editors now use Lorem Ipsum as their default model text. Page editors now use Lorem Ipsum as their default model text")),n.a.createElement("div",{className:"event_body_elements_el_details_footer"},n.a.createElement("div",{className:"event_body_elements_el_details_footer_icon"},n.a.createElement("img",{src:I.a,alt:"location"})),n.a.createElement("p",null,"Dhaka, Bangladesh"))),n.a.createElement("img",{className:"event_body_elements_el_img",src:M.a,alt:"planet"})),n.a.createElement("div",{style:{transform:"translateX(".concat(l,"px)")},className:"event_body_elements_el"},n.a.createElement("div",{style:{backgroundColor:"rgba(255, 255, 255, .07)"},className:"event_body_elements_el_details"},n.a.createElement("div",{className:"event_body_elements_el_details_header"},n.a.createElement("div",null),n.a.createElement("div",{className:"event_body_elements_el_details_header_date"},n.a.createElement("h3",null,"26 ",n.a.createElement("span",null,"November")),n.a.createElement("h2",null,"MULTI DAY EVENT"))),n.a.createElement("div",{className:"event_body_elements_el_details_body"},n.a.createElement("p",{className:"event_body_elements_el_details_body_desc"},"Page editors now use Lorem Ipsum as their default model text. Page editors now use Lorem Ipsum as their default model text")),n.a.createElement("div",{className:"event_body_elements_el_details_footer"},n.a.createElement("div",{className:"event_body_elements_el_details_footer_icon"},n.a.createElement("img",{src:I.a,alt:"location"})),n.a.createElement("p",null,"Dhaka, Bangladesh"))),n.a.createElement("img",{className:"event_body_elements_el_img",src:M.a,alt:"planet"})),n.a.createElement("div",{style:{transform:"translateX(".concat(l,"px)")},className:"event_body_elements_el"},n.a.createElement("div",{style:{backgroundColor:"rgba(255, 255, 255, .07)"},className:"event_body_elements_el_details"},n.a.createElement("div",{className:"event_body_elements_el_details_header"},n.a.createElement("div",null),n.a.createElement("div",{className:"event_body_elements_el_details_header_date"},n.a.createElement("h3",null,"26 ",n.a.createElement("span",null,"November")),n.a.createElement("h2",null,"MULTI DAY EVENT"))),n.a.createElement("div",{className:"event_body_elements_el_details_body"},n.a.createElement("p",{className:"event_body_elements_el_details_body_desc"},"Page editors now use Lorem Ipsum as their default model text. Page editors now use Lorem Ipsum as their default model text")),n.a.createElement("div",{className:"event_body_elements_el_details_footer"},n.a.createElement("div",{className:"event_body_elements_el_details_footer_icon"},n.a.createElement("img",{src:I.a,alt:"location"})),n.a.createElement("p",null,"Dhaka, Bangladesh"))),n.a.createElement("img",{className:"event_body_elements_el_img",src:M.a,alt:"planet"})),n.a.createElement("div",{style:{transform:"translateX(".concat(l,"px)")},className:"event_body_elements_el"},n.a.createElement("div",{style:{backgroundColor:"rgba(255, 255, 255, .07)"},className:"event_body_elements_el_details"},n.a.createElement("div",{className:"event_body_elements_el_details_header"},n.a.createElement("div",null),n.a.createElement("div",{className:"event_body_elements_el_details_header_date"},n.a.createElement("h3",null,"26 ",n.a.createElement("span",null,"November")),n.a.createElement("h2",null,"MULTI DAY EVENT"))),n.a.createElement("div",{className:"event_body_elements_el_details_body"},n.a.createElement("p",{className:"event_body_elements_el_details_body_desc"},"Page editors now use Lorem Ipsum as their default model text. Page editors now use Lorem Ipsum as their default model text")),n.a.createElement("div",{className:"event_body_elements_el_details_footer"},n.a.createElement("div",{className:"event_body_elements_el_details_footer_icon"},n.a.createElement("img",{src:I.a,alt:"location"})),n.a.createElement("p",null,"Dhaka, Bangladesh"))),n.a.createElement("img",{className:"event_body_elements_el_img",src:M.a,alt:"planet"})),n.a.createElement("div",{style:{transform:"translateX(".concat(l,"px)")},className:"event_body_elements_el"},n.a.createElement("div",{style:{backgroundColor:"rgba(255, 255, 255, .07)"},className:"event_body_elements_el_details"},n.a.createElement("div",{className:"event_body_elements_el_details_header"},n.a.createElement("div",null),n.a.createElement("div",{className:"event_body_elements_el_details_header_date"},n.a.createElement("h3",null,"26 ",n.a.createElement("span",null,"November")),n.a.createElement("h2",null,"MULTI DAY EVENT"))),n.a.createElement("div",{className:"event_body_elements_el_details_body"},n.a.createElement("p",{className:"event_body_elements_el_details_body_desc"},"Page editors now use Lorem Ipsum as their default model text. Page editors now use Lorem Ipsum as their default model text")),n.a.createElement("div",{className:"event_body_elements_el_details_footer"},n.a.createElement("div",{className:"event_body_elements_el_details_footer_icon"},n.a.createElement("img",{src:I.a,alt:"location"})),n.a.createElement("p",null,"Dhaka, Bangladesh"))),n.a.createElement("img",{className:"event_body_elements_el_img",src:M.a,alt:"planet"})),n.a.createElement("div",{style:{transform:"translateX(".concat(l,"px)")},className:"event_body_elements_el"},n.a.createElement("div",{style:{backgroundColor:"rgba(255, 255, 255, .07)"},className:"event_body_elements_el_details"},n.a.createElement("div",{className:"event_body_elements_el_details_header"},n.a.createElement("div",null),n.a.createElement("div",{className:"event_body_elements_el_details_header_date"},n.a.createElement("h3",null,"26 ",n.a.createElement("span",null,"November")),n.a.createElement("h2",null,"MULTI DAY EVENT"))),n.a.createElement("div",{className:"event_body_elements_el_details_body"},n.a.createElement("p",{className:"event_body_elements_el_details_body_desc"},"Page editors now use Lorem Ipsum as their default model text. Page editors now use Lorem Ipsum as their default model text")),n.a.createElement("div",{className:"event_body_elements_el_details_footer"},n.a.createElement("div",{className:"event_body_elements_el_details_footer_icon"},n.a.createElement("img",{src:I.a,alt:"location"})),n.a.createElement("p",null,"Dhaka, Bangladesh"))),n.a.createElement("img",{className:"event_body_elements_el_img",src:M.a,alt:"planet"})),n.a.createElement("div",{style:{transform:"translateX(".concat(l,"px)")},className:"event_body_elements_el"},n.a.createElement("div",{style:{backgroundColor:"rgba(255, 255, 255, .07)"},className:"event_body_elements_el_details"},n.a.createElement("div",{className:"event_body_elements_el_details_header"},n.a.createElement("div",null),n.a.createElement("div",{className:"event_body_elements_el_details_header_date"},n.a.createElement("h3",null,"26 ",n.a.createElement("span",null,"November")),n.a.createElement("h2",null,"MULTI DAY EVENT"))),n.a.createElement("div",{className:"event_body_elements_el_details_body"},n.a.createElement("p",{className:"event_body_elements_el_details_body_desc"},"Page editors now use Lorem Ipsum as their default model text. Page editors now use Lorem Ipsum as their default model text")),n.a.createElement("div",{className:"event_body_elements_el_details_footer"},n.a.createElement("div",{className:"event_body_elements_el_details_footer_icon"},n.a.createElement("img",{src:I.a,alt:"location"})),n.a.createElement("p",null,"Dhaka, Bangladesh"))),n.a.createElement("img",{className:"event_body_elements_el_img",src:M.a,alt:"planet"})))))}}]),a}(l.Component)),P=t(23),A=t.n(P),V=t(24),B=t.n(V),U=t(25),Y=t.n(U),R=(t(54),function(e){function a(){var e,t;Object(o.a)(this,a);for(var l=arguments.length,n=new Array(l),c=0;c<l;c++)n[c]=arguments[c];return(t=Object(E.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(n)))).state={event_type:["Concert Tours","Music Festivals","Jazz Events","Television Specials"],selected:null,trans_x:0},t.do_select=function(e,a){t.setState({selected:a})},t.go_left=function(){var e=t.state.trans_x;e<0&&(e+=520,t.setState({trans_x:e}))},t.go_right=function(){var e=t.state.trans_x;e>-1560&&(e-=520,t.setState({trans_x:e}))},t}return Object(v.a)(a,e),Object(_.a)(a,[{key:"render",value:function(){var e=this.state,a=e.event_type,t=e.selected,c=e.trans_x;return n.a.createElement(l.Fragment,null,n.a.createElement("div",{className:"gallery_back"},n.a.createElement(f,{route:"/"})),n.a.createElement("div",{className:"gallery_selector"},n.a.createElement(O,{title:"EVENT TYPES",do_select:this.do_select,data:a,selected:t})),n.a.createElement("div",{className:"gallery_bottom_arrows"},n.a.createElement("div",{onClick:this.go_left,className:"gallery_left"},n.a.createElement("img",{src:k.a,alt:"back"}),n.a.createElement("p",null,"PREVIOUS")),n.a.createElement("div",{onClick:this.go_right,className:"gallery_right"},n.a.createElement("p",null,"NEXT"),n.a.createElement("img",{src:k.a,alt:"back"}))),n.a.createElement("div",{style:{transform:"translateX(".concat(c,"px)")},className:"gallery"},n.a.createElement("div",{className:"gallery_box"},n.a.createElement("div",{className:"gallery_desc"},n.a.createElement("h2",null,"Kelowna Concert and Live Music Events"),n.a.createElement("div",{className:"gallery_desc_icon"},n.a.createElement("div",{className:"gallery_desc_icon_body"},n.a.createElement("img",{className:"gallery_desc_icon_body_img",src:I.a,alt:"location"}),n.a.createElement("p",null,"Dhaka, Bangladesh")))),n.a.createElement("img",{src:A.a,alt:"gallery-1"})),n.a.createElement("div",{className:"gallery_box"},n.a.createElement("div",{className:"gallery_desc"},n.a.createElement("h2",null,"Kelowna Concert and Live Music Events"),n.a.createElement("div",{className:"gallery_desc_icon"},n.a.createElement("div",{className:"gallery_desc_icon_body"},n.a.createElement("img",{className:"gallery_desc_icon_body_img",src:I.a,alt:"location"}),n.a.createElement("p",null,"Dhaka, Bangladesh")))),n.a.createElement("img",{src:B.a,alt:"gallery-2"})),n.a.createElement("div",{className:"gallery_box"},n.a.createElement("div",{className:"gallery_desc"},n.a.createElement("h2",null,"Kelowna Concert and Live Music Events"),n.a.createElement("div",{className:"gallery_desc_icon"},n.a.createElement("div",{className:"gallery_desc_icon_body"},n.a.createElement("img",{className:"gallery_desc_icon_body_img",src:I.a,alt:"location"}),n.a.createElement("p",null,"Dhaka, Bangladesh")))),n.a.createElement("img",{src:Y.a,alt:"gallery-3"})),n.a.createElement("div",{className:"gallery_box"},n.a.createElement("div",{className:"gallery_desc"},n.a.createElement("h2",null,"Kelowna Concert and Live Music Events"),n.a.createElement("div",{className:"gallery_desc_icon"},n.a.createElement("div",{className:"gallery_desc_icon_body"},n.a.createElement("img",{className:"gallery_desc_icon_body_img",src:I.a,alt:"location"}),n.a.createElement("p",null,"Dhaka, Bangladesh")))),n.a.createElement("img",{src:A.a,alt:"gallery-1"})),n.a.createElement("div",{className:"gallery_box"},n.a.createElement("div",{className:"gallery_desc"},n.a.createElement("h2",null,"Kelowna Concert and Live Music Events"),n.a.createElement("div",{className:"gallery_desc_icon"},n.a.createElement("div",{className:"gallery_desc_icon_body"},n.a.createElement("img",{className:"gallery_desc_icon_body_img",src:I.a,alt:"location"}),n.a.createElement("p",null,"Dhaka, Bangladesh")))),n.a.createElement("img",{src:B.a,alt:"gallery-2"})),n.a.createElement("div",{className:"gallery_box"},n.a.createElement("div",{className:"gallery_desc"},n.a.createElement("h2",null,"Kelowna Concert and Live Music Events"),n.a.createElement("div",{className:"gallery_desc_icon"},n.a.createElement("div",{className:"gallery_desc_icon_body"},n.a.createElement("img",{className:"gallery_desc_icon_body_img",src:I.a,alt:"location"}),n.a.createElement("p",null,"Dhaka, Bangladesh")))),n.a.createElement("img",{src:Y.a,alt:"gallery-3"}))))}}]),a}(l.Component)),X=(t(55),function(e){function a(){return Object(o.a)(this,a),Object(E.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(v.a)(a,e),Object(_.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"clients"},n.a.createElement("div",{className:"clients_back"},n.a.createElement(f,{route:"/"})),n.a.createElement("div",{className:"clients_all"},n.a.createElement("h2",null,"Our Clients"),n.a.createElement("p",null,"Many desktop publishing packages and web page editors now")))}}]),a}(l.Component)),F=t(32),K=t.n(F),z=t(33),H=t.n(z),W=t(18),G=t.n(W),J=(t(56),function(e){function a(){return Object(o.a)(this,a),Object(E.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(v.a)(a,e),Object(_.a)(a,[{key:"render",value:function(){return n.a.createElement(l.Fragment,null,n.a.createElement("div",{className:"about"},n.a.createElement("div",{className:"about_body"},n.a.createElement("div",{className:"about_body_left"},n.a.createElement(f,{route:"/"}),n.a.createElement("div",null)),n.a.createElement("div",{className:"about_body_right"},n.a.createElement("div",null),n.a.createElement("img",{className:"about_body_right_logo",src:y.a,alt:"logo"}),n.a.createElement("div",{className:"about_body_right_desc"},n.a.createElement("p",{className:"about_body_right_desc_header"},"Richard McClintock, a Latin professor"),n.a.createElement("p",{className:"about_body_right_desc_text"},"Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source."),n.a.createElement("p",{className:"about_body_right_desc_text"},"Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered ney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source."),n.a.createElement("div",{className:"about_body_right_icons"},n.a.createElement("img",{className:"about_body_right_icons_fb",src:H.a,alt:"facebook"}),n.a.createElement("img",{className:"about_body_right_icons_ytb",src:G.a,alt:"youtube"})))))),n.a.createElement("img",{className:"about_planet",src:K.a,alt:"about_planet"}))}}]),a}(l.Component)),Z=(t(57),function(e){function a(){return Object(o.a)(this,a),Object(E.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(v.a)(a,e),Object(_.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"contact"},n.a.createElement("div",{className:"contact_back"},n.a.createElement(f,{route:"/"})),n.a.createElement("div",{className:"contact_all"},n.a.createElement("h2",null,"CONTACT US")))}}]),a}(l.Component)),$=function(e){function a(){var e,t;Object(o.a)(this,a);for(var l=arguments.length,n=new Array(l),c=0;c<l;c++)n[c]=arguments[c];return(t=Object(E.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(n)))).call_server=function(){console.log("called"),fetch("http://localhost:9000/xyz").then((function(e){return e.json()})).then((function(e){return console.log(e)}))},t}return Object(v.a)(a,e),Object(_.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("button",{onClick:this.call_server},"test server"))}}]),a}(l.Component),q=t(34),Q=t.n(q),ee=t(35),ae=t.n(ee),te=t(36),le=t.n(te),ne=t(37),ce=t.n(ne),se=(t(58),function(e){function a(){return Object(o.a)(this,a),Object(E.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(v.a)(a,e),Object(_.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"footer-container"},n.a.createElement("div",{className:"footer-first"},n.a.createElement("h5",null,"PRIVACY"),n.a.createElement("h5",null,"COMMUNITY"),n.a.createElement("h5",null,"HELP")),n.a.createElement("div",{className:"footer-second"},n.a.createElement("h5",null,"FOLLOW US"),n.a.createElement("img",{src:Q.a,alt:"facebook"}),n.a.createElement("img",{src:ae.a,alt:"twitter"}),n.a.createElement("img",{src:G.a,alt:"youtube"}),n.a.createElement("img",{src:le.a,alt:"soundcloud"})),n.a.createElement("div",{className:"footer-third"},n.a.createElement("div",null),n.a.createElement("div",{className:"copyright-container"},n.a.createElement("h5",null,"ALL WORK COPYRIGHT OF STARGAZER ",n.a.createElement("span",null,"\xa9")," 2020-2022 "),n.a.createElement("img",{className:"volume",src:ce.a,alt:"volume"}))))}}]),a}(l.Component));t(59);var re=function(){return n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"header"}),n.a.createElement(i.d,null,n.a.createElement(i.b,{path:"/events"},n.a.createElement(D,null)),n.a.createElement(i.b,{path:"/gallery"},n.a.createElement(R,null)),n.a.createElement(i.b,{path:"/clients"},n.a.createElement(X,null)),n.a.createElement(i.b,{path:"/about"},n.a.createElement(J,null)),n.a.createElement(i.b,{path:"/contact"},n.a.createElement(Z,null)),n.a.createElement(i.b,{path:"/admin"},n.a.createElement($,null)),n.a.createElement(i.b,{path:"/"},n.a.createElement(g,null)),n.a.createElement(i.a,{to:"/"})),n.a.createElement(se,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(r.a,{history:m},n.a.createElement(re,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[38,1,2]]]);
//# sourceMappingURL=main.6720804d.chunk.js.map
// This is a test harness for your module
// You should do something interesting in this harness 
// to test out the module and to provide instructions 
// to users on how to use it by example.


// open a single window
var window = Ti.UI.createWindow({
	backgroundColor: "#dbdbdb"
});

window.open(); 

var scrollView = Titanium.UI.createScrollView({
    contentWidth:'auto',
    contentHeight:'auto',
    top:0,
    showVerticalScrollIndicator:true,
    showHorizontalScrollIndicator:true
});

var view = Ti.UI.createView({
    backgroundColor:'gray',
    width:1000,
    height: 1200,
    top:0
});
scrollView.add(view);

window.add(scrollView);

var calendar = require('com.uakami.calendar');
Ti.API.info("module is => " + calendar);

function generateEvents() {
var dates = 400;
var ds = [];
for(var i = 0; i<dates; i++) {
    var diff_day = Math.floor(Math.random()*90)
    var duration = Math.floor(Math.random()*3);
    var sd=new Date();
    var ed=new Date();
    switch(Math.floor(Math.random()*3)) {
        case 0:
            sd.setDate(sd.getDate() + diff_day );
            ed.setDate(sd.getDate() + diff_day + duration );
        break;
        case 1:
            sd.setDate(sd.getDate() - diff_day );
            ed.setDate(sd.getDate() + diff_day + duration );
        break;
        case 2: 
            sd.setDate(sd.getDate() - diff_day );
            ed.setDate(sd.getDate() - diff_day + duration );
       break;
        
    }
    sd.setHours(12);
    sd.setMinutes(0);
    sd.setMilliseconds(0);
    
    var extra = {
      ID: i,
      post_author: Math.floor(Math.random()*90),
      post_date: "2011-07-21 23:13:44",
      post_date_gmt: "2011-07-21 23:13:44",
      post_content: "post_content_"+i,
      post_title: "post_title_"+i,
      post_excerpt: "",
      post_status: "publish",
      comment_status: "closed",
      ping_status: "closed",
      post_password: "",
      post_name: "post_name"+i,
      to_ping: "",
      pinged: "",
      post_modified: "2011-07-30 16:58:08",
      post_modified_gmt: "2011-07-30 16:58:08",
      post_content_filtered: "",
      post_parent: "0",
      guid: "43",
      menu_order: "0",
      post_type: "post_type_"+i,
      post_mime_type: "",
      comment_count: "0",
    }
    
    var e =  {title:"Event Title "+i, startDate: sd, endDate: ed, location: "location "+Math.floor(Math.random()*90), id: i, extra: extra}
    ds.push(e);
}
    return ds;
}


var sample01 = calendar.createView({
  events: generateEvents(),
  color:"transparent",
  top:0,
  left: 0,
  
});

sample01.addEventListener('monthselected', function(e) {
    //Ti.API.log(e);
    alert(e)
});

sample01.addEventListener('dayselected', function(e) {
    var items = [];
    for(key in e.events) {
        var item = {title: e.events[key].title, startDate: e.events[key].startDate, endDate: e.events[key].endDate}
        for(k in e.events[key].extra) {
            item[k] = e.events[key].extra[k];
        }
        items.push(item);
        alert(item);
    }
    
    
});
 
view.add(sample01);

var sample02 = calendar.createView({
  events: generateEvents(),
  color:"blue",
  top:0,
  left: 450,
  arrowLeft : "/images/sample02/arrow_left_transparent.png",
  arrowRight : "/images/sample02/arrow_right_transparent.png",
  monthHeight : 24, 
  monthTop : 5,
  monthText : ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
  monthColor : "#593459",
  monthFont : {
    fontSize : 26,
	fontWeight : 'normal'
  },
  dayHeight: 20,
  dayTop : 5,
  dayText: ["S", "M", "D", "M", "D", "F", "S"],  
  dayColor : "#8C2F18",
  dayFont : {
    fontSize : 20,
	fontWeight : 'normal'
  },
  headerHeight : 60,
  headerImage: "/images/sample02/background.png",
  dateImage : "/images/sample02/411.jpg",
  dateSelectedImage : "/images/sample02/407.jpg",
  dateEventImage : "/images/sample02/dotgreen.png",
  dateEventSelectedImage : "/images/sample02/dotred.png",
  dateTodayImage : "/images/sample02/822.jpg",
  dateTodaySelectedImage : "/images/sample02/837.jpg",
  dateTodayEventImage : "/images/sample02/dotblue.png",
  dateTodayEventSelectedImage : "/images/sample02/dotblack.png",
  dateColor : '#D620B2',
  dateSelectedColor : '#3227D6',
  dateTodayColor : '#614139',
}); 

sample02.addEventListener('monthselected', function(e) {
    //Ti.API.log(e);
    alert(e)
});

sample02.addEventListener('dayselected', function(e) {
    var items = [];
    for(key in e.events) {
        var item = {title: e.events[key].title, startDate: e.events[key].startDate, endDate: e.events[key].endDate}
        for(k in e.events[key].extra) {
            item[k] = e.events[key].extra[k];
        }
        items.push(item);
        alert(item);
    }
    
    
});

view.add(sample02);

var sample03 = calendar.createView({
  events: generateEvents(),
  color:"553377",
  top: 330,
  left: 0,
  headerHeight : 83,
  headerImage: "/images/sample03/header.png",
  arrowLeft : "/images/sample03/arrow-left.png",
  arrowRight : "/images/sample03/arrow-right.png",
  monthHeight : 15, 
  monthTop : 15,
  monthText : ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
  monthColor : "white",
  monthFont : {
    fontSize : 18,
	fontWeight : 'bold',
	fontFamily : 'Verdana'
  },
  dayHeight: 15,
  dayTop : 25,
  dayText : ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
  dayColor : "white",
  dayFont : {
    fontSize : 10,
	fontWeight : 'bold',
	fontFamily : 'Verdana'
  },
  dateWidth : 94,
  dateHeight : 86,
  dateImage : "/images/sample03/date.png",
  dateSelectedImage : "/images/sample03/dateSelected.png",
  dateEventImage : "/images/sample03/dateEvent.png",
  dateEventSelectedImage : "/images/sample03/dateEventSelected.png",
  dateTodayImage : "/images/sample03/dateToday.png",
  dateTodaySelectedImage : "/images/sample03/dateTodaySelected.png",
  dateTodayEventImage : "/images/sample03/dateTodayEvent.png",
  dateTodayEventSelectedImage : "/images/sample03/dateTodayEventSelected.png",
  dateColor : 'white',
  dateSelectedColor : 'white',
  dateTodayColor : 'white',
  dateFont : {
    fontSize : 36,
	fontWeight : 'normal',
	fontFamily : 'Verdana'
  }
}); 

sample03.addEventListener('monthselected', function(e) {
    //Ti.API.log(e);
    alert(e)
});

sample03.addEventListener('dayselected', function(e) {
    var items = [];
    for(key in e.events) {
        var item = {title: e.events[key].title, startDate: e.events[key].startDate, endDate: e.events[key].endDate}
        for(k in e.events[key].extra) {
            item[k] = e.events[key].extra[k];
        }
        items.push(item);
        alert(item);
    }
    
    
});
 
view.add(sample03);

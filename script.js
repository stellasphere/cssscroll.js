var csdebug = false
function cssScroll(csdebugsetting) {
  window.csdebug = csdebugsetting
  var events = Object.keys(cssScrollConditions)

  if(csdebug) console.log("events:",events)
  if(csdebug) console.log("csdebug",csdebug)

  
  window.addEventListener("scroll", ()=>{
    if(csdebug) console.log("starting scroll checks")
    for(i in events) {
      var event = events[i]
      var eventelements = document.querySelectorAll(`[class*="scroll-${event}"]`)
      var eventaltelements = document.querySelectorAll(`[class*="scroll-not${event}"]`)
      
      
      if(csdebug) console.log("elements with event:",event,"elements:",eventelements)

    
      eventelements.forEach(element => {
        var conditionresult = cssScrollConditions[event](element)

        if(csdebug) console.log("checked element:",element,"if it matched event condition",conditionresult)

        if(conditionresult) {
          element.classList.add(`scrollactive-${event}`)
          element.classList.add(`scrollactive`)
        } else {
          element.classList.remove(`scrollactive-${event}`)
          element.classList.remove(`scrollactive`)
        }
      })    
      
      eventaltelements.forEach(element => {
        var conditionresult = !cssScrollConditions[event](element)

        if(csdebug) console.log("checked element:",element,"if it matched event condition",conditionresult)

        if(conditionresult) {
          element.classList.add(`scrollactive-${event}`)
          element.classList.add(`scrollactive`)
        } else {
          element.classList.remove(`scrollactive-${event}`)
          element.classList.remove(`scrollactive`)
        }
      })
    }

  })
}
/*
[
    "pagetop",
    "intoview",
    "pastview",
    "pagebottom"
  ]*/
var cssScrollConditions = {
  pagetop: function(element) {
    var pagetop = window.scrollY == 0
    
    if(csdebug) console.log("pagetop condition",pagetop)
    return pagetop
  },
  intoview: function(element) {
    var elementposition = element.getBoundingClientRect()
    var elementy = elementposition.y - window.innerHeight

    var intoview = elementy <= 0
    
    if(csdebug) console.log("intoview condition",intoview)
    return intoview
  },
  pastview: function(element) {
    var elementposition = element.getBoundingClientRect()
    var elementy = elementposition.y

    var pastview = elementy <= 0
    
    if(csdebug) console.log("pastview condition",pastview)
    return pastview
  },
  pagebottom: function(element) {
    var pageheight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight) - window.innerHeight
    var pageposition = window.scrollY 
    var pagebottom = pageposition == pageheight
    
    if(csdebug) console.log("pagebottom condition",pagebottom)
    return pagebottom
  }
}
// code your solution here

const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  }
  



function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
  
  function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  }
  
  function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
      return `You are ${flair}${adjective}${flair}!`;
    }
  }
  
  const encouragingPromptFunction = wrapAdjective("!!!");
encouragingPromptFunction("a dedicated programmer"); // "You are !!!a dedicated programmer!!!"

const initState = {age: 1, count: 100}

function Age(state = initState, action){
  switch(action.type){
    case 'ADD_AGE_FULFILLED':   //在后文中，我们的action.type是ADD_AGE，在这里被执行的原因是我们使用了中间件redux-promsie-middleware 的原因
    return {...state, age:state.age+1 }
    case 'SUB_AGE':
    return { ...state, age:state.age-1 }
    default:
    return state
  }
}

export default Age
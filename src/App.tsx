import { type } from 'os';
import React, { useContext, useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router';
import Header from './components/header';
import Home from './pages/Home';
import Men from './pages/Men';
import Products from './pages/ProdutsPage';
import Women from './pages/Women';
import { ContextGender } from './store/storeGender/context';

const App:React.FC =()=> {

  const location = useLocation()


  
  const {state,dispatch} = useContext(ContextGender)
  useEffect(() => {
    const body = document.body
    if(state.gender=== 'women'){
      
      body.classList.remove('men')
      body.classList.add('women')
    }else{
      body.classList.remove('women')
      body.classList.add('men')
    }
  }, [state.gender])

  console.log(location.pathname.slice(1))

  useEffect(()=>{
    const gender= location.pathname.slice(1).toUpperCase();
  dispatch({type: gender, payload: gender.toLowerCase()})
    
  },[])
  return (
    <>
    {location.pathname !== '/' && <Header/>}
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/men/products/:id' component={Products}/>
        <Route path='/women/products/:id' component={Products}/>
        <Route path='/men'>
          <Men/>
        </Route>
        <Route path='/women'>
          <Women/>
        </Route>
      </Switch>
    </>
    
  );
}

export default App ;

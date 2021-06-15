import React,{useState} from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css'
import { Container, Icon, Label, Menu } from "semantic-ui-react";
import Questions from "./QuizQuestions";
import list from './questions.json';
import Result from "./QuizResult";


const Homepage=()=> {
  const [mylist,setList]=useState([]);
 const setResult=({data})=>{
   alert(data);
   console.log(data);
   setList(data);
 }
  return (
    <div>
      <BrowserRouter>
        <Container fluid>
          <Menu>
            <Container fluid>
              <Menu.Item header>
                <Link to="/Questions" className="btn btn-success">Qustions</Link>
              </Menu.Item>
              <Menu.Item header>
                <Link to="/Result" className="btn btn-danger">Results</Link>
              </Menu.Item>
            </Container>
            <Menu.Item>
              <Link to="/Result"></Link>
              <Label></Label>
            </Menu.Item>
          </Menu>
          <Container text>
            <Switch>
              <Route exact path="/">
                <Questions list ={list} data={{setResult:setResult.bind(this)}} />
              </Route>
              <Route path="/Questions">
                <Questions list={list} data={{setResult:setResult.bind(this)}}></Questions>
              </Route>
              <Route path="/Result">
              <Result Mylist={list} />
                
              </Route>
            </Switch>
          </Container>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default Homepage;
import React, { useState } from "react";
import { ListGroup, Card, Form, Button } from "react-bootstrap";
import QuizResult from "./QuizResult"
let value = 0;
const QuizQuestions = (props) => {
    const [question, setQuestion] = useState(props.list[0].question);
    const [id, setId] = useState(props.list[0].id);
    const [option, setOptions] = useState(props.list[0].options[0]);
   
    const [flag, setFlag] = useState(0);
    let Mylist = props.list;



    const [name, setName] = useState("Next")
    const changQuestion = (e) => {



        if (name == "Finish") {
            setFlag(1);
            alert(props.list);
            props.data.setQuizResult(Mylist);
        }
        if (value < props.list.length - 1) {
            value = value + 1;
            console.log(value);
            setId(props.list[value].id);
            setQuestion(props.list[value].question);
            setOptions(props.list[value].options[0]);

        }
        if (value == props.list.length - 1) {
            setName("Finish")
        }


    }
    const decreament = (e) => {

        if (value > 0) {
            value = value - 1;
            console.log(value)
            setName("Next");
            setId(props.list[value].id);
            setQuestion(props.list[value].question);
            setOptions(props.list[value].options[0]);

        }





    }
    const checkCorrect = (e) => {
        if (Mylist[value].answer == e) {
            Mylist[value].score = "1";
        }
        else{
            Mylist[value].score = "0";
        }
    }
    if (flag == 0) {
        return (
            <div >
                <Card style={{ width: '40rem' }}>
                    <Card.Body>
                    
                        <Card.Subtitle className="btn btn-primary">{id}. {question}</Card.Subtitle>
                        <ListGroup variant="flush">
                            {
                                Object.entries(option).map((item) => (
                                    <ListGroup.Item>
                                        <div className="block-example border border-light">
                                            <Form.Check.Input type="radio" name={"quiz" + value} onChange={() => checkCorrect(item[1])} />
                                            <Form.Check.Label>{item[1]}</Form.Check.Label>
                                        </div>
                                    </ListGroup.Item>
                                ))
                            }

                        </ListGroup>
                        <div className="d-flex my-4">
                                
                                <Button variant="dark" className="d-flex justify-content-start" onClick={decreament}>Previous</Button>
                                <Button variant="success" className="flex-row-reverse mx-4" onClick={changQuestion}>{name}</Button>
                    </div>
                    </Card.Body>
                    
                </Card>



            </div>

        )
    }
    else if (flag == 1) {
        return (
            <div>
                <QuizResult Mylist={props.list}></QuizResult>
                <h1>Quiz Finished</h1>
            </div >
        )
    }
    return (<div></div>)
}
export default QuizQuestions;
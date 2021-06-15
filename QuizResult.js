import React, { useState } from "react";
import useEffect from "react";
import { ListGroup, Card, Form, Button, Table } from "react-bootstrap";
import Icon from "./Icon";
let total=0;
const countTotal=({list}) => {
    list.map((item)=>(
        total=total+parseInt(item.score)
        
    ))
 return total;
}
const QuizResult = ( {Mylist} ) => {
   
      
        return (
            <div>
                <Card style={{ width: '40rem' }}>
                    <Card.Body>
                        <Card.Header className="text-center text-light bg-dark">Quiz</Card.Header>
                        <ListGroup variant="flush">
                            {

                                Mylist.map((item) => (
                                    <ListGroup.Item>
                                        <div>
                                            {item.id}. {item.ques}
                                        </div>
                                        <div>
                                            <b>correct answer:</b> {item.answer}
                                        </div>
                                        <div>
                                            <b>Score:</b> {item.score} <Icon value={item.score} />
                                        </div>

                                    </ListGroup.Item>           
                                ))
                            }

                        </ListGroup>

                    </Card.Body>
                </Card>
            </div>
        ) 
}
export default QuizResult;
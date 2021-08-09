import logo from './logo.svg';

import Icon from './components/icons';
import {ToastContainer,toast} from 'react-toastify'
import {Card,CardBody,Container,Button,Col,Row} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css'
import React,{useState} from 'react';
import './App.css';

const itemArray = new Array(9).fill("empty")

const reloadGame = () =>{

}
const checkIsWinner = () => {

}
const changeItem = (itemNumber) => {

}
const App = () => {
  const  [isCross,setIsCross] = useState(false)
  const [winMessage,setWinMessage] = useState(false)

  return (
   <Container className="p-5">
     <ToastContainer position='bottom-center'/>
     <Row>
       <Col md={6} className="offset-md-3">
         <div className="grid">
           {itemArray.map((item,index)=>(
             <Card>
               <CardBody className="box">
                 <Icon name={item} />
               </CardBody>
             </Card>
           ))}
         </div>

       </Col>
     </Row>
   </Container>
  );
}

export default App;

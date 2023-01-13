import { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

/**
 * Write class
 */
class Write extends Component {
    /**
     * @return {Component} Component
     */
    // class 내부에 추가
    state = {
        isModifyMode: false,
        title: "",
        content: "",
    };

    write = () => {
        axios.post("http://localhost:8000/insert", {
            title: this.state.title,
            content: this.state.content,
        })
            .then((res) => {
                console.log(res);
            })
            .catch((e) => {
                console.error(e);
            });
    };

    update = () => {
        axios.post("http://localhost:8000/update", {
            title: this.state.title,
            content: this.state.content,
        })
            .then((res) => {
                console.log(res);
            })
            .catch((e) => {
                console.error(e);
            });
    };

    // eslint-disable-next-line
    handleChange = (e: any) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };
    
    render() {
        return (
            <div>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>제목</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>내용</Form.Label>
                        <Form.Control as="textarea" />
                    </Form.Group>
                </Form>
                <Button variant="info">작성완료</Button>
                <Button variant="secondary">취소</Button>
            </div>
        );
    }
}

export default Write;
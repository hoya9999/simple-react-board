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
        title : "",
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

    // // eslint-disable-next-line
    //     handleChange2 = (e: any) => {
    //         this.setState({
    //             [e.target.name]: e.target.value,
    //         });
    //     };  

    // eslint-disable-next-line
    handleChange1 = (e: any) => {
        this.setState({
            title: e.target.value,
        });
    };

    // eslint-disable-next-line
    handleChange2 = (e: any) => {
        this.setState({
            content: e.target.value,
        });
    };    
    
    render() {
        return (
            <div>
                {/* 내용 입력 시 state에 입력내용을 전달 */}
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>제목</Form.Label>
                    <Form.Control type="text" onChange={this.handleChange1} placeholder="제목을 입력하세요" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>내용</Form.Label>
                    <Form.Control as="textarea" onChange={this.handleChange2} placeholder="내용을 입력하세요" />
                </Form.Group>
                {/* 작성완료 버튼 event */}
                <Button variant="info" onClick={this.state.isModifyMode ? this.write : this.update}>
                {this.state.isModifyMode}작성완료
                </Button>
                <Button variant="secondary">취소</Button>                                            
            </div>
        );
    }
}

export default Write;
import { Component } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import axios from "axios";

const Board = ({
    id,
    title,
    registerId,
    registerDate,
}: {
    id: number;
    title: string;
    registerId: string;
    registerDate: string;
}) => {
    return (
        <tr>
            <td>
                <input type="checkbox"></input>
            </td>
            <td>{id}</td>
            <td>{title}</td>
            <td>{registerId}</td>
            <td>{registerDate}</td>
        </tr>
    );
};

/**
 * BoardList class
 */
class BoardList extends Component {
    state = {
        boardList: [],
    };

    getList = () => {
        axios.get("http://localhost:8000/list", {})
            .then((res) => {
                const { data } = res;
                console.log(data);
                this.setState({
                    boardList: data,
                });
            })
            .catch((e) => {
                console.error(e);
            });
    };

    /**
     */
    tempNum: number = 1;
    componentDidMount() {
        //한번만 실행하게 한다.
        if (this.tempNum === 1) {
            console.log('1');            
            this.getList();
        }
        this.tempNum = 2;
    }

    /**
     * @return {Component} Component
     */
    render() {
        // eslint-disable-next-line
        const { boardList }: { boardList: any } = this.state;

        return (
            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>선택</th>
                            <th>번호</th>
                            <th>제목</th>
                            <th>작성자</th>
                            <th>작성일</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            // eslint-disable-next-line
                            boardList.map((v: any) => {
                                return (
                                    <Board key = {v.ID}
                                        id={v.ID}
                                        title={v.TITLE}
                                        registerId={v.REG_ID}
                                        registerDate={v.REG_DATE}
                                    />
                                );
                            })}
                    </tbody>
                </Table>
                <Button variant="info">글쓰기</Button>
                <Button variant="secondary">수정하기</Button>
                <Button variant="danger">삭제하기</Button>
            </div>
        );
    }
}

export default BoardList;
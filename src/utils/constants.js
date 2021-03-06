import { Comment, Avatar, Form, Button, List, Input } from "antd";

import { NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { isLogin } from "../services/user";

export const layout = {
    labelCol: {
        span: 6,
    },
    wrapperCol: {
        span: 16,
    },
};
export const tailLayout = {
    wrapperCol: {
        offset: 4,
        span: 16,
    },
};

export const onFinish = (values) => {
    console.log("Received values of form: ", values);
};

export const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
};

export const config = {
    rules: [
        {
            type: "object",
            required: true,
            message: "Please select time!",
        },
    ],
};

export const residences = [
    {
        value: "Male",
        label: "Male",
    },
    {
        value: "Female",
        label: "Female",
    },
];

//Header
export const handleLogin = () => {
    return isLogin() ? (
        <>
            <NavDropdown title={userIcon()} id="basic-nav-dropdown" className="mr-5 userIcon">
                <NavDropdown.Item href="#action/3.1">Info</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Log out</NavDropdown.Item>
            </NavDropdown>
        </>
    ) : (
        <NavLink to="/login" className="nav-link nav-link-header mr-3">
            Login
        </NavLink>
    );
};

//HomePage
export const handleSearchForm = (searchForm) => {
    return searchForm ? "search__form__click" : "";
};

export const userIcon = (avatar) => {
    return <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />;
};

//MovieDetail
const { TextArea } = Input;
export const CommentsList = ({ comments }) => (
    <List
        dataSource={comments}
        header={`${comments.length} ${comments.length > 1 ? "replies" : "reply"}`}
        itemLayout="horizontal"
        renderItem={(props) => <Comment {...props} />}
    />
);

export const Editor = ({ onChange, onSubmit, submitting, value }) => (
    <>
        <Form.Item>
            <TextArea rows={4} onChange={onChange} value={value} />
        </Form.Item>
        <Form.Item>
            <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
                Add Comment
            </Button>
        </Form.Item>
    </>
);

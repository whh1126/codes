import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon, Table, Divider, Tag } from 'antd';
import axios from "axios"
const { Header, Content, Footer, Sider } = Layout;
const { Column, ColumnGroup } = Table;
const { SubMenu } = Menu;
class Home extends React.Component {
    state = {
        collapsed: false,
        data: []
    };
    onCollapse = () => {
        // console.log(this)
        // let { history } = this.props;
        // console.log(this.props.history)
        // history.push('/options2')
        // console.log(collapsed);
        // this.setState({ collapsed });
    };
    render() {
        let { data } = this.state;
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                    <div className="logo" />
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1">
                            <Icon type="pie-chart" />
                            <span onClick={()=>{
                              this.props.history.push('/options2')
                            }}>Option 1</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="desktop" />
                            <span>Option 2</span>
                        </Menu.Item>
                        <SubMenu
                            key="sub1"
                            title={
                                <span>
                                    <Icon type="user" />
                                    <span>User</span>
                                </span>
                            }
                        >
                            <Menu.Item key="3">Tom</Menu.Item>
                            <Menu.Item key="4">Bill</Menu.Item>
                            <Menu.Item key="5">Alex</Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub2"
                            title={
                                <span>
                                    <Icon type="team" />
                                    <span onClick={()=>{
                                        this.props.history.push('/tema')
                                    }}>Team</span>
                                </span>
                            }
                        >
                            <Menu.Item key="6">Team 1</Menu.Item>
                            <Menu.Item key="8">Team 2</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="9">
                            <Icon type="file" />
                            <span>File</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <div className="icons">
                            <Icon type="menu-fold" />
                            <Icon type="menu-fold" />
                        </div>
                    </Header>
                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item>
                        </Breadcrumb>
                        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                            {/* <ul className="list">
                                <li>门店名称</li>
                                <li>住址</li>
                                <li>城市</li>
                                <li>门店图片</li>
                                <li>收入</li>
                                <li>门店状态</li>
                                <li>门店物品数量</li>
                                <li>操作</li>
                            </ul> */}
                            <Table dataSource={data}>
                                <ColumnGroup title="Name">
                                    <Column title="First Name" dataIndex="firstName" key="firstName" />
                                    <Column title="Last Name" dataIndex="lastName" key="lastName" />
                                </ColumnGroup>
                                <Column title="Age" dataIndex="age" key="age" />
                                <Column title="Address" dataIndex="address" key="address" />
                                <Column
                                    title="Tags"
                                    dataIndex="tags"
                                    key="tags"
                                    render={tags => (
                                        <span>
                                            {tags.map(tag => (
                                                <Tag color="blue" key={tag}>
                                                    {tag}
                                                </Tag>
                                            ))}
                                        </span>
                                    )}
                                />
                                <Column
                                    title="Action"
                                    key="action"
                                    render={(text, record) => (
                                        <span>
                                            <a href="javascript:;">Invite {record.lastName}</a>
                                            <Divider type="vertical" />
                                            <a href="javascript:;">Delete</a>
                                        </span>
                                    )}
                                />
                            </Table>
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        );
    }
    componentDidMount() {
        axios.get('/api/list').then(({ data }) => {
            console.log(data.list)
            this.setState({
                data: data.list
            })
        })

    }
}
export default Home


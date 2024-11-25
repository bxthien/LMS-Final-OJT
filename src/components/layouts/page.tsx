import { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Layout, Menu, theme } from "antd";
import { useNavigate } from "react-router-dom";

const { Header, Sider, Content } = Layout;

const AppLayout: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const navigate = useNavigate();
  return (
    <Layout className="h-screen">
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        collapsedWidth={50}
        width={170}
      >
        <div className="flex items-center justify-center h-20 bg-gray-900 text-white font-bold text-2xl">
          VMS
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          onClick={({ key }) => navigate(key)}
          items={[
            {
              key: "/",
              icon: <UserOutlined />,
              label: "Home Page",
            },
            {
              key: "/categories",
              icon: <UserOutlined />,
              label: "Categories",
            },
            {
              key: "/products",
              icon: <VideoCameraOutlined />,
              label: "Products",
            },
            {
              key: "/orders",
              icon: <UploadOutlined />,
              label: "Orders",
            },
            {
              key: "/users",
              icon: <UploadOutlined />,
              label: "Users",
            },
            {
              key: "/settings",
              icon: <UploadOutlined />,
              label: "Settings",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <div className="flex justify-between">
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
            <div className="flex items-center justify-center mr-4 z-10 gap-2">
              <Avatar size={`large`} icon={<UserOutlined />} />
              <div className=" text-black gap-3 leading-4">
                <div className="font-semibold">Bui Xuan Thien</div>
                <div className="text-xs italic">Super Admin</div>
              </div>
            </div>
          </div>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;

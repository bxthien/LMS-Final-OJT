import { Button, Form, Image, Input, message } from "antd";
import banner from "../../assets/imgs/Login Art.png";
import { useState } from "react";
import { SignInPayload, signin } from "../../api/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (values: SignInPayload) => {
    setLoading(true);
    try {
      const response = await signin(values);
      message.success("Login successful!");
      navigate("/");
      console.log(response);
    } catch (err) {
      console.error(err);
      message.error("Login failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-2 max-h-screen">
      <div className="flex flex-col p-6 justify-center gap-6 m-auto">
        <div className="text-4xl font-semibold">Welcome to VIPER CRM 👋</div>
        <div className="text-xl font-light">
          Viper CRM responsibility for Landing Page Shopify
        </div>
        <div className="flex justify-center">
          <Form
            className="flex flex-col w-[300px]"
            layout="vertical"
            onFinish={handleSubmit}
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: "Please enter the username" }]}
            >
              <Input className="bg-[#F7FBFF]" placeholder="Email@gmail.com" />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: "Please enter password" }]}
            >
              <Input.Password
                className="bg-[#F7FBFF]"
                placeholder="At least 8 character"
              />
            </Form.Item>
            <div className="text-right text-xs italic font-light">
              Forgot Password?
            </div>
            <Button
              className="bg-[#162D3A] text-white font-light"
              loading={loading}
              htmlType="submit"
            >
              Sign In
            </Button>
          </Form>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex h-screen p-6 justify-center m-auto">
          <Image
            className="max-h-full w-full object-cover"
            src={banner}
            preview={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;

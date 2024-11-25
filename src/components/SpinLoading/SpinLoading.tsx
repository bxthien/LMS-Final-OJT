import { Spin } from "antd";
import React from "react";

export const SpinLoading: React.FC = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <Spin size="large" />
    </div>
  );
};

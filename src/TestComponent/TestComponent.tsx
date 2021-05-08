import React from "react";
import "./TestComponent.scss";

interface TestComponentProps {
    theme: "primary" | "secondary";
  }

export const TestComponent = ({ theme }: TestComponentProps) => (
  <div
    data-testid="test-component"
    className={`test-component test-component-${theme}`}
  >
    <h1 className="heading">I'm the test component</h1>
    <h2>Made with love by Harvey</h2>
  </div>
);

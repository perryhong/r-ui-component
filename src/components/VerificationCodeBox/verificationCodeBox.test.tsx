import { fireEvent, render, screen } from "@testing-library/react";
import VerificationCodeBox, {
  VerificationCodeBoxProps,
} from "./verificationCodeBox";
import { createRef } from "react";
import VerificationCode from "@pekings/verification-code";

const customRef = createRef<{ vCode: VerificationCode }>();

const defaultProps: VerificationCodeBoxProps = {
  onCodeRecieve: jest.fn(),
};

const disabledClickToRefreshProps: VerificationCodeBoxProps = {
  id: "my-vcode",
  clickToRefresh: false,
  onClick: jest.fn(),
  onCodeRecieve: jest.fn(),
};

const customControlProps: VerificationCodeBoxProps = {
  id: "my-vcode",
  ref: customRef,
  clickToRefresh: false,
  onClick: () => customRef.current?.vCode.drawAgain(),
  onCodeRecieve: jest.fn(),
};

describe("test verification code component", () => {
  it("should render VerificationCodeBox based on default props", async () => {
    render(<VerificationCodeBox {...defaultProps} />);
    const element = await screen.findByTestId("v-code");
    expect(element).toBeInTheDocument();
    expect(defaultProps.onCodeRecieve).toHaveBeenCalled();
    fireEvent.click(element);
    expect(defaultProps.onCodeRecieve).toHaveBeenCalledTimes(2);
  });

  it("should render VerificationCodeBox based on disabled clicktorefresh props", async () => {
    render(<VerificationCodeBox {...disabledClickToRefreshProps} />);
    const element = await screen.findByTestId("my-vcode");
    expect(element).toBeInTheDocument();
    expect(disabledClickToRefreshProps.onCodeRecieve).toHaveBeenCalled();
    fireEvent.click(element);
    expect(disabledClickToRefreshProps.onCodeRecieve).not.toHaveBeenCalledTimes(
      2
    );
  });

  it("should render VerificationCodeBox based on custom props", async () => {
    render(<VerificationCodeBox {...customControlProps} />);
    const element = await screen.findByTestId("my-vcode");
    expect(element).toBeInTheDocument();
    expect(customControlProps.onCodeRecieve).toHaveBeenCalled();
    fireEvent.click(element);
    expect(customControlProps.onCodeRecieve).toHaveBeenCalledTimes(2);
  });
});

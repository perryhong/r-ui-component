import React, {
  useEffect,
  useState,
  forwardRef,
  Ref,
  useImperativeHandle,
  MouseEventHandler,
  MouseEvent,
} from "react";
import VerificationCode, {
  VerificationCodeOptions,
} from "@pekings/verification-code";

export interface VerificationCodeBoxProps {
  /** 验证码组件元素id，默认: v-code */
  id?: string;
  /** 获取验证码实例 */
  ref?: Ref<{ vCode: VerificationCode }>;
  /** 验证码配置 */
  options?: {
    [p in keyof VerificationCodeOptions]?: VerificationCodeOptions[p];
  };
  /** 验证码组件宽度 */
  width?: number;
  /** 验证码组件高度 */
  height?: number;
  /** 是否开启点击刷新 */
  clickToRefresh?: boolean;
  /** 监听点击事件 */
  onClick?: (e: MouseEvent<HTMLCanvasElement>) => void;
  /** 监听验证码获取 */
  onCodeRecieve: (code: string) => void;
}

export const VerificationCodeBox = forwardRef(
  (
    props: VerificationCodeBoxProps,
    ref: Ref<{ vCode: VerificationCode | null }>
  ) => {
    const {
      id = "v-code",
      options,
      width,
      height,
      clickToRefresh,
      onCodeRecieve,
      onClick,
    } = props;
    const [vCode, setVCode] = useState<VerificationCode | null>(null);

    useEffect(() => {
      const vCode = new VerificationCode(
        document.getElementById(id) as HTMLCanvasElement,
        onCodeRecieve,
        options
      );
      setVCode(vCode);
      vCode.draw();
    }, []);

    const handleClick: MouseEventHandler<HTMLCanvasElement> = function (e) {
      if (vCode && clickToRefresh) vCode.drawAgain();
      if (onClick) onClick(e);
    };

    useImperativeHandle(ref, () => ({
      vCode,
    }));

    return (
      <canvas
        data-testid={id}
        width={width}
        height={height}
        id={id}
        onClick={handleClick}
      ></canvas>
    );
  }
);

VerificationCodeBox.defaultProps = {
  width: 200,
  height: 100,
  clickToRefresh: true,
};

export default VerificationCodeBox;

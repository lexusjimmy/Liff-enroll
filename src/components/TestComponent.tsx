import useLiffAndLiffError from "@/hooks/useLiffAndLiffError";
import { FC } from "react";

const TestComponent: FC = () => {
  const { liffError } = useLiffAndLiffError();
  // console.log(liffError);
  return null;
}
export default TestComponent;

import { LiffContext, LiffContextType } from "@/providers/LiffRelatedProvider";
import { useContext } from "react";

const useLiffAndLiffError: () => LiffContextType = () => {
  const { liffError, liffObject } = useContext(LiffContext);
  return {
    liffError,
    liffObject,
  }
}
export default useLiffAndLiffError;

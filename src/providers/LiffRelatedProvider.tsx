import liff from "@line/liff";
import { FC, ReactElement, createContext, useEffect, useState } from "react";

export type LiffContextType = {
  liffObject: typeof liff | null;
  liffError: string | null;
}

export const LiffContext = createContext<LiffContextType>({
  liffObject: null,
  liffError: null,
});

const LiffRelatedProvider: FC<{ children: ReactElement }> = ({ children }) => {
  const [liffRelatedContext, setLiffRelatedContext] = useState<LiffContextType>({
    liffError: null,
    liffObject: null,
  });
  useEffect(() => {
    // to avoid `window is not defined` error
    import("@line/liff")
      .then((liff) => liff.default)
      .then((liff) => {
        console.log("LIFF init...");
        liff
          .init({ liffId: process.env.NEXT_PUBLIC_LIFF_ID! })
          .then(() => {
            console.log("LIFF init succeeded.");
            setLiffRelatedContext((prevObj) => ({ ...prevObj, liffObject: liff }));
          })
          .catch((error: Error) => {
            console.log("LIFF init failed.");
            setLiffRelatedContext((prevObj) => ({ ...prevObj, liffError: error.toString() }));
          });
      });
  }, []);
  return (
    <LiffContext.Provider value={liffRelatedContext}>
      {children}
    </LiffContext.Provider>
  )
};

export default LiffRelatedProvider;

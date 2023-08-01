import liff from "@line/liff";
import { FC, createContext, useState } from "react";

type LiffContextType = {
  liffObject: typeof liff | null;
  liffError: string | null;
}

const LiffContext = createContext<LiffContextType>({
  liffObject: null,
  liffError: null,
});

const LiffRelatedProvider: FC = ({ children }) => {
  const [liffRelatedContext, setLiffRelatedContext] = useState<LiffContextType>({
    liffError: null,
    liffObject: null,
  });
  return (
    <LiffContext.Provider value={liffRelatedContext}>
      {children}
    </LiffContext.Provider>
  )
};

export default LiffRelatedProvider;

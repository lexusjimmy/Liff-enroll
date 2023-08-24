'use client'
import LiffRelatedProvider from "@/providers/LiffRelatedProvider";
import { FC, ReactElement } from "react";

const LiffProvider: FC<{ children: ReactElement }> = ({ children }) => (
  <LiffRelatedProvider>
    {children}
  </LiffRelatedProvider>
)
export default LiffProvider;

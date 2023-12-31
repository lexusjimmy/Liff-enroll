import liff from "@line/liff";
import { useEffect, useState } from "react";

export type LiffErrorAndObjectType = { liffObject: typeof liff | null; liffError: string | null }

const useLiffAndLiffError: () => LiffErrorAndObjectType = () => {
  const [liffObject, setLiffObject] = useState<typeof liff | null>(null);
  const [liffError, setLiffError] = useState<string | null>(null);

  // Execute liff.init() when the app is initialized
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
            setLiffObject(liff);
          })
          .catch((error: Error) => {
            console.log("LIFF init failed.");
            setLiffError(error.toString());
          });
      });
  }, []);
  return {
    liffObject,
    liffError,
  }
}
export default useLiffAndLiffError;

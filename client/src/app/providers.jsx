'use client'
import * as React from "react";
import {NextUIProvider} from "@nextui-org/react";

const Providers = ({children}) => {
  return (
    <NextUIProvider>
      {children}
    </NextUIProvider>
  );
}
export default Providers
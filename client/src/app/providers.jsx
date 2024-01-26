'use client'
import * as React from "react";
import {NextUIProvider} from "@nextui-org/react";
import { Toaster } from "react-hot-toast";
const Providers = ({children}) => {
  return (
    <NextUIProvider>
            <Toaster />

      {children}
    </NextUIProvider>
  );
}
export default Providers
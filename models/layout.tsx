import { NextPage } from "next";
import { AppProps } from "next/app";
import { ReactElement } from "react";

export type LayoutProps = {
    children: React.ReactNode
}

export type NextPageWidtLayout = NextPage & {
    Layout?: (page: LayoutProps) => ReactElement
}

export type AppPropsWidthLayout = AppProps & {
    Component: NextPageWidtLayout
}
"use client";
import { Config, Puck } from "@measured/puck";
import { configPuck } from "./config";
import { initialPuckData, savePuckData } from "./initialData";

export function Editor() {
    return <Puck config={configPuck as Config} data={initialPuckData} onPublish={savePuckData} />;
}
import { MyPlaylist } from "./components/MyPlaylist";

export const App = () => <MyPlaylist />

index.js

import React from "react";
import { ReactNode } from 'react-dom/client';
import { App } from './App'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)




import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { App } from 'components/app';
import './index.scss';

const container = document.getElementById('root')!;
const root = ReactDOM.createRoot(container);

root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

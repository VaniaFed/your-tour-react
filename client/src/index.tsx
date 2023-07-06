import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import * as ReactDOM from 'react-dom/client';
import { App } from 'components/app';

import { StickyProvider } from './providers/sticky-provider';

import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<StickyProvider>
				<App />
			</StickyProvider>
		</BrowserRouter>
	</React.StrictMode>
);

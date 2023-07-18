import React, { createContext, useState } from 'react';

import type { Dispatch, FC, SetStateAction } from 'react';

interface IStickyContext {
	sticky: boolean;
	setSticky: Dispatch<SetStateAction<boolean>>;
}

export const StickyContext = createContext<IStickyContext>({ sticky: false, setSticky: () => {} });

export const StickyProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
	const [sticky, setSticky] = useState(false);

	return <StickyContext.Provider value={{ sticky, setSticky }}>{children}</StickyContext.Provider>;
};

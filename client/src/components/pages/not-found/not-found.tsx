import React from 'react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './not-found.module.scss';
import { Heading } from 'components/ui/heading';
import { Paragraph } from 'components/ui/paragraph';

const cx = classNames.bind(styles);

export const NotFound = () => {
	// const error = useRouteError();
	// let errorMessage;

	// if (isRouteErrorResponse(error)) {
	// 	errorMessage = error.error?.message || error.statusText;
	// } else if (error instanceof Error) {
	// 	errorMessage = error.message;
	// } else if (typeof error === 'string') {
	// 	errorMessage = error;
	// } else {
	// 	console.error(error);
	// 	errorMessage = 'Unknown error';
	// }

	return (
		<div className={cx('not-found')}>
			<Heading size="1">Oops!</Heading>
			<Paragraph>Sorry, an unexpected error has occurred.</Paragraph>
			{/* <Paragraph>{errorMessage}</Paragraph> */}
		</div>
	);
};

import React, { forwardRef } from 'react';
import classNames from 'classnames/bind';

import styles from './textarea.module.scss';

import type { Props } from './props';

const cx = classNames.bind(styles);

export const Textarea = forwardRef<HTMLTextAreaElement, Props>(({ isInvalid = true, className, ...rest }, ref) => {
	return <textarea className={cx('textarea', isInvalid && 'textarea_invalid', className)} {...rest} ref={ref} />;
});

Textarea.displayName = 'Textarea';

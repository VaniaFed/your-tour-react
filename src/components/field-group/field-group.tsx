import React, { FC } from 'react';
import classNames from 'classnames/bind';

import styles from './field-group.module.scss';

const cx = classNames.bind(styles);

type Props = {
	children: React.ReactNode;
	className?: string;
};

export const FieldGroup: FC<Props> = ({ children, className }) => {
	return <div className={cx('field-group', className)}>{children}</div>;
};

import React from 'react';
import classNames from 'classnames/bind';

import { Link } from 'components/ui/link';

import { Props } from './props';
import styles from './logo.module.scss';

const cx = classNames.bind(styles);

export const Logo = ({ className }: Props) => {
	return (
		<Link href="#" underline={false} className={cx('logo', className)}>
			<svg
				className={cx('logo__img')}
				width="182"
				height="32"
				viewBox="0 0 182 32"
				fill="white"
				xmlns="http://www.w3.org/2000/svg">
				<path d="M7.476 0.879883L13.902 14.0679L20.412 0.879883H27.93L17.304 20.5359V30.6999H10.458V20.4519L0 0.879883H7.476Z" />
				<path d="M36.8041 31.1199C34.2841 31.1199 32.1421 30.5879 30.3781 29.5239C28.6421 28.4599 27.3121 27.0599 26.3881 25.3239C25.4641 23.5879 25.0021 21.7119 25.0021 19.6959C25.0021 17.6519 25.4641 15.7619 26.3881 14.0259C27.3121 12.2899 28.6561 10.8899 30.4201 9.82588C32.1841 8.76188 34.3121 8.22988 36.8041 8.22988C39.2961 8.22988 41.4241 8.76188 43.1881 9.82588C44.9521 10.8899 46.2961 12.2899 47.2201 14.0259C48.1441 15.7619 48.6061 17.6519 48.6061 19.6959C48.6061 21.7119 48.1441 23.5879 47.2201 25.3239C46.2961 27.0599 44.9521 28.4599 43.1881 29.5239C41.4241 30.5879 39.2961 31.1199 36.8041 31.1199ZM31.8901 19.6959C31.8901 21.4039 32.3521 22.7899 33.2761 23.8539C34.2281 24.9179 35.4041 25.4499 36.8041 25.4499C38.1761 25.4499 39.3241 24.9179 40.2481 23.8539C41.2001 22.7899 41.6761 21.4039 41.6761 19.6959C41.6761 17.9879 41.2001 16.6019 40.2481 15.5379C39.3241 14.4739 38.1761 13.9419 36.8041 13.9419C35.4041 13.9419 34.2281 14.4739 33.2761 15.5379C32.3521 16.6019 31.8901 17.9879 31.8901 19.6959Z" />
				<path d="M51.7289 22.7619V8.64988H58.4489V21.2919C58.4489 24.0639 59.4709 25.4499 61.5149 25.4499C62.4109 25.4499 63.2789 25.2119 64.1189 24.7359C64.9589 24.2319 65.7009 23.4059 66.3449 22.2579V8.64988H73.0649V23.2239C73.0649 23.8959 73.1629 24.3719 73.3589 24.6519C73.5829 24.9319 73.9609 25.0859 74.4929 25.1139V30.6999C73.8489 30.8119 73.3029 30.8959 72.8549 30.9519C72.4069 31.0079 72.0009 31.0359 71.6369 31.0359C69.2289 31.0359 67.8569 30.0979 67.5209 28.2219L67.3949 26.8779C66.3869 28.3339 65.1269 29.4119 63.6149 30.1119C62.1309 30.7839 60.4649 31.1199 58.6169 31.1199C56.3769 31.1199 54.6689 30.4059 53.4929 28.9779C52.3169 27.5499 51.7289 25.4779 51.7289 22.7619Z" />
				<path d="M92.2569 14.4039C90.6329 14.4319 89.1629 14.6979 87.8469 15.2019C86.5309 15.7059 85.5789 16.4619 84.9909 17.4699V30.6999H78.2709V8.64988H84.4449V13.1019C85.2009 11.6179 86.1809 10.4559 87.3849 9.61588C88.5889 8.77588 89.8489 8.34188 91.1649 8.31388C91.7249 8.31388 92.0889 8.32788 92.2569 8.35588V14.4039Z" />
				<path d="M116.92 6.92788H107.848V30.6999H100.96V6.92788H91.8458V0.879883H116.92V6.92788Z" />
				<path d="M126.382 31.1199C123.862 31.1199 121.72 30.5879 119.956 29.5239C118.22 28.4599 116.89 27.0599 115.966 25.3239C115.042 23.5879 114.58 21.7119 114.58 19.6959C114.58 17.6519 115.042 15.7619 115.966 14.0259C116.89 12.2899 118.234 10.8899 119.998 9.82588C121.762 8.76188 123.89 8.22988 126.382 8.22988C128.874 8.22988 131.002 8.76188 132.766 9.82588C134.53 10.8899 135.874 12.2899 136.798 14.0259C137.722 15.7619 138.184 17.6519 138.184 19.6959C138.184 21.7119 137.722 23.5879 136.798 25.3239C135.874 27.0599 134.53 28.4599 132.766 29.5239C131.002 30.5879 128.874 31.1199 126.382 31.1199ZM121.468 19.6959C121.468 21.4039 121.93 22.7899 122.854 23.8539C123.806 24.9179 124.982 25.4499 126.382 25.4499C127.754 25.4499 128.902 24.9179 129.826 23.8539C130.778 22.7899 131.254 21.4039 131.254 19.6959C131.254 17.9879 130.778 16.6019 129.826 15.5379C128.902 14.4739 127.754 13.9419 126.382 13.9419C124.982 13.9419 123.806 14.4739 122.854 15.5379C121.93 16.6019 121.468 17.9879 121.468 19.6959Z" />
				<path d="M141.307 22.7619V8.64988H148.027V21.2919C148.027 24.0639 149.049 25.4499 151.093 25.4499C151.989 25.4499 152.857 25.2119 153.697 24.7359C154.537 24.2319 155.279 23.4059 155.923 22.2579V8.64988H162.643V23.2239C162.643 23.8959 162.741 24.3719 162.937 24.6519C163.161 24.9319 163.539 25.0859 164.071 25.1139V30.6999C163.427 30.8119 162.881 30.8959 162.433 30.9519C161.985 31.0079 161.579 31.0359 161.215 31.0359C158.807 31.0359 157.435 30.0979 157.099 28.2219L156.973 26.8779C155.965 28.3339 154.705 29.4119 153.193 30.1119C151.709 30.7839 150.043 31.1199 148.195 31.1199C145.955 31.1199 144.247 30.4059 143.071 28.9779C141.895 27.5499 141.307 25.4779 141.307 22.7619Z" />
				<path d="M181.835 14.4039C180.211 14.4319 178.741 14.6979 177.425 15.2019C176.109 15.7059 175.157 16.4619 174.569 17.4699V30.6999H167.849V8.64988H174.023V13.1019C174.779 11.6179 175.759 10.4559 176.963 9.61588C178.167 8.77588 179.427 8.34188 180.743 8.31388C181.303 8.31388 181.667 8.32788 181.835 8.35588V14.4039Z" />
			</svg>
		</Link>
	);
};

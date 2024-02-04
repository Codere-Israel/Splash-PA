import React from 'react';
import {Row } from "react-bootstrap";
import { isMobile, isAndroid, isIOS } from 'react-device-detect';

const DownloadAppButtons = () => {
	// Determining whether buttons should be displayed
	const showAndroidButton = isMobile && (isAndroid || !isAndroid && !isIOS);
	const showIOSButton = isMobile && (isIOS || !isAndroid && !isIOS);

	return (
		<Row className="mobileBtnsFooter">
			<div className="mobileBtn">
				{(!isMobile || showAndroidButton) && (
					<a className="androidPanamabtn" href="https://panama.onelink.me/oSJa/1u9oewy8" rel="noreferrer" target="_blank">
						<img src="https://www.codere.pa/static/media/img/androidPA.webp" alt="Codere Panama" />
					</a>
				)}
				{/*{(!isMobile || showIOSButton) && (*/}
				{/*	<a className="iosPanamabtn" href="https://panama.onelink.me/oSJa/1u9oewy8" rel="noreferrer" target="_blank">*/}
				{/*		<img src="https://www.codere.pa/static/media/img/app.png" alt="Codere Panama" />*/}
				{/*	</a>*/}
				{/*)}*/}
			</div>
		</Row>
	);
};

export default DownloadAppButtons;

import React, {useState} from "react";
import withTranslation from "next-translate/withTranslation";

class TBCBadge extends React.Component {
	
	render() {
		const {t, lang} = this.props.i18n;

		return (
			<span title={t("calendar:badges.tbc_title")} className={`bg-yellow-400 rounded px-1 md:px-2 py-1 text-xxs sm:text-xs text-black font-normal sm:font-bold ml-2 ${this.props.mobileOnly ? "display sm:hidden" : ""}`}>
				{t(`calendar:badges.tbc`)}
			</span>
		);
	}
}

export default withTranslation(TBCBadge);

import React from 'react';
import { useTranslation } from 'react-i18next';

export default props => {
    const { t } = useTranslation();

    return (
        <>
            <p>{t("about")}</p>
            <p>{props.Commons.name}</p>
            <button onClick={()=>props.change("Eliã Rafael L Batista")}>{t('fullName')}</button>
        </>
    );
};

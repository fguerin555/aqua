import React, { useState } from "react";
import { Trans, useTranslation } from "react-i18next";

const ExpandableTransText = ({
  i18nKeyIntro,
  i18nKeyFull,
  i18nKeyMore,
  i18nKeyLess,
}) => {
  const [expanded, setExpanded] = useState(false);
  const { t } = useTranslation();

  return (
    <div>
      {!expanded ? (
        <p>
          <Trans i18nKey={i18nKeyIntro} components={{ br: <br /> }} />
          <button
            onClick={() => setExpanded(true)}
            style={{
              marginLeft: "0.5em",
              display: "inline",
              background: "none",
              border: "none",
              color: "#6eeff4",
              cursor: "pointer",
              fontSize: "1em",
              fontStyle: "italic",
            }}
          >
            {t(i18nKeyMore)}
          </button>
        </p>
      ) : (
        <p>
          <Trans i18nKey={i18nKeyFull} components={{ br: <br /> }} />
          <button
            onClick={() => setExpanded(false)}
            style={{
              marginTop: "0.5em",
              background: "none",
              border: "none",
              color: "#6eeff4",
              cursor: "pointer",
              fontSize: "1em",
              fontStyle: "italic",
            }}
          >
            {t(i18nKeyLess)}
          </button>
        </p>
      )}
    </div>
  );
};

export default ExpandableTransText;

import React from 'react';
import hoistStatics from 'hoist-non-react-statics';
import { connect } from 'react-redux';

import { translations } from '../constants/translations';

/**
 * A public higher-order component to access translations
 */
const withTranslations = (SourceComponent, ComponentName = 'Component') => {
  function TranslatableComponent({ language, ...props }) {
    const storedLanguage = localStorage.getItem('user')
        ? JSON.parse(localStorage.getItem('user')).language
        : '',
      selectedLanguage = language || storedLanguage || 'sr';

    return (
      <SourceComponent
        {...props}
        t={translations[selectedLanguage][ComponentName]}
        gt={translations[selectedLanguage].Global}
        enums={translations[selectedLanguage].Enums}
      />
    );
  }

  const mapStateToProps = (state) => ({
    language: state.user && state.user.language,
  });

  TranslatableComponent.displayName = `withTranslations(${ComponentName})`;

  return hoistStatics(
    connect(mapStateToProps)(TranslatableComponent),
    SourceComponent
  );
};

export default withTranslations;

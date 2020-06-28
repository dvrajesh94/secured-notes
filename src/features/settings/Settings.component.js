import React from 'react';
import SettingsHeader from './SettingsHeader.component';
import SettingsContent from './SettingsContent.component';

const Settings = props => (
  <>
    <SettingsHeader {...props} />
    <SettingsContent />
  </>
);

export default Settings;

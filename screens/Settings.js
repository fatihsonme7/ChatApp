import React from 'react';
import {View, StyleSheet} from 'react-native';
import ContactRow from '../components/ContactRow';
import Separator from '../components/Separator';
import Cell from '../components/Cell';
import {colors} from '../config/Constans';

const Settings = () => {
  return (
    <View>
      <ContactRow
        name="Fatih Sönmez"
        subtitle="fatihsonmez-95@hotmail.com"
        style={styles.ContactRow}
      />
      <Separator />
      <Cell title="Logout" icon="log-out-outline" tintcolor={colors.red} />
      <Cell
        title="Help"
        icon="informatin-outline"
        tintcolor={colors.green}
        style={{marginTop: 15}}
      />
      <Cell
        title="Tell a friend"
        icon="heart-outline"
        tintcolor={colors.pink}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ContactRow: {
    backgroundColor: '#fff',
    marginTop: 16,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: '#E2E2E2',
  },
});

export default Settings;

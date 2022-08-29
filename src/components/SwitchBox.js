import * as React from 'react';

import { View, Switch, Text } from 'react-native';
import styles from '../styles';

const SwitchBox = (props) => {
  const [value, setValue] = React.useState(false);

  const onValueChange = () => {
    props.onChange(!value);
    setValue(!value);
  };

  return (
    <View style={styles.switchBox}>
      <View style={styles.switchBoxText}>
        <Text>{props.text}</Text>
      </View>
      <View style={styles.switchBoxSwitch}>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={value ? '#1f54ac' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={onValueChange}
          value={value}
        />
      </View>
    </View>
  );
};

export default SwitchBox;

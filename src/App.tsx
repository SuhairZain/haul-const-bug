import React, { PureComponent } from 'react';
import { View } from 'react-native';

import delay from 'delay';

delay();

class App extends PureComponent {
    render() {
        return (
            <View style={{ backgroundColor: 'yellow', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            </View>
        );
    }
}

export default App;

import React from "react";
import { View, Text,Button } from "react-native";
class TestComponent extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        console.log("compp----", this.props.route.params)
    }
    render() {
        return (
            <View>
                <Text>TestComponent-class</Text>
                <Button
                    title="Go to Jane's profile"
                    onPress={() =>
                        this.props.navigation.navigate('Dashboard', { name: 'Jane' })
                    }
                />
            </View>
        );
    };
}

export default TestComponent;
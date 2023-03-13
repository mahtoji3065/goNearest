import React from "react";
import { View, Text, Button } from "react-native";
import axios from 'axios';
import { DEFAULT_MOBILE_LENGTH, APIURL, X_API_KEY, DEFAULT_MOBILE_CODE } from '@env';

class Dashboard extends React.Component {
    constructor() {
        super();
        this.state = {
            businessTypeLists: [],
            fields: {
                mobile_no: ''
            },
            formFieldError: {
                mobile_no: ''
            },
        }

    }

    async componentDidMount() {
        // window.getUserCurrentLocation();
        const currentThis = this;
        const API_HEADER = {
            headers: {
                'X-API-KEY': X_API_KEY,
                'crossdomain': true
            }
        };
        const URL = APIURL + "user/getAllBusinessType";

        axios.get(URL, API_HEADER)
            .then(res => {
                alert(JSON.stringify(res));
                if (res.data.status) {
                    currentThis.setState({ businessTypeLists: res.data.Data });
                }
            })
            .catch(error => {
                console.log(error);
            });
    }
    render() {
        const currentThis = this;
        const businessTypeLists = currentThis.state.businessTypeLists;
        return (
            <View>
                {(businessTypeLists.length) ? (businessTypeLists.map((row, index) => {
                    return (
                        <Text key={index}>{row.name}</Text>
                    )
                })) : (<Text>Data Not Available</Text>)}
            </View>
        );
    };
}

export default Dashboard;

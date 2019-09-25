import React from 'react';
import {ScrollView, View, Text, SectionList, StyleSheet} from 'react-native';

const DATA = [
    {
        title: "Pizzas",
        data: ["Pizza"]
    }, {
        title: "Side Dishes",
        data: ["French Fries", "Salads"]
    }, {
        title: "Drinks",
        data: ["Coca-Cola", "Barq's Root Beer", "Fanta Orange", "Fanta Cream Soda"]
    }
];

function Items({title}) {
    return (
        <View style={styles.itemContainer}>
            <Text style={styles.itemTitle}>{title}</Text>
        </View>
    )
}

export default function OrderScreen() {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.titleText}>Place Your Order</Text>
            <SectionList
                sections={DATA}
                keyExtractor={(item, index) => item + index}
                renderItem={({item}) => <Items title={item}/>}
                renderSectionHeader={({section: {
                    title
                }}) => (
                <Text style={styles.itemCategory}>{title}</Text>
            )}/>
        </ScrollView>
    );
}

OrderScreen.navigationOptions = {
    title: 'Order'
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff'
    },
    titleText: {
        fontSize: 24,
        textAlign: 'center'
    },
    itemContainer: {
        backgroundColor: '#d2112c',
        marginVertical: 10,
        padding: 20
    },
    itemCategory: {
        marginTop: 20,
        fontSize: 18,
        fontWeight: 'bold'
    },
    itemTitle: {
        color: '#fff',
        fontWeight: 'bold'
    }
});
import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { capitalize } from "lodash";

export default function StatsPokemon({ pokemon }) {
  return (
    <View>
        <Text style={styles.container}>Base Stats</Text>
        {    pokemon?.stats.map((item) => {
            return (
              <View style={styles.stat} key={item.stat.name}>
                <Text>{capitalize(item.stat.name)}</Text>
                <View style={styles.box}>
                    <Text>{`${item.base_stat}%`}</Text>
                    <View style={styles.boxLine}>
                        <View style={styles.line}></View>
                        <View style={{...styles.progressive,
                                width:(item.base_stat  * 2),
                                backgroundColor: item.base_stat > 50 ? '#48CFB2' : '#FA6C6C',
                            }}></View>
                    </View>
                </View>
              </View>
            );

    })}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        margin: 20,
        marginBottom:5,
        fontSize: 20,
        fontWeight: 'bold',
    },
    stat:{
        display: 'flex',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginBottom: 10,
        flexDirection: 'row',
    },
    box:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    boxLine:{
        position: 'relative',
    },
    line:{
        height: 10,
        width: 200,
        marginLeft: 10,
        marginTop: 6,
        backgroundColor: 'silver',
        borderRadius: 10,
    },
    progressive:{
        height: 10,
        marginLeft: 10,
        marginTop: 6,
        borderRadius: 10,
        position: 'absolute',
    }
});
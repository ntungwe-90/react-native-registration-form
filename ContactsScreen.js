import React from 'react';
import {View, FlatList, Text } from 'react-native';
import Contact from './components/Contact'

export default function ContactsScreen  () {
    const contacts = [
        {name:"Dorcas mensah",  number:" 056674321"},
        {name:"Sahada isiah",  number:" 6677335509"},
        {name:"Fiona Kwame",  number:"+237677100070"},
        {name:"Susan Johnson",  number:" +0014467894"},
        {name:"Daphnie Nanaya",  number:" 054321876"},
        {name:"Rachel  Pen",  number:" 016789965"},
    ]
    return (
       <View>
        <FlatList
        data={contacts}
        renderItem={({item}) =>{
            return <Contact  name={item.name} phone={item.number} />
        }}
        keyExtractor={(item) =>item.number}
        />
       </View>
    );
}


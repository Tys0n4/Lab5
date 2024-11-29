import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native-web';

const Task = () => {
    const [data, setData] = useState([]);
    const Fetchdata=async() =>{
        try {
            const result=await getTasks();
            setData(result);
            
        } catch (error) {
            console.error("fetch data error", error);
            throw error;
        }
    };
    useEffect( () => {
        Fetchdata();
    }, []);
  return (
    <ScrollView style={{ flex: 1 }}>
        {data.length > 0 ? (
            data.map( (task) => (
            <View key={task.id}>
                <Text>Name: {task.name}</Text>
                <Text>Id: {task.id}</Text>
                <Text>Title: {task.title}</Text>
            </View>
            ))
        ) : (<Text>Loading data...</Text>)
        }
    </ScrollView>
  )
};
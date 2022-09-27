import React, { useEffect } from "react";
import { View, TouchableOpacity, Text, Image, StyleSheet,ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import FlexBox from './flexbox.js'
import colors from '../colors';
import Favorite from './favoriteComponent'
import { Entypo } from '@expo/vector-icons';
const catImageUrl = "https://thumbs.dreamstime.com/b/heart-bandaid-7782926.jpg";

const Home = () => {

    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            title:'Profissionais especializados',
            
            headerRight: () => (
                <Image
                    source={{ uri: catImageUrl }}
                    style={{
                        width: 50,
                        height: 40,
                        marginRight: 15,
                    }}
                />
            ),
        });
    }, [navigation]);

    return (
       
            
        <View style={styles.container}>
             <FlexBox
            extraStyle={{ paddingLeft: 20, paddingRight: 20, paddingTop: 10 }}
            direction="column"
          >
           
              <Favorite
                
               
                name={'Katia'}
                category={'(0)00000-0000'}
                
              />
               <Favorite
                
               
                name={'Manu'}
                category={'(0)00000-0000'}
                
              />
               <Favorite
                
               
                name={'Robson'}
                category={'(0)00000-0000'}
                
              />
               <Favorite
                
               
                name={'Jefferson'}
                category={'(0)00000-0000'}
                
              />
              <Favorite
                
               
                name={'Roberto'}
                category={'(0)00000-0000'}/>
            <Favorite
                
               
                name={'Roberto'}
                category={'(0)00000-0000'}/>
            



            
           

           
          </FlexBox>
          <TouchableOpacity
              onPress={() => navigation.navigate("Chat")}
              style={styles.chatButton}
          >
              <Entypo name="chat" size={24} color={colors.lightGray} />
          </TouchableOpacity>
      </View>
        
       
         
         
      
    
       
    );
    };

    export default Home;

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            backgroundColor: "#fff",
          
        },
        chatButton: {
            backgroundColor: colors.primary,
            
            height: 50,
            width: 50,
            borderRadius: 25,
            alignItems: 'center',
            justifyContent: 'center',
            shadowColor: colors.primary,
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: .9,
            shadowRadius: 8,
            marginRight: 20,
            marginBottom: 50,
        }
    });
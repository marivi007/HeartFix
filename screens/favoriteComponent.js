import React from "react";
import {
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  View,
  TouchableOpacity,

} from "react-native";
import FlexBox from "./flexbox";


import { colors } from "./colors";
const profile = "https://i.pinimg.com/550x/1c/c5/35/1cc535901e32f18db87fa5e340a18aff.jpg";


const container = StyleSheet.create({
  main: {
    borderRadius: 4,
    marginBottom: 10,
    width: "100%",
    height: 80,
    backgroundColor: colors.white,
    position: "relative",
    paddingLeft: 20,
    elevation: 4,
    shadowColor: "rgba(0,0,0, 0.7)",
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
  },
  starBtn: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  noImageContainer: {
    width: 50,
    height: 50,
    backgroundColor: colors.mainBlue,
    borderRadius: 60,
  },
  pressArea: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    height: 80,
  },
});

export default ({
  
  name = "",
  category = "",
 
}) => {
 


  return (
    <TouchableOpacity style={container.main}>
      

      <TouchableOpacity
        style={container.pressArea}
        onPress={() => console.log('apertei')}
      >
        <FlexBox justify="flex-start" extraStyle={{ width: "auto" }}>
          <Image
            style={{
              width: 50,
              height: 50,
              borderRadius: 50,
            }}
            source={{ uri: profile }}
          />
        </FlexBox>
        <FlexBox
          extraStyle={{ marginLeft: 15 }}
          direction="column"
          align="flex-start"
        >
          <Text>{name}</Text>
          <Text extraStyle={{ marginTop: 5 }} color={colors.darkGrey}>
            {category}
          </Text>
        </FlexBox>

      </TouchableOpacity>
        
     
    </TouchableOpacity>
  );
};

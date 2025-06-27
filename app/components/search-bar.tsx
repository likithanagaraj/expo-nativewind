import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import UserAvatar from './avatar';
const SearchBar = () => {
  const [text, settext] = useState("");
  const onChangeText = (text: string) => {
    settext(text);
  };
  return (
    <View className="bg-[#202125]   rounded-full h-14 w-full flex-row items-center justify-between px-6 ">
      {/* First View */}
      <View className='flex-row items-center justify-start gap-3'>
        <FontAwesome name="navicon" size={19} color="white" />
        <Text className='text-white font-semibold '>Search your notes</Text>
      </View>
      {/* Second View */}
      <View className='flex-row items-center justify-start gap-5'>
        <AntDesign name="layout" size={19} color="white" />
        <UserAvatar/>

      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({});

// <TextInput
//       className="bg-[#202125] p-5  rounded-full "
//       onChangeText={onChangeText}
//       value={text}
//     />

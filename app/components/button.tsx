import NoteStore from "@/store/notes-store";
import Entypo from "@expo/vector-icons/Entypo";
import { router } from "expo-router";
import React from "react";
import { TouchableOpacity, View } from "react-native";
const AddNotesButton = () => {
  const addNote = NoteStore((state) => state.addNote);
  const handleAddNote = () => {
    const id = Math.random();
    addNote({
      id: id,
      content: "",
      title: "",
    });

    router.push({
      pathname: "/create-note/[id]",
      params: {
        id: id,
      },
    });
  };

  return (
    <View className="absolute bottom-24 right-10">
      <TouchableOpacity
        onPress={handleAddNote}
        className="w-14 h-14 bg-[#A8C8FB] rounded-xl justify-center items-center shadow-md"
      >
        <Entypo name="plus" size={28} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default AddNotesButton;

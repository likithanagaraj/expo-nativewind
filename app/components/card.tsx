import NoteStore from "@/store/notes-store";
import { router } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const NotesCard = () => {
  const note = NoteStore((state)=>state.notes)
  const handleViewNote = (id:number)=>{
    router.push({
      pathname: "/create-note/[id]",
      params: {
        id: id , 
      },
    })
  }
  return (
    <View className="flex flex-row flex-wrap gap-2">
     {
      note.map((note)=>(
         <TouchableOpacity onPress={()=>handleViewNote(note.id)} key={note.id.toString() } className="rounded-lg p-4 mb-4 border-[0.2px] border-white flex-1 min-w-[45%]">
        <Text className="text-white text-lg font-semibold">{note.content}</Text>
      </TouchableOpacity>
      ))
      
     }
    </View>
  );
};

export default NotesCard;

const styles = StyleSheet.create({});

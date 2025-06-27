import NoteStore from "@/store/notes-store";
import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AddNotesButton from "./components/button";
import NotesCard from "./components/card";
import SearchBar from "./components/search-bar";

const Index = () => {
  const notes = NoteStore((state) => state.notes);
  const isNote = notes.length;

  return (
    <SafeAreaView className="flex-1 bg-[#131313]">
      {/* Scrollable content */}

      <View className="flex flex-col gap-5 px-4 py-4">
        <SearchBar />
        {isNote > 0 ? (
          <NotesCard />
        ) : (
          <Text className="txet-xl font-medium text-stone-300 mt-20 mx-auto">No notes added yet</Text>
        )}
      </View>

      {/* Floating Button */}
      <AddNotesButton />
    </SafeAreaView>
  );
};

export default Index;

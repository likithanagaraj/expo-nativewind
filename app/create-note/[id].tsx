import NoteStore from "@/store/notes-store";
import { Textarea } from "@/~/components/ui/textarea";
import Feather from "@expo/vector-icons/Feather";
import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const CreateNote = () => {
  const { id } = useLocalSearchParams();

  const updateNote = NoteStore((state) => state.updateNote);
  const [value, setValue] = React.useState("");
  const handleBackButton = () => {
    updateNote({
      content: value,
      id: Number(id),
    });
    router.back();
  };
  return (
    <SafeAreaView className="flex-1 bg-[#131313]">
      <View className="px-5 py-7">
        <Feather
          onPress={handleBackButton}
          name="arrow-left"
          size={24}
          color="white"
        />
      </View>
      <View className="flex-1">
        <Textarea
          autoFocus
          placeholder="Write your note here..."
          value={value}
          onChangeText={setValue}
          aria-labelledby="textareaLabel"
          placeholderTextColor={"#888888"}
          className="w-full h-full px-4 py-2 text-white border border-[#131313]"
          multiline
        />
      </View>
    </SafeAreaView>
  );
};

export default CreateNote;

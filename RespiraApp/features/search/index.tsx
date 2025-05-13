import { View } from "react-native";
import { TextInput } from "react-native-paper";

import { Input } from "@/components";
import { COLORS } from "@/constants";

import { styles } from "./styles";
import { SEARCH_PAGE_STRINGS } from "./strings";

export const SearchPage = () => {
  return (
    <View style={styles.container}>
      <Input
        label={SEARCH_PAGE_STRINGS.INPUT_LABEL}
        placeholder={SEARCH_PAGE_STRINGS.INPUT_PLACEHOLDER}
        rightIcon={
          <TextInput.Icon icon="cloud-search" color={COLORS.primaryLight} />
        }
        onChange={() => {}}
        value=""
      />
    </View>
  );
};

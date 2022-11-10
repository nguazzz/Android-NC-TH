import { Text, StyleSheet, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialIcons";
import COLORS from "../../consts/colors";
import { PrimaryButton } from "../components/Button";

const OnBoardScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <View style={{ height: "100%" }}>
        <Image
          style={{
            width: "100%",
            resizeMode: "contain",
            top: -150,
          }}
          source={require("../../assets/onBoardImage.jpg")}
        />

        <View style={style.textContainer}>
          <View>
            <Text
              style={{
                fontSize: 32,
                fontWeight: "bold",
                textAlign: "center",
                color: COLORS.white,
              }}
            >
              Ice Cream Shop
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <PrimaryButton
              onPress={() => navigation.navigate("Home")}
              title="Explore"
            />
            <Icon name="arrow-forward-ios" size={28} color="#f7dce7" />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  textContainer: {
    flex: 1,
    paddingHorizontal: 50,
    justifyContent: "space-between",
    paddingBottom: 40,
  },
});

export default OnBoardScreen;

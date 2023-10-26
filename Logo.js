import { View, Text } from "react-native";
import { styles } from "./styles";

export default function Logo(){
    return (
        <View style={styles.logoContainer}>
            <View style={styles.logoTitle}>
              <Text style={styles.logoTxtNrml1}>Talent</Text>
              <Text style={styles.logoTxtNrml2}>Finder</Text>
            </View>
            <View>
              <Text style={styles.logoTxtSmall}>by rework</Text>
            </View>
          </View>
    );
}
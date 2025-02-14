import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import LogoSvg from "../../assets/logo.svg";
import ButtonSvg from "../../assets/button.svg"

export function Home() {
    return (
        <View style={styles.container}>
            {/* HEADER */}
            <View style={styles.header}>
                <LogoSvg style={styles.logo} />
            </View>

            {/* CONTEÚDO */}
            <View style={styles.content}>
                <View style={styles.input}>
                    <TextInput style={styles.textInput} placeholder="Adicione uma nova tarefa"
                    placeholderTextColor="#808080" />
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>+</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.info}>
                    <View style={styles.titleContent}>
                    <Text style={styles.title}>Criadas</Text>
                    <View style={styles.contagem}></View>
                    </View>
                    <View style={styles.titleContent}>
                    <Text style={styles.title}>Concluídas</Text>
                    <View style={styles.contagem}></View>
                    </View>
                </View>
            </View>
            <View style={styles.border}></View>
        </View>
    );
}

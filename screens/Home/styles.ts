import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#171717",
        alignItems: "center",  // Centraliza os itens horizontalmente
        justifyContent: "center",  // Centraliza os itens verticalmente
    }, 
    header: {
        width: "100%",
        height: 173,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0d0d0d",
        
    },
    logo: {
        width: 110,
        height: 32,


    },
    content: {
        flex: 1,
        alignItems: "center",
        width: "100%"


    },
    input: {
        width: 327,
        flexDirection: "row",
        alignItems: "center",
        gap: 4,
        position: "relative",  // Troque de "absolute" para "relative"
        marginTop: -28,        // Alternativa ao transform (ajuste conforme necessário)
    },
    
    textInput: {
        flex: 1,  // Faz o input ocupar o máximo de espaço possível dentro do View
        height: 54,
        borderRadius: 6,
        paddingHorizontal: 16,
        backgroundColor: "#262626",
        color: "#F2F2F2"
    },
    button: {
        width: 52,
        height: 52,
        borderRadius: 6,
        backgroundColor: "#1E6F9F",
        justifyContent: "center",  // Centraliza o conteúdo dentro do botão
        alignItems: "center"
    },
        buttonText: {
        color: "#F2F2F2",
        fontSize: 20,

    }, 
    info: { 
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%",
        marginTop: 20,
        paddingBottom: 6,
        gap: 60
    },
    title: {
        color: "#8284FA",
        fontWeight: "700"

    },
    contagem: {
        width: 25,
        height: 19,
        borderRadius: 999,
        backgroundColor: "#333333"


    },
    titleContent: {
        flexDirection: "row",
        gap: 8
    },
    border: {
        flex: 1,
        height: 1,
        width: 327,
        backgroundColor: "#0D0D0D",
        alignItems: "center",
    }
    
});

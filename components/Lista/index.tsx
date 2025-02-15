import { StyleSheet, Text, View, FlatList, TouchableOpacity } from "react-native";
import { styles } from "./style";
import ClipBoardSvg from "../../assets/clipBoard.svg";
import TrashSvg from "../../assets/trash.svg";
import CheckSvg from "../../assets/check.svg";
import CheckCompletedSvg from "../../assets/checkComplet.svg";

type TasksProps = {
  tasks: string[]; // Lista de tarefas ativas
  onCompleteTask: (task: string) => void; // Função para marcar como concluída
  isTaskCompleted: (task: string) => boolean; // Função para verificar se a tarefa foi concluída
  onDeleteTask: (task: string) => void; // Função para deletar a tarefa
};

export function Lista({ tasks, onCompleteTask, isTaskCompleted, onDeleteTask }: TasksProps) {
  return (
    <FlatList
      data={tasks}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => {
    const completed = isTaskCompleted(item); // Verifica se a tarefa foi concluída

        return (
          <View style={styles.task}>
            <View style={styles.taskItem}>
              <TouchableOpacity onPress={() => onCompleteTask(item)}>
                {completed ? (
                  <CheckCompletedSvg /> // Exibe o ícone de tarefa concluída
                ) : (
                  <CheckSvg /> // Exibe o ícone de marcar como concluída
                )}
              </TouchableOpacity>
              <Text
                style={[
                  styles.taskText,
                  {
                    textDecorationLine: completed ? "line-through" : "none", // Risca a tarefa quando concluída
                    opacity: completed ? 0.5 : 1, // Reduz a opacidade quando concluída
                  },
                ]}
              >
                {item}
              </Text>
              <TouchableOpacity onPress={() => onDeleteTask(item)}>
                <TrashSvg style={styles.trash} />
              </TouchableOpacity>
            </View>
          </View>
        );
      }}
      ListEmptyComponent={
        <View style={styles.infoContent}>
          <ClipBoardSvg />
          <Text style={styles.titleBold}>Você ainda não tem tarefas cadastradas</Text>
          <Text style={styles.titleInfo}>Crie tarefas e organize seus itens a fazer</Text>
        </View>
      }
    />
  );
}

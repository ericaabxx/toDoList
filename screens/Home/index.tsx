import { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from "react-native";
import { styles } from "./styles";
import LogoSvg from "../../assets/logo.svg";
import ButtonSvg from "../../assets/button.svg";
import { Lista } from "../../components/Lista"; 
import PlusSvg from "../../assets/plus.svg";

export function Home() {
    const [tasks, setTasks] = useState<string[]>([]); // Lista de tarefas ativas
    const [completedTasks, setCompletedTasks] = useState<string[]>([]); // Lista de tarefas concluídas
    const [taskInput, setTaskInput] = useState("");

    // Função para adicionar uma nova tarefa
    function handleAddTask() {
        if (taskInput.trim() === "") {
            return Alert.alert("Adicione um texto!", "Adicione um texto para prosseguir"); // Evita adicionar tarefas vazias
        } //Caso não tenha uma tarefa, da um aviso
        setTasks([...tasks, taskInput]); // Adiciona a tarefa à lista
        setTaskInput(""); // Limpa o input após adicionar
    }

    // Função para marcar uma tarefa como concluída e mover para o final
    function handleCompleteTask(task: string) {
        const updatedTasks = tasks.filter((t) => t !== task); // Remove a tarefa da lista original
        setTasks([...updatedTasks, task]); // Adiciona a tarefa concluída no final da lista
        setCompletedTasks([...completedTasks, task]); // Adiciona a tarefa à lista de concluídas
    }

    // Função para deletar uma tarefa
    function handleDeleteTask(task: string) {
        setTasks(tasks.filter((t) => t !== task)); // Remove a tarefa da lista de tarefas
        setCompletedTasks(completedTasks.filter((t) => t !== task)); // Remove a tarefa da lista de concluídas
    }

    // Função para verificar se uma tarefa foi concluída
    function isTaskCompleted(task: string): boolean {
        return completedTasks.includes(task); // Verifica se a tarefa está na lista de concluídas
    }

    return (
        <View style={styles.container}>
            {/* HEADER */}
            <View style={styles.header}>
                <LogoSvg style={styles.logo} />
            </View>

            {/* CONTEÚDO */}
            <View style={styles.content}>
                {/* Campo de entrada de tarefas */}
                <View style={styles.input}>
                    <TextInput 
                        style={styles.textInput} 
                        placeholder="Adicione uma nova tarefa"
                        placeholderTextColor="#808080"
                        value={taskInput}
                        onChangeText={setTaskInput}
                    />
                    <TouchableOpacity style={styles.button} onPress={handleAddTask}>
                        <PlusSvg />
                    </TouchableOpacity>
                </View>

                {/* Contagem de tarefas */}
                <View style={[
                    styles.info,
                    tasks.length === 0 && completedTasks.length === 0 ? { borderBottomWidth: 1 } : { borderBottomWidth: 0 }
                ]}>
                    <View style={styles.titleContent}>
                        <Text style={styles.title}>Criadas</Text>
                        <View style={styles.contagem}>
                            <Text style={styles.counter}>{tasks.length}</Text>
                        </View>
                    </View>
                    <View style={styles.titleContent}>
                        <Text style={styles.title}>Concluídas</Text>
                        <View style={styles.contagem}>
                            <Text style={styles.counter}>{completedTasks.length}</Text>
                        </View>
                    </View>
                </View>

                <Lista 
                    tasks={tasks} 
                    onCompleteTask={handleCompleteTask} 
                    isTaskCompleted={isTaskCompleted} 
                    onDeleteTask={handleDeleteTask} // Passando a função de deletar
                />
            </View>
        </View>
    );
}

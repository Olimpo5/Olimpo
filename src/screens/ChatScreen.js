import React, { useState, useEffect, useRef } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import { Colors, Fonts } from "../constants/theme";


export default function ChatScreen() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const ws = useRef(null);
  const scrollViewRef = useRef();

  useEffect(() => {
    ws.current = new WebSocket("ws://10.0.2.2:3000/ws/chat");

    ws.current.onopen = () => {
      appendMessage("Conectado al bot", "bot");
    };

    ws.current.onmessage = (event) => {
      appendMessage(event.data, "bot");
    };

    ws.current.onerror = (err) => {
      appendMessage("Error de conexión", "bot");
      console.error(err);
    };

    return () => {
      ws.current.close();
    };
  }, []);

  const appendMessage = (text, sender) => {
    setMessages((prev) => [...prev, { text, sender }]);
  };

  const sendMessage = () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    appendMessage(trimmed, "user");
    ws.current.send(trimmed);
    setInput("");
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView
        style={styles.messagesContainer}
        ref={scrollViewRef}
        onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
      >
        {messages.map((msg, index) => (
          <View
            key={index}
            style={[styles.message, msg.sender === "user" ? styles.user : styles.bot]}
          >
            <Text style={msg.sender === "user" ? styles.userText : styles.botText}>
              {msg.text}
            </Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Escribe algo..."
          value={input}
          onChangeText={setInput}
          onSubmitEditing={sendMessage}
          placeholderTextColor={Colors.fontColor}
        />
        <TouchableOpacity style={styles.button} onPress={sendMessage}>
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor:Colors.background},
  messagesContainer: { flex: 1, padding: 10 },
  message: { marginBottom: 10, padding: 8, borderRadius: 8, maxWidth: "80%" },
  user: { backgroundColor: Colors.secondary, alignSelf: "flex-end" },
  bot: { backgroundColor: Colors.primary, alignSelf: "flex-start" },
  userText: { color: Colors.fontColor},
  botText: { color: Colors.fontColor },
  inputContainer: { flexDirection: "row", padding: 10, borderTopWidth: 1, borderColor: "#ddd", color:Colors.fontColor},
  input: { flex: 1, borderWidth: 1, borderColor: "#ccc", borderRadius: 5, paddingHorizontal: 10, color:Colors.fontColor },
  button: { marginLeft: 5, backgroundColor:Colors.secondary, borderRadius: 5, justifyContent: "center", paddingHorizontal: 15 },
  buttonText: { color: "white" },
});

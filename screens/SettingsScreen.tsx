import React, { useState } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
import { SettingsScreenNavigationProp } from "../navigation/navigationTypes";
import Card from "../components/Card";
import Button from "../components/Button";
import { useDebounce } from "../hooks";

interface SettingsScreenProps {
  navigation: SettingsScreenNavigationProp;
}

interface SettingItem {
  id: string;
  title: string;
  value: boolean;
}

const SettingsScreen: React.FC<SettingsScreenProps> = ({ navigation }) => {
  const [settings, setSettings] = useState<SettingItem[]>([
    { id: "notifications", title: "Enable Notifications", value: true },
    { id: "darkMode", title: "Dark Mode", value: false },
    { id: "analytics", title: "Share Analytics", value: true },
    { id: "autoUpdate", title: "Auto Update", value: false },
  ]);

  const debouncedSettings = useDebounce(settings, 500);

  const toggleSetting = (id: string) => {
    setSettings((prevSettings) =>
      prevSettings.map((setting) =>
        setting.id === id ? { ...setting, value: !setting.value } : setting
      )
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <Card title="App Settings">
        <Text style={styles.subtitle}>Preferences</Text>
        {settings.map((setting) => (
          <View key={setting.id} style={styles.settingRow}>
            <Text style={styles.settingTitle}>{setting.title}</Text>
            <Switch
              value={setting.value}
              onValueChange={() => toggleSetting(setting.id)}
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={setting.value ? "#2196F3" : "#f4f3f4"}
            />
          </View>
        ))}
        <Text style={styles.note}>
          Settings are saved after 500ms (using useDebounce hook)
        </Text>
      </Card>
      <Button
        title="Reset Settings"
        onPress={() =>
          setSettings((prevSettings) =>
            prevSettings.map((setting) => ({ ...setting, value: false }))
          )
        }
        buttonStyle={styles.resetButton}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },
  settingRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  settingTitle: {
    fontSize: 16,
  },
  note: {
    fontSize: 12,
    color: "#666",
    fontStyle: "italic",
    marginTop: 15,
    textAlign: "center",
  },
  resetButton: {
    backgroundColor: "#F44336",
    marginTop: 20,
  },
});

export default SettingsScreen;

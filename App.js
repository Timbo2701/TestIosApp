import React from "react";
import { SafeAreaView, View, Text, StyleSheet, StatusBar } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function App() {
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.iconBox}>
            <Ionicons name="fitness" size={42} color="#0B0F1A" />
          </View>

          <Text style={styles.title}>FitPulse</Text>
          <Text style={styles.subtitle}>Deine erste iOS Test-App läuft 🔥</Text>

          <View style={styles.statsRow}>
            <View style={styles.statBox}>
              <Text style={styles.statValue}>8.240</Text>
              <Text style={styles.statLabel}>Schritte</Text>
            </View>

            <View style={styles.statBox}>
              <Text style={styles.statValue}>612</Text>
              <Text style={styles.statLabel}>kcal</Text>
            </View>
          </View>

          <View style={styles.progressOuter}>
            <View style={styles.progressInner} />
          </View>

          <Text style={styles.progressText}>72% vom Tagesziel erreicht</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#0B0F1A",
  },
  container: {
    flex: 1,
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width: "100%",
    backgroundColor: "#151B2E",
    borderRadius: 32,
    padding: 28,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.08)",
  },
  iconBox: {
    width: 86,
    height: 86,
    borderRadius: 28,
    backgroundColor: "#7CFFB2",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 24,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 34,
    fontWeight: "900",
  },
  subtitle: {
    color: "rgba(255,255,255,0.55)",
    fontSize: 16,
    marginTop: 8,
    textAlign: "center",
  },
  statsRow: {
    flexDirection: "row",
    gap: 14,
    marginTop: 28,
    width: "100%",
  },
  statBox: {
    flex: 1,
    backgroundColor: "#0F1424",
    borderRadius: 22,
    padding: 18,
    alignItems: "center",
  },
  statValue: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "900",
  },
  statLabel: {
    color: "rgba(255,255,255,0.45)",
    fontSize: 13,
    marginTop: 5,
  },
  progressOuter: {
    width: "100%",
    height: 14,
    backgroundColor: "rgba(255,255,255,0.08)",
    borderRadius: 999,
    overflow: "hidden",
    marginTop: 28,
  },
  progressInner: {
    width: "72%",
    height: "100%",
    backgroundColor: "#7CFFB2",
    borderRadius: 999,
  },
  progressText: {
    color: "#7CFFB2",
    fontSize: 15,
    fontWeight: "800",
    marginTop: 14,
  },
});

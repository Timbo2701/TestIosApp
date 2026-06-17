import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  StyleSheet,
  StatusBar,
  Dimensions,
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import Svg, { Circle } from "react-native-svg";

const { width } = Dimensions.get("window");

function ProgressRing({ size = 140, strokeWidth = 14, progress = 0.72 }) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference * (1 - progress);

  return (
    <View style={{ width: size, height: size, alignItems: "center", justifyContent: "center" }}>
      <Svg width={size} height={size} style={{ position: "absolute" }}>
        <Circle
          stroke="rgba(255,255,255,0.08)"
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
        />
        <Circle
          stroke="#7CFFB2"
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={dashOffset}
          strokeLinecap="round"
          rotation="-90"
          origin={`${size / 2}, ${size / 2}`}
        />
      </Svg>
      <Text style={styles.ringNumber}>8.240</Text>
      <Text style={styles.ringLabel}>Schritte</Text>
    </View>
  );
}

function StatCard({ icon, title, value, sub, accent }) {
  return (
    <View style={styles.statCard}>
      <View style={[styles.iconBubble, { backgroundColor: accent + "22" }]}>
        {icon}
      </View>
      <Text style={styles.statTitle}>{title}</Text>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statSub}>{sub}</Text>
    </View>
  );
}

function WorkoutCard({ title, duration, kcal, icon, color }) {
  return (
    <View style={styles.workoutCard}>
      <View style={[styles.workoutIcon, { backgroundColor: color + "26" }]}>
        {icon}
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.workoutTitle}>{title}</Text>
        <Text style={styles.workoutMeta}>{duration} · {kcal} kcal</Text>
      </View>
      <Ionicons name="chevron-forward" size={22} color="rgba(255,255,255,0.45)" />
    </View>
  );
}

export default function App() {
  const week = [
    { d: "Mo", h: 62 },
    { d: "Di", h: 78 },
    { d: "Mi", h: 42 },
    { d: "Do", h: 91 },
    { d: "Fr", h: 68 },
    { d: "Sa", h: 85 },
    { d: "So", h: 55 },
  ];

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <View>
            <Text style={styles.hello}>Servus Tim 👋</Text>
            <Text style={styles.subtitle}>Heute ist ein starker Tag.</Text>
          </View>
          <View style={styles.profileBubble}>
            <Ionicons name="fitness" size={25} color="#0B0F1A" />
          </View>
        </View>

        <View style={styles.heroCard}>
          <View>
            <Text style={styles.heroKicker}>Tagesziel</Text>
            <Text style={styles.heroTitle}>Du bist bei 72%</Text>
            <Text style={styles.heroText}>Noch 2.760 Schritte bis zum Ziel.</Text>
          </View>
          <ProgressRing />
        </View>

        <View style={styles.statsGrid}>
          <StatCard
            title="Kalorien"
            value="612"
            sub="aktiv verbrannt"
            accent="#FFB86B"
            icon={<Ionicons name="flame" size={23} color="#FFB86B" />}
          />
          <StatCard
            title="Workout"
            value="48 min"
            sub="heute aktiv"
            accent="#8EA7FF"
            icon={<MaterialCommunityIcons name="dumbbell" size={23} color="#8EA7FF" />}
          />
          <StatCard
            title="Wasser"
            value="1.8 L"
            sub="von 2.5 L"
            accent="#65D9FF"
            icon={<Ionicons name="water" size={23} color="#65D9FF" />}
          />
          <StatCard
            title="Puls"
            value="68"
            sub="bpm Ruhepuls"
            accent="#FF6B9A"
            icon={<Ionicons name="heart" size={23} color="#FF6B9A" />}
          />
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Wochenübersicht</Text>
          <Text style={styles.sectionAction}>Juni</Text>
        </View>

        <View style={styles.chartCard}>
          {week.map((item) => (
            <View key={item.d} style={styles.barColumn}>
              <View style={styles.barTrack}>
                <View style={[styles.barFill, { height: `${item.h}%` }]} />
              </View>
              <Text style={styles.barLabel}>{item.d}</Text>
            </View>
          ))}
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Workouts</Text>
          <Text style={styles.sectionAction}>Alle</Text>
        </View>

        <WorkoutCard
          title="Push Day"
          duration="45 min"
          kcal="420"
          color="#7CFFB2"
          icon={<MaterialCommunityIcons name="weight-lifter" size={24} color="#7CFFB2" />}
        />
        <WorkoutCard
          title="Joggen"
          duration="28 min"
          kcal="310"
          color="#65D9FF"
          icon={<Ionicons name="walk" size={24} color="#65D9FF" />}
        />
        <WorkoutCard
          title="Mobility"
          duration="15 min"
          kcal="90"
          color="#C28BFF"
          icon={<MaterialCommunityIcons name="yoga" size={24} color="#C28BFF" />}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#0B0F1A",
  },
  container: {
    padding: 20,
    paddingBottom: 40,
  },
  header: {
    marginTop: 12,
    marginBottom: 22,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  hello: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "800",
  },
  subtitle: {
    color: "rgba(255,255,255,0.55)",
    fontSize: 15,
    marginTop: 5,
  },
  profileBubble: {
    width: 48,
    height: 48,
    borderRadius: 18,
    backgroundColor: "#7CFFB2",
    alignItems: "center",
    justifyContent: "center",
  },
  heroCard: {
    backgroundColor: "#151B2E",
    borderRadius: 32,
    padding: 22,
    minHeight: 190,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.08)",
  },
  heroKicker: {
    color: "#7CFFB2",
    fontSize: 13,
    fontWeight: "800",
    textTransform: "uppercase",
    letterSpacing: 1.2,
  },
  heroTitle: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "900",
    marginTop: 8,
    maxWidth: width * 0.42,
  },
  heroText: {
    color: "rgba(255,255,255,0.55)",
    fontSize: 14,
    marginTop: 10,
    maxWidth: width * 0.42,
    lineHeight: 20,
  },
  ringNumber: {
    color: "#FFFFFF",
    fontSize: 27,
    fontWeight: "900",
  },
  ringLabel: {
    color: "rgba(255,255,255,0.50)",
    fontSize: 13,
    marginTop: 3,
  },
  statsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    marginTop: 16,
  },
  statCard: {
    width: (width - 52) / 2,
    backgroundColor: "#121827",
    borderRadius: 24,
    padding: 16,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.07)",
  },
  iconBubble: {
    width: 42,
    height: 42,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 14,
  },
  statTitle: {
    color: "rgba(255,255,255,0.55)",
    fontSize: 14,
  },
  statValue: {
    color: "#FFFFFF",
    fontSize: 25,
    fontWeight: "900",
    marginTop: 4,
  },
  statSub: {
    color: "rgba(255,255,255,0.38)",
    fontSize: 12,
    marginTop: 5,
  },
  sectionHeader: {
    marginTop: 25,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  sectionTitle: {
    color: "#FFFFFF",
    fontSize: 21,
    fontWeight: "900",
  },
  sectionAction: {
    color: "#7CFFB2",
    fontSize: 14,
    fontWeight: "800",
  },
  chartCard: {
    height: 180,
    backgroundColor: "#121827",
    borderRadius: 26,
    padding: 18,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.07)",
  },
  barColumn: {
    alignItems: "center",
    gap: 9,
  },
  barTrack: {
    width: 22,
    height: 120,
    borderRadius: 999,
    backgroundColor: "rgba(255,255,255,0.07)",
    justifyContent: "flex-end",
    overflow: "hidden",
  },
  barFill: {
    width: "100%",
    backgroundColor: "#7CFFB2",
    borderRadius: 999,
  },
  barLabel: {
    color: "rgba(255,255,255,0.55)",
    fontSize: 12,
    fontWeight: "700",
  },
  workoutCard: {
    backgroundColor: "#121827",
    borderRadius: 24,
    padding: 16,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.07)",
  },
  workoutIcon: {
    width: 48,
    height: 48,
    borderRadius: 17,
    alignItems: "center",
    justifyContent: "center",
  },
  workoutTitle: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "850",
  },
  workoutMeta: {
    color: "rgba(255,255,255,0.45)",
    fontSize: 13,
    marginTop: 4,
  },
});

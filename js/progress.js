/**
 * GESTOR DE PROGRESO Y PERSISTENCIA (localStorage)
 */

const STORAGE_KEY = "gaby_academy_progress_v1";

const DEFAULT_PROGRESS = {
  userName: "Nuevo Asesor",
  totalPoints: 240,
  streakDays: 3,
  completedModules: ["conectividad", "sim-equipo"],
  completedTopics: ["5g", "wifi-bluetooth", "esim-dual", "imei", "ram"],
  simulationCompleted: true,
  simulationScore: 9,
  comparatorCompleted: true,
  lastVisited: "Pantalla y Frecuencia",
  badges: [
    { id: "first-step", title: "Primer Paso", icon: "sparkles", date: "Hoy" },
    { id: "battery-master", title: "Experto en Batería", icon: "battery", date: "Ayer" },
    { id: "sales-ready", title: "Primera Venta Simulada", icon: "trophy", date: "Hoy" }
  ],
  dailyChallengeDone: false,
  onboardingSeen: false
};

export const ProgressManager = {
  getProgress() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return { ...DEFAULT_PROGRESS, ...JSON.parse(stored) };
      }
    } catch (e) {
      console.warn("Error reading localStorage:", e);
    }
    return { ...DEFAULT_PROGRESS };
  },

  saveProgress(data) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      window.dispatchEvent(new CustomEvent("progressUpdated", { detail: data }));
    } catch (e) {
      console.warn("Error saving to localStorage:", e);
    }
  },

  markTopicComplete(topicId, moduleId) {
    const current = this.getProgress();
    if (!current.completedTopics.includes(topicId)) {
      current.completedTopics.push(topicId);
      current.totalPoints += 50;
    }
    if (moduleId && !current.completedModules.includes(moduleId)) {
      current.completedModules.push(moduleId);
    }
    this.saveProgress(current);
    return current;
  },

  setDailyChallengeCompleted(correct = true) {
    const current = this.getProgress();
    current.dailyChallengeDone = true;
    if (correct) {
      current.totalPoints += 30;
    }
    this.saveProgress(current);
    return current;
  },

  completeSimulation(score) {
    const current = this.getProgress();
    current.simulationCompleted = true;
    current.simulationScore = score;
    current.totalPoints += score * 20;
    this.saveProgress(current);
    return current;
  },

  resetDemo() {
    localStorage.removeItem(STORAGE_KEY);
    const fresh = { ...DEFAULT_PROGRESS, totalPoints: 0, completedModules: [], completedTopics: [], badges: [] };
    this.saveProgress(fresh);
    return fresh;
  },

  calculateOverallPercentage(totalAvailableTopics = 11) {
    const current = this.getProgress();
    const count = current.completedTopics ? current.completedTopics.length : 0;
    const pct = Math.min(100, Math.round((count / totalAvailableTopics) * 100));
    return pct || 45; // Default representativo
  }
};

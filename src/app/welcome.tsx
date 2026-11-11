import { Image } from 'expo-image';
import { router } from 'expo-router';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
} from 'react-native';

export default function WelcomeScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.imageContainer}>
        <Image
          source={require('@/assets/images/startpage.jpeg')}
          style={styles.heroImage}
          contentFit="cover"
        />

        <View style={styles.budgetCard}>
          <Text style={styles.budgetLabel}>FRIDAY PLAN</Text>
          <Text style={styles.budgetAmount}>630 EGP total</Text>
          <Text style={styles.budgetRemaining}>
            100 EGP remaining
          </Text>
        </View>
      </View>

      <View style={styles.details}>
        <Text style={styles.logo}>
          LifeMate <Text style={styles.logoAI}>AI</Text>
        </Text>

        <Text style={styles.eyebrow}>
          YOUR LIFE, WITHIN YOUR BUDGET
        </Text>

        <Text style={styles.title}>
          Your life, thoughtfully planned.
        </Text>

        <Text style={styles.description}>
          Plan your days, manage your budget, and discover
          experiences that fit your lifestyle.
        </Text>

        <Pressable
          style={styles.primaryButton}
          onPress={() => router.push('/registration' as any)}
        >
          <Text style={styles.primaryButtonText}>
            Let's get started →
          </Text>
        </Pressable>

        <Pressable
          style={styles.secondaryButton}
          onPress={() => router.push('/(tabs)/explore' as any)}
        >
          <Text style={styles.secondaryButtonText}>
            Explore first
          </Text>
        </Pressable>

        <Text style={styles.footer}>
          Smart plans. Real budgets. Better days.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF8F3',
  },
  content: {
    flexGrow: 1,
  },
  imageContainer: {
    height: 390,
    position: 'relative',
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
  budgetCard: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 16,
    minWidth: 175,
  },
  budgetLabel: {
    fontSize: 10,
    color: '#777777',
    letterSpacing: 1.5,
    marginBottom: 6,
  },
  budgetAmount: {
    fontSize: 20,
    fontWeight: '700',
    color: '#173F39',
  },
  budgetRemaining: {
    fontSize: 12,
    color: '#658A78',
    marginTop: 5,
  },
  details: {
    paddingHorizontal: 28,
    paddingTop: 25,
    paddingBottom: 30,
    alignItems: 'center',
  },
  logo: {
    fontSize: 26,
    fontWeight: '800',
    color: '#183F38',
  },
  logoAI: {
    color: '#C49A62',
  },
  eyebrow: {
    fontSize: 10,
    letterSpacing: 2,
    color: '#A18B6B',
    marginTop: 22,
    marginBottom: 12,
    fontWeight: '600',
  },
  title: {
    fontSize: 36,
    lineHeight: 43,
    fontWeight: '700',
    color: '#173F39',
    textAlign: 'center',
  },
  description: {
    fontSize: 15,
    lineHeight: 24,
    color: '#777777',
    textAlign: 'center',
    marginTop: 14,
    marginBottom: 28,
  },
  primaryButton: {
    width: '100%',
    backgroundColor: '#1C4840',
    paddingVertical: 17,
    borderRadius: 14,
    alignItems: 'center',
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  secondaryButton: {
    paddingVertical: 17,
  },
  secondaryButtonText: {
    color: '#244A42',
    fontSize: 15,
    fontWeight: '600',
  },
  footer: {
    color: '#999999',
    fontSize: 11,
    marginTop: 8,
  },
});
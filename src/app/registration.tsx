import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import { router } from 'expo-router';

export default function RegistrationScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    if (!name || !email || !password || !confirmPassword) {
      Alert.alert('Missing information', 'Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Password mismatch', 'Passwords do not match.');
      return;
    }

    Alert.alert(
      'Almost there!',
      'Your registration form is ready. Authentication will be connected later.'
    );
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <Pressable
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Text style={styles.backText}>← Back</Text>
        </Pressable>

        <View style={styles.logoContainer}>
          <View style={styles.logoIcon}>
            <Text style={styles.logoStar}>✦</Text>
          </View>

          <Text style={styles.logo}>
            LifeMate <Text style={styles.logoAI}>AI</Text>
          </Text>
        </View>

        <View style={styles.heading}>
          <Text style={styles.title}>Create your account</Text>
          <Text style={styles.subtitle}>
            Let's make your everyday life more thoughtful.
          </Text>
        </View>

        <View style={styles.form}>
          <Text style={styles.label}>Full name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your full name"
            placeholderTextColor="#A5A39D"
            value={name}
            onChangeText={setName}
            autoCapitalize="words"
          />

          <Text style={styles.label}>Email address</Text>
          <TextInput
            style={styles.input}
            placeholder="you@example.com"
            placeholderTextColor="#A5A39D"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Create a password"
            placeholderTextColor="#A5A39D"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <Text style={styles.label}>Confirm password</Text>
          <TextInput
            style={styles.input}
            placeholder="Confirm your password"
            placeholderTextColor="#A5A39D"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />
        </View>

        <Pressable
          style={styles.registerButton}
          onPress={handleRegister}
        >
          <Text style={styles.registerButtonText}>
            Create account →
          </Text>
        </Pressable>

        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>
            Already have an account?{' '}
          </Text>

          <Pressable
            onPress={() => router.push('/login' as any)}          >
            <Text style={styles.loginLink}>Log in</Text>
          </Pressable>
        </View>

        <Text style={styles.footer}>
          Your life, thoughtfully planned.
        </Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF8F3',
  },
  content: {
    flexGrow: 1,
    paddingHorizontal: 28,
    paddingTop: 55,
    paddingBottom: 35,
  },
  backButton: {
    marginBottom: 28,
  },
  backText: {
    fontSize: 15,
    color: '#31574D',
    fontWeight: '600',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  logoIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#17483F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoStar: {
    color: '#FFFFFF',
    fontSize: 23,
  },
  logo: {
    fontSize: 25,
    fontWeight: '800',
    color: '#173F39',
  },
  logoAI: {
    color: '#C49A62',
  },
  heading: {
    marginTop: 40,
    marginBottom: 30,
  },
  title: {
    fontSize: 29,
    fontWeight: '700',
    color: '#173F39',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    lineHeight: 22,
    color: '#85847E',
  },
  form: {
    gap: 10,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#294A40',
    marginTop: 9,
  },
  input: {
    height: 54,
    borderWidth: 1,
    borderColor: '#DDD9CF',
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 14,
    color: '#173F39',
    backgroundColor: '#FFFFFF',
  },
  registerButton: {
    backgroundColor: '#17483F',
    height: 57,
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  registerButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 25,
  },
  loginText: {
    color: '#85847E',
    fontSize: 13,
  },
  loginLink: {
    color: '#17483F',
    fontSize: 13,
    fontWeight: '700',
  },
  footer: {
    textAlign: 'center',
    color: '#A5A39D',
    fontSize: 11,
    marginTop: 35,
  },
});
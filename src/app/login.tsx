import { useState } from 'react';
import { router } from 'expo-router';
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

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email.trim() || !password) {
      Alert.alert('Missing information', 'Please enter your email and password.');
      return;
    }

    Alert.alert(
      'Login',
      'Your login form is ready. Authentication will be connected later.'
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
          <Text style={styles.title}>Welcome back!</Text>
          <Text style={styles.subtitle}>
            We're happy to see you again.
          </Text>
        </View>

        <View style={styles.form}>
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
            placeholder="Enter your password"
            placeholderTextColor="#A5A39D"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>

        <Pressable
          style={styles.forgotButton}
          onPress={() => Alert.alert(
            'Forgot password?',
            'Password recovery will be available soon.'
          )}
        >
          <Text style={styles.forgotText}>
            Forgot password?
          </Text>
        </Pressable>

        <Pressable
          style={styles.loginButton}
          onPress={handleLogin}
        >
          <Text style={styles.loginButtonText}>
            Log in →
          </Text>
        </Pressable>

        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>
            Don't have an account?{' '}
          </Text>

          <Pressable
            onPress={() => router.push('/registration' as any)}
          >
            <Text style={styles.signupLink}>Sign up</Text>
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
    marginTop: 65,
    marginBottom: 35,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#173F39',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#85847E',
    lineHeight: 22,
  },
  form: {
    gap: 12,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#294A40',
    marginTop: 10,
  },
  input: {
    height: 56,
    borderWidth: 1,
    borderColor: '#DDD9CF',
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 15,
    color: '#173F39',
    backgroundColor: '#FFFFFF',
  },
  forgotButton: {
    alignSelf: 'flex-end',
    marginTop: 18,
  },
  forgotText: {
    color: '#17483F',
    fontSize: 13,
    fontWeight: '600',
  },
  loginButton: {
    backgroundColor: '#17483F',
    height: 57,
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 35,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
  },
  signupText: {
    color: '#85847E',
    fontSize: 13,
  },
  signupLink: {
    color: '#17483F',
    fontSize: 13,
    fontWeight: '700',
  },
  footer: {
    textAlign: 'center',
    color: '#A5A39D',
    fontSize: 11,
    marginTop: 65,
  },
});
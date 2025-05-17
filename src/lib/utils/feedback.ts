/**
 * Feedback utilities for sound effects and haptic feedback
 */

// Sound effect types mapped to audio file paths (would be actual files in a production app)
const SOUND_EFFECTS = {
  click: "/sounds/click.mp3",
  success: "/sounds/success.mp3",
  notification: "/sounds/notification.mp3",
  decision: "/sounds/decision.mp3",
  save: "/sounds/save.mp3",
  error: "/sounds/error.mp3",
};

type SoundEffectType = keyof typeof SOUND_EFFECTS;

// Cache for loaded audio elements
const audioCache: Record<string, HTMLAudioElement> = {};

/**
 * Play a sound effect if audio is enabled
 * @param type The type of sound effect to play
 * @param volume Volume from 0-100
 */
export function playSound(type: SoundEffectType, volume: number = 50): void {
  // Skip if we're not in a browser
  if (typeof window === "undefined") return;

  try {
    // Use cached audio element or create a new one
    if (!audioCache[type]) {
      const audio = new Audio(SOUND_EFFECTS[type]);
      audioCache[type] = audio;
    }

    const audioElement = audioCache[type];
    audioElement.volume = volume / 100;

    // Reset audio to start (in case it was already playing)
    audioElement.currentTime = 0;

    // Play the sound
    audioElement.play().catch((error) => {
      // Ignore errors - audio might be blocked by browser without user interaction
      console.log(`Audio play prevented: ${error.message}`);
    });
  } catch (error) {
    console.error("Error playing sound effect:", error);
  }
}

/**
 * Trigger haptic feedback if available and enabled
 * @param pattern The vibration pattern to use
 */
export function triggerHapticFeedback(pattern: number | number[] = [50]): void {
  // Skip if we're not in a browser or vibration is not supported
  if (typeof window === "undefined" || !window.navigator?.vibrate) return;

  try {
    window.navigator.vibrate(pattern);
  } catch (error) {
    console.error("Error triggering haptic feedback:", error);
  }
}

/**
 * Combined feedback function for sound and haptic feedback
 * @param soundType The type of sound to play
 * @param volume Sound volume (0-100)
 * @param hapticPattern Vibration pattern
 */
export function provideFeedback(
  soundType: SoundEffectType,
  volume: number = 50,
  hapticPattern: number | number[] = [50]
): void {
  playSound(soundType, volume);
  triggerHapticFeedback(hapticPattern);
}

/**
 * Initialize the Web Speech API for text-to-speech
 * @returns SpeechSynthesis object if available
 */
export function initTextToSpeech(): SpeechSynthesis | null {
  if (typeof window === "undefined" || !window.speechSynthesis) return null;
  return window.speechSynthesis;
}

/**
 * Speak text using the Web Speech API
 * @param text The text to speak
 * @param rate Speaking rate (0.1-10, default 1)
 * @param pitch Speaking pitch (0-2, default 1)
 */
export function speakText(
  text: string,
  rate: number = 1,
  pitch: number = 1
): void {
  const speech = initTextToSpeech();
  if (!speech) return;

  try {
    // Cancel any existing speech
    speech.cancel();

    // Create a new utterance
    const utterance = new SpeechSynthesisUtterance(text);

    // Configure settings
    utterance.rate = rate;
    utterance.pitch = pitch;

    // Speak the text
    speech.speak(utterance);
  } catch (error) {
    console.error("Error using text-to-speech:", error);
  }
}

export function speak(text: string, rate: number = 0.9): void {
	if (typeof window === 'undefined' || !window.speechSynthesis) return;
	window.speechSynthesis.cancel();
	const utterance = new SpeechSynthesisUtterance(text);
	utterance.rate = rate;
	utterance.lang = 'en-AU';
	window.speechSynthesis.speak(utterance);
}

export function stopSpeaking(): void {
	if (typeof window === 'undefined' || !window.speechSynthesis) return;
	window.speechSynthesis.cancel();
}

export function isSpeechSupported(): boolean {
	if (typeof window === 'undefined') return false;
	return 'speechSynthesis' in window;
}

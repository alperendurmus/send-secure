const isPrivateIP = (ip) => {
	const octets = ip.split(':').pop().split('.').map(Number);
	if (octets.length === 4) {
		if (octets[0] === 10) {
			return true;
		} else if (octets[0] === 172 && octets[1] >= 16 && octets[1] <= 31) {
			return true;
		} else if (octets[0] === 192 && octets[1] === 168) {
			return true;
		} else if (octets[0] === 127) {
			return true;
		}
	} else if (ip === '::1') {
		return true;
	}

	return false;
}

const isLocal = (host = '') => {
	if (typeof window === 'undefined') return false;

	const hostname = host || window?.location?.hostname;
	return hostname === "localhost" ||
		hostname === "127.0.0.1" ||
		hostname === " [::1]" ||
		hostname.startsWith("192.168.") ||
		hostname.startsWith("10.") ||
		hostname.endsWith(".local");
}

const MESSAGE = {
	DEFAULT: 'default', // Common message type
	RECEIVER: {
		CONNECTED: 'receiver-connected',
		CONNECTION_REQUEST: 'receiver-connection-request',
		ANSWER: 'receiver-answer',
	},
	SENDER: {
		CONNECTED: 'sender-connected',
		CONNECTION_ACCEPTED: 'sender-connection-accepted',
		CONNECTION_REJECTED: 'sender-connection-rejected',
		OFFER: 'sender-offer',
		CANDIDATE: 'sender-candidate',
	},
	ERROR: {
		SENDER_ALREADY_EXISTS: 'error-sender-already-exists',
		RECEIVER_ALREADY_EXISTS: 'error-receiver-already-exists',
		INVALID_UUID: 'error-invalid-uuid',
	}
}

const env = {
	SIGNALING_SERVER: isLocal() ? 'localhost:3001' : 'send-secure-signaling.alme.pro'
}

module.exports = {
	isPrivateIP,
	MESSAGE,
	env,
	isLocal
};
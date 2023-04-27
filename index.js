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

const MESSAGE = {
	RECEIVER: {
		CONNECTED: 10,
		CONNECTION_REQUEST: 11,
		ANSWER: 12,
	},
	SENDER: {
		CONNECTED: 20,
		CONNECTION_ACCEPTED: 21,
		CONNECTION_REJECTED: 22,
		OFFER: 23,
		CANDIDATE: 24,
	},
	ERROR: {
		SENDER_ALREADY_EXISTS: 30,
		RECEIVER_ALREADY_EXISTS: 31,
	}
}

module.exports = {
	isPrivateIP,
	MESSAGE
};
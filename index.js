function isPrivateIP(ip) {
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

module.exports = {
	isPrivateIP
};
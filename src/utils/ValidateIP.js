export default function isValidIP (ip) {
  const ipRegex = /^[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}$/;
  return ipRegex.test(ip);
}
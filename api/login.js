export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const { email, password } = req.body || {};

  const validEmail = 'admin@trueculture.com';
  const validPassword = 'admin123';

  if (email === validEmail && password === validPassword) {
    return res.status(200).json({
      success: true,
      message: 'Login successful',
      redirect: '/admin/index.html'
    });
  }

  return res.status(401).json({
    success: false,
    message: 'Invalid email or password.'
  });
}

const jwt = require('jsonwebtoken');
require('dotenv').config();

const secret = process.env.JWT_SECRET || 'm3u23gr3d1nh02up3r23cr3t0';

const authService = {
  createToken: (body) => {
    const create = jwt.sign({ body }, secret, { expiresIn: '1m' });
    return create;
  },
  readToken: (token) => {
    try {
      const vrf = jwt.verify({ token }, secret);
      return vrf;
    } catch (error) {
      throw new Error('Token must be a valid token');
    }
  },
};

module.exports = authService;
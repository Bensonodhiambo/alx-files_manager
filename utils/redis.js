import redis from 'redis';
import { promisify } from 'util';

class RedisClient {
  constructor() {
    this.client = redis.createClient();

    // Handle errors
    this.client.on('error', (error) => {
      console.error('Redis Client Error:', error);

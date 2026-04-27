from flask import Flask
import redis

app = Flask(__name__)

cache = redis.Redis(host='redis', port=6379, decode_responses=True)

@app.route('/')
def index():
    # Increment the 'hits' key in Redis
    hits = cache.incr('hits')
    
    return f"""
    <h1>Flask + Redis</h1>
    <p>This page has been viewed <b>{hits}</b> times.</p>
    <p>The data above is being pulled from a Redis in-memory store!</p>
    """

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000,debug=True)

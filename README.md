# Muse Credentials

Handles credential storage for Muse.

# Usage

```javascript

var credentials = require('muse-credentials');

let service = 'slack';
let token = 'xx0-01234abcdef';
let data = { service: { token } };
credentials.newCredentials(data);

```

const test = require('tape');
const server = require('../src/server');

test('Check the index route', t => {
  const options = {
    method: 'GET',
    url: '/'
  };
  server.inject(options, response => {
    t.equal(response.statusCode, 200, 'You received a 200 status code');
    t.end();
  });
});

test('Check /index.js', t => {
  const options = {
    method: 'GET',
    url: '/index.js'
  };
  server.inject(options, response => {
    t.equal(response.statusCode, 200, 'You received a 200 status code');
    t.end();
  });
});

test('Check /public/jquery.min.js', t => {
  const options = {
    method: 'GET',
    url: '/public/jquery.min.js'
  };
  server.inject(options, response => {
    t.equal(response.statusCode, 200, 'You received a 200 status code');
    t.end();
  });
});

test('Check /public/materialize/css/materialize.min.css', t => {
  const options = {
    method: 'GET',
    url: '/public/materialize/css/materialize.min.css'
  };
  server.inject(options, response => {
    t.equal(response.statusCode, 200, 'You received a 200 status code');
    t.end();
  });
});

test('Check /public/materialize/js/materialize.min.jss', t => {
  const options = {
    method: 'GET',
    url: '/public/materialize/js/materialize.min.js'
  };
  server.inject(options, response => {
    t.equal(response.statusCode, 200, 'You received a 200 status code');
    t.end();
  });
});

test('Check /introduction', t => {
  const options = {
    method: 'GET',
    url: '/introduction'
  };
  server.inject(options, response => {
    t.equal(response.statusCode, 200, 'You received a 200 status code');
    t.end();
  });
});

test('Check /avatar', t => {
  const options = {
    method: 'GET',
    url: '/avatar'
  };
  server.inject(options, response => {
    t.equal(response.statusCode, 200, 'You received a 200 status code');
    t.end();
  });
});

test('Check /eating', t => {
  const options = {
    method: 'GET',
    url: '/eating'
  };
  server.inject(options, response => {
    t.equal(response.statusCode, 200, 'You received a 200 status code');
    t.end();
  });
});

test('Check /personality', t => {
  const options = {
    method: 'GET',
    url: '/personality'
  };
  server.inject(options, response => {
    t.equal(response.statusCode, 200, 'You received a 200 status code');
    t.end();
  });
});

test('Check /sleep', t => {
  const options = {
    method: 'GET',
    url: '/sleep'
  };
  server.inject(options, response => {
    t.equal(response.statusCode, 200, 'You received a 200 status code');
    t.end();
  });
});

test('Check /feelings', t => {
  const options = {
    method: 'GET',
    url: '/feelings'
  };
  server.inject(options, response => {
    t.equal(response.statusCode, 200, 'You received a 200 status code');
    t.end();
  });
});

test('Check /hobbies', t => {
  const options = {
    method: 'GET',
    url: '/hobbies'
  };
  server.inject(options, response => {
    t.equal(response.statusCode, 200, 'You received a 200 status code');
    t.end();
  });
});

test('Check /friends', t => {
  const options = {
    method: 'GET',
    url: '/friends'
  };
  server.inject(options, response => {
    t.equal(response.statusCode, 200, 'You received a 200 status code');
    t.end();
  });
});

test('Check GET to /finished', t => {
  const options = {
    method: 'GET',
    url: '/finished'
  };
  server.inject(options, response => {
    t.equal(response.statusCode, 200, 'You received a 200 status code');
    t.end();
  });
});

test('Check POST to /finished', t => {
  const options = {
    method: 'POST',
    url: '/finished',
    payload: {
      from: '"CAHMS" <welcome.to.cahms@hotmail.co.uk>',
      to: 'example@example.com',
      subject: 'CAHMS eurgh Questionnaire',
      text: 'Questionnaire',
      html: '<b>Questionnaire answers will be here :)</b>',
      test : true
    }
  };
  server.inject(options, response => {
    t.equal(response.statusCode, 200, 'You received a 200 status code');
    t.end();
  });
});

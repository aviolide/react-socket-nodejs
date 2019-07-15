import {assert, expect} from 'chai';
import {app} from 'modules/messages/app';
import {Api} from 'utils/api';

const api = new Api({messages: true});
const dbMessages = app.settings.getDb();

describe('Test database methods', () => {
  before(async () => {
    await app.start();
    await dbMessages.sequelize.sync({force: true});
  });

  beforeEach(async () => {});

  after(async () => {
    process.exit();
  });

  describe('#add', () => {
    it('Add message', async () => {
      const message = {message: 'first mess', date: Date.now()};
      const response = await api.messages.add(message);
      assert.equal(response.message, message.message);
    });
  });

  describe('#get', () => {
    it('Get added message', async () => {
      const message = {message: 'first mess', date: Date.now()};
      const response = await api.messages.add(message);
      assert.equal(response.message, message.message);

      const getMes = await api.messages.get();
      assert.equal(getMes[0].message, message.message);
    });
  });
});
